import React, { useEffect, useRef } from "react"

const AnimatedBackground = () => {
	const blobRefs = useRef([])
	const initialPositions = [
		{ x: -4, y: 0 },
		{ x: -4, y: 0 },
		{ x: 20, y: -8 },
		{ x: 20, y: -8 },
		{ x: 0, y: 20 }, // Added a fifth blob for light theme
	]

	useEffect(() => {
		let currentScroll = 0
		let requestId
		const handleScroll = () => {
			const newScroll = window.pageYOffset
			const scrollDelta = newScroll - currentScroll
			currentScroll = newScroll
			blobRefs.current.forEach((blob, index) => {
				if (!blob) return
				const initialPos = initialPositions[index]

				// Enhanced movement calculations for light theme
				const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 340 // Horizontal movement
				const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 40 // Vertical movement

				const x = initialPos.x + xOffset
				const y = initialPos.y + yOffset

				// Apply transformation with smooth transition
				blob.style.transform = `translate(${x}px, ${y}px)`
				blob.style.transition = "transform 1.4s ease-out"
			})

			requestId = requestAnimationFrame(handleScroll)
		}

		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
			cancelAnimationFrame(requestId)
		}
	}, [])

	// Floating particles for light theme only
	const LightThemeParticles = () => {
		return (
			<div className="hidden dark:hidden">
				{[...Array(15)].map((_, i) => (
					<div
						key={i}
						className={`absolute rounded-full bg-gradient-to-r from-accentLight to-gradient4Light animate-pulse opacity-40 mix-blend-multiply filter blur-md`}
						style={{
							width: `${Math.random() * 50 + 20}px`,
							height: `${Math.random() * 50 + 20}px`,
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 5}s`,
							animationDuration: `${Math.random() * 5 + 3}s`,
						}}
					></div>
				))}
			</div>
		)
	}

	// Light theme prism effect - only visible in light mode
	const LightPrismEffect = () => {
		return (
			<div className="absolute inset-0 bg-gradient-to-br from-gradient1Light/20 via-gradient4Light/10 to-gradient5Light/20 dark:hidden"></div>
		)
	}

	return (
		<div className="fixed inset-0">
			{/* Gradient blobs */}
			<div className="absolute inset-0">
				<div ref={(ref) => (blobRefs.current[0] = ref)} className="absolute top-0 -left-4 md:w-96 md:h-96 w-72 h-72 bg-gradient1Light dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"></div>
				<div ref={(ref) => (blobRefs.current[1] = ref)} className="absolute top-0 -right-4 w-96 h-96 bg-gradient2Light dark:bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20 hidden sm:block"></div>
				<div ref={(ref) => (blobRefs.current[2] = ref)} className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-gradient4Light dark:bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 md:opacity-20"></div>
				<div ref={(ref) => (blobRefs.current[3] = ref)} className="absolute -bottom-10 right-20 w-96 h-96 bg-gradient3Light dark:bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 hidden sm:block"></div>
				<div ref={(ref) => (blobRefs.current[4] = ref)} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient5Light rounded-full mix-blend-multiply filter blur-[128px] opacity-20 hidden sm:block dark:hidden"></div>
			</div>
			
			{/* Light theme enhancements */}
			<LightPrismEffect />
			<LightThemeParticles />
			
			{/* Background patterns */}
			<div className="absolute inset-0 bg-hexagon-pattern bg-[size:60px_60px] dark:hidden"></div>
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:24px_24px] hidden dark:block"></div>
			
			{/* Floating shapes for light theme */}
			<div className="hidden md:block dark:hidden">
				<div className="absolute top-16 left-2/3 w-16 h-16 rounded-full bg-gradient-to-tr from-gradient4Light/25 to-gradient5Light/25 backdrop-blur-sm animate-float" style={{ animationDelay: "1.3s" }}></div>
				
				{/* Top right area */}
				<div className="absolute top-32 right-56 w-20 h-20 rounded-tr-3xl rounded-bl-3xl bg-gradient-to-tr from-gradient5Light/30 to-gradient2Light/20 backdrop-blur-sm animate-float" style={{ animationDelay: "2.7s" }}></div>
				{/* <div className="absolute top-48 right-1/4 w-16 h-16 rotate-12 bg-gradient-to-tr from-gradient4Light/30 to-gradient5Light/30 backdrop-blur-sm animate-float" style={{ animationDelay: "0.8s" }}></div> */}
				
				{/* Middle area */}
				<div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-tl-2xl rounded-br-2xl bg-gradient-to-r from-gradient2Light/25 to-gradient1Light/25 backdrop-blur-sm animate-float" style={{ animationDelay: "2s" }}></div>
				<div className="absolute top-2/3 left-2/5 w-10 h-28 rounded-full bg-gradient-to-tr from-gradient3Light/20 to-accentLight/20 backdrop-blur-sm animate-float" style={{ animationDelay: "3.2s" }}></div>
				
				{/* Bottom area */}
				<div className="absolute bottom-28 left-96 w-28 h-20 rounded-full bg-gradient-to-br from-gradient3Light/30 to-gradient2Light/30 backdrop-blur-sm animate-float" style={{ animationDelay: "1.5s" }}></div>
				<div className="absolute bottom-40 right-2 w-14 h-14 rotate-45 rounded-sm bg-gradient-to-tr from-gradient1Light/25 to-gradient4Light/25 backdrop-blur-sm animate-float" style={{ animationDelay: "2.2s" }}></div>
				<div className="absolute bottom-16 right-1/2 w-20 h-20 rounded-tl-3xl rounded-br-xl bg-gradient-to-br from-gradient5Light/30 to-gradient3Light/30 backdrop-blur-sm animate-float" style={{ animationDelay: "1.8s" }}></div>
			</div>`
		</div>
	)
}

export default AnimatedBackground