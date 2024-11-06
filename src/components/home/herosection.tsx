import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
import React from 'react';
import Image from 'next/image';
import Button from 'components/common/Button';
import {
	FaEnvelope,
	FaGithub,
	FaHackerrank,
	FaLinkedinIn,
} from 'react-icons/fa';
import { BsChevronCompactDown } from 'react-icons/bs';
import { SocialUrls } from 'utils/constants/urls';
import imgAish from '/public/images/imageaish.png';
import { AiOutlineDoubleLeft } from 'react-icons/ai';

export default function HeroSection() {
	return (
		<section
			className='home-section relative flex-center max-h-screen'
			id='herosection'
		>
			<div className='max-section-width flex flex-col-reverse sm:flex-row gap-5 sm:gap-1 items-center justify-center'>
				{/* Left */}
				<div>
					<div className='text-center sm:text-left'>
						<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-5 inline-block whitespace-nowrap'>
							Hi, I am{' '}
							<span className='animate-text-bg before:bg-white hover:text-black'>
								Aisharriya
							</span>
						</h1>
						<h2 className='text-sm md:text-lg lg:text-xl font-light mb-1'>
							Data Analyst
						</h2>
						<h2 className='text-sm md:text-lg lg:text-xl font-light mb-2 sm:mb-3 md:mb-5'>
							An Economics Researcher
						</h2>
					</div>
					<div className='flex gap-1 md:gap-2 mb-4 text-xl md:text-2xl justify-center sm:justify-start'>
						<Link passHref href={SocialUrls.github} legacyBehavior>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='p-2 hover:bg-blue-300 hover:scale-125 hover:bg-opacity-25 rounded-full transition-all duration-150'
							>
								<FaGithub />
							</a>
						</Link>
						<Link passHref href={SocialUrls.linkedin} legacyBehavior>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='p-2 hover:bg-blue-300 hover:scale-125 hover:bg-opacity-25 rounded-full transition-all duration-150'
							>
								<FaLinkedinIn />
							</a>
						</Link>
						<Link passHref href={SocialUrls.email} legacyBehavior>
							<a
								target='_blank'
								rel='noopener noreferrer'
								className='p-2 hover:bg-blue-300 hover:scale-125 hover:bg-opacity-25 rounded-full transition-all duration-150'
							>
								<FaEnvelope />
							</a>
						</Link>
						
					</div>
					<div className='flex gap-2 item-center justify-center sm:justify-start text-sm sm:text-base'>
						<Button variant='primary' className='whitespace-nowrap'>
							<Link href='https://drive.google.com/file/d/1iDz93djb_g8bu-1Mzv8tyUUmcdE7Hcrd/view?usp=drivesdk'>
								View Resume
							</Link>
						</Button>
						<Button variant='primary' className='whitespace-nowrap'>
							<LinkScroll
								spy={true}
								smooth={true}
								offset={-32}
								duration={200}
								to='contact'
							>
								Hire me
							</LinkScroll>
						</Button>
					</div>
				</div>
				{/* Right */}
				<div className='relative w-3/4 max-w-lg aspect-square sm:w-fit'>
					<Image
						className='rounded-full'
						height={1000}
						width={800}
						src={imgAish}
						alt='Aisharriya'
						loading='lazy'
						placeholder='blur'
					/>
					<div className='absolute rounded-full h-full w-full left-0 top-0 bg-gradient-to-b from-transparent via-[#00000020] to-black'></div>
				</div>
				<LinkScroll
					className='absolute bottom-4 text-3xl md:text-4xl opacity-40 animate-bounce'
					spy={true}
					smooth={true}
					offset={-32}
					duration={200}
					to='about'
				>
					<AiOutlineDoubleLeft className='-rotate-90' />
				</LinkScroll>
			</div>
		</section>
	);
}
