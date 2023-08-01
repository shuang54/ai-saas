import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import Replicate from 'replicate'
import { checkApiLimit, incrementApiLimit } from '@/lib/api-limit'
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || ''
})

export async function POST(req: Request) {
  try{
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (!prompt) {
      return new NextResponse('Prompt are required', { status: 400 })
    }
    const freeTrial = await checkApiLimit()

    if (!freeTrial) {
      return new NextResponse(
        'Free trial has expired. Please upgrade to pro.',
        { status: 403 }
      )
    }
    const output = await replicate.run(
      'nightmareai/cogvideo:00b1c7885c5f1d44b51bcb56c378abc8f141eeacf94c1e64998606515fe63a8d',
      {
        input: {
          prompt
        }
      }
    )
    await incrementApiLimit()
    return NextResponse.json(output)

  } catch (error) {
    console.log('[VIDEO_ERROR]',error);
    return new NextResponse('internal error',{ status: 500 });
  }
}