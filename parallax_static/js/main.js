var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1500
});

$('.yokohama, [data-paroller-factor]').paroller({
	factor: 0.2,
	factorXs: 0.2,
	factorSm: 0.1,
	factorMd: 0.2,
	factorLg: 0.25,
	type: 'background',
	direction: 'vertical'
});

$('.my-paroller, [data-paroller-factor]').paroller({
	factor: 0.3,            // multiplier for scrolling speed and offset
	factorXs: 0.15,          // multiplier for scrolling speed and offset if window width is <576px
	factorSm: 0.1,          // multiplier for scrolling speed and offset if window width is <=768px
	factorMd: 0.2,          // multiplier for scrolling speed and offset if window width is <=1024px
	factorLg: 0.4,          // multiplier for scrolling speed and offset if window width is <=1200px
	type: 'foreground',     // background, foreground
	direction: 'vertical' // vertical, horizontal
});

$('.ykhProduct, [data-paroller-factor]').paroller({
	factor: 0.2,
	factorXs: 0.1,
	factorSm: 0.1,
	factorMd: 0.3,
	factorLg: 0.8,
	type: 'foreground',
	direction: 'vertical'
});

$('.ykhT, [data-paroller-factor]').paroller({
	factor: 0.2,          
	factorXs: 0.1,          
	factorSm: 0.1,          
	factorMd: 0.3,        
	factorLg: 0.8,          
	type: 'foreground',   
	direction: 'vertical' 
});

$('.blueBoard, [data-paroller-factor]').paroller({
	factor: 0.1,          
	factorXs: 0.1,          
	factorSm: 0.1,          
	factorMd: 0.2,        
	factorLg: 0.8,          
	type: 'foreground',   
	direction: 'vertical' 
});

$('.blackBoard, [data-paroller-factor]').paroller({
	factor: 0.1,          
	factorXs: 0.1,          
	factorSm: 0.1,          
	factorMd: 0.2,        
	factorLg: 0.8,          
	type: 'foreground',   
	direction: 'vertical' 
});

$('.whiteT, [data-paroller-factor]').paroller({
	factor: -0.1,          
	factorXs: -0.1,          
	factorSm: -0.1,          
	factorMd: -0.2,        
	factorLg: -0.8,          
	type: 'foreground',   
	direction: 'horizontal' 
});

$('.blueT, [data-paroller-factor]').paroller({
	factor: 0.1,          
	factorXs: 0.1,          
	factorSm: 0.1,          
	factorMd: 0.2,        
	factorLg: 0.8,          
	type: 'foreground',   
	direction: 'horizontal' 
});

$('.yokoLogo, [data-paroller-factor]').paroller({
	factor: 0.3,          
	factorXs: 0.1,          
	factorSm: 0.1,          
	factorMd: 0.2,        
	factorLg: 0.5,          
	type: 'foreground',   
	direction: 'vertical' 
});

