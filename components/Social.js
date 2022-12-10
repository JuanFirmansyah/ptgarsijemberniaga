import Link from 'next/link';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

function Social() {
  return (
    <div className="absolute bottom-0 right-0 w-auto h-auto z-50 mb-8 mr-7">
      <ul className="flex flex-col mt-2 text-white gap-3">
        <Link legacyBehavior href="https://www.instagram.com/aicocreative.id/">
          <a target="_blank">
            <li className="animate-pulse cursor-pointer">
              <span>
                <FaInstagram className="h-8 md:h-10 w-full" />
              </span>
            </li>
          </a>
        </Link>
        <Link
          legacyBehavior
          href="https://api.whatsapp.com/send?phone=6285256092725&text=Hi%20Aico,%20I%20have%20an%20Idea.%20What%20should%20I%20do??"
        >
          <a target="_blank">
            <li className="animate-pulse cursor-pointer">
              <span>
                <FaWhatsapp className="h-8 md:h-10 w-full" />
              </span>
            </li>
          </a>
        </Link>
        <Link
          legacyBehavior
          href="https://www.youtube.com/channel/UCsNHJ8uRVyTQ6TdxVGKY8FQ"
        >
          <a target="_blank">
            <li className="animate-pulse cursor-pointer">
              <span>
                <FaYoutube className="h-8 md:h-10 w-full" />
              </span>
            </li>
          </a>
        </Link>
      </ul>
    </div>
  );
}

export default Social;
