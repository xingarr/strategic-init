'use client';
import React from 'react';

export default function PromptArchiveForm() {
  return (
    <div>
      <div className="relative bg-black py-40">
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6">
          {/* <a href="https://UXCA.com/" className="block">
            <img
              src="https://UXCA.com/wp-content/uploads/2025/01/cropped-UXCA_Logo_White_B3-2.png"
              alt="UXCA"
              width={231}
              height={45}
              className="w-auto h-auto max-w-[231px]"
              srcSet="
                https://UXCA.com/wp-content/uploads/2025/01/cropped-UXCA_Logo_White_B3-2.png 2000w,
                https://UXCA.com/wp-content/uploads/2025/01/cropped-UXCA_Logo_White_B3-2-300x58.png 300w,
                https://UXCA.com/wp-content/uploads/2025/01/cropped-UXCA_Logo_White_B3-2-1024x200.png 1024w,
                https://UXCA.com/wp-content/uploads/2025/01/cropped-UXCA_Logo_White_B3-2-768x150.png 768w,
                https://UXCA.com/wp-content/uploads/2025/01/cropped-UXCA_Logo_White_B3-2-1536x299.png 1536w
              "
              sizes="(max-width: 231px) 100vw, 231px"
              decoding="async"
            />
          </a> */}
        </div>

        {/* Title */}
        <p className="text-white gradient-text text-center text-3xl md:text-4xl font-semibold">
          ChatGPT Prompts Archive
        </p>
      </div>
    </div>
    <div className="px-4 py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Instructions Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-200">
            <li>
              Make a copy of any of the documents below on your Google account or download them as a{' '}
              <a
                href="https://myhelp.northwoodtech.edu/kb/article/174-how-do-i-convert-a-google-doc-to-word/"
                className="text-teal-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Word doc
              </a>.
            </li>
            <li>
              We recommend using the latest model of{' '}
              <a
                href="https://chat.openai.com/"
                className="text-teal-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ChatGPT
              </a>{' '}
              for these prompts, but other generative AIs will work.
            </li>
            <li>Swap out the highlighted words with info that pertains to your use case.</li>
            <li>
              <strong className="text-yellow-300">WARNING:</strong> Fact check, review, and revise manually
              when creating content with AI. This is meant to expedite the ideation, brainstorming, and 1st
              drafting processes. It takes time and refinement to get your ChatGPT account to produce final
              work products reliably.
            </li>
          </ol>
        </section>

        {/* Latest Prompts Section */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">Latest Prompts</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-200">
            <li>
              <a
                href="https://docs.google.com/document/d/1FG4MzudSGZSLbP309PgGUJTNEar5_6_URTD5vhVse9Q/edit?tab=t.0#heading=h.ib7cv33p58mk"
                className="text-teal-400 underline"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                ChatGPT Prompts for Marketers in 2025
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1sWfb34XeIEDDyIFiOVy1Rh9zy4vgoFn6cQ254LpYuVg/edit#heading=h.jmymsmxzqace"
                className="text-teal-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Generate High Quality Content Using our Core Prompts
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1u1WdMyNJ_V9bcwDJpYjiRbfLVBsCex5_RZTtf_okJH0/edit?usp=sharing"
                className="text-teal-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Converting a YouTube Video to a Blog Post
              </a>
            </li>
          </ol>
          <p className="italic text-gray-300">
            We will notify you when more prompts and ChatGPT related resources are available =)
          </p>
        </section>
      </div>
    </div>
    </div>
  );
}