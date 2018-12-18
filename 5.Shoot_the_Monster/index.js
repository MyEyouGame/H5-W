	window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
			  window.webkitRequestAnimationFrame ||
			  window.mozRequestAnimationFrame    ||
			  function( callback ){
				window.setTimeout(callback, 1000 / 60);
			  };
	})();
	
	(function() {
		var lastTime = 0;
		var vendors = ['webkit', 'moz'];
		for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
			window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||   
										  window[vendors[x] + 'CancelRequestAnimationFrame'];
		}

		if (!window.requestAnimationFrame) {
			window.requestAnimationFrame = function(callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
				var id = window.setTimeout(function() {
					callback(currTime + timeToCall);
				}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}
		if (!window.cancelAnimationFrame) {
			window.cancelAnimationFrame = function(id) {
				clearTimeout(id);
			};
		}
	}());
	
	var mv;
	function lp() {	
		createImage();
		mv = setTimeout(main, 500);
	}
		
	var gameContainer = document.getElementById("gameContainer");
	var gameContainerBg = document.getElementById("gameContainerBg");
	var elf = document.getElementById("elf");
	var elfEffect  = document.getElementById("elfEffect");
	var startBtn = document.getElementById("startBtn");
	var glowLeft = document.getElementById("glowLeft");
	var glowRight = document.getElementById("glowRight");
	var font = document.getElementById("font");
	var arrow = document.getElementById("arrow");
	var heart = document.getElementById("heart");
	var heart2 = document.getElementsByClassName("heart2");
	var heart1 = document.getElementsByClassName("heart1");
	var heart0 = document.getElementsByClassName("heart0");
	var count = document.getElementById("count");
	var t1 = document.getElementById("t1");
	var t2 = document.getElementById("t2");
	var t3 = document.getElementById("t3");
	var t4 = document.getElementById("t4");
	var t5 = document.getElementById("t5");
	var t6 = document.getElementById("t6");
	var t7 = document.getElementById("t7");
	var t8 = document.getElementById("t8");
	var t9 = document.getElementById("t9");
	var t10 = document.getElementById("t10");
		
	var count0 = document.getElementsByClassName("count0");	
	var count1 = document.getElementsByClassName("count1");	
	var count2 = document.getElementsByClassName("count2");	
	var count3 = document.getElementsByClassName("count3");		
	var count4 = document.getElementsByClassName("count4");	
	var count5 = document.getElementsByClassName("count5");	
	var c = document.getElementsByClassName("count");	

	var innerContainer =  document.getElementById("innerContainer");
	var redLayer = document.getElementById("redLayer");
	
	var grayscaleElf = document.getElementById("grayscaleElf");
	var dGUFont = document.getElementById("DontGiveUpFont");
	
	var guide = document.getElementById("guide");
	var hand = document.getElementById("hand");
	var sparkBox =  document.getElementById("spark");
	
	var hiddenBox1 = document.getElementById("hiddenBox1");
	var apes1 = document.getElementById("apes1");
	var light1 = document.getElementById("light1");
	var attackBox1 = document.getElementById("attackBox1");
	var shootBox1 = document.getElementById("shootBox1");
	var shoot = document.getElementById("shoot");
	var reward1 =  document.getElementById("reward1"); 
	
	var hiddenBox2 = document.getElementById("hiddenBox2");
	var orc1 = document.getElementById("orc1");
	var light2 = document.getElementById("light2");
	var fire2 = document.getElementById("fire2");
	var attackBox2 = document.getElementById("attackBox2");
	var shootBox2 = document.getElementById("shootBox2");
	var shoot2 = document.getElementById("shoot2");
	var reward2 =  document.getElementById("reward2");
	
	var hiddenBox3 = document.getElementById("hiddenBox3");
	var orc2 = document.getElementById("orc2");
	var light3 = document.getElementById("light3");
	var fire3 = document.getElementById("fire3");
	var attackBox3 = document.getElementById("attackBox3");
	var shootBox3 = document.getElementById("shootBox3");
	var shoot3 = document.getElementById("shoot3");
	
	var hiddenBox4 = document.getElementById("hiddenBox4");
	var apes2 = document.getElementById("apes2");
	var light4 = document.getElementById("light4");
	var fire4 = document.getElementById("fire4");
	var attackBox4 = document.getElementById("attackBox4");
	var shootBox4 = document.getElementById("shootBox4");
	var shoot4 = document.getElementById("shoot4");
	var reward3 =  document.getElementById("reward3");
	
	var hiddenBox5 = document.getElementById("hiddenBox5");
	var apes3 = document.getElementById("apes3");
	var light5 = document.getElementById("light5");
	var fire5 = document.getElementById("fire5");
	var attackBox5 = document.getElementById("attackBox5");
	var shootBox5 = document.getElementById("shootBox5");
	var shoot5 = document.getElementById("shoot5");
	var reward4 =  document.getElementById("reward4");

	var hiddenBox6 = document.getElementById("hiddenBox6");
	var apes4 = document.getElementById("apes4");
	var light6 = document.getElementById("light6");
	var fire6 = document.getElementById("fire6");
	var attackBox6 = document.getElementById("attackBox6");
	var shootBox6 = document.getElementById("shootBox6");
	var shoot6 = document.getElementById("shoot6");
	var reward5 =  document.getElementById("reward5");
	
	var hiddenBox7 = document.getElementById("hiddenBox7");
	var apes5= document.getElementById("apes5");
	var light7 = document.getElementById("light7");
	var fire7 = document.getElementById("fire7");
	var attackBox7= document.getElementById("attackBox7");
	var shootBox7 = document.getElementById("shootBox7");
	var shoot7 = document.getElementById("shoot7");
	var reward6 =  document.getElementById("reward6");
	
	var hiddenBoxMissed = document.getElementById("hiddenBoxMissed");
	var orc3 = document.getElementById("orc3");
	var light8 = document.getElementById("light8");
	var fire8 = document.getElementById("fire8");
	var attackBoxMissed = document.getElementById("attackBoxMissed");
	var shootBox8 = document.getElementById("shootBox8");
	var shoot8 = document.getElementById("shoot8");
	var reward7 =  document.getElementById("reward7");
	
	var hiddenBox9 = document.getElementById("hiddenBox9");
	var orc4 = document.getElementById("orc4");
	var light9 = document.getElementById("light9");
	var fire9 = document.getElementById("fire9");
	var attackBox9 = document.getElementById("attackBox9");
	var shootBox9 = document.getElementById("shootBox9");
	var shoot9 = document.getElementById("shoot9");
	var reward8 =  document.getElementById("reward8");
	
	var hiddenBox10 = document.getElementById("hiddenBox10");
	var apes6 = document.getElementById("apes6");
	var light10 = document.getElementById("light10");
	var fire10 = document.getElementById("fire10");
	var attackBox10 = document.getElementById("attackBox10");
	var shootBox10 = document.getElementById("shootBox10");
	var shoot10 = document.getElementById("shoot10");
	
	var loseLayer =  document.getElementById("loseLayer");
	var loseLayerBG =  document.getElementById("loseLayerBG");
	
	var winLayer = document.getElementById("winLayer");
	var winLayerBG = document.getElementById("winLayerBG");
	var winLayerGlowBox = document.getElementById("winLayerGlowBox");
	var winLayerGlow = document.getElementById("winLayerGlow");
	var coin1 = document.getElementById("coin1");
	var coin2 = document.getElementById("coin2");
	var coin3 = document.getElementById("coin3");
	var coin4 = document.getElementById("coin4");
	var coin5 = document.getElementById("coin5");
	var coin6 = document.getElementById("coin6");
	var coin7 = document.getElementById("coin7");
	var coin8 = document.getElementById("coin8");
	var chest1 = document.getElementById("chest1");
	var chest2 = document.getElementById("chest2");
	var bow = document.getElementById("bow");
	var bowGlowLeft = document.getElementById("bowGlowLeft");
	var bowGlowMiddle = document.getElementById("bowGlowMiddle");
	var bowGlowRight = document.getElementById("bowGlowRight");
	var winButton = document.getElementById("winButton");
	var winStar = document.getElementById("winStar");
		
	var bowGlowLeft2 = document.getElementById("bowGlowLeft2");
	var bowGlowMiddle2 = document.getElementById("bowGlowMiddle2");
	var bowGlowRight2 = document.getElementById("bowGlowRight2");	
		
	function main(){
		document.getElementById("loader").style.display = "none";	
		gameContainer.style.display = "block";
		var countImage = document.getElementsByClassName("count");

		countImage[0].style.margin = "0% 91%";
		countImage[1].style.margin = "3% 82%";
		countImage[2].style.margin = "0% 73%";
		countImage[3].style.margin = "3% 64%";
		count0[0].style.margin = "0% 55%";
		
	}
	
	var timeouts;
	function doTimer(length, resolution, oninstance, oncomplete){
		var steps = (length / 100) * (resolution / 10),
		speed = length / steps,
		count = 0,
		start = new Date().getTime();

		function instance(){
			if(count++ == steps){
				oncomplete(steps, count);
			}
			else{
				oninstance(steps, count);

				var diff = (new Date().getTime() - start) - (count * speed);
				window.setTimeout(instance, (speed - diff));
			}
		}
		timeouts = window.setTimeout(instance, speed);
	}
	
	function createImage(){
		var heartArray = ['heart.png'];
		var i;
		for(i=0; i<3; i++)
		{	 
			if(i < 3)
			{
				var heartImage = document.createElement("IMG");
				heartImage.setAttribute("src", heartArray[0]);	
				heartImage.setAttribute("class","heart"+i);
				heartImage.setAttribute("id","heart"+i);
				heart.appendChild(heartImage);
			}
		}
		
		var countArray = ['count.png'];
		var i;
		for(i=0; i<4; i++)
		{	 
			if(i < 4)
			{
				var countImage = document.createElement("IMG");
				countImage.setAttribute("src", countArray[0]);	
				countImage.setAttribute("class","count");
				count.appendChild(countImage);
			}
		}
		
		for(i=0; i<6; i++)
		{	 
			if(i < 6)
			{
				var countImage = document.createElement("IMG");
				countImage.setAttribute("src", countArray[0]);	
				countImage.setAttribute("class","count"+i);
				count.appendChild(countImage);
			}
		}
		
		
		var bgArray = ["url('bg.jpg')"];
		gameContainerBg.style.backgroundImage = bgArray[0];
		loseLayer.style.backgroundImage = bgArray[0];
		
		winLayer.style.backgroundImage = bgArray[0];
		
		var apesArray = ["url('apes.png')"];
		apes1.style.backgroundImage = apesArray[0];
		apes2.style.backgroundImage = apesArray[0];
		apes3.style.backgroundImage = apesArray[0];
		apes4.style.backgroundImage = apesArray[0];
		apes5.style.backgroundImage = apesArray[0];
		apes6.style.backgroundImage = apesArray[0];
		
		var orcArray = ["url('orc.png')"];
		orc1.style.backgroundImage = orcArray[0];
		orc2.style.backgroundImage = orcArray[0];
		orc3.style.backgroundImage = orcArray[0];
		orc4.style.backgroundImage = orcArray[0];
		
		var shootArray = ["url('shoot.png')"];
		shoot.style.backgroundImage = shootArray[0];
		shoot2.style.backgroundImage = shootArray[0];	
		shoot3.style.backgroundImage = shootArray[0];
		shoot4.style.backgroundImage = shootArray[0];
		shoot5.style.backgroundImage = shootArray[0];
		shoot6.style.backgroundImage = shootArray[0];
		shoot7.style.backgroundImage = shootArray[0];
		shoot8.style.backgroundImage = shootArray[0];
		shoot9.style.backgroundImage = shootArray[0];
		shoot10.style.backgroundImage = shootArray[0];
		
		var lightArray = ["url('glow.png')","url('glow2.png')"];		
		light1.style.backgroundImage = lightArray[0];
		light2.style.backgroundImage = lightArray[0];
		light3.style.backgroundImage = lightArray[0];
		light4.style.backgroundImage = lightArray[0];
		light5.style.backgroundImage = lightArray[0];
		light6.style.backgroundImage = lightArray[0];
		light7.style.backgroundImage = lightArray[0];
		light8.style.backgroundImage = lightArray[0];
		light9.style.backgroundImage = lightArray[0];	
		light10.style.backgroundImage = lightArray[0];	
		winLayerGlow.style.backgroundImage = lightArray[0];		
		bowGlowLeft.style.backgroundImage = lightArray[0];	
		bowGlowLeft2.style.backgroundImage = lightArray[0];	
		bowGlowMiddle.style.backgroundImage = lightArray[1];	
		bowGlowMiddle2.style.backgroundImage = lightArray[1];
		bowGlowRight.style.backgroundImage = lightArray[0];	
		bowGlowRight2.style.backgroundImage = lightArray[0];	
			
		var fireArray = ["url('fire.png')"];	
		fire2.style.backgroundImage = fireArray[0];
		fire3.style.backgroundImage = fireArray[0];
		fire4.style.backgroundImage = fireArray[0];
		fire5.style.backgroundImage = fireArray[0];
		fire6.style.backgroundImage = fireArray[0];
		fire7.style.backgroundImage = fireArray[0];
		fire8.style.backgroundImage = fireArray[0];
		fire9.style.backgroundImage = fireArray[0];
		fire10.style.backgroundImage = fireArray[0];
		
		var rewardArray = ["url('reward.png')"];
		reward1.style.backgroundImage = rewardArray[0];
		reward2.style.backgroundImage = rewardArray[0];
		reward3.style.backgroundImage = rewardArray[0];
		reward4.style.backgroundImage = rewardArray[0];
		reward5.style.backgroundImage = rewardArray[0];
		reward6.style.backgroundImage = rewardArray[0];
		reward7.style.backgroundImage = rewardArray[0];
		reward8.style.backgroundImage = rewardArray[0];
		
		var coinArray = ["url('coin.png')"];
		coin1.style.backgroundImage = coinArray[0];
		coin2.style.backgroundImage = coinArray[0];
		coin3.style.backgroundImage = coinArray[0];
		coin4.style.backgroundImage = coinArray[0];
		coin5.style.backgroundImage = coinArray[0];
		coin6.style.backgroundImage = coinArray[0];
		coin7.style.backgroundImage = coinArray[0];
		coin8.style.backgroundImage = coinArray[0];
		
		var winItemArray = 
						[
							"url('chest1.png')",
							"url('chest2.png')",
							"url('bow.png')",
							"url('winButton.png')"
						];
							
		chest1.style.backgroundImage = winItemArray[0];
		chest2.style.backgroundImage = winItemArray[1];
		bow.style.backgroundImage = winItemArray[2];
		winButton.style.backgroundImage = winItemArray[3];
		
		var elfArray = ["url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAARICAMAAACryFOwAAADAFBMVEUAAAB/oFY9Zj7HzGT9+sRWlUtblU8lPDP++7H2753r9O1SkUj66XYnOjTIzmn064z08bL263knOjWYY0g0PDQ3lzhNiEYlNDUmNzUkNDQlNzTo69n20ENRhUien5by2mXz0Ef24GMjMzhGq0JHjUL0zD3z1k1FiUH89oVxx19tbWSVy3rxz0tbuk7000uZ5IIhMTIrgTQnMTlywFvbv0dOg0Z2eXSK2m8hZy366HA5mDhyxFwWRx9WgFIbNyaBXU746YC6051buEyAzmd6ymJZs0pwal0fPk7s6+Cq0o5VS0DCqzWf34OQjoIiai4mP1EpQ1UFTVAqSlofNEIYMD4gOkglPE4iM0cGWlwXISsFYGEeUVsqT1xnWTwLZ2UpNVBhUjYEVFZyXTcIRUlZSjIhKjZ9cEsmLzt3Z0Hg2pMdJjFKPSlBUV2EdlA+0KoZLDYrRVlQQy6KfVoPVFYzZmceS1T+//w9NSagk2MrNUFqVi93a0m7s3lQZHKajVqnm2luYUS2qHQwKR0UGiNGNCDl4JaShmA+LBsWJjAtIBNQOCNaUj4vPUc6SFcOenB5YDtExqNiSCn9+qSVg1IQhHZGV2MamoWTd0cac3AJb2v5++wcRE5XQCoNO0A0Qk4Uj38rpI7Z0o+vpG8VbGaJfU7+/dQeXGDRyoxD2bA3JhU4vJ9cQhgysZgvWGNLXmqFbUJpTibMw4IsjYK1nWJQSzrHy7763rk0WW9J3aXDuoOUlIz86MNeXUghgHpCPzPR182nqqBPOQh5dVmwsqiKYjQ8dHgXqI+8vrPc4N1yTzPz0Kfq5Z6YkG0tXFTerImremJnZlPYzoDBi23QnHzJuXeIh35EhIQYwZ+CgWSimFV/VC3EqmclGQwmlJE61ZMrxYXi14VZ77++u57ovJZBRkBhvJ8dgmGsjVuM6sTc2b8mTEMYpHNJoI6qaEe6mIN41pb40y6ppIBMV0t00rbW0aht5amniD7Bpj/99U1MxH9D8Iw5mWwFCxvBelWp9t9qoXWEwZgbAAAAT3RSTlMAChQW/jUiI/79/E39OCv7/OhP/v75ZYBmmf7+oHz+5WL+sfuTg/ux/vr+R0T7xfnE/dpr/dX++/y50ZD6++D+h2fW37quqtm0kNDAwsXKtPa3zwACczxJREFUeNrs2rtxhDAQAFAgISK5BEipwF3QgueY2S5czMY3Q532gH3HhU6l90Z8VMBKu1o1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxDexsaoE7duI0NUKP2tnzm3AAVGuYtMte+AWrTTWtkRK4OAaA23W3ZMyMidwsA1KWfli0yImQAUJt+XPfIODkDgJoM83rPjF8ZS9sAVWiHcY3MeMp9aoAa9NN8yf1DEwCq0favzf8lP7oGKFx3m5/hn8c45N1NYChdPx1d/6s8x5cKAMrWTev2Vvk/ZSwqACjasOz3V/i/rQO56QFA0aY18hL+j/N7/Ga4BQQla8ct4+KcPH6GBABK181/8f/4ex3zPB89QCjYN3v3kuMoDIQBeGDDig0bm61PgLgEy4paGgeBZK4wEuIwVku9icQ5xxQkuPOYR/cmsf/PDpksp6Uq22UDaTlbc4PDHxMAgMDt8c9D/3UVEBMAgIAl4t74f8IEACAGRe+P//4OgMUZAIDAZY25y25fU/EDAEIlZ+uH/OnzMsC2JR4EABCsVH3e/+Ov/SwwzgABhIwrAJ/svy0qgABhE9396OfZAM4AAQQtVZfAP/mLf2ZRAQQIWt5YsztdLsy2eCEYQMi8EoDPrpcKFUCAkG0J4MTdXmIfLwMBiIF8Nzt/EXDCDgBA8AoyD+EIEEDgCvJHf481CgUAgMBltfHZtRaAAgBAFFLVmntsizcBAIRPTNZcwT0AALEoBuM5bYsAPAgYIAqpescM4CzDnQ8Qm2IYrblh5whrAJkURYa9T4hKoo7dvQzQyzSNLBiStKgbJXLMAyAi+aCN/XQWwFr3uxuUkNFtBQoi+lAijyz1QczE8d1Ys7O2a1QpizyLb02cNbSolYyxBgJRyqrhZ+e9CmBWMt5ZsNDEdFNiGgBxKD70cTJ2q/6pItrod7Kazj7i/ktAPISm4/G9NcbaRsY97iWKPEgBEIO01KSPx59TizsAhCafKuJOiBCFVJEzHI91xMt/LwH4VPQ5EcKXVcS0risR9bxXarryUWJHAEKXV3SmqSpFkce3B8jkQDcaGeffAiKS1+TRH02lSiHjOwsgNd3SWAdA6PKabrk8UIqo1gSlpntqgXUAhC2v6IGmKmO5TSZVdJ+usB8AYcuUpscaJWQe/P1BeU2PDCgGQtjScqC7DsvnwFMBGfYJWaHpsRrFQAhaImu65/2wtmk6UNA3zGYV/YnGo5IhbLnS92cAk7tMh8OaA4I9KyA0/VmN16VC0FJR02c89rvrRK65WQCjqizCGw3zmv5mEGGmPoBNrga6nwNoOmxtQU1oOSAp6QrOBEB8Utlouphc+HPoTxz6jL97zgEhPTlDDsSwDIC4ZaK+Gv+XPMDxv1x+ufB/m5zefcLJAVlNDMsAiF5eDnTg4N/Gf5rW8N/1rq2XMNYCSalph90AiFuhthRAPP5PPAFYvC29v6QB1/t+asqX3xeQA/27GoUACFxSKE0H2oPfdZrevMBfm+uLtxd/kOYe/ygEAGwpYFn5cwpwzXm7TP75ym3s19ZPzeveMZPIgf7PIII+EglwTgGX1T/1Xg7gtsS9++Lv0bWmfM2pMR+CRgYAuE0BZb3F/9u06f02clv7+KIpoKg0eVAKBLhI8rKmLQXstX/XOfId/uZL27ft+HIpIBU1fU31Yv9TgC/JZEVe6d+v/fnRz23u2umlUkCuND2AzQAAlhaiIhfye/SPvTf79+Kf2/Qi984nWSEaegybAQCXHFA2nAP2uh8b1/Af53EJ/b51l7ZrX2BHIMmF4kPPyAAA/yIrVMPxfx72ue7X7qN/O/Olm7snTwFJkhaq1vR9AzIAxCPJRcPhf/m0Sx/Xmf/a565dMoBpn/hx2rmo6Es0XRvkD4B4pFLRdC7/tfyPeRv+uXU8A3DdmPE536y1LGY0fZlGBoCordOAuV+0a/3vkgI6jv5u5m5M/3x3z2dS0Tdo13b8YxA/AKKyRNGaAtp5b93SOfQ7s3TjPNn7hnNRafouTXqBQ4EQrzQvm352znt/56k/X8zSzdJNXz5NJSAtylp/P/h3WAVAxDJRTf28j/88+DtmXkd/d+HrkxyYy6QayHc4uM//rv61D3sBv9k7n9A4qjiOZ1dsQYhIDiaLeNmjvYR4F7yY1MsMu82spIuVEFMXW1i1ippi9RAPgVBCD7IShKiYQxi6xUPpzUNBpcwh4KU5efUoSM/+3ve9mffbmdnJbrrTPMjv89782Yy0GPr9vt/v996bFc401RkVBqwg+TfpP06QvrWAxdOXh6pbBCn5a8aRPwwAHZgbWRMonF1oXP2Uhn49+4/iP+T/C3V1Bb3Lp1smw5YmLy1/OoBHbRwPCNLg0bzDqx4EoURQDSDVx5V/OMAgvV9qp1gmozU/XgqfM2oqoLSOnkE9rEkhUDirIAwg5a+Y8T/jAr2VUyoFYidT4PtFBuDp0wgGgJ6DJ5OBwhmHwoBPoPVfkhOn9279FBwAhUql7yHyZ0kA+vEGMBwpBApnGwoDLtvK30rWAZ59lkyVP6P2PP03xk8EgiIWpAwgnGloUuDTRP2nHwNQUOJ3/bz4HvJPeYCH47gVAIUeUJcygHDGIdFl1N9L6gDPTiD4dpNuwwo8HQA0VG9kagFjRwDLONCWW1IGEM48FHav9FLyf8YOAPkv+g2iG2s7rX80feEWcNw2gDz5m1viC1kNIAjcAsBPcIFnuB6gOjfvt0n+kHfX1wzqv4uHuEVn9cCxhn/0ZeqK1rwzy54F4fQ4n1hAz2YA6vDKr5TjZeZ+I4aEnjWAhq9+bgyC2YRhNANYhvhVU1dNU5IAQYgtoMfSAHNdLL9Sfr72Q6PdMEDrPkj0b6Wve7frdxEU2BDAL9Y/N4GEVqvZbMpMgCDE5cB3uQWYS22qTPDl5oj+Gb7NAnDm4odBqAYLKC4FZLQP/ZtrSzvAJQkBBCG2gMs8BTCLgstNAmbmdfTfpgag8YEAP7YF9MQLCN+SFwWks3+b/IMW6Z+QOqAg5FsArr0ykwBE/1r+RBIBdGl858U/Aietfh4L8LXBGbIBAIRvzlr/ly7VpgRBMEzXYQE4QG+lpCAZ0X8X8of+GwxE9wgD8EFjxJ+qBBbMBqTKfwqkACR+dTUG8IZUAQTBMlN/p9fjZYDFkoJkqv23Eflj9Kduge4RCTQK8KlziiMAs/aHGqFPzUtkAFIFEITUwLwSi7+8OuD52qKK/AE8oIHGYoBi5VNDH8UCTO0PMBNoKvlfvSRrAQQhNSeIPACUUwWoqNo/wn8itgE4QUrkxeC/6hZMBgS89ofgH42AAWgLkF2Bwunj1r4UKgX0klLgO3OT/+O9RpuTtoC09Lfz1U9Nd0O+Axj544wAgDodLehfcgDBBV52bBiqIA8wTHjXXHV2wSeh5zpAKg9QtKmj5UcA3cJKoFn0H9jR38wCECYFkBxAOHWqv7/lVgigkvTLcSXg8vSkh3+t/yjXA9IxQNsc2/SEDo6PntkflDUAyJ7nAK2WjQDkBaHCaVO5+JpjIQCCgLgSMMkgeW7Bb2tCeECYEwUktG1TJ+opsvOBg9j1v60AyjcHtSZxVUUA78u3BAinzcXfHHxJ5XTdpAHzlcmF/yr7h+gjc2UWkF0RQJ94YmBuOIkDdIdEAEj9kfgHWv1oJgIA9SlBOF0uPtpwLgQgudY+6U1wKQDCf6X4UMs/onOobtB5CMBoxx5gnw0893HYNCA/Agi09C2kf4ICAOoLUgQQRuXcuakSqCy99JWTa1LnPu2pIsCEzGlmwfOVAUDx5gSYBaQyAJ4HELjmWgA14Pk5EQDkj04MBgBXZSJQGCdZv6BvJm4AN992ck3qjCoETGY5cGX2SuCR+oEa+kPdcuoAMclOgW0M/rYWwKuBUD+rBGQWArQCJACqCpAUAZtqEoAiAJkIFMbh+RdenyqB6tJL+6tu1qKmlQPUJ5JP+KT+G4owjELCZAAE2YB2A42N/tn4j54bAgwkAR61nAiAxI+radSTCOCqbAgSRuXiC6/qm4kbQOe7t91MRc/X3+3VqxP4YyB+6J8cIIyM4uObqI1TmDiAXSgIF0g+wBXyVwUZ0ikA0eIzgbhNagBE3c3fvOAcL77wbwnhIgzg0ee7boYAygEWq0+fSkD/zAG08ttIB0zTnTCBP2D7BOxEARrLA3xrAR4dGQMAPAbgNQB5L5AwIm/+87CMcBEGcLPvaAgwVa0/9XaAucUblpBaBOFD93Fvm4IAG/W5BajOJwWGhwCePyQCgPJTywCIpnxJkDASz/3x69Hbk5+vRxFwc391x9EQgGKAp5wHnN2OtY8jQgAQNx0EgGQyAEoHaQvgeQBXvzonZNYB2KGfRQBmLfD7zcDVX7zgFhQAlDJMwwA2rzsbAkzV6pWnKv83EvWba4QkII4CcIMTmo369QRActjCgH6W8YD8CADyV6AWaGyAzQKIAQgj8dzSrfIMoPPo1s6Oq6Fobbn2NOX/No//1UHQKUK3V6t/YIQ/8NE4ADoygtTbgmLSswB0UvAAAKAG0ApkHlAYLQC4vVNGwQgGsPlgp+/gemBdBPCuzJ34/63WsMo3dxEKAZoouUbaAyIr/gx8SRD19BsE8osAkH+yD9A0pX5TBVwWAxBGCgB+fbh68JFOhydvAJ291f57bm5Mq857/okLZbP+jTSIAMy4z03AzAly+W+zexT+teQzhYChEQBhIgBeBNQRAFIAiQCEUQOA7x5+ubtbmgFQEaDv5r/E8wukpROGPrNXwvT4jxAgpBYP/IBlAVb8/JYXA3Fn04BUEOClDCDAXkAcppllADoFaHpu/toFp6hQAHB7p0wD+PzgyM31wNOB0tKJ8pOZK6kCAKHVj9QfHmAtoI0T133UsPdW9biYntY/yL4SKN4UbPTP1gG935QIQDieF6kCsLqzVaIBPNg56jtZj55RBuCfpAwwveCF6fHfXNHsxXoANVP0Z9UAXO3Ij5bJA+x6YIuZBjDCT88CYiWAGIAwAm/efHj7y7USDaCz92f/qO5iGXCODABJwAmqh90bWcI4CdBLAhL940M7JmroS3IX+wLTP46U/DMGgAXAgL8RiFUBA9kMIBxfAnxy9/bq2u5uGVN1VRQBN68fHO24WAasaQMYXyez7XjID00nkp9EED6MQGcEcRXgmtE6D/2jBp8LZFlA9ovF/OyOYDQl/LjFOQCygGUxAOE43vzvO2UAW6UYQEUbwK2Do76D/xYrdQ+MHQJML/LUn99C9uYCH+ApAIjUYWoA+rId8RnARP+6GTIGECjM4I8zmt0NiAig5WTcJTjF0o93797+em1rS2fCZRhAh1YCuFgGVJMAYMxcuVILU5G/BfKH/tHRQGRrAGbkj8gMtvkXCLC5AP6aEF4D4JABUCdS7wNAAIAIoCXbAYVjePGPJ3c/+OCDcg1g/8++i2XAueVYSvXK+AFAiMPWACNzH9HFKp9VApMXhm7Tgal/dTWhAJ8K5DVBNCJH/0R2M6CZB9QTgU15M7hwfAZgDKCMinFl6REZwF7n+kG/79xoVKkH3olygFkIPZdImwJv1Pk0ACsARFC5ygfwI3S2ORgkIYBiyNcDYejHCcT7AWU/sDBCCfBHbQAHByUZAOl/b/PznX5/zbUy4PSC1dLcWFMAduzHkUkCIvPEZgLAGAAnMiKP0JOxH9j5AGMA3iABgPxx0BkhQDILIAYgHMeFVx7fWd+AAUy+SgcD2CM2v9npu7cacDawWqqNmwFkyS4LxG2i/0gnAdfweiAzJxBum2rANt8YZK44WA7gpQmAKQHQoQygGU8DyHeDCCOwtH/n5/WNjY3drTINoHNvtd93bVMwlQAt4yTLc202ARhlwoAQDT1uAKrnAz8+sayATRCmIf0PM4CkBqA7HTAAXQW8IgYgHJMBKANY31jbOtCFsHIMYG+j3z9yLAdAAHCSIkANgs+dA2DBP3XrBtwBMPirc6Tlf81WBAjmAfxmeASAAMDAXgp2Vc8DuroPW3CDC/88VgHA+joZwOQrxjCAw73Dvb87HzuXA1AAwGhNj1E7tNJPyT71wFoAYF8YlHhBRF3d8cjAat8C/WdJ1gLQocWvDcCUAcQAhGKWHiAAWN8oyQCqS5uHKALc6ruWA9R4AOCPoZTqvFV3VvcsI2A3mRAg5LQjagXQQ5YCZFcDDkYAZikQgoCme3OvgkM8t/T45+txBFBGxbi61Ll3eKiqgH1i16EcYKblcVqjK+Xcgt3+Z/WeIUyFAEz+HPbEjPjXBkMB/dDv5hlAwKsAOBQsAmg6FXQJrnHhnyc/r1MEUJoBnPujc+/e/iFVAf/sO5UDVOe9AZbnxsgdhs0A8JIgsB+Y0MNhFmCLgteM9nGHm8JpAGot+2Iw9koA+W4gYZQMAAZQyiuBzr3SufcXOUBn72uncoAKEgDGlZlxDCC9DqAIGwPkq7/NPADd+MC1ZPiPQm0AXlEOkMwGEnZDoHw3kFBYont85/o6AQP4sCQDIAegEOD6jks5wFzLG8BfmB4vBeAYN0gT8ofsVcEFaPXjTLB6gaoBdPOLAHCA1LZguxRAdgMJw3mRMgBrAFszJfwNL8AA9g83v1UG4MoXBMwseOBE04DVBTvyoxeD/5Ar3FKYCaAlF9/380KAQDuACQBadANaSQ4gmwGEon0Ad1ACKNsAHtw77Py4SwbgyJ7g6Yz+gxPMAnBC5P853GdBQDYAoB/e5/aAY7BpMAtQmAMQQRwAsDKgrAUWhrN0kwyA2NAGgOG5DAOgHODvm2t9wok9wefnAy9Fc4y1wJV5LvkQF07WA1gOwKRPD+4rB7ivTCBmYOgHiQN4eQSATQVyB7gqa4GFAp5DCYDkT8faQSkGcOF7YwB7++/1CRe+IaRaz+h/edkbI1mut3PD/OFgP1Bm6KdGFkDipzM1MgQueJzY68RI/0U1AB0BALMUwKwHduAXLjjKhf+ekAHYGsBsCX/FZ51DSgH+Ovx77+sDNyYC/2fvamIaq8Ko4A+KwTFIApXIgpXBjXHBVt2ImhgHEVCwiArUgSEKTDuDRSkqjdqRCf5EhuIYHIXFxB9iiaHWQlpNMWJSE2tQY0K0G43RSIwrEz3fuff1PWnBvlGMcd65t+89pv4759zz/dz7SlyF+G9HAFx3mAU+XoqqA1gAtpPwHMbkH1O4VnCEBmCXEIAwua+v5L/gP5J1cfAfxI1LOgWgHQBd8H4IACwAjwQAiuVZWWX1PkQL5H9rAf5DAGxsInh4R6Ff45OiFYAGgOy3SABtQGEcQRnwdmAvC8CR0wDlAFqcOqCDv04BUADm9mU/8I2GAHw6+dgzxScBSmuuGx3dlwNESl2tB/P4b3M/cOUpC/WL8gA7qE3nL+CV3Dc+O4jPgfkXAqD5r9Ge6wZ06oAO9nonuKQA/H6jCsDtgPsiAEsiABPPFJ0EqKjPZrPfH9+HFwqWFOI/rzZi5bKmoqn/YX43EHlN/28YgA+NsVMBzDCDbYCFQfqbPiDXC0QgC+jUAR0UxjXrTAFQAfwiAFxy90sADn36dpFJgJKa60Kh7Pfffz+q/9h99v+2twOX1O+k/ie7s5+Xd60xgGT7jBWfvBcNeJd3QucCDe7zYtYA9mgH1i2Bf7YAo04ZwMGurwRkBGDkAM5cux8CcHlOAO4/U1Q3cIUrmxb+Y/4zNaySsorKmsqKirKSUldbPn/UDe7H9okgZvM/n/a2AWaWD/Q3gn7+urAf9Cdw11qRCw+Ih3enPyZgikA7bpZXBPU6ZQAHhXHzN29xIwARmtsXAbhFBIAKsLV1QsUAFX+5/Ptjiv+fnPr7/0SlldX1Td6RZq+3qan+2ra8hdTuZkCitOBrAfJZTzpjKpjHBJPZZL4iPSdvMgAr+/nVPYZy7dELpG+GCWgBnDKAg70OA/oADsAiALDB/7wAvAcBAP+XtibHpt8W1Oydozse8weyQv9TUIDjNX+z5ae6ydvcPKJHa9uuFGL0Y/dMoKLSABQCbfiVAqjCv/5lHf1bQSUwwK/3EgA6AIsBkIGpYwCnDOBgN1xW++sHg6YAPHNmH3YDldzsqxUHgPnp5OubiAH2fklgxbXZgD8QoQEAPvn+b2lShauJxIcGeP9B/vOdggUX/k+svCVx9eQHpAf7yX9r9q8A+MvQBtMbvPEXBsAUAYP+OQGoP8+BgwK4sfalEw/2+fdbABACEJ9uvZ6hAHSX7WH/twMBPxMApD8twN9Y/YX8GDJHHtiV/wfbXHYjjbJ778grBBaCVgBTA2gBcux/V9N7FxHICQCuB/csA5j0VyEAhiEAznYgB7vtBMJLgcF/TMA9d2YfdgOV3uw7RAeAufX6GgVg1xigDPY/AGSrwH5DAq49SwtQWiP0J0YwvQ9Isj9ckEDgv/1u4iwpb24F4LUw9zn4g/CfyUA8474L/T83NYBQAlCMApgSYFYCne1ADnY7DAQCoBTAzxzAPvQCX7Q+u8UcgFiA11NnQH/GALvZf0Gk6vsq0J84awtQUe9V7p+js/ll8D8sM5xPn+qzaDeo7j4OGu+dArQqwId81FEAgAcV6+exHwMzD3cUJwA6EWBtBXDqgA4Ku/N3Prj/kenuB/sI974IwIXlF3wqAsDPBavT4gB2eUto5XURsD/WE8lWUQGy8aqq4/AAZ+NgS6u9mvy4yae1NRzezQGclcJUdvcc3/swIO3hOfSNxFeD9r8A/akAMndqwD13PFxUEoAOQM1WLQBOHdBBwcX51w/u7+6e7r7fD/TF5s7sQy/wZeUXwAEAkIFP31uHAOwWA9RcJ/Y/NDAQIf+/jw8Iqr7/ZNQ+QcvqzeAfY+SBljBA+ueZgNb6s3LIZbe6I9oD4FpQCqz0B9RFQacAiAISYIB2wBAAGIBiQgAOTHNDgHMwsIPCpwG9dOKRbo3AIARgH3qBr/FdsCUK8KmMy33Xg/4YrgJL9qm0PxAaAv9hAMD/7IACLIDLtv1v4sJvGADhv5f859hR/2+/vanmrN4r2g0PsPf6b/Kf0D9a0v/v5pGfwwraAfnqDaYwi/UAMnMxgFMHdFCIm5IDhAHAmJ6+fzAwd2YOnUD7IgAKSx/7EuwFzH9NcKkrO+wX+g8MRaqI+MAQBiyA13ttqV3+39dM+msbAPsP/oe9mv28YRKqMnA2JqAGshk6fo/1/O98mPTnzQgG2AWEe6Hcn1UC5IkSgHGkbQ/6376T/n8SAGc7kIMCuHHxgweRAujulg8EQHqBB8r2QwC2tABM+jbP0AIMVezs0M8GB3sGAG0AwH8CEoA0YIVN/o+oup82AG0W+vNiItyiWdVkP0wuvbUbiJx6w3IkeEELQN6b2KX5h1Bkz8OHvNzRZsMBcOgQwHlDsINCuPmXlx7rc0+D/vAAbjqAf7oRgFsBtgRUgEO+KB3Al3M1Owr2o8PDPVzyDQOARxnA8U/aqm0F57r3BwPRf3MYy79XJIAaoPjf6VVGAJkywxDcUV1yFhYghDAg++xfhwEWmD6g8PJfSAK0CTi4lwfIB7uBnDKAg12LAItfPDY8TAnQAsBGgH0QACrAlghAUjmAaZf13I/6W4/Hgm6u9zQAgGEAMKq8YTsWtrSe9h9rP2+gvSBscQHhTggA7gdbjc4AXlxl9i0AFMCdk4A3ChcBCuOIddU3JYBMLwx8T6oXnQg06wDOqWAO8nF++coXwWHA/whyAG7ZDjiHOuA/LgAfbx3a0hpwaHZZOYC3dVhfVuO6bjuGyv/wIMgvM2ImAIABzKpPvNfaEIBqs/oPCWgNj4zgyZAAYbp3odPYBmzSH994mypstwKEOEQC3tjLAuwNUt8UAasC/PD517xrHCk+CKAMGFkA5/VgDvJx2ewYBEAwKKkAEQAogOtsvERpaWkZUVpaki8AoP4hUwDoAL7E+0FKwH6Q3+9H628sGCL/aQDiVXEagKNEvOr7tusqK8pKixOBStBewGs4PAJ4RQFAf6JzYcGrbD/4b80IQiDsJgLKaAFCUABIwCmc4be3/yfJye+8vD+QFwB8DfoDvCgHsHcloEASQOCUARwUxo2zr0IABpUE+B+kA2Ad0A7zsc++2nXTTTfdpnATUF0DupaV5DYDfjy5lcPs+kdvUwHmqq+66VaQnwiEEn2k/5A7Fj8qBqD/7v7+uzXkuddz3bX1Lv6VS/8yAagNQCeW/7vuGhF4AYYAnaenFlQaIGyG/wb/ESzU2LQAFAAOpAOzpw7ek68CO9w+plIAfjj4bGJHDPCDaQOYCLSVBTAsgLMbwEEebqh95xgcACVAbsoBFH1+VCmCd9e1tz7aWJdcXV03sApknj18661C1wqowA2+S8QBYFAAfNeD/jKHpAPZn/anA+6eSAwZQCA0uBnBml8VP/oEcPfdmLjIU38vAR247lpXdWVF6a78D48Y2f/wyyMdFIBOBgFg+MLM1FRXGFwPk/+WvqAwAAUY8dpLBVaE3CHynzbAHYpks8fb2g6y0x9Tj4Lru3oyUwD5EcAPauwwAQeLDQJoAYxCgPNuAAd5uPm7L44NmxjsowMYqCjykI2bMtHGzNqykH/1T4g2CKKpVDJ601UX3uybvZwWgBLwOgUA46O5ANd+1fqT8IP+PX3BYDoOz3803q+oz4Ep9CdMGaiHvJQWeN8HSv5Cf3weCN/VAQFQHkBCgK6ZqRew/gv9vbT/mv280AFIvsDeKYQuTX+3ugMhUYFTd9zzhhkGWCQgTwFI6vz136oA+mY/DUCoIMDj9AI6yDsN5BcUAQSJnABIFrCyiPO1qm+qSyXrwH6T+8sYRCYt9OcP+HrdB1ACtABsnsHyL0mAWF/ADfYLQsPuo0OB4WAwGML6DwWwkF+v/ndyYJoYvdZFEbAWAOS3e2vzCJb/B0a6ujqoAML/5pGuqRdeIP+F6Uz/cQC8e5UD6BgJV9uyAGEu/rlBDXBTBU4hKUAN0Chc3NcSUFADfiAs9CfeKDIIMDuCnSSAg4JN+ksiAAnTAuBAAL4caC/uV9a4XDdFU+sp0H9dU98EVKCxoSGdSfErcQezPoISQAHYOPPlR19+9NGX0xHV94cRTw8PuYeDQCJ7FKABwMQH2MF7pQOFRaAa/KcCYPnv6AKgAAuiAHeB/lNTU6c7heXkf9jqAHhllhB/cNjWYlnfHHJrE4AB8uMJwAOSAhGYgez24cOHj1hQoMpnaRMk/a1BQJ4IfPiwjW4Aot1JAjgo1KL3GYsA5L4WgL3rgGU19bdGk2ur5b7VNdB/XZE/tZP/DXVaFKAA6+U+jdn3JBn4ni8KAXgbGvC27vNjBDDYFyTSceF/HLTX9H/K5D2mVQesIlBdWcYCAAp7L1MDwiNdJ4X/XbQAHYr+XP65/pNBVgcgBoDaMNI1MmKrGljxQPM2FMBwAZhgvjzhUaFHEOmJDCk9qMoePvwilSBv8/+75i/kBMCYMjSO3G43D+i0AjkoVAQYYxEgh0G3OIBd64AVrlszID+wnlT0J/k10zUyDQ2NKdMUrEIsTMy+fvnrvrUzX6okAPv8iMgw2T8cHA7RAHiU/wce2sl8PPJi/vSQSgq4aspKm8Lo+oMEtLR2nAT/tQXoOqnof3qEJO8MtzYBtxPWJICXCtDRMTJi63QwV3Pz9yHG/vi4tQPgjXJAQSDcgEURFEJAZBs4fPgNeUuADhbkYw0DtAkoIgjAzEe7kwRwkIeba7+iA0iYAjC3ax2wpMLVyGQ/+L9atyaxv2a4CXwbRfQv3xH8et03e8Gsz4Lk9JeiAMgCxukBenqG0or9iADijz/9OCIA7QC4/CuQ8g89RTzEnzn1E3Hdta1hKkDLyEkB+d91eop4YaZDCO5d6PK60FGA8mVNvVr71RXcJ/+b7+pCFaHaXuOxlgAjGeDGk3XwIuUCwyfIJNwyQm6NUGh7+1k5LowaoA0AYZgATICVAHuJQCcJ4CC/Ebj2ncfAeosEBOYkC1joBC7QP7W+nEotQwCW67Du/4n+6zIEaw0Na+vykwYF4PUDBy553ZdDapoGAEmA+FCPO4C/dygB8gPDw7Gjjz/+9NEqcF/mU6S3McH83uzx48dHPf1PiTzgZ35jykN7WNDSehfpTwVQiz8uoDVSg6enTl9bYRYyXE25HAAmFQCxw13Nd3XaaQiqeaBZJCArzCf3dU2AVz6B/qA3iW+9uDHdBv8DwINyiSF/+CyCBBGAHcirBBSzM5Bw9gM5yG8E/u4LCgBhEYChivyzNRuR8EuurSURAaTWtMU3yU/645NqaEjKA4cB3wUHgEtg/hWWxQGA/19OhwZV4i+m6J/w+0NHn4YF6CX9Df8v1O7v7/ccj23+vLSysjL280Yw0ZCObWdH+5VEYODa398qDG4Pg/paAaaE/jMvvD91knnAmRdeWHCV/vlf7M9FAOke7kAWoKvJRhBQem0zQA2ICKW7AU19YxC4GeTnELHI0V8G4X+QkQJChO3Db2oNKJAHJNP3tgG3OzGAgz2LAL/gvYCDVgnwMwTIqwNW3poqX03Wgf+p8vVUEtwvX81b/IHVRvDfeJYp3y/7Lj9wYPIAoCVg9SPJAMonpBN/AUV/IAL6P320XxUAwW7a/v7e0e2GjYmVxUPzgkOHDs0vLi0CKxPp/l4LWtD11s7ln5iZen9KPlMnOyQNOIUiYFPNzvCmssnsBGIrYHNH111wAXaCgEpaAAUvDjJjDqCb0zD/3TsHpztGA0AEDAVwa1XoFhXIHj6yQwPyLEBxFUGnF8hBXhFgUQTAqgB9dABz1TtO6slgbV8Dkql1xX8EAjn6MyuwTmQaUnwyDAH/gNQsBAAKMCkSIMmAdSz+nB+F1MofS4D+7AqKxR8HIABsA3iIQb8nm94YW5wH+RcVlsZePQaMjy0tzi9uP6WjBPK/pTfcNWWw38BMVxd+Ev531VcUOjtMOwAZsABIAnTABXRW2MoD7kD4e+jAdkj5AS7+eRpAmmNa6a/5jxGDOMi3D/YFYtuHP9QiYKYBmAXYG7QA1hig1zkVxIEFN/qWKAAWCUhIJ9COMkBFfao8VVdH/q+uJ5Mqs1dOdpP8hDzWCf9NrCJqoABcIvynBlAC1gMMATB6EsP4uycgAH7xvmlEACIAVVz/GeR7sPSvzM+vjI3BAChMHAsGNzY2grgeGx9PsAhAeFo8LXdZ6f++zBkJBFQaoLO6tPCLiMB+vf4DIgB3IXsAttjJAxYGdCBkiQq0DBjP8ss5DdAKIPQn9cU3BNAtjf9CEAEYgVxDAKBPBrDhAlqAXpeTBnDwpyrga4NErgxAAbCeClZS04jUXh3Xf6T+1pI69IcAaPL7OMD/VMMybiaSUilE4hA5QNKfl60DvvLrhf4UgBBo3+dHKgC/89PyOqDHtQBwA0D/dmJjYmxiaX4lCFAAvl2aEPo/hnFs47EgsN2vU4Aejyd8corsJ/nfxxVPhhK8cHLXnX4lrjavon+YW4hRO4AAjNjPAxaGFyoQAfP/BHIe9x0OAKR3myPQBwwmqND4j0MjUHQIoGHtBfJ4rnOOBXBg4Obyr75A+y+GqQHdEgFY3g9Y6qorX1bLv5X/VvIrICZoTNEHYBCp1DoFoO71Ax9jAJOcF5QnvjSygDgEXHYCIvsoYAQAeIT9T1QlxicmxjfA/PkVrPjHGPXPjwUf21Dsx9iACUiMGhagfWEK/FeM5wXpv6kZ/iDZvz0O/SupNhSApwhK+xBEwGXrfNDmvcGoAEAjEK582oYq7Fj+3Rox8t8P+if4/4cuQHYb3gMN0CGAPQW4nRbA09Je7TQEOrBUAdVvLvB/UAsAtwNV5vifLE9FTf6njNwfiE7uk+/qMbNWXltbW75ei+8wl9coA5APFgEoAowCLinfzCUBDAFIBAgIgFQBe397oj+7OfHqsSBBAXhsfJEYC0ILMEB+jW1dK7hdln8S37zIJP1ndPZvVw/AQ8OayX84AHqApjJbWwKazwpeL19+tC2IoQ+AkYGA9p8GQNFf/XIoe+oNaIANCwDqW2IAfOqdVKCDXBWQMTg+hgK4mQUcqDHyY6n1tWgd0//RzHIyuWqm/lXgX1treIG1KPhPRQDgB9bUF77ltYtJfooAbcAFmY9oAO5HL2CMde9gnyx6sYB0AUgVsCodHN/AP41FAI5NIPcPrAQV/48FN3TzYMIjFqC9c4rgeq8vxi/I8l/xV6eIeUUBJAAQB8Bhb0tAdfM/BUjCdgjZPyCBQfrnogI3tk4/e+RzAO8KLhJmDEAFuM4pBzrQVUAKgIZFAOZcmv9r63XRqPA/GU1Ho1EL/wnFcdAetb2MkgT8RKytzvI+m0pewjYAqgAl4PIoBEBw/0dDIVnVYsFAiD4YXQBPP/14NgFeDyaE/8TY/NKx4CZW/p/HkA989bFjogD6u2EAFsDjPQnKk/QWBzCjEgGI/mtK/zqN59UGAElAhRFbSfPSpuZ/Et5PtmN+Zf79zAxIblBrAA4fOoxOwTvsCUArBcCDS7vLCQMcnHcZqoDBQSJhSEAwwEaAufoS+v/oqsH/TLpxdWUjmvqTAtSC/BjMBWSWfeU5zM4mU7PaGSS/gQAo6uv7JRsQACz/kIAe+Q0dwXGgyvmGsPxHEsNgPy4CSfUj+/dzOhKPY4tQJJTexOIPBUD8nxOA9Ghr1xRh0n/GeJpB8r+o3Hfl7Vz/xQAAHfJB3dzepqB/GhQBSQywMEj2x+TDU0g/POK1pwAt2gIA9U41wME1ugo4bLAfczzxjDgAZgFLqqNJzf+1xnQi+t3S4lgmaXUA5SbW6kB4td9HLfty42dtAq6f9DcswCXHhPuiASd6JA+G04BUmzwEIJ5GLTLBvPcm6E8B2MQhYYIBwdF4JL0JDTAMQHA4kF0g5w36z1hyAEj+n26tL7KWLylAnBzQoeiPq833adU07wcYENAgkf1qMBuAkOWgbQHweHi71kkEnPPgXkBF/2EOYHwYDkC/G6Ams5aJigAk6xrSw4m6X9B3s7QZXbYqQK1RA4iuC9l9GstrQn7O2bqxra1JJv9yDuBVCMCJL+XzUU4AWBjPxjaH/cL/BARAK0A6clRD9g7yE49BAoIKfaE7sMiT74r+vOkcAGr/I3c+VWQPfEXbCAADQIgMPGCvcabE1bxf8EIEqAGGCsTw4/b36F04WHwasF1bAMKpB57zuHEWVUCQP2HRgPGgBAA8E6Smca2hUfPfj2U5uTg/OXloaSOzLAKgIwADydVZANaf/F9fqyX5eYl+tgVMUgO0A5hwf0n6nziBJAAEAMcB9cg9kggO+kUAyH8GANgebPJfDyCeDj5GBxB4dgEsJ/kN7luigRe6WmTvYHWRFgDngTEDoNHRHIYO7l8awL4IWDQAAxKQbQ0XbwFarRag9ZSTCjzHcQOrgGrtN+6vbsyd4aiueLQu05CBACTr0n58k/hmHiRGIn4is7y+QwF8yynNfxBe+L/uI/15iS7hhSBKAwwHMBYA/TnvH+LGeAgAbmgH8Av/++AAEsoAJIY0+58E/4d4dhA1ACaAy3+k06D/DMmvnzX9Z8L9PE+syIW87DoaABPNPBzMXi1wX+GFDzDjgFBgMJjYbm0r0gJQAEwL0HZvtdMYfE5DbQYG781BAWAW8LpbM5nGBjEA0bRfClGbi4cgALIVZ0UUwKQ/Vv3aZLkP5PfhWSb471Pkx3U9g/cBAVsA/gosCKwEDAdwItLTg82vw+4hnAucSID+MkB/WgDhP8kPwhPUAA54gMeGY6dOv2CN/hn/C7gD8IWFO+8meutLi3+hCKy/6QBUHcBeQ+A+4/uQcgGgfx9NUvp4m50kABWgXSzA7Y4CnNvgkcCDhgLgjjk+Lr3AGJFGJQDgP0OEvg0RgEOyE29yMZMyc4CzQHLVl3MAPoQDkgrU679vdUO4/+k8JUD5gEuWtAP44ASygFj6q/rcQ+A/9gMI/QFVBQgOkv/xeJXHo5r9R6vilACZkcA23T8pb1x54eDyr9CLzuYiLcB9ZgAgOYCR2+3mylxQgH2GRAKkf1DFSdDBtqI7AYB2j6dd0Op4gHMaJXIksH4tkEyO8Z/VZoAzQ0oA6sh/IDE+LwIATB54bl4pgKI/AoDkLO/MAZSnln0KSh6WN7a25jEsInDJkl8MAPhvCEAgFI+h2t0z0EP+g/4MAULk/2ivfjsIAA2IC/8x4kz+7Yj+9bO0/njuNs4VfKjokzBczV0WjDQv2H1NCEonzfsMSgDor8jPY5Rio21FdwJoCyCAB3D6gs9dmGeCqziAt1cnupUDGGrIQAGi4L98hyX5Z1MALoECJIX/YD0GUn6+WaE+JvlvFAMYAiTHEQEYGgAJAA4s9p2AA/jgxPUfnAiJAMQjkZi8HQDoSZgKEJDMX5UHFOa7gSgA2PkjEjAUh/vP2X8oAQv/qu2Hy//tXP4NB1CsAFR0nrQYAMkJqhKizY7A/ccnCWP512HAqba24mOAO2EBiLY2xwOcszi/lm8GNjEoAjDmFgGYPjMHAUAN8NH0oJTkcBmzCMCBSxAFMAUgi/7aqk4ACJaXaQYURCLqXoUAIA0AAfhUJn6YnE+coAN468QJNwSgJ14Vc5P+uLhz/O8bkrcCYl+QNgACFQnE48+eBtHNVh86AF5nME5OLRiugeeKeYqP5Ou7TKAnYOF0U9l/UwFG0sNWCUhsUwH2AgXAYgEIJwo4d6FfCkATmdOA8ZWAdAJhvgkBQP0f9AcZcVlZpAAwjwcFWKECGD0/GMoCrJL/hgLIU2YCAgDMiwTIhQJA+3/9W2+95R4a6kH8HyL7xdwHSH9MMQADx0FgAS0ADQDQ77nHQn9+MIGTM+oosM72UasBsHEUVk0uB3ByBC8RPT3zRuV5/00FUCYAEx+MwdCzSPbvXQhgEoBo7213PMC5jstmP6MABGUYIjC+4hcBwAjBADTK+j/MlPzGIgUAH1TzMSbHMstMAkjPj8CH6VtNmdVAAJKw2rCyBfZrCQD9cZs8tHnigw9gAAB3fAD879H0HwipHMBmYnhzsOfo0ax+P4g1BBCMTAm43quTP09iGlgI39lrMQAP9dro6K3wntT87wh3np6ZmVnQ4vEfaAnMNwHshDQ0PEYF2ANMAhjwtOc8gPPe8HMT16AP6HnDRAYJJQDkP8oA0UwsMKjacuHHX52XPqBJQLb1QAom0BMIgtex54cRANoBcJWJoQWgrmHJcACAcgBbk8Hrwf/rRQBODA2EwH9F/4jb70+nE4REAPFevhZUQ0UAuABo/iX3OxSEsYAk/2a8LQ895DENADTDZWdbP18ngovw//TpI6f1n/xfqwYSn2gHgOueCnBQ898qAC2mAjgdQeckril/RwmArP8YAghA4hmdBGiMprsD4gAwcVpw95j0AelmHqkHPjdWh47gunXyX63/Sdy1BfAB+GG9cZO8n+dVPx6a3LgeDuAtwfU9Q+r9YJjob0XFL6sFwD9wtEr4jyE89tx7772ngFExAf0toChf+UPya+6/Aszcc+dDd1r57+nlG3GKjwHoKDoe8Ar7j8wcaSo9KwUIN/8b8DYElQPgiG0XVICDO7OA7Ri0AAqtjgKck7gRfUDP6/WD++oF4yvD2gHMNTTEpt2Dqi3fPzd9JrDy8aRArf/zk889t1GXUpt+ZwWa/z5LBDDrS2U2yHwSH3ORPUEHNsQBKAFwp8F9md3uiCz4v/VqCxAYoAHgCwL72089a+Bej0QCYS78QnyhPslP+uPVYK0He63876fFtRED0P97F46cPj0DBeBbwuyjMnxf87+B7WEVBmgFONiWz3+rArRTAAAIQGu7Aee04HMRN9Z+NnGM5DdAAeBmAMYA2zixzj/MEkDP9DQVQBkANgRd8txzBzbxfjBdCpANQOC/2Q/oE9SurW1skf5UAJmLGAd+7vtA+D/41uAH6UyM5T/Sn9gm/wfTA3HDAHhIf1MCJA64a4rcl/mCQOj/7PFW4I6H+y38P3yrrTx+6bWwEx3hhRkaAMw3znJ5rGxq/lfQackEUAH2sgA6BiDrPe0mnFeGnIO4sXZpaQxn7tE+WgSA7EcI0NM9DQXow6GBOCp4ehov9Hb/fAnjfzEAB54DPs0sSx5Ahm9ZtQPnJMAnSCXXxreMEIB3ysCBn/0QACrAW4FoYxzu3w22a/SnlQPo8chPWP7v1bzHxJAnpAPCU4TJ//cPZ0dbgdvfYAsQgXNCGy89D7CTBCD/Z8B9xgALZ5sjq/h3FOABnQngp3AUcHBnFtDw/rwSzpuDzz1AAFbGBOMWAdhY2dAOAALQLRLwYCDhngbexns8PvqZB3xDABAAXA0FGIuuKgUw1n9GADkLsF63HJUq4KJBfX7gAMb8pP8VIgB1meyA2131hInRhMAfuZv8V8u/FgE+UQF6O2T1J8j/I9njrcQbrZYCoCd7k80ql6ujwyvrvygAPiIA/20F0OUAQitAYQFQSYDCCtDicoqB/3+UVQBlChUX3Xy5FoCVCRyus2kIADcDYM6R//gE0nPTAuzhpwLQASAAoASMr1EBfCkWA1X3f64MUFuXXM2Mkfea+ToKOLCSeEuAFmM4gLp0CPzPuXZ8shQA5Ql6Fel55SSQB2jh4q/o//6H2BgraGk96LUkADyeNyvsWneW/8B91ABP47rgOu8fVoD7BLj/0+UA7QFO5TuAHUmAgh7AKQb+71HjakR7f8OjtwINmz+Wf6wEYGUMb9t7dSNIHFtRmwHmGAEA0+5AzzQQagiIAnSPXQIBoAGgBTiwkcLrP2ZTdeWa/dr/swy4Bn+QWWLYr+0/HyAAiwmh/0sYb7mjy3WxK8lXTpb8tyUKyDIe4PpP8288cKISMGLQ/4Ujh9Xyjy1ubffcafD/KRiAURgAe6jxzigckYFbfenZK251YQW4i/gnZaCTrcFE7N7CacC2QgLglALOIbgexcHeqdQ333zzo6D8kAgANYASML5BBzDmRh1QBwCiAW5JAExvf/7T72lRADcVgAaAFuBTOR8kyQOADO9vpABWM6nVFKqARu4PN34gAIcS4D/oPzj8kjuznGq421Ltl892zBAAzXeT+xoeFAIM+m9L8E+0td0RNgOAXk/v9lV2+d9E7mMCvFEA/mkTcJcFNAR/UwseoAcAcIu05ylA/n4gowmAVz45RwT9wd7VxjZ1nWHIKHWYQhGpRhlqJvFr8iat2iTv1+Txpx9IKIyOZKzLSDsnmcOsEZcGZ/FiG2Rvw4GQuMNRiQC7FEsNW2JIpDpLQuakzSKb2gnxZDKNMZSMMiAoKUXqaMue973n+t58jMYNWzPj55x77fSDSpTnOc/7cc7JdKyLx2IjDNuILTa5IXjWT8wXA9+sfr8tFLKzAID/0ACA+N/q/vPErVsJSQFCuU4yADww/QXn+rgZSHgAWQWwC6Dg3Lm+aCoFIFZ/+nQ6k0R/s9lr9tq1g51dFVzq50EYj9fgZOD4DhgAdeivqAAedAP8eAb9+Q/51h/9XOb/z2kPceKLafL/VDNDpQJoBFgEcta9fH8FUCvBYrTgvMssY7x4HgugFoD5FSBbDMxwrD0YU0ACcBFZfwcznyVAgHuBDbivo6SR+N8C/ne8fWPi/fe+IXkAe/Cxx2j1F8/lZEEf0gAK+asx+SAAKhFgK5DPB/rLU4oDnLnR1G1kem1B5+D0DAdQkYxX7q+IaythAATnlU+Bbc+XVb5yvGfPwWPbGUdfeOVoYdHRH42XpQIA9ANPb8lJj/+/a54DZTvQA60H/uA++EzhQVxWAJe5pnh2EkDxAM/LKJ6Noo3ZUkBGY/l6WICbigCM0nEArqhiAxhSK2BpLUBRAPHfsOfEjYn33vvGLaEAPqa+cABOi+4cFQMJIg0obQ0o6Ed+sMtq9F3mgTnMwxcgASD+e2mWa7sGOxOV++V2f3A3GXTj49e0EegYOD/LAQgdeAHtgHtQ+GcUvXDqhaPAtvGqx2UhAfYlnkyP/6/3KMRffAggkHOfTMD9kV62MJxSgHB90RwBUJIAAsVzkN0VkOF4dKM+BuTHPHhNXrNauPsXNoC5LzQgaCYBsNcCuIyOmoIb95w4cZocABSgmxTAnKs4AOfwcLJfKEBqUwB9DCY6IQCJoNEH7vNkK8AOwNg0JRsAl0nb1dfZP04CgEFz2ln3+K+p/09EAPM6gJ1Fz5eVyaH/K6ew/gMvjOOggB0pVI73fzEtojb3SEP6AOjNe4kXawLSV4D07cDLWrOAq7ym6P4CwJirANk0QGaDFQDIVwkAawDduSMQpGNBG2sZpS0t4P/5MyfgAD744BuyAjRGhQXAg43+Di2oLrUEptIA1X9KkAHoTAQgAEZhAFgBAuQAmhwkAB7+j8e7CgY7tTtSDqAsZGzZu0MSgApQfd4kQE0FnxImuf9Tp8TNnuN0XnBZiv/7dFdWpvObw6Rn9ovBCrB+2eKRs/4ni5KAH8oZgoVGAfHiBQjAXAV4KtsRmNnIWe/Wg/2ALABJlwCHAkBwCgKAXXl6OADDARiA8Z4TR+AAPoACAJICOIj7NJ3U2u/qIguwQc4D8uzivzaYuIyuYTxSFDAsRm5TyJTqQY4nYAEKKkBYKQIIaywH9hL/AU73yVP1Cf6zAjxPwT+O8sWVHkgC9PKm4i+ntgH29j+3PI18PZ0r1HOIh0oG5P3AizcBLy5CAVgFPtUOvKyc7NBRpBYAYF4HsF3KAWa7AR4SLF+72W7XQwJYALATYCaiNoc1FLSWHmi01xLsZACqmo8cYQFQKUB7aVCqAj7mowafUe2gCALkFMCqAh25AhQBcITIZR8mAW+RA2zy4RYyAT0OHuns7EYMwPwf9+U2HsA5QIxjB+daAKY/A3W+o3SXF1/p98Kxql0EJQmwN/6nL6XFf/QV9fRg4jmEtxQNPJP3gNzXuqOLMQFzZWA+QZl2pYKAY4VFswSgcK4D2I6fZyIbBGQuVj65BXXAmEuv15tiMRYAGIBZsFiD9gPttQzDgcbW1vPg/xkOAdQKYPdJJYBhhk13TgQBIgAY1PXhLyAHaHMaAR8GsZ+jgIAxN7cpqHQfhxMFXegYZM4iALBp/H9sKZMEYAfYPscC1FcAsgIQ/Zn/ZP/FeeGVog1gb9e5RxZMz6eaXwV6MJn9/OYvDy41nrfxJy8uXgJYA/DMmyR8WekHciv8L2IBAGYKQDEEQChAdlNA5iPnydjkhQuTMQEhAHMlwBGobX2JI4DaFg4AyACcufG+EABA50YisDZCfYDDQCAYDIYLwPeUAlR36ro6Ced0Udo4RFMYAKz/PqQQc13YYpg008V/0XCygNKAvbAAFACsaRr6466f71DagBXsFMu/SgCO4iaPVyABR3uZ/3jkJEDl41XnEAEsOP4n+ovJQ3iB5nUP0IA9sahkIHP/vklC9AOlLEBtfWEK8wpAsRQDFBZlg4CHAY9umZx898LkSMwSk3Dlmt/imgf+gAs1AAK1BFa9fuT6GTgAIQC3WAK0pAAu0Bg9PcHhYHA0KOUBz4mbAs4ldIOdhEGtFV1DRuY+3hJIOab0Xn0bnTaEP6l6CADHAMT/Dp/G+sfW3l9LAlDBrFcmln/wX4Wy73+P6V8P7mPyI5IAZb3hVU8uVByZ/7IEKBqA+bu1D/T/ApKBL35WBfghzf8MSQUUCzCtygLMFoDiCiUGkAQgezZAZiPPM3Lh3cnJkZGYQP68AhAlAXCUSAJAu4LPHz8CnEgJAFuAb2tLORFoDDJGAVeCLf8G5n+XDoQmJKK5kdzcCCQghYAT/A/hQKB8gh4o1RZ04dpxHQlAhUOjaftj6+NCAIoPqsD0r4EAzLYA3zta38LRPwa98G+TAdjV/6dHFrz+Hxdtxcd7+MFXoQDPPGBLvBZxwIJMwA/FmKUAPOb9p3/IpQLFAsTr5xcAJQBgBzBHATZm9wVmGJZ/bdMW2+SFSWDkaswWiwoHYKuLuubCFgzVsgCUwgAgAADOwAEw/4UEcEvgkD3kCwRHmf9Wq0PbLxSA1v9EJ6Mg6sxlKBrAAUAgOSCQj2coXoAY4FwB9QKFmzQB/GcrhACIuF+egv4qoBD48tHn9/1TvjSUJYCTAJW9JRsWGAEsXw/+zxiQAAySAUQADxg5TxxdQBjwQ+WbQnFFAu4TD4RT3UDH5mYBFQFQHACQzQNmKpZ/YfWm5yZl8B4AQAiABQu+sg849bIKAaA9wXuOIAJACuAE5wBFDCDaAYZqgxAAwAr+W12UB8RYBf7r+sn+d/YnnE0gv1oDAgHwP6Q1jQEDPIQAdHX240SAcZ9G4/pjK3KAKQHAVJZ/UH62AHz/6Jd/85svjzP5lSQAGYCu6gXWANa+Tus/aI8pHnqxBpx68GyA4Tg6Nw54UU1+QXhBeuWbPEQWcF4/8B1VJXC+JECxYgBkAdiZzQNmHL6wevXXNm16bsskgMWfYcMckSRAn++1nbOdBOMJ0SR/ipdfEoASMgDHj1znIgALwFuSAtwCoABjY0MuCIAVcPzF4fBrpbx/Z0JHzf3M/0CTDFkDKAEQ0Jok7tPEqyRBAjA4OP1R2ZRG40ThYdf3WQCoEZip/5/oLzUD/Wbfb/aNg/qKA6ggA2A4t8AawPKNrwrK8wTrVaAI4MFj7VPzpAIUKgu6p74oP/IPmPOzn3HKLODqLlYEQFGA7ar1nwRgZ+HO2RYguzH4/x6bmPkCV2QDMBmbjNlQCDQPNXhhAfxtqpOAxABskgAY2ABcB/0xWQDUCjBBicCSqUAI9Af7z549a9aRARjU6XSJQUK/LtSkgqQAWP8jybB3gKjPCoBv8QISgP5OLSoAGo3tQHtr1fjP9ysCoJT+5xeAffv2/WZv1YwkABkAV/UCI4C8U4L7c9DzwCMAJQ545idI2s1nApTVHqAPZd2nt9oFzK8CqTRgbc18DmC7zH3pkx3ALA/wzawF+H/HlpHJeYEgAMt/g4nrgNaBclcKZqEDJABhCICdDQD4T0XAI9QG8BZPWQLuadERWGvFqYJ+AAJwFVkA8B/oHyTopgT11SKA11QS/GfmiwhAxwJQcC7hNmo0a4Za23EYyTHJAdyX/gzcErSPLEBvKgDgJEBZ1dC1VQuMANYdOv6fcOR3/62UOEvAXAVQVnYMwfn5hurrnFyAVhYAU/1sByAEQJ0GZP5nLUCmYVNsci6QAYAJ8OrNchbAO2aKMvnDJmlgU0DUZWEBKD0AA3D9OhcBj3AfkFCAWzQATgMkQ1aw33/WdvbqWXPBn4j/2oLB/v7B/gT4D77PgkYTYv7LAQDlABN9EADEAFqkDDXWA+3tLVUthnpSgF/fn/5CAPb+Bh6gV1gAetk7elsaY9VXVi4wAphFevUP/82MOCQAp4PNUQCx8isgus8/FL2YPwkwXjTDAUgKsF3mvnAAiAGyFiDj8AXbJPz+PIi1mZVWoLNjDcx/NOXwJAmAAoTMJbV2Ohf8DPiPfQBH2AGQAoghpQGoH8geDflthKtXr9bp+on/Xf3M/xDxX8OkVwtAgPmvOACOANgC6ExBnDWub21vbKnCfYGPS3sBjx2rr7gvKsv2cgwgLABe9vLS6JXYtepvLTAl98ws/mNi8JfX00wBLl4CFHqLyez/VB+g1oM9ZqUT4H45AOEAshYgI/F1NeuvqPjv5U4Al2QBBtpNUTX/Mc11UWu0pPwXMAC/vAH2cxvQkRu3hAHgcYtx75clYw1hh4PoD9y5GtYmiP99ff19iaAG/Fe4r8HA8i/4T5ByABQB9LEA6BBOBJzWlnYSAMBQT+cBou/n/qBLQvYBiAEkdNhrywdu40qSawtsAsjbo3CfB08e6RuA9CXgqe/NVoBZuL8GCMug0J+zgALu7bMcADCPA8DEyBYCMgtfmm/51w+B/womr7YPwQAw9RlmermsU+7aRhiAezdOXD9BDuAItwEoEvDWBxOUB/xzd0PDSy6rzXLVAgH4+I5ZK/hfkAiA/2s0BKY/TwiA0dWWL/hPg0SgpIsFIBH3j1pHneWt7e3E/5YqQ0fNjjLQ/9OAPcRSEqCKHYDBbq896b2NEwkX2gac97qa/fIHfSED8F9HztqNsP6zPUA6CjAnQRg2CyhlgK0MRQCURODOQh7oCM5agMzCI1tmrv82j37zZpQBYhbZAnhjk2OttVF2ABgkAJjhclwRXoKLQeL3btxg/p/5KwmA2gG8dWvi1sTEjbdLBhpqp/xXGXfueOK6PuJ/V9KnyY2skQVAeRuj3oEUJAcwpC0o6IMEaC1BKzKKLZIAGGgYYP7vjzJ6IAAEqQ5QapcFYMMXly3cARyRh4CQgP9RTxxXBNLyAPPFBzzxRSUA8eLZDgDYztRXVwFEFJDNAmQYlj/y5NNbQPSr4LonX7953dqcp7EXQG4F0jfkxyYHWhvhAMLS2p+kDySPLcEw1QB1Ex9CAAjsABQFACbemoAA/Hkal/wn/RQBxO7E7njCCeJ/ImnU5DqR0JsF8L8NrX+SBxjDpA+kAAk6M/UT+UzgPwSAkwAGQ0d92acLABRAKgTSYQAltSwAdyAA313wPqA9iPZV676CU/+rrvicdTNyAS/eRwHEDzPzg2LKhUEhAOW1HSoBYLAAqDcDcQiAQR4gawEyEDkrH8nLW8v3gYAQa228GYBbge0vebE32NPeWsIOgAH203QFk0gBuu9NTHx4mun/V9EIqJKAicMQAMkCRG2UACABMJED0EUj4L/RiRSgGuz/QXnZA4gaYLiA+R8OsgGg+8caq5j+rAA1oPinogwWACEAsoD2WtCfBWDhBgBJQMn3z8Y7x9cv+5/hUZKA+3sAeclXPhUI/ouvWvw/LLeXlLh71QJQiKE4AEx+uAxYyK/CbBYgw5Hj4lJgjPCSPsYYa219iZhPBQDmP+AK0algcUT5JACMCYn50mQHcPjw4dM3zkw3DDQkbWQAMDwn4wV9OluTJmI0QgFmCUAA/JccAF4ENgBdfUAiHnBCAAJ6yQAY5FHqrqlYAMgBoPhvoPYlIQALNgDAeqb/XKR3EsjiXQD6g++vAMD84cGsimHcROx347rFnbNyAFuFAAj6K0lAMgBZC5DpeBKZAMF/O/gvC0CLvPSnJMCK24EM95Dn+/C0UICJ9z4QEA7g8MThD988fWIPWwA4AOK/t602obOi18/oBIwRtQKsmUL8n99GCgAZkDEW7gMK4tZcow97ihvbhQAQ+wFcGF6xIPwKGYBxmf+1Jz23q7+WRl9us9r5v4OB+b81AGKrsCIBYHK6UHzBNLO/BAIwqwyohACzHMBO6clagIxGXiy1H0jvjSkC0Gpn1pvEAJAFPNANASALwBJwWggAOQDhAWAB3jx9Ghag7adJS+zOnZt3vLjnT4v0v88H9vPIncF/XAbmzQf58zExCDAACAG0/W/g3wj49O1AI5OfUQr0li3AAVTsAnq7if+Ek97OZ5enc1r6bPPPMrDnf2gAlCODIAFpKMAP5v1LEADQH+PxlADs3soQDqBYcQAi/scswiu7KTCDkfO0aAUecTV4YgyXHgrQDgtg5ijALMMSMFdpb7EAYJknBXj/PVYAAeY/gL/125+2tYWjMc8dD13zR+m/QCiYUoCIlAhYEZmKetq8bV6vl4ifL4vAWJITAF3V1WuczogwAAZARACAoWYBAlBGfYC9bnBfCEB/GgaAsgAK98XA/Fy2xWOXkKIAnxXTEv27S2vmcwDFagdQTPwvYhXgUCB7LkDm4smrJADYEhhrkM8EGdLj3d7aWuoS9h9DSgI43LpbkgK8+eZp4P1PFAH4e0oCEAO83d3WVm6+6vF4vW0l0VwNLhwNCgXAg1cENuD2lMXjBfJlBcCLPu1kABI63CP4WiTiNLUPtY81cv6Pwfw3LCQIqHy8FArQIfhfbjq5JSfN/bkzDQDGO82fTwzMzYGLUAByAN3EftKAGoX/AiQAagdQLLUBcSfAnEJA9migTEKeR9oOMDJplgXA3pLPQUB7ay0UQG0BHCH3PUkA2OifvsEC8P5sCwABOPMz3PRvclECoGSqSWPEqcJBoQApDQhN1TH921gBiPs88ofIAHTFr1UDK3Kt2FrQPtR47JgqAqCPXlHvwxsTj/xd3Q5sMMACKALQtzLN35yedxTqSx+4EOzzQQ6lAhbjAc6zAZhXAOY6AKI/z0KexWqsX5ZFxiCH+M8GYLJBP8KVQM/mXTFgqJWCABfWf54nOQYIxiEAhMOXLr15+s03SQCkgSkk4BIJwIm34yQALo/ebtU0BfwOXCxAwyiiAGPEGJqi5d/EEoDJFsBLEqCnFiCtVfNaNRAxtaMzcKhj2zahAKUAPtRBgFoKao7VqNqBO2ABeu3lkgCcPNm3Os3fnY0QAFkDaL5z/PM7G5NPD36RtwalrQEiApA8gLoNQJEApQiIhxd/HsR//JA9HTAzsfLpFP9jpSZuBx4ZeuIpfCQ3o/bW2sg3Sgh4EAO4fsn8f+tDCMCbhyfe/0TEAKQA7/2d84CHL5EA/FkLAcAx9LUBTW7I5newBWAFAJAH9E1Z69q8qQAAE/S/OXDTOzBEbUNaXDJECvBaaGgMGBrftm3b1g7FAOCjY0a4z/SvqT928JiqEWBHb6mBBEDCSU//6nSb8Y6D/oL7/EYK8PPDcvkWkRc/SzXALQxASe/MRsDd0h3BvPyri4C8+OPFEpA9IDgjAf4TbJCAkc3rcSQIlQI2P1oFAXh6fSuSb0gDuEgCTEIB/NZpWIAPoACXLl06DAFYtYoUgE0AvQAIwGGEAGd+WduGTqKwURNxWCAAoWCAFcDH/NcEphweLxsAM9O/DQ8W/5sY+r7+/kSYtgxrkAX0sgCUQgDgAToUAwA8XqZ2/sx+oEa9H6CitLRqr9tUDiACqBtMMwRAOyBbADEgAZ+v/eWugM9oAs5LGcBZVcDdeAAIgOC+HAGA9FIlAPQnH5DtB85AiPWfp/mJzbERKECsYe0ycgCbN7e3tEMB7BAAwX64gbpQfA8UQPCfBKD6EzCfJ16MicOXTp+BANjb2uxhp8bpt9hsfisEIAD+hwKw/7lrrkzZvMR6k9eTb6bln2OA/Jvem/lD2DfcpfXxoQFvvBEk/qMxsHsrKwCIDxikD3d8XHT9CvYT6ivUDqASocLeDghAuDx80nOxEw4gPawTxT8CPpo/9xpY3lPpK4BSA+Axowq4m16KA8DgCIBHIQ1+ZZuBMhJiW5ANT+yJPD1XA/PXL1+2dmjE87SnvZEb8HA6kBICeKzR82/fwzJ/icACAAugAGbgk/c/mKDTwr5TMmAP+zQ+m4UCACEAgNG5BtV/C5t/mmYvA99YAAZM/f19uDYAaAI8EAA0BvZpC7cBu8cV/uPTYk2OlxH7a8B+BgIABXQRSEdp6a4OqaX5pMf27Mq0+dasZACBZz7/SzKXswlIXwFEDQAzVQXcyvxnDyC1AQjAABDtRSsQfphTCVyWRSZg9dMjoD5JgOuJZetidDigaXMOtcB4XM91Doy1sgKYXIL9ZuT0LNbpfzTfeOtf/5JCgPdWIQZQ8R/jk/cmbpxAD113aWnY1xRI8R8CwAoQ0dzuciH9b6alPx/0hwfAB+X/vPk38xu6cGqgJUKtAjABMAB8QHinrnA3sG23m4hfKsFgt4b83RVY+xXUzBKAXsQAvSaGuc6avgAs30jkZ3AEsBRq4GQCIADpKcAp2QBQDlCdAcCgLECx4gCUPmAeRVIQoLosvPibn78OZvEgsPxpT4xgylv2RD4JgdfE/2sfbXA9+5ptrP0ApQEMoD5PjwtwuM7/o/nuv4BLh9+CA2ALAA3gF0cCzP8j37G7zc6mINMf/E8JgHHF7SiEBA0CHs7+QQVk5GOMmfoHE2ZKFERgAVACGAAaE+cgAKA/4Ab/ZRii+KXDB1UCUD+jCogzhCvwT/WKLoaLoWfTD17XHZfMP6NnaXhfZAJw1Ud6AoAiYDdbAAiA2gDQBKQ2AILgf6oGgK8sBzuz3YCZiJwvPvnkk2tzli3Xwwu4vK5HxCKzpbq60zvWeqBdSgSaef2HBNTZQvHXDzXfvQQBeIsFABYApQAaBKY/cDfuNkearAr/ARIA45orCZcHy77oAALM+JD5jxLgYFcy4CMFgACEGtkAuPtIABjbDsLUyzCEHfjloz+TFADvnTMqgyQAldQ2HOY0Zt3FADqB00XenncU7FkqBbC1z4gtwOmnAJStQFtZAQq3FRbirb4UgPN/gNoBqPcE7szWATIPX9oCgm8h/jO+i6MzphraD7AClLhAfw+Gq67OErKdP3ToUM/fEARg8z8LAIEF4P2JP58B+6+/A/67IrmU/hf0xwQCCP+Tdd6bRPmYTHrxaaaPhmh/QTiIe4KMrADmoQGOAHA0MDmArdu2bj2mFoBuv8Nvc9i6j8kJgDKF/pIA7OhgAQBclou30xYA3hGgxAAbl0z6+9GNL6edA2QD4C5N5QBl/m+DDShi+gN4b2fOy0lApv/sW0KWzm9EFg8KOY+sXp3ix8oN1dWrrrQNNR5ooTSAvc5F8ID/Flsw/DouzP/H9UsUA/yJBQDcx/P+jT/34LpAUoC425LrPGuxOZj+DHwYNbcTZoT/pAAUAGAqUQB5goYkJQCNuCiILUCA+T/WrS0413Vs927i/0G3WyUAbhsEIOr3x48x/2vKVPRn/u/nJECtiwXg7LVnP8ti2/OOjONLaOFbvu6VNCMAN28GtJfUF6VqgJi7JQUoEuSnyXRXNEBuCS5WkE0CZDo2VUMAphqG2hsPNI4NoRTACsD89/itv/8Hbsxqvvu3SxCAai4EfkKL/9s9OCgcwPpf6s81nrX4HUx/AV9EcyVp9oD9N4n2HjnwJ7S16cvL9aZkX7/OZuS7wo0QANcYGwCttgsCsJXQbZo+qBYAkN8WZQVg/qvoLwRgvyQAQJ3Nv2HTMiD9NKDAEigCzg4DFgzeCWjHrkiTvUZlALYy//FdfRwI015kAZUtgYoF2JlNAmQ6lj8LAbjmeWmIFKAd7xZzneC/xWIJRvfQpXmHmk8cnvgEQvEJRf49zc3HQX/C3bg91DRss83kvxF7f80c+iv0R/G/rQ27deNarS6R6Cro79dF6aJQtgC5IckAxEkACiAArxTGY7FjW1UWAAJgs7ECIAqoKVMMgCQA+4HHZQGw2KyvbfpMRGtOpQCW1rqHMGChEnCeuF/OcKdygLuVJACKAOouIIn89MIjTbxUSYBsJ0BmY/Uq8No/MERoYQUohQIQ/22YNp/2H2dYAnrOTHzyyfvE/kOvSvS/gRnXB5qCnP0bTfE/4NTcjpo9ZP958P6/MfzK9rgOzOcDwPrRAZgMgvwBeiIRvWwAtInOPgjAMf3HI/qtW8cVB9AhBAAf03P4LwkA9QLa61gAQq+J3cDpNwNJeGaJRb6PbnxhgQoQN5XLSN0KIhkAsgD4mNkFxGu+kgOgB8huCHpoQBHAFW/DkKIAjaWSAQD8F0cDe+5e50vzmpvPnHn1ENiPo3NAfeA0+G/MtfqZ/6NEfYxgILLmSlJe/pn8YH9rI35ZfbIL7CfwucEhHy3/wxi5NmEAdCQA/QePHnSNfByLQwdmhADMf1fSEa2vlOmvFoCPygwQAAtHAIFVqz9bduQZIQBLbid8zgJTgb9X+G+vL1Q7ABRW8JVygOouIOK+eFRmILX+Z88FynSgBnDtIvivVoASmf9+S51xihQAePUQvSX6nwD5gbjJGbH6HQ7QH/wHhrGi50aiJon/N5n99GvrzUjgg5rmZDKRYBVIhK0+AOwPBIy+hgHJALAADE5Px0Y+/jg2jT+0HSkBiNtkAUhaXWD+bAMAUDOw3RKNWmxnb29AH9BigoCl1wC3MAU4Re6/tpy3RLrrFQOAAeCtpABEDWBmJxB9JVXIZgEfEnzh2epVjjaQVKClBa/GWpD/7Flk3Sx1NqfuH3fPHCEFQM/fdYn/ID9OBI6bnU4rr/4K/425obCX6X+H6N/QYCfyh0K4QBi/GoAsfVKX0CUdAR8wDAvgi3jGZAPAIYB+BPwfyT+4VRUDuMNCAJLJpCsULlPznwXgo/0fVXawAEC8/NeUPqC0NwUuTQeAKOCpH/740wMAwX/CuMJ/QX7RBgTwe6e6AUDuA+bv6iRANguYyUAEcPuOwv8xKABtyTXTdd9MWY/V+J27J+6C/IdwUTjoTwD9J+7FzUYf2M+Ql3+ncUrvldGm15e7bMgOWK2C/y4CX0RmA/8BSgE4kQEklJABQJYgOQn+UwoAf3LrZQNQ64rCkrABSIaj1mlJART+Ax/RjuBuC+D/yzWlDSD9ZoAlKgA4t+xTFWAP6C9Q7p5ZA5AFQB0BFIqyn/yksgA7ZfZn9wNlODa99qezyACoFaARClBiQePdX85aLBcv1vlCb9+9e+L6kR5a/YG7N5j/WpfTOCpBsB/1vFDSJEf/+nKzxU/6YAUcLAAuM8FlcQStU0YfgUWjQTEA0AD9hQvE/1g3/dGtF83AHXRvucR/czIct9lqZAGoFAYAEAIQtfn/suG5RVjtpZgEZOQ9oyb7j+c1ALUpjBfN5j+m3AUgmgC49ZfjAJn64tmZzQI+JHjumldEAGM0x6AAQ9iUa/dbHWevXsVyWncxMnX3QyhAz6vXWQAE/225a4y+IMD8Z/oHomGPRyz+ZosDf4P4Pwr+czThclFmwerDEYEREgBGwFkH/gN2kB8zH/wHRm6OHyUB6JDbgEpqowCWf/A/HneEKytV/OcI4KP9jxsMbgtFANbXnltMwn1p7AWcB2tfkVk/vxXoVvEfBmBWCMB7AbarDIDI+2PKkYDyc3ZD4EOClc/aQHqZ/oQhAyz5ULnVits+LsID1DkiCSgAagEsAKA/8R+n/61Z4/QFQP7g8DDYH4mEqPeHAOfvIGUAEPzLsIbQ8+MzNq0A1ggBQADggN4ADVqdDvx3gf+M/PqjdI+lJABV5X7DrnLJAID/3d1hx/gOIQDUBPQRwAJQ5baRAATRBrAYBVhCWwHmUwA888rAHon/dp7j6rNAxACUFICo/ynHAcxwAnIMkD0UJNPxtSsDTH+Z/1j+DQ0gpJkv/MOSfbFu1Hnv7ocnzvSQADD/dXEr8X9NRKIx0T/Xx8u/x6s3ufyjw8PE/xAWfxAfToAMgnRAaO6KFW+seGPNFLSAYAyMCQOgAwT/CUPPFykC0GGxuA277IgDKADotnd3u6LoBVACAAwoQBkLANoSAhCARQXb7/Qs0czXEy//WHAfY74AwC74rzQBzeB/oToDoHIAihvgL9kywEOETbax0qGxhjFAVoBSMFIPBbCdPcsKMGzU3b1xvfn6deZ/ly4calrDiDiNQCSyJmLF8u8h+tuCl4elyGAUE9Q3CjilE8JWvAEBWCEEgCoAogQo+E8JwJuYvc9zU2qVOA3A5S4x7CoxQwHi3QS7ZboS/FcMALCfBcCGFABfC7QoD9CzhPYCzMA6UgBMAbUhmC4X9KchHwUiqn/yR5FgvzAAhcp5gOK7XAosVlCzRMUwiweD5Vu8Y4127KJtgwjwhb2sAPl6C0oBhIsXL14OfOfu9Z7jUvpfGw7mRkB6FQJU+/eY9GbHZefloMgMcGigwMnQEP1XyAKAk8AHRAaQ+f/uCNEfGKvYXkSokgxAKIz+9qpdpWFX2A4DUNLdbUpWiAAABkCgEhpBAmDdsGr1Yg/mXppJAKpS/IAUQAwVfnyqli9GlmZH8cwAgF/A9pkGALQH3WXyYwg5UO0GyJYBMh45T+MkrjAibLNpQJKAMShAfr7JP2plCbgKBbB+5+6rPSdo/U9Ghx9z8n0fYD7u/MGtH+z+EfmPSvQfxRgGyOJfNmLScMoCwAowFSQBcBpFBWCI+J+88O4F8J/nUEXNdkhAcRXXAK1WOwSgdNcuQzjJDqCkpMQ1XqlkABjoBNrbDQFwjL62YeViefbEUl32cp5SJwHEJMQF90kFSpABVIcAmAxlIwBYL9f/la2AoiRAfy17NPBDhJVPY9HXu6IUY7cxIccaS9uwedc6HLQKD+AL3MPxQPe6ppL+ywwoAOivoYSeyUuLv230Mpl/BrP/Mg9wH/BJAoBTApn/b1yxOqEOuXIAEE4kmP8jRH48N3u/zwJQQwLgtoX8blCe7v4xxMOSAJSaukUAoBKAqr12G6cA0Ae0WCzBRgAlESiGWgrO//Sn9hR6i2byP+UAVAZAkQD2AsIAyGXA7G6Ahwl5m5H1gwIQXF5oAB0RhpM7XMHHnMNWFgBPMOJP3rP5o47LAs4Ir/8Bs56qfn6E/kx/ee2/zAoA9gN4KwIA/kMAHBCAiE3i/5g+kdCZiP8j4D9hrAwOAApQY4ABMIdCUXcJvuwCOqgIQGpgDzP/2QAIVO7aW+vnFMB3l2Uw1jPzeQBCB07ZFf7/VB0AqPw/NgIouwAE26UJiC9CA7K3BD9ceHQjYnF9MkrgUKC9FQqQnx+9nJtrHP0LBKCtYRQEDtpC6N4BIACPPYZrP30uPRr+XNZhQpAUgHb3+IYxiP9Mfn47CfgCB0ACEAkZfc7AmAgAEl06/YV3J3FWOQkAnpaf19QUF2/fDgEwlKCRyAwBYP4f2OWutbMDKDFXEP1hAGTs37F3bzkcwOgfqp9blsHIYwugdgD47Fat/7MvBNtND09ZAETWn7kuYgD8xE5gdhFgZ7YM8DAgb7O+gRTAImtAQ2vLEDwA2n0ivlEbBOCll+pA2SBt4CNAAL7a5LTp8/X6utFhBuf96EBQtgBsAoj/AioBwNQgKIi4hAFIgv+T7+Ko8lgMLUDUBEDnf4P/z9cjAxgNOaxhNwcAjO5a8B8KYK5nAfhIwf59e00Oa9D4WvWmZZkMWIDZDmBaxf8S1ZXAdL6iHAVgK2Cx+jBwEfJjYqQkQSkCKBqwNJsisniAyNNGoQBtYfTbCngGhkgB/Lm5zlE4gJ82vOQdDQDDKf4/5tfn5+vNfxlmcN6f24LIA7AGsPNXwLmAyAqGBt8tcgBQkMiffPcC8X9khLMAhrIK+mO6/fnxkio79RLYUQXk9X9X1a6quF0SgOn9xH819u11ILO4pvrZR5ZlMvKeUQoBcgIgxf6ZCQBwXy4CFG5L5QBFwR+PmPS9UC4IYIL12ZOBHyrk6Qq6kvqBNr3LFpWBPQIguD9iDCIF0NDwUh2oLeg/jABg1Izl33RWWvyHUfRPgf4xhP/UJsiQ9gkwjBH0AQArnMa6IcH/LjX/2QD0fl9Y1Q6UAGkjkdstDECVoaqqw25nAYiz/1djX28QkpPhEQCgKgWyBJwn5othx32AigEA/wHZARTOOAeAaa8K/YvUNwNkrwd6uPBEF67pTVAYEI7KsNTpWQF8cAAnWQAE/b8CAzDqIfd/dVjmv1T8Y0AngiGHLZoEXDKiBKrRXbnN8FnAf4K+q4v5PzlyE/S/8DGuLNOPCwEodleVYyOB1fLPfxp2MQxAR3ctCYApzu1/auz7N3vXGtNWGYYBp1MUvByvW6zXRG00Ok3qJTNH/xg1MUp0QqbdEJAtakNGlTEhtDgtQlWCi9FMaiIqCzFx6lqTdZWSFlOqQCt4TEV/GIYjI5ZE4h+DRJ/3/b5zTtdVookmlvY5t7Zj+zH6PN/zXr7v85JFObLGIwBhAeTB4z/RX+e/P4P/gBAAAT0HyFE/J/4l+enBh9weDA6guEVoAaG0tOSikSjt1G9z9/aqYCoI64ECtDrcYOgAkoAHIQDfIc8PEP2/nif3v4+Df/oUrBcSQC3AnS4PGnbVRpr5J5YGVBQqLfYCaq/RbigDAC2oTJn8n0pgJQDtmaaHCY/s2WXH8D/QnqqvWujpYQOArGCD1+0WAgBkCcAAugA2blzbEYBRCJDHoCA/nTr/zRJApgNADlDyP7PlR3YEZ9oBcgDFpcELBqdUnlJ6TwwKAGhJkDQFBWAJaHU1kwJ0HOoAd+sOgfiiAHBIAf0Pfk9vvqIpQTTmA18z+SMRVVUPHjw42ouQYlQAjBdPugi4Z/J/GvxPkACA/wk1+qouAAgABrDkmLW+qup8KQBQAK+XYoDmHALgpjaglnvX/PcVvQCmAITof0MagMzxP0MAJIwNwfUmAGEBROCPSy8DVmdhxyVr/n+0gHFKZeUpZQ9sHMFOnVirV0vaVTUi+Y/V/sfdvVCAfUIAgMvI/RP/54n+Z6AViKcEwXmjaWjcEwH3abzHWkBxht1O8WlcQDIf3OcbHinB/2nJ/6mVqSnFEnun6RHg4YeHHQglIAAf1TudzvMhAMIA1HpD+K57cgiAg9qA1nwKgNYu3CbpD/7XMf91/5/LAEgHIATATACYFoBLgLIvEDhJAKr/FzslFvGfoPLuypKKWEsMK/VatGDQqroxgou43fVL+2EXKUAvC8BZP17Bw7/u/s+mPmDMCPoK2f0D7S4P5hMoYL+ijkr2+/00x0cjoNXXmvSyCAgrgCclAJXEJAmAyf+EGhjZIwRgj7vz8AAEwPVqvbPKiSignwwALj8sQNs4BCArCbC7GXMBfy0/s2TNw6gEbluqY/qzCMzl5j8pAL1/0OgB5NOc/6dfD8ow4CQBKKYB1i5K777rlJKLx1rCUcCCRXmUtAo4KG/3y+Lh2QMupAbtdgjA92cBX+9T0orCpT9qBJJzAg/8Mp5qblYIoyqxXwWgEyFbUIcFWUaa8Z90CxGgS9VUyX8wnwQAUCxhCwvAwzswCah9AJ09qbdBf5zn7yL2exv8fn/IHYEAZONpLAl86HjgtJI1D54WLPlPYAOQxX/Q3owAsCS4EABZ+pfsN+lvqkG2AGwnAdheLAXm4M7/uGP8b6Py3ruxdTA2B4gKBXgmCYarABkA8P/A4XlSgLre3u/Puvas70Fx7vyhQiBmAzHe/YV2ARbsZ/IrOtSQZvA/GotZ2A6wCMyMooVQcwj+r6wQ/VkA0kogHNzRBP4/Mvd+ZzsLwFI98R+3BX8tHICfFMCd8qT2ZlmAvbUwIa6N9+X/L+VvdgMy/w2A/zkEgMd/3hGEc4BbiPN0yn2BzWqgOEgfqrOxo7gqwBpkvr4z0L2nlFSMtLTsj0V1D6AqCRVo5prdgcOdpACjcADX/jhP4nBIFAN1Bfj1l/HmRILprrrdzH4TqjUIgPwCQatNY9hUQEsR/yenE2ke/6UBCAS0JzkAaGzFfqPg//jbTicUYKGqqn4B/Af9cYZQYfQT68/HXaLbjiCkNbbmawC8cuE2YDBkZ4Syxn9jHQC9DxAfIAiAAFQzwzNoDxglQH1hoJMFoFgKyKv5Yv8Ed3+AovmlY3AALACoA7htWkSYAMfAAQgApgTPK71Y4vv7b97E5xz9y2oAFOClTg8WAlOAbPYz0qoWjQWAWBQiEIACCEsACSD+Hz06OTm5kp5KgP8AGYBoIGBjAxDqaO1sp12HJ3zPDUIAwH8oQG0t6E+AA0gl5/xJVySjChiJODwPlBQCLsHwP2HPGP+Hc/H/IT5Aft4UBIsBmAkA6QLEG37wQThZAIrdAGt0/C+p3PjVKSVlD7Rgi/AowN1AcWtQS4HQwAAEgBYHfbO3d1Rhmovh3/AAn4w3C/arxP5csEXRXoCB3wIhCI/FNGvQQoAG2MB/CAAXAGQEsKJoEAArpQDmsD9ZOwRgwOp75LlBUoD6+ipSAOEA/FYIgIf2CmzbK+m/y570eCKpAkgBAhfXgP8Mmf/bk83/zMXA8QmOLXISAFPeKPpLA5C7DVAKQHFloLWKe9fdhapyAAIwFiWQAKjxJEx6isMA17ufDLhIAOp6R9Pp0Tdl47/eEexqVgT9kznYTx4ipVHYD/oHxsYCEABdAWACbIkvv4QAgP8cAQgDkAhGA7FQExIA2KHQRSmA8bd9WwYHa5ysADiJ/bh2hVIEz4DHLQRgtzsSaWtrbb2/MJzqeY9NuO0mhl/JoD/TXZDfSACSAFSzAaALkEbAWANEigDe5RaAhzEtuJgGOMEHlArksxu4/oMvKykFCISZ/4uWoKqOxr0a4MEr1dMJB9BBjYC9ijIvmf8NH5/8Ff0dHvztoIj1rSkr7wUG7ocNBZD8/wwCAM4nyAKA/mwANAjAM02PvOLY1+zhFMCEz/c2DAAJAOhf71vwS0RgAdCy1OZ+ivjvbYyQADS6UoXxLa242eB/iPj/UE4DIJ+0LTBu1VseNHgvHiIBwFUB/hDnyQZguxCAYhCQ3T9bJpHHIsAGoCKKFGBLgLbspbFZxXqAcS8n61J47XAdmt93kPoAMPz/KOf9U8N/J+ifJv5n0t+RsiHI5xFeZvoU1TZisUAAyAIE6B60mvxHA4AUAFIAxRMMxgLRd5r2tFEfcSdCAKvP53tsEAoAmArQgCPpoV0CHO42EgB7cwSAAnhchTFzpeJ+0wDUDs/p/M+5FDDeiBDAXPjDNACiDUjmAOhWndsBoIJQrAScSP/TTlt/6vr16087rawsTxWADUDJPbRD+P4YC0DQMk5bdSsztVYewL1xxTEvBaBDtALLWb8uNZv+8PtBAW78IfIzVEw0io4BbAHwsFhhL778DAIwnZYCQPSfJgMAARjZs8P9vuP99z3YeCz1tjAAgzWDLACAb9gPeJEGjESSkUZ32wvgvwfpv0ikMdLmGLgnP38X/xDr77fr8Gbznzkv8/8CHBPonb9G958xBYj0wJgMsIoAbC9aAB2loP+pp1YAp0IEysry80t37xHdAJTLNoCgJdWAFh0cfUlWgKX4qGMemwfV6XMBMO2HrnElneYwX2e/xqE9QaMVPsUfiJsNZUApAFAAIGobP8r8B/cZogagRGAeAoHgjpCj0eFwdLR/gwQAC0CWBeA6wHAIWwQ52tw7d/++uxWGIeIgC9DYOl4Qy1eYAlDL/j9HBKAnAZj8OIzSn5wFwJeRAuQrtwGQIQBqCEULYIz/oP+ZjIqKvBWAyiN6BqB8jFIAMRaAnp4P4zNAH8IAag1umDn45s464NCPhv+H/Wf6S/6rKc0CyPqe1Uqf0wE42AJYIAAcA0QRCwCxxaPIAE4mlAQAFSD6T6dVG1oG0AbgbQQcjtZvfnncJwXAiYMUoJ4VwOsfHh7ejeUBIxAA9/DvHggAgE1HG9s8A/eUFADW6yGA9/xHc4z/0gLgNCEDAHmJfkDdA7ADECmAVRzAo0ULYPAf9L+QcN6ZEIA8DQHuOiJLAPtBSfA/MIIROOgeGhrqggp8/GG/lRQAYcBBIQBG+D9A/B816G/LGPyt7jhl/wFpAOihBQNjwgLELMEYJGBjYHH66OQijf0JgjAAVhaAmLpz507a5r7z8Bs+gFIAEzidBLYAW+aGGUmYfhIAf7un2SMUwNHWPHBPIdQBIABu5v+eR3OP/9IB4NKDAHMGAE7pA/QX/JKeW3Lwf7shAA8WLQDoz/wH/S8FLrwQAnBavhqAlwwDEIABCAgBSPUMdUEAurpwhjQ4e81bpwvAJzjAfwcqgjNuSW+iv4z8raH+nv6+vj59LkBCcWCMJwWISQGAyFg1koDwIoDEPy0ElOYIIJ20apQDTLl3Am1tzYetPsYE+G9YACcpwAYpAM2ORqyF5R9v9wDNBMQOroKIASq8LAB+5v+JJQDTA+AwIeb6ZpT/eAKgPOQ7tAHnwCPcB8DzCIqFAN3+X3jp1QRSgFPzVADuPQcG4OIx4j83AYyxAKARoIctANDVPWyDAthqkQKss7MDwOVSwH+94z9l0N+W7O/JQD/JABcJ4/AIsTFGIBYLW1RlPBoIh6MY+VkFYACoD0i1QgAsAc3dW+cmBRiw+QCKAKAAE8R/6QF8vqbzQf9dw17wHTTwHnZ5OlgCkqEkkgAFUQe42OsG5qo5uDdBaiCQHQA8aDJfXDgy6S/NQO4IQBeA4pQAzv4J+l9DuPrSvBWAu4+cez3PAmgZEwZACAA8vxof6v6hm0WgezcNy6G4EADGAPFf0t8h6W+zeodfGCLnYABqQG6gp6sfP2qNGgIAi0+pv8XZRY4AaCkgTgIqVhYAzQ7Q2vat4L8UgGfBfyiARL2vqWnD3Jzfv8vPKYDa5OFWAAIQcj7hXGprLYgkwCV2yX+mfXYFQJ58SRgm3+wBzDzkH1TnFgCpAMWGYD36vxT0vwMgBTjzzFPzMQdQec4Zd5Wuf4ACAM4ARMMsAICmKn17u4d+YA0YeiGkwQIYAvCjy+S/GrdxxU/t7+r+AT8uAB0AenB0QUe6VMQAadViCEAsMK6g7k+zhyj/p9BzcXo6odooBZCyC9R12HwSj72HBADgBGqEAMACzPkBtwMRgHe8vdVFCrBUVUNbZO4rhEJgGaUAXmH+ZzmATAHIQMa2P2YLgHngc76vJgCQgEKfFahH/xj+7xDIWwtQeu+RsyvPZP6zARiBSQ+zAFg0qzra/aIa72cNGOoetmpeCEDtd9T+70JHsJ78g8ePw+j3deHnXujGGr2QAYFuHWqCoQTHGGESgBEhAGkALygRgE1BVRsJgOYW9Lfvi/h0DJIAIAc4IfhfRQLw8gYWgFCjG2jHluA4I74nSACcoYECaAasuH+ndw/xP1sCVjEAj2ZN/wVO1AAEADkhUgDFJYLZ/7P9Z/5fcMEF+SsApXetO+OuW6ItXAHgLuCwIQCIAdI9u5HF82PdfSJzV7wfMcDz8+D//AzzX8cMCoY9Q91du7zeDU1NTS9v3oC/8sLuF0gBhnDFqcGX2G4xBACtvkp6JYELAgDqTy5SCjBhJQHQVOz48zxK2+83P+zz1YsI4L1nWQLAf1MBmprmqBfIiwjA3oz5ShCAzqV6FoBtTsf42p+1crF9qboatGbO5ygBnCQBcr0vpr6+I8jJR/UqOcDiRmGlJv+J/lIArs5LAbhr3em3PxBoAciYmwIgY4CE0kPz7Tfv3Uwa0N030xfvjXf8+DX4rxD/aVAHqBcANYMGsDe5YW+Tz7fpzgXfBDzEhpc3+JP+7i7U9xZJA5QRXQCAQILIv7KCWwICgJ9ABlCzAeB/bS347/C8Av6bAkCAAEhUQQDw73u9Xj+tN+g6cPz4r+2u8QUpANuWOtb+IHXJO9Xbxdhv3sWLnDANgKS+2QIgH/yppHjuHGDRApSWcvwv+J/fAnD3V+vOPrCR+R8G/4UAbIxZtCDDqkz1a9ER6+YNmzfvhQJ0oTe4N76P+J8m+gMgL2Xw1Z6ePi/4r9nmfM4F32133uZbQM5gYmEuaZ37oW9KCMC0EpUCQEmA8GJaAJsAkQAAio3bB4n/z9c2NLbOgf4ESgG8JQTAOQHm1zsJFAM0zbEAAAOtA79CAlK+qidqarZue++1msiaT1Stv7n6UbA6OwVoEj67ELBdLvd3cvwvnQAJwqoRACDf31yoFkAaAJ3/+RwC3L7ujJc+aAHKwxiVo5wC2AgDoOkWYDKRCIRH7lzaPLxBTe79oYfc/sEVxP8Kde9T/X5xdnZ2MTEzqrit3DGoPXvs2MTEpgs23bZAr5Zs1h3dZABYATwxXQCoEBhNSwOwIgUgkdIA8J+x07Wk8x+YePY90B9RAIgPW2BYABYAOxYHRQLQ1f7rOVZf/eDIT1u3Hls+NrHW97Muu1KG/6YDWMUAQAQ43jd2Ajgx/S9dAM4t1TnxJAsAobAtgMH//BeAy8855+wj+03+swEoj40EdajTR+ePl4/9ccNVt6HiBgsAtx+fIf5j+06euwfiwrxTGh/tgrzi38jy8s9/VN22adOxq5aPLdm0pR/i0wwogBbOFIBAWpECMDVJArCYMPn/fEPvfEgs/SEEYGkC5CdQ8A84AY4BvCGvv9Zd29ZKcB2e8NV/W17+89bl5eVn1/gi1hU3cfif5QDwzCY+3whMcaMCgKeZAFw1A2A2AgO4FXIWQGQAzABgU/4KQOVL684444P9xH8OANgAlIejqOlLpKY+m5rFKkG33nrdVZtu2zzcr06tzMzwwA3+S99O+TsEA8x+muYT++m3G45NbFq+7robvh2JWbv7p8B94QBQBDAVIBxOKCuZApBIoZMgaQf7oQB1HaGaGmcVwIR/e8k/AfZvcwJSAWpqkAZ8uckfCjU0uBvasBIwKQD0AgIQOHYMCrC2HcB5N2/n3t4sB7BaBkCk/szdP00BMOm/eg1AKEAhbxZqBgAQgGwHkFd9AKc+sO50GID9LfuNBIAlAO6MjMSCElrisy+nZstbygM33njrdZZoAoN5egaOfYrYz6M/7rPEXgoGsNgXITBy63Vg/w03/IGVfXfHifvTfEtwDtCcEJhISwGYpn9rCtOIU7TZFySgoa7jo5qtescPsGXJCwUwugA5CqhxQgBenrOHGvrt/kYPATnAqvovoGKfkwCs6fUrLwb9CSc4ACkGfwGd8PpS4AJZnUCrG4BqHOJO64Pm09f938KJBmATTuI/CUB+NQKVXWx5fd3Z55ABAP8pLR/FDJ3y8nCMZuJK0HT9o1OJ2XD5/vKNY8ePH01MYe2uFdCVZvEBkwKzR8VjNnBcSEDsxltvpZ5CrVaZNvg/pckUACYd8poAi+lM/iMAiID/rAC9rR9t3VrjZPgIj8x5a+eewzuzDxgKUI9CIGKAhp7aBkdzMwmAB6bhiZ/Hfjr2+fLyp8trdzZA2UXbDfbLw4wAcOYCB/5mD3Au/hslgNwpgIcFQP6CXR2wtDQ7AwBAAPKsCPAnedce01YVh1emYVQQRHS4K/UV45yPGB8kvjJFrc9GcDIJKjrxXQ0yJqBTpkaZcYLJnJsUAZWgiVkkjpXEdqONFdtsyBysOrOoy5gQDC5x4R8kJn6/3zn3nkNbazQGB/3uube3LVOi+77z/R7n3LRcV2TRoo3Z/i6PR/DfCwUoDNdGvI5QhAXAwTHAINbrg927evG6q9e/a2QXdu/F3S6FyRGBQ3ydhASY03xoYM8RihKkB7AiAPQc6QIwNAigS2D/ckH/54n/LRWS/5VCAPI2VLvzWvFe8wBsAaqQBHijesNqxrovIABl5TtHIQDAvE1TZZ0t+a/Yr939BSThTQlIyP/kBkDS37IA8zvG+vsSwJzNAea6Ap5FGxctzfBb/CeEPR5aqW94fSb2H+n1MyAAuBBG/viDb6QG9OIwVWASB13GCV5UBzhKODII+pMEWAaAHECABcAyANQl9Bbtbo0GoAdfqn+xpbmCHQA4LvDmdnddXV5rCUmCpQAcA2zfscH9xkuNWAO8+ul135AAVFRwCmDn9HkL5ifyL2WWS/prDkDeJwSV/XT6FydUgL80ANL5Y+Ak4Prc/LVYfxMBzGkByHJ6az052Ysysnd3eQKS/wGj1m7URsLBAAqBPtMCRAd6wXYMPvll19BQb1dvHFgHwH46FCg/AAUQEYAjogQAIAGwMoBDvy5Hm/FDkADU/xo+bWnuhACUYQcwEF0gDwJQ92ZlZQ3tCkwSgM8gA0gC7IA5gAAQ1u0ogwB0NrMDAOZlM7BtsRX+KwnAAPiazABw5w+A12T8XxFnAB5boQIAPvBDKWgBRA1gRgQwx1IAabnOMG3/jyf6Zb6WY8CwM/8jyAVOIgMYChgQAIeWBGDmswqIu13Dw70eRfwcP114ANIOiANKwPQfxqAMgFfQHxD8JwEAkE+kNUHEf44Aulevad7U3CIUoKZN4vXSPghAHxQA/JcKUNVGdYC8HTsgAKsfJQtQf7SsEgLA/EcOYGo+Bqnppwn+x8YAlhAkKQFQGwCXAfjn4hXggb/OAFjMJwiNSMXtQW16BDD3+gDT812BWkLO0kVLs3f3Sv4HDHz0cbg24AjXGoZdCgCu0egIiK9cgJ8EYNDPDoDfW8AbCyI1oLKE4L9VArCzAYhoAsAPAsJzxFkBnn+oe/maTeA/BKACeUCL/6+3/dJXB5SiMYBQUwYFALgTYHv1o09jL3AlANIBTM3DXsCsS+58Rue/qgImrwLw11z64/kf7+M9wMrE0z8MAH0aYwBSclWwLV4A5tBawKyCYKSW0ZW9cWP27t3j44L/dnw02WPYQz67JQDijA6aXJcGwA9O+6Ua6PTXYGmAEIBh5v+Qz+R/jADwkuAvWQDA/5eWv/Qu+G8KQKXJ/6rX2yoPu8kDlIL9pAHcBwBAADZsr1679qW1a9c+3Xi0vHKVdAAYU1cc6/9L/vHfv/xLi3Xo8X+7lQ9IAHPzP7kWqDhWAmIrACtiBEBRHzAlIPWagXQBOOcUHqYBOP7Y5n9aVr4rDKILZCw9bmn2a5OC/+P08XjPb2wAUO+zR0B+iegRi/syCBgZHGGOW6w/zp8AQgNUodBsArQTcEv8N/sAwH8pAJj+v9nZAf4LAagwAwBaYYi24Lw6IA83jJIysSdAFe0N/hLj0dVHK0pWlSsHMDG//n7aYP+fiWe/YrNWD0hoAIjpzH/FftUFpPivNEATAAwJLRxItWYgrQjA/McxFwwAAn+XFzQ34c9ctDHziSeY/2H+Imff2wF72GGnncFnCMBvVhJAvqAmGGsAlBB0+Q3Bf0sBRAiwxxexM/tx8RhSAAJ7iP3EfykAj2/5pr+jY5PlAMos/49kPy0LNhUAGoBRwiUCFoDqDbx/0Nqn15RDAJQDmJhXMaot62zY/xho9E/iANRzf5AEkMlDHaoFiOP7uAyA5QBo4GIFAvO83TqpAJyDQfy/6ZhuA0w78TLFfjMAQAbg4MEnxseJ/wYpwr6xAXsgGKrVBEDu8bdLhfecA6SmAEDxHgMHoUuw39AlgPOAjhBP/ag3eCNceKQR8W4B+X/FKR1A96OfbuqQAtBMAsAWv5I6/ikHUGIqwBKmP74p4SaBKtoW7OH7AWjAms4ZDmBq/tSpbAvSF18as72PVvtXQYCkd4wAaCkAxX3FfsI9cdANgO4ANAW4dP78F/4HVcCbboIAMK4quuqmY9MA2NLSs3LzC1yuMIX4OjwZSxdl4Knegv+UFTD2jW0J28M+rxAAuSGASgL4+eCBCEAXAOa99tqFQ08KQgCGD+HfwezHWiM7egoDUgBCYL/kf/eXb3Wv/Wa0YzMJAEAC0FlG9GeKU79PJS8KqBMKwF+QCaAlwX3bq90PP7iBthC4/2hnSRkEAJjeBgGYP2UAmy33ZjzduzgO0vOD/KopQHyh/5BsAuAX+SdikKgFYIVmAHjoqUD5LrXSgJYAFEEAGEU3HXMGgJnvdLp8IaruxcHTm70xJ5MMQJi69z1wBJ/1NKzGPiDRAAmAhwXAIRWAkwAW/JQCELc6/Y9T9wq9MhvIPcKhoMMRDhhQl1oiP5+OL0F+igBIAbq/WbOJ+a9iAFAcgwABuJtWBZECrFcKIOVhCQSg+kEBEoCKztGJ8PTo9HwSAFva4vbiZ2IEwCK8huJEDoC9f3L2qwBAsT82BagBn+GD1EsDKgEoEvQvKjqGDABP+gWgfgiFfbvJ91gN8GcvzVkKAzB56JBIAHg+6Bnb4rN7owMR+nEWABMObgXiQwgAlgEo/idyAYafhvwTgIgC0AxwKGAY4D8bAD4bIQBb6Pjy5O7Hj452gP+WA4AClDP1K80iQI1QgCV1r1AeAF8oBciDADwMbHj4vaOdq0gAtkXCHAL8OE+agdNyEf0TiuMkAId5aZen+ZVeAsBIDkV8OtU7ywDEOIDUTAOyAFx2NQnARefgOFYMgDnpB8Og1gzH74kVgK5dmRlkAA5iJw8RAOzGg7+fDkeCqwdIDYBAyKfFACNWCZBTACPKASj2J3AAhikAUAAWgHEDAoBwA7+hQQ7AuxzkP/lXnFse30HunxVAWQAq85vbgQgBqOQ0wHrOBC7Bp6YC3N1X536YAAEYhQCQBXBMj84fAchC8v8uIQCJc4A4E3YCKwOAwQe+T4iVivVxTYCy9Gdd+MYyAWcvSCHMFICLyADcVHDZ/2oAbOmgvguTPtfZAoDdbhgm7T1dHoFaUwd6D2YfRwbgs0MyAPC/MNbwdmMgEF0dVQKgEB2USX8RASgBSApDdwAjxH+v4L+d+G8nAQh+uQWAAejeAfev6C89QJnOfxKAGrE3wC+wAMArT1a1mYAtcFdXPwwX8AYLQCdnAUdHIQCnLpj7SFt86QN3gf/JFICTAMoPaN+qR/4ngwwAEvNfhv/0rdQA8wN8lFppQF0AgKL/2QCkZYH7iK3lZvvs3MkEBLyy2dawpMBD2T0KAA5m5myEAdjLBsDAF59939DwtiMS3n+00BIAB1OfHQCSABLcBcA5gKQSYFh3UgA4Ajgk+Y9fVgrAQDex/9fuHV9L+vMhLUBzOU/vygFUlQgBANkZ6195pYokwlwoUM1wHx2tKesERhnzQgCyzpbTf+IIQJI8US+wMgagf3IJIPLr3l+9eURrAizlW10AcKRUGjCBAFz9/xgARX6mPohaGHWEqKpnNwi04haYDAN4pWnXA/5FPhAGYK9lACZ7GhoaGkMR31MrCkXIYPeyAGCLL8aAWglAEQDaAJLwXwsCrL5g7gSMGPwLBLzEfxIA79NbCC/x7L/ZOjCA5oqyShOiE+B1rAFUAsAe4JUlVZYFEALwsPuwJQC4zAcBsOWr6Z8QbwC0DYHaLQXgj5QBEJfkBmCFor7CY+C/YvxKzQHgTME0oC4Akv//SwSQnlvgwlyPiR5kdTmdzkK8YyMgnT/DbmclYO4JExCZJANw1t69JAC8BMA4MNbQ2DDgDSxrbYvOFACzE2DEb3UDU2sfM//vo4Beg+nPhcDhobBpAEQ3INyJ43HQfy1mfyK9pD8GoWMTmoBKKoFWXNvMJAApALcCKAVY0naNtADVjDcO7yyDAID9QPn07z/O9QxVuoz+EzoA3eaD/AR+o7KDEiB/UoDYOOgSqwEW/5nvd5ZK+usWIKW2BrMtZAG4+saiovPBf2UAZlEAuK/PQfvvhUOOqLMgXzoBRkzFr6vLY90T/8dfy8w4LvOMvXv3fXYoHLrDTgHAGBzAQMDb1FoarfVQGdDApgDgfaHVDayygDAAgzTNW73B8TDEqfYMIP7viTD/a70BNgAGXqLdW5D63/zVZgXwn993tEAAwHaCGQIIAajkJUFKAVAOEBJQJSyAu68fzH93epoWEpX/9PtcbwTKvcSa/pMEAZLs6hUnD7YENPkXJzcAivUr4lsAFUohAFo3UCruCwIBuOACFgDseif4P9sGAAv6HCA/RfwuZ25W7mKXwxsxYbE9rgQgHAEygDkZbAA+/815/PW0BAD8r2/0RYIrSQAitR7DbgqAQwoANQPKSiCC+RHaRagr3gLEqoGVAhwe/mN5CAaANh8LwfvbuRfQu+zxHWs2fwVs1vEVDfCfdwMRCmA2AojtgfJM6gu82rfEtABuEgB3P2Z/ZP9+Gu0c/enH3+f2WgDs+/XMDPv/1w6AK4B6EMAvygGojj8d8sPSe3QHoC5iGzAFNAuYEUCqbg9sW3iiEIAbbjj//zAAtiynLxSWU39WWnq+M6jYD27FGgApAGZAMH4wEz1AmP/3fXj7CQvSbqn17Pu+vqFhT6MjUljaeo+PBcBgAXAUvugwLcAhv2oE/nVYEF0tCJYXOvU0gFUCHMKj/8aFAcAvGzAgAIEAUg5rNoH/rADiIPANmoAqTP7X6AJAatAnib/elAA3TIC0ABiv9m+jlQBTPwK///j7nN4SKP1snv7vwjFTAjD0HICietzaIHkjiwArE6vASun7zaHn/3X+38MCoPGf64CptT2wJgBwADdKAzBb/If39zH7Xc78dPEuogNsjxUAQX8Mu4GsIDKA/owz9l1+4PYzL8RzgSgDOAYBqH/bEXgRAuCoDdQaADuAp95xmBZgQHKdFOCPP1AIxE5gwLg0AYr+Osz5f+jkPcNHpAFwRFCk9NBjCMIv7ty8eet3pgJICeC7TS0QAN74D0eZEIDXUQmkJwJVvumuY7TnrV9vKcDdKgvw6tfTnaPvwgJAAjAKFsxZ0MLfuwDQXisCaPTXRUDrAgJUSlACEYCifqIAQDoAVQtQ/NcNAARAh/QKqbQrgG3hQikAQNGNV89mCcCW63SEmf256ZgeFrtCgYiOWgWVAeAGAGY/lQSys3Nyzjpw8cWnn3vmiQuON5AB7CH+QwC8T7W23okdQTwGEEbjbrRYCgBvDaqlAaEALAEYpAPKAPCdzn+O//ecfOTzsbA0ACEE//iNcA2+C/5v/eorDAbzn1/RA8QGoIT4z7nAtkoIQBsJQNsvh+sYrTVlv9RZCsBhQFWfm0zA1xMwADt3Tk9MTE1NTczdFAAX/0B/HIr/auDQHQBeFPHFXRyIv8kqADj1COARftHpTj+r3ukSkDoxgM0mBQAKAAMwmwKQRfQPRp25aQuI/j7N+gdU468CWH/ccR4x9Qd4H/7x3dkZ/qUXn3766eeeCwNwKzKAPfUkAA1v+8JNrU3LIkIAInAAwcKV7ziCygKY/CcFGB4kjAz+McwfqTggnv80/b/Q8/a4MABRigD4OQSBwp3vv7/1h3ffFx5ApgLoKrqAa0QEUNGCK4oBVdTuR0v/2oUBKKXv7z38quB/ndtNCrCEYgD3LxPTo9toO7AJSED/MdCf/a+Qjm3/TPprFqAYZ4IgQE727fLU2d+u0T9ZC6ByAHyo54DoBkAXAK03KJViANtCJQA3cgRw/OxEAOmw+yGfsyBdaAHTH6yGIwDQ0R/PfsPIyRkn6jMCwGT2STkbzwD/yQCkFxgIACAABAjAsm9WD7AAjJMAOIKFpU85giHVDagUANM68X9kZGiYPuPTav6fIQCDe5YfGTzQMzZg2EkAQj78EtRrFIiE+t9//wdM1Fu/26ocAK4dFv9LgLKWCnoRm/+1YfF/qzAAS2pqVsEg1LAcuBl5CBPqKAmQNz1h8X/q3rnpTdNQ+3/mPiEATZoKKAcACYgtA7SrZ4PEg8mLI8EXkvc4tbvH4vl/D/94TEcw/WxK7QxmQxJACMCNRTfOYgSQ6wqB/rk2k/4Br2A+dQJEYqZ/dvGRAHbmph1/8KgOcQRde8/Y7c+EASAH4AxFOACoH2uohwMYCA3UNzYatZigpQNYRgIQdvgkZuwNOkIC0NtllgIsFVA5AcH/X5cf2dfT09PwGzchRnwOCIB4Elnhtve3XXvt9ObvPtkqowAO/6kFsKWZAwAKAVqay0F/mvlp6x+kAN6U/F+1qmZVDRTg2T4yAaYCLMFLdd/0FB5OiAMCMF1SsngOmlO4f2T/BP/p2qQnARJXA0zz365vD6rTP3kP8AptWDM7rjpW8k8r868cQCrVAZQAALOWArTl+4I+Z5YsDUWDYYCa+wTsM8kfCIxjgPiTk5N8RyoQchUcf/2VJ/lhAAi3HwIlPft68ETdPfU4GxsdAwONA0IAsHAfAvBiaZMv6A2rncEE/MxxtPfjTn0gB2uA4v/JeCpQD/B2yEMCECoMQq34UeTh/m07v6gf6N/6ySegv6kBoL8yAMz/Fs4E8PYfr1dCAPp4JSB2A2QJKOEwwC1Rh6XCFAOs+XkC7GcD8BH+KWfPtTQAWn8Q/UsBaFJVAHYATH6+qCSAOtqTET1R+h+mQK8AyvEYLibJ9RKACgHUpxIPzLX/yv+BAMyeAUhzOnxO8v42lP141Q/BHsd/cJfJzwcMwO5x8ZguB1UMFyy88owcYQAuPpgDFtZOfr+ufoyep7kOk79voFETALQWv1j6DATAG/RJDGo0x5DwaxeG2glkEOH/gTEWgLAHOUC7jwSAflusO/qof/+6nv3bvvvku61IBSIRwNP/TsH/MpEBqGhurmAh4HbgKuQCkPdj/kMAhATUUBjg7jMVoAr8dx+dmJpgTH1bQqiZSybAloWFP8L+g/xEfVyUBqheIFwVNPYXJ4kB5J04JEr1xB8Pi/6xBkA5AAxtfVBqxQALhQDMpgFIdzlcuaL3XzT8gdSUpwcQ/Ud4ix18DOYDoD6AyySAZiGXsyA3nX/D605iA3DxxWdkZ3io2tczBvoT/z+EAEThAKLjnvFxIQAhCEBxFNsKqCBgRLGezrgblgbUBaQBGD55D+w/cKBntdeDFIC38MVQIAD+2yPhd5bRv/daMgDf8fzP7r+jw6oAAOW4RwTAWUARAbTCALyaV1MuBYAPCgPcBLQG1GFjANx9PTUFDcDlazwmsGTVHDIBaSecdvgBYf+tEKApjv3ATAegFgHKPiC+16d+SfyZcz/jHs0BxOf+tGVA9Gdwxu0MSkih54SaDuDqWTMA4L+vwJaWVeD0wfpz+5/TmZ+fa+LUUwsKnGI4XQQHgJc77rj11lNzMfNLnHjlSTn+k0D/zMxsMgDG5wj+4QDWQQDWkQDUL1smBMBgAfhUCIDXygNyGoCpvYtdPoYmCLIGOIjEoF/wfwj8J7zc0+i1G7X2aP+3Xo4AjED0CxKe/ds++QQOAAe7/w7mPycAuAaIe44AuBmQ04B5603+WxLACnDYTbynbMArnA2YFgpwdCXID6wquXdu7Apwwm3bt7c/UIzpn9BEJ8jPEoA7rRTQzvyP2R5YdQHgJbkDEFwG7izVU39y81+c8ZB/QEYMehWQkTpPCGEBYAtw9ewIQJbLl5u12Bl1BIMozjvzs9LTkixVSktnpNlOvPDCCxfqX113EvUAnZEJZFArzuRYg+D/kXVHPmxo3D/Q2PQp2O/1eEgAwhCAOwuDYc0CRAekAgwPDY/QPB/f+TOCr4ZG/JL/DTT7H3iZBMAwar3bNk+IGkAk/E1jPdDP/IcAcPDfAcxMAMgIAPwXAoCNAIj/QJkEewDgTbYAwHrOAnw9QQpwbXXrKmEBgMXH/gSVVrB9+4bDsP+S/Ex/OjAEmnCC/EAC9qsjXgHi2oBWmlAJQPM1IWAAlAAIWCVDibmhsX+yd7VBUV1nOBAawwazlDhR2boWZ9pxSH500gwz+WFi/mjaqSOoqLEBtEbRNGgKaqQYwEy1TvmII5QqtoLiVxmajuh26gbcHagsrSRCyiotY0KIYrAmMxqnM22mtc/7nvfec9jdELHQ2sJz7r17QWKbluc5z/txzhklBwABAMY8ApD4n5b6uf39/e4FM2Dm7wxRj4cIwONfRg9QXFIc4IyBAbi1rQICUKSwfevOnmDyfhKAgEsJgP/N9KUprUMEoLNHdvnj8P6dD9EKxPgQoNP96JAfFAn/oPiPv7+XIwAlANVX2qpu+3zKABQQ/5NrWQCU+69srqlprCT+SwWA+L9veZ4VARDQ+zclL3MFKwCHAbhhAQjXWAHA/x+zGTj7t7/tvv6D7zP3RQOm3+uJgEmzTpWUlGa9AP4L+zkGYAXQ/UB0SyMQ+wCNAyb95c3EUv2p+Z9u5P6G4/8y+59K15UCg//jaEGQFoAxNwASAGBZPtjf71/w6Ah+h2EAqNnXNACxb8WC/2IAAqeLKrayALzLFmBnbvC19NcMAXBDAF6jECBgNwR3lgYt3//un8+fP49DfYj0+MALH/FHsQHN/+8+8u72isPEfuL/yZ0B7AByva3RTxGAQxmAwuTrxP9a2QYU9IcBMBOAQCa9iQFAEyDzP1MUgJGHoRRg8xQVArzOFuDU9d0XTv3kTJrlAO59BYhK+HZJximd/RPyswvAzdO/gQPKAiAYEAdgLgAycUAyALjlgQ/DAIQ4AELkAEALAGDsCWjjiXv6f9+xEAB7HSB5gDGSAbT7g/2AH2WAkaQqwf+vDjEATzljYmAACDFgYeuhrWQABIeQBgwmpye7jrgCg9UO5QCWpr/pVwLgFgFYuOgTEYA//OP8J/2fCP6o+oIw8xOY/xVbKw4XnlQOoPdkS8BRHbjU1sz7k7f7UgpQdui8vgECAP5XCf/hAxT/Vwn/YQA4AyAbg+NYoGvgP7AiU0wAYCtA2pQfqW2Cvs8KcPPM939eKvYfT04F3sO/oZOmn8pYeSZrEfj/QhmekACzDxgP2wEQ94HQHIBUAkgBZJiIHAHIdK6v4QIAwBYA/lEZNv5XMq2jsCEAFAASgMdjiAA08KejTn93P4PKACNAFOg/xADc/5UvPxijDQA43lGI+J/wCY+inT1eSgK6PIFqzNEoMry2NP1ldgB+ZB9YAJoObC77oyjAh+++y7wH8wFeFAAMWvyvOFxRwewn/ue+1uqodlc1voYzCGEAWpu2bs1V/G+rUgLA8z/4nwlCUwSwgvm/guf//ZIBSHx9/3KwXyRAFICRx0hL/BELwKvcEPwj9AReI+Lz4OveVQAc+JFRfCo/Vdl/foDwZhnA9ACLrF4AE7IPkEl8/Zoln8MYgGEVYJmhGsvSWQKMGsA4KwRGRbEAAGwA7gfx7wfGQAKihP7AiKZ/4GHwH6t9NL725diYB+MU4rlRONAh8z9/HCoqzO3Y1jF4xDXoH3S0U5thytL0MksAAn4WgNRFC5usYiCifk1/xm9oAH8E/wmgP9UAeq/mJvsdruBryUGfj/YCS84tLHizQc3/VY3CfygB+L+C6Sz8RwDAFQARgNcTV2TuA7QCaBegAAX4sVgAAkUADAkCoAD3ZKY6eto3SoozzmS9Av5jlMEClFkCwFbAGOL/wf/QdmAhf7gD0LzXGKEBWGoYAOK/QBqBx10hkLcEITz2GARA+M8SMCazPxAcaYYVBsCMAO6f63Q+GONUBsBZzQLQ3soKcN4yAYgBtt3wQADcWLlHAuBNTS/zewBbAG6mLnplaaeUArAggOhvKQBT3+T/4T+JAcBHod/R3lOY64UA4DSQppybjfVAA/hfpfkPAwBWE5vh/7kcqPm/CwYgcbnwXwQgggJMAf8lC4DxC6E90/+e9QBE/3Uy/TP7jSKgFQSIByBwNTA0AtAHgYST/4CZ+7PeIhoAjOECAC0A6YYALBuPSQBYAMJDj33pYdCeoRRgNH8tFtj09y8YaXR1P+g/144Aop5tj8E+YCgBiAEAQERfa0cHO4CtbALQCnDjBrjv8vvbXXSIl/vl9IVuGAAsDHJrAUhdmmMpwIcG/iBg/hcersC4CvoLrrodvp6dLW5qV/K8eXOTqv/z/N/I+wHjjfifyRYA/FcBgC4BbFz9i9fzwP5y3EYYoEUgj7GZQgDLAnx/NTHfdAD3oALgvI+S4nUlMv2X4ZZZ38wByEMcgBUA8BD2y603A4tcBZCXEWYANP8B0N/OAijRGH9JAFsBvgQDwPm/Uc8BYOlfvwU/7P/IDcDcuVYE8Bi2/XE6Y8gAMKqlZ5hafDo4BOBk4CdbdxYV0dbdrV6PSxYDLPRaAtBKAnA5lVB6/jdWJpAuKQOC+zz++HFFoUQAQK8MLwtAqw/wvtBY1UDzf5UCz//QAToLjDP8wn8xAML/1YnMfxYAbQIkGYjLVgCxAITLq0wHwOMeU4CohFk3i2n6R/EPzCcJkOnfyAHIsFMAB+TB7D+gQ4AIBkBesoboQGT+02OYCiCDTQNsQzqGiXHWCUAW4OEvMR4e1VnfXPnvN/g/0l9ZZADmYkSJ+6ejv+MePBIv/N/DBkCtJBYFIOCzo6PDDwHoT2nFPN3aig0Blg4VgLJUxuXzIL+WABoWbr3z8XniP1kAhAA2OnztPbnJAfA/sKmmrbaB7T/QiFGjtgFW5AbAft0PuFrVANIWb2b+44dMD6AGI89SALEAWBZYkmY6gHtQARJmvdy5bl1JPk3/mP2F/mYGQKb+Mr0omB6CyMcEahNgIgv0Hb4CkA6qR6L/YpP/6RAAHmHIGj+dAOQAHniYwQZAMJr+f4Hmv3vGyP/ix+dCAB5X7t9BZ4HFxWoDcIQMgPAfPh+JALUiEHlACAA27gikeH1sAbxly4JDBOCANJycevc3JrQAfPjOxx/D/0sOoFccAD47PO3BlhTakyC4t1b4fwkDzIcE4AL/lQAomks/gDiAjWn78+TbgLYARhiAH1fY/6plAUpWbjYcgPYA98p59pOn/wr0V9E/yK8kQNp/SAfMMqDpAQ5IDBDaCqjbAbMiNQNK8B+Z//KIhCHmIQv/GLM/PYT+42prUFYAmADwHwIwBkhw2/z3Thv5f8LDFADMvV+5f0KsM0YZAKkBbnEI/wF3EBLAFoAU4AYJQE9PgHcEcCeXppAABEgA3CIAwIHSF6EAJmz+n/94KyZ/HhWqDQCPqxUtQb8r2BKkQww2VUEAQP9aDOUBAPCfwEG+DgCY/9gMBCeCLMe35Ue0BGgVMBXg2o/ZArx6ZuXKa+EOAApwb3QFg/5z9PTPqf8XJPMnKwBCBUCeuMT+hyUBTQ+g71DoRYCa/0B6ZAVY+sorQ1MA4gBMCcjix/hZDgABQBCAcb/pAEaz98/mfzDhLpYrgv6wAPfd9wC5fzEAR2wDwIf/BgCw3w9g0+8OKACnATpueAYhAC2UBsQfBpuClgAE3NoBHFhYuvITk/401Pa/j2wl+w/QR6Gif8vZCw27ve3eZK+HDEBDbS3Iz/yvZfZfQgKgUujNFyCbgmP+X74a5wGs2FdeWal+gPlPQ0uAjDytAFgS9HrJypWnmPpyy6DHf79gPWnq/E16+i/D0NV/UQEdApitAMx+6QTU5JenKQOM8FKgDXMbUPUOROS/qQBZ6VnM/cgOIH+c7AsWxRbgfub/WOQA5rVa4X9Kwl38t2P+IwX4rGuLghMGIMYyAA7A5dH8d9MBgJAAwqGOjsDgIAQgyDEALEBKwIPh91sCsMhSgN+/E2YBcP7PI4XE+6tX6YOAz5bbDRuOHz9+3ePudFMGAHyvFVQJ/TkBILADAEkB5uGEUGwMWKlgegCMISIAzyDYT2cGnMlYubIkb1UEB7Dqv64AoP+boD8n/4n+BGvhj6Z+2BAXEL43uBYBzf7USMuCtQQw+7UFSLc6+0OQriTHTAFyHoAon67pz3fWOMoCkgXgMRb8T/Bq/z+S/1I6AUB4HO5fISYuHhFAnMJb4D+Rm0D0B/+xzNDNEvDJoUMd/SQAuT2oBlAaMJjSKgJgOgCgtPSZDw0DIPz/uLBCUn8VbARyipvOgv4bNmw4fsXtfxMCEKyraqwFxAGQGnAFkGH5f9UQxAYgjQ4Iyiyv1EcGSxqA0wWa/fyRZ+HaL19/dSXhaOZyWwJk8GP/f/E3VWZ/nv4PgPni/0NYT19IDFBm8V88wIHwLgAtAWIAjGqghrEPiNTxZPrXrX1h/Bek6tCBPACXArJM+o+z9UDc/IMMwFg4gKh5Ov83otKE1fPDeEofCEQG4Egs0z/JCfpTih/wE4j/Xje/oCng0PYOv2fQE8xt8YoFSPGzWdACwBaAFODyI38YogBoDDyPGf/qSQZXAn+dMafhONEfGnAh6E92+1o31Sj+t1kSgCEGQEP6gYj/IDnaAkF86hUQCcAPhLsA1oA8C4m//EHGSuDtfTgfULcD8mDM/++YVaH/nALQvyS/tEzsP/l/5rbpAHQIIGUAvAtAfn1FLgOKAgyTANDpfwzZ3SO0ApCqCw6WAwDv8RTa4zIcwPjpBWQFAKLHwgFM9tr1v6iRRP4iAF9l+sfGINWn8BYZgJjZzP+kGOI/wnsFN/t/L96gByQBh26g8wcCkNvSKhbADQHwkAD4qQy4iEvPygOcOf8HSwCE/z8rrDgp+BPxv/M6vD8ZgOP1ZwuLghCTlGahv3gAzX8jAgCpOaXH/Mf8X1nD/CcoGxA5DtBBAPDqj0D/kpU399UBbANwif/n5/z/TtMK6L+X6L8u40w+iK8NgFraJ7O/CIFE/7h1CACYxwJEjgHC4gB7P6DwBIDM/ywB4fzXkBoAO/8sZQGI9uY9fsoA99ntf+wAxsgAzIseif+//2FVASD6O/fsOYItPwEYAKz+B5j+SbF8REDALyD+07ZiDKgCyQE2APDmVOQEpRsQX1sC4GYB0EFAyR+Hzv8fbys8KUDiv2LtHMT+AJ4NZwt7uwtveltfQwEAV4MSAakEVA5hP7jNDYGK/3l5+5j0xP9L0jasAwEgk24beYLl+199kSzAzToB2QC9MIjw3/hdBf2bP4P7L2D3/ytQnwY1AKUSxALQkBAAt+gBIJ+pRhEgvBPAuDDCEJoAALi539roTwPvC18xsZANAJCF9UDWnK+dAD/GSxkAhLMx6r8klgEYWf9v1MNKAB4n+sfGxrocAClAbBxWAb71INEfXcCgf7uHqK/47/W6gVYbkIBW9P63VByGBeBIwd3qoRAAtxIAQwEOPPMON/8z/1EA6Opi/y8OIOf6ccGG2uSi7t7uoptu79n6hgbwvw30x8UuIDQAUHymFACdCbC8khwCCUCtWIBwCaAh0BYgkWOAkqMiAGIDDAuw+j+eCJxM9J8D+hdknIH7J+NPANWFx3rdr/nB3p+dAC7tAKx/JuKmQMJ9/ZY1hP/GEWDpMv9LFKCh+S9mJJXJj1uRHh9GACAi8MQ4aQYmjJUCTPNLAmBkUWrU4ywA9z8VuycWiBcB4BLgg86YPcz/2HYPtubRAYDwP9Cq4fajQzgltyKnx4NmIfpRFALxoE6g4Mv4tVtE/Me6c+AyEoGS/8MBYCd39J60UZFbL/Svrz3b0wt07/yp97XrJABkAlgBJADQJUBpBlJLAmD/0+pYIGwDIGsHzTggE5cajDwbU1ZKEgDIVBKwQsKAtNUcBPxHZyvU/ec3N8L9F6yV5J+s+wPDxb2ryV3THzC2AZLX1EVWE3B4DGBUArUQhC8DHkr/dDztOd/EUs1+YOGiVIoBsij+p1ogD60BzP9xtDe4kA5jlIEIYKQJAIkAaPuvB5597sFYgjMeLb3sAGLjYmJwO78O/s+O9wXaq31+AfMfH5jdDbjh+YMpPdgdgDYURwxAKwHxPbwFb74sv3uQgFIqBj7zDh//T/w/39WrDcDVnt0y+zduoum/d1tv7+0LKWd3NwBtQn/cFAAMyQAwpSWll5ZXWQv+awPAElBTZRYEtAvAZViA5Xn7OQZ425r/dSQgHmD5f7IWGJUwfVNlzWcFvy4oKKDWH+X+IQK/wswKaooAsL4qF4BbXXwmiJkBjHA6oDBfR/6R7b+08ug1vOna/sMD4MNsALan/yy5+B9XCoAbHsAOAmSMpwPCxgi6CWjBCOcnCMDD33JsOaL4H+tqhwBAAeKTYACS4mAAaB2wL4AdPwMh/IfHt3IAeATwtQelgZRgCvp2aPanOMFHAuAONjXdLBMBwOA8wPl3sRXg+fPPPLO+76TBfxX+11+Y05ID/oP+vUUNF95UBkBFAVIJICJrCbD4DGD6545BKwOgmwbMkqD9T+AiWP2A+DgjSYBMuWwJIP9PCjD2FkCv+NtcXvVZZ8FaTP9npPN3EQUAQn+G0FpmfNML4CkawNO/LgOELQbkobgvX4TwXwwA3+kMvIbVAPC2VNNfAVlAxX4JArKY8ToHML4aAcYO0gXsnjb84RGTwtv/n8NmO654sB+IJQMABXAhA4jZ38kLgWffCgRcW9qH8B8IGAIQwBN1AHfQG0xJSaF8AGcAWn34IAFYVwwJkG4ALgbm50858/MfnDnz+2OxvZr/t5n/uy90rkUvUC+wDfyv37QJBgBoo8EmQMX3Q9kvIcCqvGbohBUAyKqBWp0FCKkIsgMIaQZYCZTo+V9LALAaArDqP1O1njRtPjYyRu6/AAKA6X/RrxT/6VYTtoCmf3H76qaBS3kASQTK3C8fGkYaQH0K98MOA5GSv/Bfxf8YIgMR/T80oCyLQgAgC5cEAsJ642XcbAo0hph3RxWARxdED53+5w4eAf1d7fFOABFAu4vhTIqPiU/6+uw4gjPQ6quu9hj8d4Pzfg/6grUAcBbAT82BQWiA10/+wO1rhwB43d6mdb+GBDTdhPuXbgAoQHY27q17unjhj+b/huvJOWgEPLyVDcAhbAB2tJEMgOkAhP/hArBq1d7aeqoVcAWQmY9/CJBKgPYAZhwg5QPB5hKJAYT9GstFAfaPccQqmT/ax/ztTsz+mP7Z/Qv/X3gFlNQKwLQWp2+0BKmH3HaYgAHgaZLfrAHwPdQA4Ab/Bemys4cQXwIAzX9N/jLJAaocAC4wnR/hY/x0Ao0ZJALwftGv5qPfesBm/2PfwuT/lgtobz/H/J892N5OX56b2UcGII4FYPaxVk97NacAQXvhP1y/jwRA2gL5xRsIoDsIF2xAMEhpwHYRgM51vwbWrWsquXyANpopJQHIx6Pg3LleC/D/RP+Uou3d3dsKDxfio/fk7XoIADhtWQAogMT3YfQHh9OWN9YT/+trVQsQUL979+76WtMChPcGh1iAy7oQmMmXYB8kAIlAWIBZ940toqfN2rxc0R/8L6Bl/7+yV/xIh702ALYEqBKgPehd4cAi3OIA+GHCNv1mN1BoF3C6pj+DGwDkMnYANNy/nQNgAeDZn65IY8IBjFoX0LwvzCo99ty3niU895yLN/iKd7UDg07C7Fj+wtP/ZBcZgKQ9LAB9/R6PQxkA6vpxiwEIOLQDcPMLPtwsAIRgAIf5sADgH4EACNDIdvlyqYWSgw929wpOUv6vIWVrbzdhG/YGZk+we0PDpgYIwPsNBDYAwn+RAE1/TP8NRP+G3Q3KANRCCnYDFBJcsncRD1UAu36gYwCCpr5GeR1SDGljbQEw+X93BXCU6S/TPwil+v7AJwnVAS0BDC0BZcz/VHqqIoCcDyoaoMkvEOLLCO8BUqk/CIGwX7J/FAIY/Nf052cZPlQrYBYNAuUBhfSa/xM5gFEqAooBGB4PfBMBPUDsd7kG49stAZg9e/Y5dXbgiZnnyADM3hNHOIbThNkAkM0HRAB81WC3tTDQTgYECbxMKNCOVIJLCUAyBGDtM7YGZJSwBhy4vD1mvc3/ir8d33Ab9BfQ7gC51+t312+orasnB3CRHQBxmQMAk/9EX0TombX8g5jxFdOrmP9Ag+EAmu0sgJ0KzAyxAJuxHjBDFQIzacj0P4BvlONbq+ABxs6xRifw5A/cBPnXcvSviv5ldOs9e0IdwCKD/viQJz8kSyD8xzAlAFf4esDwPUDBfgyGYv8yfcif2f8n7NdYyDkAnQYIiQTkY8IBjEoK4M5KgNGPLuj3IdNHBI1H1A8BiHcyDvLh4QcRABgGAN9xVVN7Ly43g70AogISCwwWAL9qBnAHLQfgcZDGKAFIKWbqP8OD8Ls3vvfG71fmxsSwAaAHJvvrHd1d3RawKKCHNwDe3dBcT2AJQCGwzeC/EJgW9aflNZNRYMZXgf7Cfy0AZgygJSDUAugYoKQuDOW49pbvW5W2/LtjU7aKlsgfeFum/1Ks+5PpX2b/kPlfp/aYfUYEINl/fpUWIOsKgZH8l/cQ/qfLmwgAT/wh6wDTUw36l0kAUAb+SwigWW/yn7+cyAGMwlZAbAAS7jhl8NCMBa1E9lu3qGrv2eF0xkEAbnnw1a2+pHg6CmSIAQiA4Jr/ADbs555fvxIAvCkF8FoOwMcugwXAn/JtUoC1uFkGHvn1I4RnblWvJ/Z3A70d12939/XZ/N9e0YLwH/QH9dVBYPWSBKgSC8+w6J9Hyb960J9QC5qb/K/XDgAwHYDeJoBNhBEDmBZAQAYAAwoAtRmDUiCs/6zvLl+RKe4fUNG/OvIHT5P+pgQsAqUFqVL+09l/Pe9HCv/5/rxNAPQOAPwh2T+9AiCdbzyE/wDRXosAfWRRGVDFAIr6Sw3i88uEAIxaDnBEPUDRkyY/9NA3vzL30WmPPvodlQJwDvqAHUlO9AChB4BrgF0eMgA+FeMbBiBQXd3OAkAxAJp+8MKJQLVMiAWA4GMBCE6dPD3jjV9rEQAeeaOo+ojQHfzv2NbV19dlf52bTPafQC5AzgIG2oT+NIT+dNJnZlUD6C+GX7YLFv5TDlAcQKOpAKYFyBxqATafyoAClIQbgIG6vXvhAcozV+0f5SUBKPrNmi/sz9zUuTaH+N8k0z/1/XFPvbb/soRXW4BFKgrQrQAsBrYs4AFoBxDWCKRbgTQU/WX6l/R/us1+G8us8p+R+7PxinIANHAp8gvr5Su+JwRgFHKA7pFnUh6e+1V6zuQMAAtAezw6/3EUCAIA4n/SMSTzHA6PFgBiPG5PtQMCgHddBiDA7weDSgCqTQGg+e3b386QZCB5gN+tHdyyntneBcKD/sAJ4X9R7u3ru0320+xO9Bf+Symf6Q9k1jTUA0J33ixU+C8RgOkAmofwvzxyDLASyBALgIunf3qWiwIgFzh99DxAlM1+4OicnByif07BqSx94CcvqbG36xfeDskBcNLPXPzHrDeWAUvwH2EdoAAvJuzpXzA0/ScWAEOX/w3ml5H/p0ulALKE/3gI+xX/J0KA0WwDWjDpbnYBjcI6ACcA/u/woQrojGMDIAFAV3+AIwCp9wF4UTlABy0PZAvAAoBX/gIWQBxAtQgA4oLpapZL+HZxRvEbUIGf/eyRN25scZ040d3V1QUFYPqLATjRW9Fz+0q9UH83hmUA2qoqBSCwHAe0Ynlmpbh/g/+XhP9aABqlGRioDFWATHEAdjvgtRKyAE1EezME2DeAHMC+ASgAbT00f1r0qLB/MtifB/YzNnXmVDD9ufWHg39K6DOLzPlf059vKfLj5tQ/Bt6tIoC0Coaw38j8RZz/Ldab/JcGYEn9hZX/GFlMfgGnLQjCf7lN/8/3hACMhgDMG/m6pK+SAMztEwOwA00AsXFYBRjvjHuQA4CZxygFKAaA+E80t3KAPjgAj8QAUhEkGdACAAXgTsBW7zwrVxlMTu5saioufuaZndVb1ncxwH9TAIqY/oL3LAcAAyDRv7CXVv5R538509+mu/T+N+A1NAIA/y9p/ptbBWaqSkJIGjADuwIIdBWgnOg/UF5Zt2I0JCA6YSrP/Yr+maD/4Vyi/1o58UOvp2P+m9U6wHQAuNjrS8JfGQERhojlf2a/fJhI1ew3IOzXBwHx7C+vqeb8r2UAjyxOXFjUT7dmfG3+CRN9AP8+ZvhHuAxQ7wJE5//PpjE7Lt7hQAAQS6uAHozlAKCrHylAV3vA5v8QAfCg5ZfeVRaQ/wjDbQkALAAnAfGtbwtTZnCfYDJUoCSwxSX8n2nxn0OADs1/LQKQAHb/uBnlnPqjrcCrGkL5f0nsvykA+F6j5QCah2QRWQJWhAjAqmsZZAE4CDC7ARABsARgVO5bThIwddLdk5+mfmT9rMm/DusfCKB/05nSV6zpHxTS/Dfjf4EdAODGQ1YGpxpJwIjtv7hCSgAR6a/D/6VW+1+6hP3pfFn818wX9uMJpEobgEiA2RJoPif6AP5NzLuLCEB2AcHx3zT743K+5aAAAD1ACAK4AjiTUoDcz4v0njQAtqqni44ICbSLAOAQQPqQrgBCsN0QAH/yZHEqKbRWoCcY7AlWV5/rAvNx46kGcCg55TYxmvG+zP64GsT9C/9p9s/LtOhv8h9AJ5DALAIS/xuNXmCzFWhFpgiAbQFuZqzMAIxVwfu4Cgj2D+BBNzwAScD0hOi7Iv/0+VLvl8m/pbAihwH6nymT2R+lP6GjPT1r6odVAk0dsL0/hnxERuTsvwmj/c8q/es6oLH6hy8zD6BqAFIEGJoD0D0AChOrAf/ttcCD8+7qIJCnnuqLJf7DADhdrh1xSTAAqAKqAIAMgAdOHwLg5hZgu/c/4HDQHiGugJ0FFAUwBID2ERcBsHYpn5wcBP+hAC2eLUdAeQ2Sgb6DHcnG9C/0B3j65wug6J83866sbQBC+V9rpwPMFMAlOAMoQGgzMC4lAAzTAkAACEeNKGCAI4A6SABFAfY2o3nzpyZMGkn1JWHq9PnfzQPpbfbXne3ZejU3Bzic03nqzM2XQX+Z/oWEnPzTzTqpkRoBKQUowIvpACIlAHDJS8TkvwniPt1DCgAh6T9BmfXMojc6aiRrIQ1N/4gYTxuCjAWi5/UP3nr0rlIAT810QgAIcefaz8Ul9YH9MUdUBUAZAJ8yAN4h/PfQHmHtjvaAkB67AajQgN6J/yIAAQgAVQclxpuUnAL09LR4kR84cq6vLwkX0Z9xOiXlyu56jQYeF3n61wEAwn/M/TV1yzX/NdOlFSgkAhALoEMAmf8lAkA60coCWmnA/SUZDE4EMvZhlNMQQAII5bj31s2fPm1y9B3M+wnTpiPjZ838+PcAypvndBRd3bqT6H+4+NSZkqaXFYleYPcv/A/LAIb0ApEIiA+QPKBU//BhdwGEQ0yFifDpfxk/NOvxxGAtkN1/bO9v5gBhAHhPIQy6JAjA0CVAwTjaEmxMAAG4Fe+ffFcpADYAIgCDzqSZOAoEbcCqAjCz30cCwGd8eCUA6McdEAFwOFAHsJIAHryKHQiyA3AYAuCeFy1WJaWFHECyB/KgJCCuD+A4YFvKdRBW01/V/mT65wFw2F6Jab4GAkCEt8t/9WHkF1lgqB0BGu0QwNhRPEwAgNVIA5oKIBagDrzfy1d5M+cCy5srFfZumj99asLk6KhISotZP2EqqH/0KKUtbFQCzRd6+JRF5n+Bpv8LXPqzcvBU+9PTP1/hMQCTX/ivFwIZzb+RkoBfyH5AWQDJ+In95xYg2/4L4TU4BbgQAPfVEPpHxrjZFHSMEL1gcHBB9MhTAMR/p8X/uHPnkp6kncCPMP9nkwHwMf89WPhzg9jN8IP+AR8EwIU8YKvlAPw+jyUAalEw5AFHiVHwEAhgm3CR+HkpUAA2AApHYp1WAHCa+G8qALf+qOlf238QiFL8+DYLgM7/4TMirLMELokDkD4AQCuAnA9gCEBafobC90QB9tEA5ffSgzEA9vNDpyagArOmT506bVqCYNq0qSD+rPmb0D9QGQGf3d568iQdr1R4+PDhgpIzJZ0/BfFV8J9q099I0eMKg0zuQnapANgdAFYMMEwPAJ6R+a8GwNwX6gPypa04wn3dBMizv0z9qbg1ZFWQUQKYqAKOjgDMuO+uUgDOPUgAENAK3PdkUvwROQpAZwDA/4DDc0MbACUA7ZjieaNwSQL4EA4IOAcAicAPUPTgIQGQNO901AAQAfi22KiO38H8P4GTgMBX3KoFkAv/eID/bACY/Zg1OcNPRcG8qgaZ8yPiylADQBIQSQHkROFM2wEIfnHGUADbAOyjaV9ZADgA8v9QANwDogKiA0AdgV7wM2FoZg/SfLvj0MkiAAKQexiVv1Odb77wilk/F/6X6gRgRAsgMb5AyoD8KSmAz80CDhv8p9Nl1v8Idh+QuH/dAChPgfqbl4r5x/wvD0CCAMFEEWB0BOBWwt2cBfZUV+weywD0dc38uj4KBAbgGAwAXZ7+Zx0B0Fzq/P39iPdRG2yvrvaJAwDcHlQEBG6yAPQTDh/Kg+QNvEHR+KnJKS0wAOC9IQFHfnPu3DHwH+xn+hOo7a8Nd5ViP8AJPk7w8x/vTasR/g8L3kjcaAVsFi0pN7cUggAwTAHYeIr5j84lVoByaQSiAQzQDeY3Y+AC+HMYNJNKNA/gUqpxIXho+/ZDRQAHAE1nTjW9+Stu5efSGarnpcJIswEQV2RIky/BTAUK9yPvAJA6fOrPpL+Q39z6x4Yx94v5x6yfKr6fnwCe2gFo5k/kAEdLAPrvKgXw1I49dgQA/vcR/5OY/zAAAcz9LADffKy6v59XA/a3gtEBDwuAq9pBAmBnAV0+vwUWAKoS8FHC6BfwepMnGQLg2RKK6tu14L8x/4P9GLr4z609G3hK5+RA1apyvAw//UsKEODDxLgMSPxvBvetkIJuEYC6o4YCrN74kihAsXgAUB/+n+Z/RX8EAKQjHNQz9wci6wC+ZOZrIGy4XbS9d/shoIiws+nAAaT+FfVL02Xax81v+KZZBBxGBLTtN8HaEAlhnX+R7T9jMd0YCktTed2hyX9DBl6x/m6L9vpzqU39iRTA6ArAgui7iQAMAzBzJjKAR6zTwJ3KAAQoAnBHP+uAAAD9fHmUAGA5oHIAkgRot2IAWhIIAQBUAQFPCIKqA0yjACAI3y+IOYJkIOBv3r1B+I8B5jPE/uOG8deExsxfu2JfbYPJ94jvWEtsOIBGYzFAjdpXnMgpAgCGHzUKgWlLdm0sUQ6g+A3xAHVcA4QE0LOS43/cks5nTzEghJdrAFelXPQlbmgGIv/t3du2AyQAuFpOZWGjJO62IZTSICUA+XHp5L98RJQAsx1QhwGWHoQzn8edGIDwk/+yF0OUOLZnZIViGSN/WX42sDifgSVFVjowFBNLgUZHAO6iCwApQNsAJM1MIgMQEycGgJoABwNcBHzovudcEAAB9gJkAaAIX60GkBgApwIaMQCd6c8dBAgOSAC8qhkwIbmnBQYgPi5WwenEWQRHtrjO1h4X/mv68/TPZKUFwbKwlwMB8L+uDfwfHvW4awVyOgDYr8DbhspcvY8EoA4YkgX4xa7nSQGKAVaAfdIIyBYAwKNygA1EplnWKweY8M16+rf9AdiPyf/Gtm7wXwRg+6HcktJ8phqxrnTpNSjAfjD/muKk8FRn7KUGOIwK2EjlAUQ+DfTOpv/sxMQ1iYsTgcW4+CX92rDYvPlthaObAHq5dm3jmsR8KIC2/yNJAUSNl5MD/x0BmDfyCOCrc7vAQOF/EhQgngMAiQD6rQhgQVTUc4MsAP1+ulw0r6MHCCkAEQCJAWAB3MoBwAJAAHh7ITocgE8IRRpQBMBbXQ3aW6DNCI/cKrpxBQ4A0PQHQ4X+XO4n8HZA+LJqueb/FfngR6gCwPurswTAf70ekPgvR4biSy4DQgCkDpBnxwDPP7+4BAaAsK54E0zAXk4CUhjA/n9AcoDUl2wiE6D6PoGDDIbk/bzbsAJqG7CdcQju/3Ip0x+D3T89SnX274C5WEf4G5n+UuxXib/P3wRAuK/JH5b8F+5jLM5ek15XA+FrbtSoqmr7PNS20d5NF+vxpAVYhL/8pfb999/fuyZxmZiF8Aggf/j8VcI3JnKEX4CoBbdm3E0RsG+P8D+O+I8WgLfirAigqxUGIDCIZv9J90W7PLYD8PscVBagGoBDBIDAMYBlAejY8BSPD4O536qOCIYFUALgwbFjmv+44s+hC3DbdYv+VYDwE/RvA1S9v4G3A0Xuv2ZFee0dzP8cAAj4aAA7CqgF7JwgtQJBAMxCYBru/Uuef/75JSXFSgLWFcyBCaBeIMMBSCGAFSAyoCwCvO29feP0CdD/9OnTrADbth3KbaLNkdMZpRjQAFxkAQBQU2frrKE+gPBegHBY64A1DP2wBSAcqva/LHtN4tuVbRcv4v+S5kYquuJuEFxUwDJN3Hrwji3NBHAfVu29935LeP/t7HTFf+0B7rQNaFri8xONwl/YCgwBuIsIYIchAElOBABO5r9zdlyXMgCDngD+4gccARGAfmwEwgLgc7EADHq0ALhR+PO4rSBAHAA2BSYB8HvFAiSktAQdR+KcBDsIiO+mlQA3GkF1c+ce3taDv8Vxv5q1yQDUZX5h/r/eSADIWWJ6PfAlXRUgAwCAqiGFwDSKAZ5HFFCsULCusw4/iBhA1gKwA0BUjwcpwDDgVct1ZztOd3WB/6cBWABseoTYP3vNxo0bF9vsx8zPN0RgPz6F4Zr8JotDsHAIQkRguB+FzoSA3QjR/1pdFTjexmje21hrAJszYmjwhM/EJ9ojn0M7vH8AMP//kpi9lOkfGcMeDj7t6adn3TeBL8CM/hl3UwSUCIBPAI5DABAfZ+FEK2Z/XB5KLn7J0a9CAPDcsaWaBQARgIvPACMEuBnQg21GA27lANwpAckBBnmhkJcsAIR+Wk9yKwyAJQB8FkH8idztfegE6GgW4guIsYJae86m37uqzMqGsKR/uAFQ8796wgDwisBGtVmYOiyIqgLNPK+v4FbAFbYApEkMAAU4pWIAOp1jzqZ95RwAqEqA9AAM5wEAkH/TBcz9Bw8eO8Ho7j6Nsb2jsyw/e6Piv+0BQH9iH8NerRe6Z2+olTcZTIZeS0VYC6D+22yEl/6XQQIWr0m8NkCTv41akLuqVkN4jxaLRoYiPljPOH78t+rlt3/H9L9G7H9kDLcWOGrq07OemDAAoy8AkgKgRYBhBgDf6OunCIB6AOnvfayalgP1cwCwJVwA8IeqGxitv+2tbnEAAZ9HBIBOEebeoOnR901r6XHFKP6LCMTE9BXe/qyImoF6rHi5xoCtAo0kDsxnKIBVFYisApQzRByKiUoubgTiSiAGnxtC8gI0y2ogCIA4ANphjBQgLQ0xALDxsqUABeuKOzftLdcQCeD8Xt3nsL/u7O0bJw5indOxY8dOHDvxDhxA94kT23uacDoS0X/JYuE+ewC+MagKEMLbiDG85i0BXxsOIDKGX/onnb+g/9uNDaC/BsSgtookQMjPxGenX6uYL8RnfHD8g99+gOvvoP97A4lrqCvw85H/+RXsSbNef+Ib0ydygF+IBP+jI44Avjp3fbgBgALQ16fZAHjg8B8iASDXz8d/BVCzc2gBGPQNqs5A5rwbZ4w5fH72ACIAyAEG3V7eKgylwZSp901t2RkfG9fn7BP+z46Nie2dU9vWSB7gxJx9Vs6sxoTQn1hL7hMisAIWYHj/bx8nzIsB+ZIzQulrFgBSgEpLAIT/LAAAKcAvnmfsKs1YV0yHcxfjuTanZc6cswOK/nQhBFAp/n3h7F+xl2b+9esPYvZnnGCcLuo8gALZRgL11udjMJj8nAQ0KExvZtxvZu40/5E0wE1+PlwBzKMAv3DdLzYBA/3rasX7m7i4e8OV641gv0z6VZSZUYc5CvPpjdlP47dgP9z/NWP6XzjChQAJT7z+kxcnuoTuAJPddyEAT+2AADD/wftYMgBxCrP7WjkFCKZze8GzjkFPP2/54dpSLQLgIAEAVGew6gDGCh9SAA4CSAA8IgDUKsRnhiVPndezc+chsF/HAM7uis/w29XYjTTA9qPglbT+0iUfDM4Igv7KAZQjKTiMADD/6YdpH2GFKkkE0jv+MqsxULYEHCoAq4j/+1fvEgVYcrkY9CcU5OTmVlRU7OxJmQMR0CDd2hca9N/edmw92A98eAxX14cnjgGndzblI/JX9Gf+mw4ACHf/eGoI//fjIs6n71+Kka4jAH1uyLCL/5dG7v1l799cC/aHo+HKpx999NH161euQFYhEBtwESzq8yX8Zxz/7Xt1L2Vb0z+ekTH1c+1/4qs/z5gysVnQHWCSN+EuUgDnSACY8mIA6GU2Bnf7iAEgAajGaUFkAHzVgIvsAAlAOzmAgC0ArV53NQTAwYlATPskAMj/QwDcSgCAlOSW3Jbkjm4ng1Ycz5x5NWcO5fqvn6AgIJPYFArmP1AFQjOpy+uqIgvAFU1/MQCAygLSF5JNqFLnBtsRQCYJAGOIA9iPJABj167sU8UFxbjW5kABcnfuLLy6dWtHT8/t2xc+++yzZkG5Yj/1FG264D19UMiP0QX6g/tdB49tbylb85Ji/5rFhHztABjU/TPcWl1+7Ad1rw0hrhgA/MFwMcDwuT9c4v0bIhT46kH/fxI+/fSDDZz/hwIosApsEBUA7QXH36Pp38j+6bfhioDa/k/5wYsFpya6BO+sESDhLrsAnKYBkC6g9X6JAPpVf+GzW1wkAH4PCG4JAF651Yc7g1VDsDuFLQBKAYYAeCEAXpUECAI96ATG3XGClh4B3U9241Sg4AU4/Nu0O+CmfeEKYDfvK/ZWNVTVSWtQGEz+g/B8sQWgPoINDcR/nQHQEQC2+FT01zkAcgCcBBAJWHOKFCCHBKBiJxRg69YinGe6nXGDse3GjY4Orxcv207YUz8GfbAJOHiiqDN/zS5F/yVMfnEAdJdapYCFYYAmGADRmb64wHdNf4C+a7cOhiHyuj9hP9Nf5f3DyF9Vdf0KyM9w/POfuy+2Me355qGdAPMfj7/jmMe2vI3Z0vsjTcEjiQCmPXFm5YsFxYkTAcCd1QFHKgAPQwC0AXDGWAYAcPb7VRPALd5jQAQACQB0/xsC4ArAAUAnbAFYMHkBfsKlSgFuv0oC0kYiQfwhNQcyeoI9kICeor7ZUIB3nnyHTgHo3naoY86cP53s7ZpDFkAaaPCkQSgHiLVUCYQAVBKhh6F/PfNf1aoARKqEemkLwt9Bi4MbDQMAB0C39AGwAqSlQQC0AmzcNSWjAAZAHEDhVihAEfp4wf9t3QAye7AwxPY+3Aofqqd8nt55M/ulXTL5C/IxQH++GKW2ky8N6dXR7/oJpIP6uIT+5k9G6v6JzH4p+yHvX2uxv8omPwovVz79p4GPqtpYAZj/GqIA7x3/+3vAhovvD/xiTb6cBjYspkec/qcnvvi9F9etnQgA7hAzJt+FADiHGAB+IwNwDlz3DOLi0oIIACbxdgf6fx22ALR7fFAAGAVbAKITWqELQCsVAtkBtAZJALz4AY4AgrQbCEtAS8uhvplP9oL9DJwQfvWvFYUnO5dLC52BSpEEKyNYSwIwLP/lJHFhP+jPaLCSAeT/mf+VciSAcgArCFYEkAYHgCygxsZdL51ae/hwmAAA6Oo5zcl94BgBrOch5IcdOPZJ8gHL+y+xuW87ADEB9vJfJnGpTvhFtAQmmfeXKhkIPzpQIN9lhJIf8392Nnp+hPpVgEX+muvs/EMFQBRAi8AGdgPvXXyPDQFQk5eYLfRfqO/UO4sAkP2bkvHGyuKc0Q8AJs2b8dDkB/7/wopHJ4+8CNClDYCsAkwiAYhFTp8jAI+1zehjLAA+8J8UgAWA1gJ7wH9YAMBPgABEz/NUwwFQR6AIgJ8EwBv0c3cw0R8QCUjOOfnkk73Cf+BqYSHya1AAIEQBAKa+FcM3Go2AG4bSX8J/Zj9nqW3UqzQAFwOMEkCmOlp4SA5gFUvA6v2UBTRNQGJTTkUuxwBhAgAw/1kB4PcBRf4dO9af+KRHT/5LeDlNoiUC6SoOAKgHEA9UAMOhXL/9bhTzJXoX+quhEL76J3LuX03+dTWa/ER/XipB7BcYAlBbBf7jCsV7JAR44tFWdy1xWdYd4YlwMj4wPfHUG8T/4pceGg3OR5vp8qeff/6Jp7+BfVumTZ70f6QD0VF3sRQQBuDLSZIBfIuVgKqA8QGKAGgbMKksoA/ANdiKTcAYjkESAFoJwA5A0Rzo9yNhED0P/Ac8EACPEgA3rQOgmCAlyDsCqz3BCCnJOVe1AFy9WlgBHG46mpnJK28Y9jFA2FoDX6lWM64/CftNCdD0B9OHsP8iLrsjCNA9AECmnQPIHOoAVm80+U8KsCv/ZstOYGgIgL4+JQBg/zugf5dM/X1g/8FtHSj67dol9M9eTAOABAg4CQju6w4gkYADmv0y6Qu9DUJLACARgMF+Ghqa/eHefzEm/wHuuBQQ+8vLGxX7P/30o08tDYAK0N1QA/rzFS4BjLZKmv71LuAL5YqIqRF6/17NeON7LxbnFEyZPhoVsqGNRJOmPj1/YKAOK5SefvqJ/zsdGEkOUAQAiLW2AaB7TzvKfYNUBAShGegEdA0GwGwFnwiAxzPow2CaM2hb4sleF6Hd4/Z6ACoCcPoPf0wBACE5GTKAoSTgpOZ/Ieh/eG3BzTrKo0MDGEcV6mSTHf44WlVvhgAm/0UBJO43AVEQ/nNHoM4A1kEBTAeQZzmA/ZYA7DJMwMbsywW5zH/TASAAEAdAAPlh+3esP3i6I7ks/yWb/UuyFy9ZjIeIQL4aav6n/J8yAEzxUksF+HOpaQH0Vr4Gn6EEuGUwvjD8V6f9y+RfpcHsv/Ipsx/4gK6PPsCwdGA3CYA9TAj9913LXjZkK4CRdAFFT5/y4vfA/4y1oxIAYMoPzSNOnoV/Zf4XHRg4ipWKTz/xDehAwqRJ0eOo40gEII4EQAyACMARX6vqAuh/yLZksP3YAFAwaAuAOAAtACTf/aIS3oAlAEAKnQ+mLECyUoCWlhaSgOTOXEiA8B8R9tqCzjlvH81TOJoJxlPyz9r/Fxce1H2mcoAbcKmHvZEIQU/+Ghet+d8+JKzZPhagThqB8KAQQDuAJUMdAJcDYOXzb+aA/UR/5QAAMQBs/akCcOz0Jzs7y5DzF/YDS7JpsAXQDkA3AhH/FZUt8peKCTDzf0JovgCa/62VQ2H014ic/pPE319M9kMWB2jut/CBSMBHpAFiAz6tbGPmR0ZNZR1W/nLxTzYEG7YIMCs8+v/hG4r/GWDuaPD/G1HhFYZr5TVWg/lfKgfqjm6+di1R6cA4MQQPQwBm9jnjLAPgTJIIILaajgGiAp7eYSAaC/+R3ldotwUg4NMO4AY8/jxZl4SfwZbBfhYAOSs4BZGAO0VZgGQC6UALj86mHBgA4X9Lyxzi/+q0VTj2p1xC/7YGBs/vLADYEhgv4QYAUD8YSn4yANr/11yiDCACC60AejGQjgFWr94vWUBTBABEAmsuN7Xkbi0C/WH/Acn/0VKfbZ8UdbQQ91+yqb8Gg9lPFgAXyE8aIF0Ai6URSLUBgv6SAgyr12teK4fPf6rnf/6MHP9Hpv9ii/41fOGBxsYL10H5cPoz/3Exatq0BcBlAv+75mUvk7MA7wDZCUOn/6mJP/ge8z8nZ13i1NHg/6kzOo4w4oDEPEhArYCVj3Qgj/3ALBKC/3MdIAF4SglAnJQAWQCcR1y06gf7AJrbjH+Lqn4Mn2uQKd+uBQBQ7f8z5KTyQRf47/OTirAAUBtwCgTAmxwMsgMAwHwLTTebcgr/ZPB/1So6L0ttscNLdxoYRH9Gc8Pu2pp68QAyQH9CGPkvmgZA1gNZLQBaADIhN2YWUDsAk/00FF6iR/a/uLvSmLiqMCq4oCguRFs6I6CNe4xb3BXjL+ISrAqIGjVuLXVBLepYrYJb0bhUFDLR0cqooITghsGlFiESGZeaYCJFY6J04hAGSEyR/jIRz/fdM+/e6RsRcfyh5973ZqhrtOfc8y333nt/nhlGY1PTFkUT7AyuPJt5Wah/BRd+8r8K7v/2qgAUANSHBAjM25YAdRtwtXJUAwF5+CL/fQf6KuP1rey3DuBPl39Mun/x/q+3Tsnv/BT7Qf4E1/5OndsS6O6fUBXAO8V/ZgFl7Iyp1rbXAlL7F/K7sf/FmUOBp3dqAig44cBrn7n++uvXgP+rPlmekwX+f7LuQGrMznFA4ErtLJlWAZiyBgg6gLhAhOD/rAPHqgAYA9CR2gWE1/75/RQAoTNRMED+J9XcewIA/qcLgKIACoAmwcEBOgDXAmxiDCAYHubH8MzMzHB9i/J/5q6tV4L/PGKrTX1aGv3h9PtA/b4wvtpKQBclQDrSPHSOplUANP2vewxpABwFoAAwC+hzAI/zTQlwcfPKlStra1fW3qsv9fwu92WC/LXWAYD5mAEvB1BpcoAMA+TF5JxqgH6pVnr7c/qkPHnvW/7ncQDG+yv9TU/khnGwP0X+ZvMlsS0xgaEOQEcKyALSAGC6wX+4DdH/Cq/3ZwFYmp79++R68h8JgCxcFpJ7wsOrh8/h38cfB9zw2gZKQDgqEkBIgbgPuSbVgQAqBhIY/M8SBDlWAKQEyIMAYQD0JuA4qoAledYvVcDwp/x/UhkvfQB4GQcwGzNnghWl9GJTMihHhagDUIgF2EQL4MUAIgDDiABmoADAcNkx4P8DW1+77ro0/ncTKXvf1dMDxk+PoxAI2tMA4JO9aN7S32k9ANd/U/3nHgDy33UACgqA9AGhFdAfAswPcv9mDGW/Mh8ScHul1QCRAA/VMoAaZzsAeM9TAfSMMIWf1QBpb6ID8yL/50sArNC8/xRAOcSq9xnZn+hM/IpvnWb9l0kHAPrbEKC5lSFAeu6vbUiWf2v/WfyXyZcPJLnX+wP3/8x9ax6skwTAP98EnLPs4VuaZphlyNRshDhAJEDRAxvQFnZUAJsdHR3QwKCwoOB/ogNGAEoPBZAB5EGAeON60JgRgGIro8L/SD4dQL8JAYwAJD8XAWAjUEmhvawcf1pM6oB6NzgtAGKBESrAqY4DmNlsBODWr3F83Fzi9UvAf6n/Wf4PGQPg8V9X/r4+SftRAAzA/k679uMlU9Gt6z/uBsfswdDeYoUvBLAOABZgo4//eCnQFgSuP65Ed0Hyk/4rq/AS878S/j+N/rU0ALr+u7iME8NUBfAlQ1efUJ3093yAYN6Df1UpNO8/NTQVnjIHo45v5doPyGcn3gld/2XqMyEDQoC5TXBb69DOCoDzG4fCk4EVchC4vQr0LysBy9zs3yf3YflX/tfVrctGC2BR4LF1W34umu+wsclrpMU0qkBwOCWnRuEl0HAR6BOg9nTnJTdsFD9gMoX/cR3Y1RMA9gAZAdgrHxv6VQBiBZ5WKP9TRQDQ3xEAOfq7F4hDANzryYsG0CKI6wLlXrBeowAjVADwnwYAAxiGAXgL9J/B8ZF3DQy8foOk/1oB8h/uzM9/oOu1qKz/lv0YmNb+d6ZXAJwDgbj+t7oOwOO/dQASAjzusJ9vb6mXBypAzrufZD+ojwn+QwdAfS0DgPrMAQZoAFQCavBggvJm3eej73Tvn778MwOQwl8e/o3QXxN/WP0xZOmfS2i1jyD5AV3+FWD/Nhnell8IwM7uP4zlf0Og9o47VqSX/xn+z1sD5GqM7B/53w4BOCkrCYBH12xpypgCsEnHcy55wZEAYIrcj/ZEgWkZogL83XLN5dABdBDQEPxnrzTc9RBsBoQAYM13DUBHftCkAJKDBV6TcTIUAYL5ktxPMusXw74gLPH9CPZ7Z60DcBUAW4IgAHj1IxFgggBVAGU/iC8TmJmBBgje+vqY/gHJ/1/ppf/N0T3dhMpAT7QZ6AS6e26j9Sdc8o/Km1MTAOGwpP4BffF6cCoAzwOxSUDmAOAA0lsBdThuXxWApl8mue9+wP0HRAVUAmADZHoRAC0AAgAvFWjDANqATKzO1Cf4p/R3HUCN9PyI95fRs3Vr4pcJgIRPA5Z//HoCOUAMILEN/6k7idE2kwV03f/QnYF7EfzroAgACzMALP5dD/5fu2Yd+N9+QTZuC112zxPrGr87cP6/U97ywOUbWikBPUp9zN/YdTo93S0TiPaY66CpA6/feTfShCedtOw/KgH7pgTgqw7HAKzHMi8pABGAvFSPcTIiyFcHIPSnAORHBstj/cwJxsH/eNqO5KKS5GCJEYBemIERSABSgMAI1n6FsQGI/eX1FkzAyOeJGy4B/7X+x+QU3g79m7t7mrHdnIhGufxnQKc+lINu1nmIPjEAtADCfvdAIAoAcwCeAMgHv6UU4GaJAm7Hy+W+Tjw0ADogARgwAbAAVSuZB1D2exagssbsBhDPD97rF4G5FMR3FqiDeVJ/d/gygJXi/SXzNwUJ/G3r3C8Tv2difyclIKFJgAQ+oLMMr0YxgbDpBSTg/odaJzX5j/jfzQBw/pUByEXr7/UO/+svOKcwC4fkBF56omnLp2g1nh9FJ0y+JnvPTFUQUYB4AGgBBj5VBDCMCKB25HSoXnTkRV+fs/Q/KQGoAh58RimuAoIB+Bg+QPHNLFgeMw5gII/8742EIgJTBJQc4GxMbwuMlCwZ7P+cRQFxABQALw/QK6eBboIAALITAPZfMwEjphkQb2QAJQUI9r9VVjaQP71R+S8CYI8D81KAWH+6omR/p8zOHrlMrMu3/JtpMwDdXv4v7XZg1wHYFICbBIQC2B5A6wGIm703zb+8nfQ/UUslCGgiEMu/8QAyAhABnfysllGDAdTgLas/p/8yL4vMq/8dKQEwGnKZKfpr4h9Xmrhrvx8S/SeE+uKw8BLqNwOjzSnHjzKA6/6H0PujKQZlv7wWVARYlkrHa/EP/H92zSrD/ywkAHJOuOWJG7dsGfa1AWVsChATYCQgnELUiwSmVQPUDOAXUSuN2pOqNkyetPQ/WCnc9ZCDYQBKS9/viKAHiALwbq8RgHhcDgN3+c8uIKG/kB9Lfjw/NFhYkUQM0IsYIEYH4KIQF4pDAGADNE24SU4DGYENGFGgJ0jTgGIA3gL9T4nl95wN/msFUAwAEWVjj5r+bhBfmE8RaO7LGADo5AsYzbT+c1AArnEFgA7AFwL4CwG3c4D3OvW1kty3X6pUB2SqC6jFgAigHugDZICoqXY29tmbgf4EO98RmIIXBFwm7G9V6y/sL+nl0g8kMB3q6+iUVX9bcyfoz8saUszflvL8NvkXxgUuk4HL5DJTTNf6c/Hn48dJBSzIS+uv4MYb6+rb69qRAMjNhgF49tF1EIDlC8kWLN8IEwCoBDAW+E3pr1JADZAZncbe6Ilfu8LecXXjkyf8904t3fVwFYCxjggMAAVgr3hMNv2oA2AVsDDWETFgDVA3CWFUVARDsYLyfsQAdACDdAAWhaduEgGIxYwClLgKwHKgZACOeWu4rKy8Nz989g3KfxMBEGGeOgfc1t21zYMqgaYBaAGc5Z9TH4D87yH9Jf7n3GAFgBEAcwCZk4B82RgAU6sBN7uFPxsLCN+5+GsKAIFAJQoCph84ZQL48MJ9SQjo3gAnr2dvBvWBvyYU34n/8vI8QE1AIn/ArP39OLrxd4/9aeTHBDptfwVml+7vbQb3MT3a84vQX4p/4L8kADT7T+L/NZaaLJwm/5X/Tyr/67OQAACWf/LsE/VbtmxetiC7UHQSTIAgzGOkbD1QRCAKUAKaeS5SF34n0Qa8Nrn8Xz22JAfIvgAYAyBNwBSA3WJGAHD6HwVgSRwFAMcAkP+xeEVecX+ov6CwFzEA64B+AcDW6wHsBaAA4G4AmP9h0B9VQAE+UAI0/P8umR8l/10DEB4yFv633z4ruyt6m2f+DSAKPVGu87b2T3Tyh1ExbeQ+But/eDMJaFMAmPZQwEuAF/0OwNKfaQC8IAHC/cchAjI8FQioBmBiCO+ZCMSo0h1BeGVc/jX0t/y29L8sE/sZ57v8t5A44LJ7TeQvKX+wf+J30J/8t9ghxMejIPm7busS6NFf9P7WAkAAEGRNhUex/Ev2D7iM9CfmbwHkPuAcJP9uVPJr+099fXt7exMSAFnZA3jjS2uaIAALcAAsQ1zZqoDrBHiKpK0IsiQQ/XBCAQlojvLyiqG2189Z9u9JQM4eu+8N7J6Xm00BEAOwXg0ABeC5UCweMUUAkBwCkFscA/8VHcp/JgCE/7sUxEL9hbklIgDMAjIEcFEwEhsor1DLIAoQw2Hhw8fA/LMAOLx5WMOAsi3BUDf8PzqAwEYeCir0H0UC/7Oy70ZQS+w/JrptJ4DgXeNdTr9vph5Alv960AKgUy8HJ1QCmAKwSUAKADsBH9mZ/9QAtxIA2mN6eQCu/0AAvl9fGMJ/GABxAHgCIgEB1AR1pBIBqSNByXv7nmfxZ18gsfO1wPfWBu4cN+z/bVrYbwAP63B/xzbC8t/hfheedNxmBGAoLMXADRtrVZ0k9sfUgfnXuLcQzvtAun+U/5T/9e0t2UgAAEUHPosUwIJCANsU8EJbSgJ4rQS5jykfACKACQ+IBKK8vqbn38sG5uRCAIoPO/LIIw8rXrL7HtnxAjmHHwcB+DjS0bFPSgA6QrFBnPZDARjIy6voDQYl/Y/HJgCE/wMF0h0UCRbvUt7rCQBzAOkoHxgsLygfVAOgGNwE8mv6T2BaAj/dnh9KgP+mAKD8N/Qfjd413P5eMhICgp9SAOxaJcF+FEEANcDaABoBJgD0bGAL0w9M+tMBXC4vpw+AAuArA/JlKwEypA7gNgJgMuiXGEBfVfoC9VkLxKuSO4MJKf+x68eANLefftiu4D+h/wpZ/NtA/9ZxTfkD+QTC2BS2mUF0WvZzyEvTf4wB8HRKEXAKTzh8jVn+Qf4VfgNAD5AZS/OWHbiG7l/L/031UICmunOkAyAbNcB3nrgaAvCpLwk4X1PAna0SIupt1B9+eJtogCQDFVEM/DgNyTT5UyMBie6wSkC0b/KkIv6jss//JSIAZ5555pGHLdk7O03Jh59cWvolAvz9QX9VgD1Dod4BKwAlSypmgwIaAK7/vbPxuDkptDgYqdilYLCfZQD2AfgswOCpubnFI44EDIxAAuD+CVwVuD0k/L8OW4CU/6Q/DgqfqXvom/UdIUHy1XXTPgcgPO/rzrD1hx4Ak/sDh3QI/Yd4GojrAK65Eo8eDOgIwN3uXgB/MyChQYAoAHTAbQNSkP76BKpWUgRA/zTTz9NA3CMB7bXgT9k6v4sU7Xe6AiwN8P5m8e8h+/G4EmCgEmDBOxWsAsj6z/+2CghCt6z7U3pjIOy/Rv8Y4L4tAoD4f9UGcNJS7fzz+L+uCfTHzEYHkO4CuOWdJx6EALAPYGHIk5MCkClRCWjGwcbGB1AF9JumTZT9CS+PSomQbGD2JSDH4z8gJmDvPbKhAIecfDIMQORjGACczY1NABERACkCxCUHEB+IJ5OeABj+a7off0C3CUkMUJGbU6ECENMQAHsBfFhaMlIodZZ0CbD0x5EA8VCoRPiPo/TJfz2Rrm9zy7djY19FDP8b36vb6heATliAPvKe77Rv8K/Cfgfc8mUFQFMA13gGANAIgG0AuhfgEZ8COLVA9gN4sJ0AtawBIgYA6bkVOC3m55ng8mBqB5BCVYBNvhmcP6sC6dCUn+v9A5OXt4L9v82B/QbkP/G7kQDSn7jN21yFMcoNlraNMixQT7VhaBRfJfu3AqD9tw5gnkMAidqAun/i2TV14L+ctXbCObtn56KMA196VgWArcALA08K4JXOkABccCA3TCnCOrRLWtivLzZPJpBpakOkcNfk8sIs0z8nV/l/GPh/0EHGAmQjDNj3uJNhADqCXx1xKFBaeuhuuPGjfyCI/t64OoDBWQgA+W/X/zjk4Y2SAtMhHIkVoEygAqAOIJMA5J06slQ/i8pRFFQJGMQs2WQ2Bo9s2gL+D2j8jwQgz/4V+s+0vLt+bGz/SP8gThOdbWxoXOUXAGMBojtxHkPf5P+Qrv2YXP9d/hsFoAC4DuASASMAnwYwCCBupwRgkP58adTPpF9AP033b61Lf3ssOED+81gwng5KG+Bf//0KQFwqi//keNtUj2G/rPJc/qkArgdwHUAn439exCq3/DIgE+IryAb5ldZJZv8whP8s/3POj0rT+UO8dGN9E9hf35SNBCCJfM+zRgCankSycYHgiWFX8vcHJOBHkYBmPWTaYNowfoIj8UsCPwkk2SwSwGxg1gMA8F8EQPMA/9wC7HrwySePfSwZQArAt3Llz+cDyQgq/DHZCjAIB2D5b+gvvgAHXpVTY/uDS5AKkBtAAW4H9qHo1AtyjCcrkksCVQEEODNQOoMbY+D/6RutAUiZ/29xlub62YHvysrm5mZaXm1oWZdRAJgHJPd1ytqlP5H/mdd/hfYCbkAEILDHAns1AArAfEGAJgEw3U2A+tTKo5m/lZXKfiT+mPmzCf/KeykB3rUAXP/Jfh0u823JL10EQHuyH/SvxeLf1opzfch+H/1DpD8tAMnfrRtfxsefHzdgO6bJoeCNQUyH2+zyfxkA4mNk6AHIjJqAun+b/m9qqm9qwXPBOUVZ4s2yW1ICsPrvbisqWI6OKWaJWsOQgG0iATxqStomgAlvKJoxjAZEJRuYm+UAgPwHIABiAf6xAByOAOB9xPY0AIeWnoXzvENBCEASEYAVAMt/tf+gf/yNODSaFgBnBhUOJlUAhNBQBj/Kh6mIObHYiNkRJNxXbFk7GwrFwX8agDZzHvVdD743tn792P31w3NHH3/8LzvKWl5taVlV5ue/Jvt6epTymIquUfkRbw3/GfpHdfn3jgMl/TEBCf/TQwATAVT5BSCzB2AzkAwLdgBxE1DGCKDangemD7f/4BNngokOvIiHJoBw7wj3h/+iAhc/FZi8phVne5D95L+Fu/b/KuZ1GrTHIRgCS3sFTe+U8B/zJ5ksktvlH0AIgMmR1vZzsU4//a+93gLpv4amJuF/AwsAWUkBQABe2gwBqF/95N9qK2BTQKuVAOMCeN6MEQBKgEWXDEpA39cnFeVm1QAwAEhZAMYA/zABMOaVAPEcnlMuZB9EIwAdQHyQBsDjf1z4j+kdFVoYjBVABnqtAORkslQXLEudLBrbvokNQIpPv2vodfnfyhNpZ9q/wer/bXsZ2A9AABogAG9nFgBgPKrEhwTokPQVfsJ71BgA0t/Yf/LfOgCNAAQe/69TAais2rix8nb6f31b8uuwEYBHffmy0ssAaPtvlT0FQCYGJoHlXwclgLcD854fczoopt/5r+BwQPqvqA7ccM0GYT+Xfh8keZWYnrZrPR5yPgOmMKO4kA3bB39yLYD2/hj2K+m9EiDAN0VgPvqT/6tS/F91zrKsnf5/zksQgKtVAFa7Z4IttCkAvRNhTwK6IAG36amTCQqApwKkv74oAdnMBjIDQP4vMgbw/bnHlh5xhBiAyNgRRgBK90U+PyIbfJEFVAHoNQKQnw/6C4T+s+A/ZrFzTgC+Fw5KZ1BskALgR+EFRoDPzx/YvkmhMjAyouv/7InKf3QAKP/RUzGzFodpr28cnjP0/4UCUDf8ZwLQfZcQXqbwnhKA96hJ/5P+evQdhuv/jQNABCDwHIAKwA3o1tmoSUA/rALYZkA6ACcBIB1ApvBHB6AxQKUHmn/3amAUAbyjgZ/S3fuOCBjvnzn9lyr7Vd/5mjb7gOgK/NdLyBDMzU1Pb9269TMQn6ctAGF9eqbkC+gOGegR0uvABGAAwH9hv0jAT3rfcvjOQI0J/mXq8m8eTCW+ffvofyDpb9N/4L9etlbPAmA2UBAQAXhSBODB1Q8e+PcCCzYFGBOwQdDWLRUBGH1S3wUloDsxbSQgIe1Dr2UpG+gaAIUIwN+NAfL2zklPABwH/ksJ8H3lP55DxKp/jrt+BoKIAWIxFQDpAgiS/zHQ/ysIACMAYsnncAM55eoAVAD+5JK3Ih4suj0lAJb/ybKN2AGIAuAGrv+tm39Yf9NN39aXnabs3/HLjh2/lK0VAdjscp8pAANUAgzx8WL9Cm8YtrTyP3+/G1k3w0QAngAAngOoRupuY2WVPwnIXUEWdACYNhHI2h9Kf9IAHGDvP08E95KApuvXvRtYAwBYf/UAogEZd/qu8NX/2PIH+vdNl0yA8HOAsB0PMO1A03uA5T/JTjjeXzDkwRqA56u5/GPNV+rTB6QfAnKxXwJqapn6t/y/sR78B/sxfs7iLUCFBz4LAbixSQTgwdV/+3hhNgWkTACAkoAogApAFz590OUfL8F0OIxUwLK8rEQANACeAGgd4O85gCXFuWk9QEeUHiElwI4DQH/g0DN2FZkYgAXA9Z9qAWTFj5n2XyBesST+1ezs7CuSAkQXICEZwEI5MFAVQA78yvuTvGqe3i7Uu72E/BdsbwT/g2XaAHyN1F1VAFqH311/01jDk1j+JyL5O6AAGMONje02B6DU9/jPIIBr/yheqQq2ueM2msr+txEsABCSA0QEoAD9rQBUAXAAj5P7maIAj//yvtlJARJVGCz8S88PRroBwLQRAKEhACbYb6/6dO4K5jfLfQ6p+91+p4TxfVu39vV4kL1seOD5PfSlHBCcwLiL15AIIL5+/euvv8ZtDPINXwWTmESgVulvrySgAyD99eVHTWXtgXLmh4uXrsUVK006GngGYNaKAMCa7yQJCAX422kANgWMqwRwA3BUV/hmjC7af6LZCwKm8ahIQGeRClial9UIYPFJgCXljgIeUloKAxCBAQD9xQHscyy4jH49RPyxODb3iAAkYerZ/j9QLpG+CIBagHLXaPWqBYgBcSQBTvXrrLUA54XijgBs2v5qEvyfO9s7AMTwf/M368fWC/9/mQiF8neA/niGUQRoWZ1ZAJT3GgTY9hXyP7X2u/y3/ztluhGA2wkoEYA6gIxZwPQMoGkEcnoB6P+1CahSH0oAIgBMD/emk9/zAHgDth0ow9LvX/5FAAKBScXXaZh0UG1m9WR1YLIyoEcQyDT/NrgdsDYAyIdxKPilWv0G1CiqMWp0p5Iu+gZuFwDp7+sBrKmptLG/5f/VDeC/eZ48J5vls6UqAE98ihhgHQRg9aKuGEEccGcqDkDYtAGFla5mIpEZXRgAoi/YAOkNzP3HAoAQAE1A5L9NAvzNkKi8OCVGxx6nxwAguwfqaxLw3NyCYmn77ZVCIDhPAUAMkIwNVBQXqITMfgX+AwMF6a2+RXJmqFgAEYDCP3NTeXK5UHz7JgL8v1/4v10KgNeYiFTj/yfvB/8fenJOIv9QaELoDxcw/F5LJgGwR/5KJYDrvk72/nHxB/3Jf8Z0Ll6AABBuK/DGKgBJgNu59OOZJwuAyShAIT1/WgBYiVHLCIAJAItqXf7JQZCfJ4NXuxqgiz4LgD76c/G3Pwor5W9YmQL4W33ZxZde9eabH8jIDPwR/PGrLraZxvnh3EZgiG+0gPE/XhnL/ij8cfV30/9rU+v/Wp4Bmi0sUwF4VOqAdRAAJAKXL2Y1RlMANlKZVWMcbrHPKoBNCDRzOpDOy4lEtAfZwKKsdQEAJzIJ8PfbgfPKSyoKCyAbu4L/JgP4JfivqKiIJWXXb7I/FBlEDCDb95Ia1o+UL8njX1/ylToA1gAIcP/UPDn/K4bCPo77Wvpn+lOcc34oCQNAbN8eD4L/H51+w3Xa/Ef+h2feWz9207sPzu34Bfj891+MA5hb1QgBuH7Ozf7hTe4L69EMoGeG0/ljgv2kv6390/yngzUAbQSyJ4KlIgAKgBMEMAtA+lMCvMNB7V5AEB8vTIYAMlQCuPinaoCYBI8AAyz9M/X8rPApwKX6TmsE5J9wlTD8M53z444VC4KYEh9oAPxdgG7oz7q/g3fWrAL/DdauDoAoWQTaAO5b/cxLa6QR4EHcNPLM6k8WEQWwKQBhACUAFyZ2N1t0OrSnFDALAAHI/3xiOozGoOUF/1AAjAIA1gEsohMgp3gwGasoX3LhESgB3AS+owQI7LffoWPJoNAfT28wlBzUGKBXVADe37K9mBaAmX675x+/kFsO/g9gYWd44Mfu5+dHvAigBPxHL0ryo7JLrnuN53/rddTPt6P5b+w78F9gEgDAXJ3cGnr1tCsANADM/I/CAsjC39WdRn9IioGlv/b+ycSDQQNAAfCSgIgA6ABsK6D/ggANBZgCMEeDuFDuc3D3PwajANYACa7/NAE6MO0l3/7YX0GqY/qwQsgvS/5fcv9NtQB3LGDRJyztOTlkruBQ8BPef6fM3308/KN+rZr/LeD/KlwClFUsf/SLVbhb5JZ6KMCq658BEAWQiYtoCkiFjuOSXsGhAPABelJKwjlL1cGv0oMh/RaJqGYDC/6JAMACaB0AWHQrEMMA2PxXTj7iCAQAagDg/veK7LXP/mgBimjNP9gLC5AMyuof7EUusNhd6wdUAOLFvk6/ItnzAwEAvS+gYPgBA/CREYCSku2vfpQfCt7/fcunm3EiIJ6vX39eJCC8+VsEAK+WCf8TO1C9UgU4fkdZuwpAsxsBsAtQhtb9u8eV/enLPwv/uvmP/Cf9MfTDpAAJGwFcsrGKFuD21Ir/iOP++eEeD0gLYGsAGPom/at0+GqAAn7YGMAu/pgErYCv8wffaAAcf3DHpbT7n/E9rwu4ivZ/Ydhp5SdYBfS3AYL9CP1JfwfY/Nsg/N+i6387bgHOsgDcsrpuFS4XkBigHgKAufqCRSgATwq4RjcJwgH09WztUUAEujwFSKQ2BrkhgNl2DQlgNvCfCAD3AlEAFr0doLD8DbD+iEMlA/ix3gkS6dhn/xDoD+BoEAkCeiUNGIuJCjh3gzAL8AaLgA5ylh5TABnYNCgCgK+ZsUcwFPf434j1P/LKe7hcc22LQX3d8PBdd93VcNPY+nfLhPgfQgJA/4QIwC8PtgB1mzvTDAAdACp/GvWPwgJ0Cxj7M/PvxP60cUr1DRzsAnIsgArAdTdUbVQBwADRCUcCODGU/oLU8aA2DRCQnQDcBYDJ1d9VgBp5G5D93BHAsr/Lf8DPf3yTSSj1ue6T+HzNg6vgABbEf5h/P/vxdlsA8dJB1FQFPrnRF/kb/q9bu7YBQyRgbcuBOAIsuzhhTZ0IwLonmyQNCPpDAlZdsKiju3hSAKuBPVAAGQCsQJdRAG25wJAuIQwaAG25lIJAeBwSkLu4rUB0AJ4A4M39QIvbAqQGQBz/fpr/69jvqEhINvvicgDRgGQQFiAC8ieDEIAYLT1rfl999cYb0ASfApRLJWBAYoBTC+czAEp/8D+G8H/9Nw+92ri2Qenf0Ajgos0HZftPPQKAhI4PaQHmVjfgz3mmzBUAj/+jXuh/l2W/3fZjsNPxH9QAYwBsBCACwE5A0l+GMt0Hh/9kP95MArAJuNZsBlIE6ACcEiC5Tx+AlwETfyz66fBxn9CfMC31yX2y3/eDTw2Q+sP70kUt/iQ/4EYCjgeA3Ml2f4f+bvW/vXEtFQDzE6Tos4zlT9atEgW4dtWWJlgAowDrLiAPF9UUYA6SJvupAiICCWU8EOMxq8r/z40AyIEBkICpxZ4baBxAsQoAoA6AArCoLUClpdICEJISoME+e0bA/mBHsAMIJgcqPg+qBejFE+sdLHBlMP6VdgH4g6SiXOz6kxggYxZQewDyjQEA/8vPD4X2H/vmoYb6+k8/rWuHADQqvnmoXioAZV7zmvk8fsdm/DlMAfgFoBvcN96/r6eb9I+C/n7+q/13wZ3AzvpPB6AGABpAAfBLgM0CWtyuwzEAtgtY6K8IuDEA3+Q9YHf7YvAD0wdt/HN+9FMfc8F489K/zX7CbwC89b+6MgD2Xwva+ay/hv/XNjUa+m9pgA48ycv7siwAoD8sALqBm5gFQBRQvnyRYQCvD0AMAPL/Bur/RhXAnFYRYOM1N157x65oWAAJkN7AgsUlAV0D8M92BKMDSFsA4PnHKABjSQKHdlYUF+blFAd7k1IICAblJD83559T/gdzVxoTVxVGO3XBJVRLiJQqohg1alWCUaOGxnWCNUYtUnEZRYrDgI61g1bKTIYZlfkhamswLlAXBhRjNBaLa8clGFcwYRJUTGOCBusSE1OXH6Y/6vm++71378x7HUfsoOfe994MYrTGc+75lntf2yAVARzwlJQUezgI+Ny9GdhThxLALqZ/ouKUQzZ8m8A7gD9DsQ1larwYDO/X7eyM9ISSYgCY/VDOX/CEAWgmA/Dyr7YBEDD/Vc8fAn+cTvP4M6A/71xz0l/474TsBMYwqoBPgvtq2A7A9WxAY08gS4CQ3+oEYBXgEwBbpQSgNUAW+zXmsV4MeYoMuLl/eYL4xPyXcjDf8d25/mP7QH5w5b4F8xSQNddQzW9MAn9X+x/r7O4EJlkDOmMoAO5zVPsgAH5cvvFJNBpi+ecR8JbNuy5XQq8PgABoA7AbOsASQL2WoLlowMdq+RcDAKjmwJ3/PBvo0WVAYP6dQLoDCALQ0w/AAFRyEfCMZRUVFUcccYT99lNPBciPfuAfj3yV4M2o+bWNXO5xNSp4VZqXLMAqVy2/ABU/NgCfe4uXHLLho907sfe38TqAN+QNDd1556/jneF02+zo+C+nE+2/+w0ZVHzAN2UAmlwMwGZyAGT/een/8u23mf86+Se1P2PrvwOIAAz6iwBc9SSIb0UB66Tk774ZQCDs55u8D1y5ADoK2HEEuPG2HyfRDAfg2va/GrS/IYP4uSmf2w2szjv9l9MA0KQUAMjfiqxfi89kv7P6x/QXdPutAmABHABbgAQsQFAJAKZ3WXX5/MIAeX0A8X33Kx+A/aICmBABQJyArP7iAHSNAHEAnRs4DwHA+v9vWwFlCxD4P9HfD6+/FB8rwf/z3doGj8ZrvzgX+CpeEGSqc/Guwb0V+jwqCDi5xDUDqAKAz08+wrNfHfi/e+dnHQBtAJbDJp5+aOgz1ADb4rVI+nEa9Td6/PnL6bXNfYDTANCJoAT12kBe9R+HANi1P0ff794NgCK/3gyIbcD1oD5AuwHA7qwoAN/1zNIADT4HjCVAtwGA/FdcudqAcXS/YQKyGS+cF9bnIn7+zp9GxvIvspM3+cF6/YHIz74fS7+PiOZElxX+Jwz+R7tDKAAUAOVjQdAfQBsQLMBkAGkANfwV5fMKx+UVBtchBiDa4wL4KW4AdwJUgDRgA2BbALEByAbqcwPzFwBlAIT/888B7HfZZadVnoCTv6gEyPyvPHbpEtc/5uWvbqAg4EdSgIygv2SXN4dFeut911Ygz6WoAEAAzvIWLQL/f5+cmUmEguP+cHgKrwX+7E6UAClJPxSFAHSLAID7tFP9l9NPanIaAIYyANz1Z+36ffzpjNK/ue/PfBO4aQAa2QBY8b9SgA7iP2sABwFMbiJ95uLvfEugekGQASz+mNIIDDRksP8GgvqASdB/QfCSAGS1Jo9c2PfRv87/uxcBiPtY+cF+Jr/JfrfqX2fG+h8tlR2ABRAACgEgA73jkgcUDxDwVlTPKxcoJ4Z9duedH3ygyC/M3w0bQHf5EaUGLSdAaUEMkQAcIDokO4Xz5j8EwOEA5iMAnorLgMp+wvZK5j/vAnRvG4QCfItOYAiApAEExUfgmzu4EvBWuePfi3cB7UJ6oIQ3BByOVp90stOqAEajoXGowGdDjwz1IQWwbQ8E4MUX//z5BWxbw/p/tu/lPsoA1LoYAJP/jLcft9iv7T9T36S/uvQrAbUDQFgiEQCzH4NFQATATP4J+R2FAAyD/pgIBWgAUIA1vOLTDSMDN2CyDGjq03gJFXoZpAIY+1ADbsjP/Wdxv0Gum/jGP2mox8qvfH9u9ov9F/4LqEe/ECh7J8hlAKMUCP7L8FZUzXuzblFZeVV1zUrecgElgB9gR8A6oCICZQ7eJhXg9f+HP34QkAi8+Mpz+WcD2QCIAMzbAcg7RQ4l/p+Gg7+AHhGAc/bbe9tgP7Gf3wRiJvY8Od5NgCDg/aOdGwIPrKME4FnQXEoG7n/YbDqdROqnT6GzkyqA0/G+8HgER4D+XvvL6af/yW9h+ROfTk8FomwAXnTlPybRHxel/RADPJ0pALL4M4xin60D8kYw4T8OJWMBoAhAJMB0AEL/bA0wobMA5qYg+0TANeA/QyTAAcsQvMQawDKwWmuAXJYK7AP6c7Yh387fBoxM7w/qK+6P9fLKr9nvJgOS/Qf/uzEw6aJdegVBWSnRHxeguoECmwBlApr93lXV896sC1oWFZcsgxBUmUKgAwIRA7tV4Lc/vvnBAh0h/EgHZQPzTwFkO4B/1gjkOcDDvbiXEX7coA0Axooc0Q72B6AeAEAB8hXpks/fQ19gJhbXfbxrFy3/vP4/e9js6GCEgj/QGuYeSgCM4gCQdBoGoP+Qqe/4GADgdCAW6AOoB8DJf7DfPPSLaI8thYy9Rf/w+jR4YugXAgFgPiQAAkApgCcbOP6XHAArgOsAnGGANgDWADgRuEYO7l1Nl4C+Me8x+M54fTUG3fkjzIClAjKAeWuAxP464yAj/+gfJQzUNJDuK50D932xTUwuvcS6o6slzGov3Kdbap/tAHRadSK/oGmcFCAsAkASEPCv0j0B8xcCUQIIwXJLCcQQcGJATAGyAm98o6uEv21+dGcHzg3Muw/wXzkAz6EH8DLM/P8d/EcKcJb4j3lUzr+x2IssAPqCAW9Rvrp7tCMGuODjb3edtWyxKgb0Hzw7mh5V/B/GVPyPtCEsaMMNTYm7av/443TBnibwn0uAt7sZAHXwDyuACABMP+f/Hfx/yC71GyKQbQAwqDhx81VEf2Y/T1DblABMwwBgOiVAawBgHQxcT+MKK+envIC6G3ZAZOB1kQHmP4wARABmwFSB+YYD2vs7HICbBDiYbzl+4n6vLxZgMPsDzXQx+3Mt/xi2B+imAmCBUFztFQEIhwMBVoBE2DIB1Bcc8E/NVe+ro/vgCSAEHBustIVgNxkAahIgJYAIIBKQPoE/Nj+zcy12CudlANSBQPpEoH8oAIce6rETACP9jNcq2QGQAcgNbBKmY4GgAZcXe/LrW/IenVUIPOXdXZPQD+H/4T2j6TSJfx8ACWD+x0H/wVmgrR9dyTO16P8F+8/eEw4MM/+Hu1KbsxOApgMgqFX/UZQUHPH/EzQk0leXKAAMAH8F8IHofzMuCMBadgCUAzRDANz0kO/ZWGdA6oDiAOQwECjAarBfte7po3yF/foByhPp8ZBhpQLsKADgGz/zxmqwX/cbZTsA3HPwn1Z95v4c1n1wX9iP0RwQ/svc5Lb8+8B4nriUEIRRACwUFleVB4OK/hCATT5WAL8oAElAIBD2p/aJBDiDA8kS6HThz4AUCQXfPTP0JLKBefQBm/sA/vlegEPVWUBncALgEPWa39lKhpQAcwIHBXj5bMD3vSWL8xLesz7PEPUD3r/cOogADUCHw+gPJrMCgO40+M/zSH4F2Mz4zJ7a2qlANJJUMtGUTNYq/jsiAE4APiP8J0ABzABABIBhs18ebACE/5jMf8QALAASBPDAsi4Q6stwsh8DE8NsB2YRIAfA4+o1dkNv5rs8JEFoRQH0JHD9j2IAsgHmUMUBGTxl6Lm3tV83GuZ2AMJ/etTXrwMU9VO8vd5Es9IAk/abHPQfFuLTXfjfXraocCir8gaZ/0Csudk3lWAFsCWAFSAMCSiTKKSQQkBKQBVCUwS+e2XoyaqSfPcCg//HYUobQN4CcEDFAToBcGT/dooAPq1kzCIDmA88RSWXkwa8ipNB8om9PvdmZBLs6GG/Q5AAwDIfB+t1BhAYbVMOID2xgTExm94Rj0RGR7vJAESDTd2zs8M/u/BfDv4A2P0L77Ppb+HGbDzReJ1E/zSY/ZIDwAsBBjgIYA2w2S+Xk/tZQYAByQEQ1sl2AFEAARkCCQNs/us8wEuSCcCkh6kBBuM14eWjfugf3iBpPw3FeXNkS4Je99vbl5fSqk98whQw72Vwm52s/s7+X5+/M9lN0A4gGWxHtFg4lNSUBcH/MOjP/0K+FB0PFrTCAIAUIOiPzdVU5ViJ91WWoBpZAhECtXuA0oGvPLe8vDjPlwKKAzgu3/MAxMMfqhMAP/ZP0JsAtsMAMLgEmKcGHHH5e0gIvuelI0Vyw+PVdQBPsRwnIgnAg9PxyZOnUrGpWMxPmwAoEIxGmP6YCAAI/W2zdChwWxwWAQhsicI2jE5tFv7rEIAMgC0AQn3c+eFY/sXqC9S3Rrv/BwLA9GcDAAcgaUDZDaQB6uc2AGICHM0AcioIhwENmoOrMfjG9NdgDcBdAPZDC17iZd+uCMgT0+a8/mgzXx433KHZLyS3RUB/44cIAAf7bPkR7KdSsXDYDzD/NWLaA/Bwp39Tk79TqC8g/idKsQOggPBUldsCAHR1NY3NUCrQMgEYEADqFgz3lu7bSMCdzBmWADqwZw/6gx/JtVNY2gBtA4BBAnBJngIA/lVUeOi54vjjL7tssL+nB/yHAVA4jQxA/oCQVVR4l5EA5EbxycvsAEJ+WRIA6e6TP7u+g3E99gCMpcIhSgBaBmD7BkZ/zyyhLTI8DAVoTu2ZmZ5Nz0amXsgQAH5Ng17/rR3/ogCO9R+Ed0AMAO4QADYAmLjYAay16G8mAZ15PzcVwDTIzzfZFViPAVI1ZL7Ql4VA1wJk0LoPqFwALAB/yIgBeIgGmBBVIAj7oTK5IVIg+X2CFeunUrRKEsKA8N/dATTT0+H/u5qawlGD+HIlO2vwDrCCogRpQFsAfJ90dT3cO8OJgDDlLQisaVwrlEhgIQBLsAxKUE1KgK0wQ1UruTcw94mgID6zH49zT7yEO4HzEIADVyxhki855phjjj/nyAk+CJhLgGlcKxYVCGV4FZgJCQD6IzN3PteoccXG1o2lc6nudE+PHQCIAxjkHySR/mupfeObP8OkAMnUi9kRgHXq/6MEY8ufav/X6z+gl3oLMP3MfRqYYD/zXwvAgJsDEPo7dgLKXfiP4RIF8K4gHg3EN6H/XXSjCQHQuMFoFZRSAD90LkA9CewLbkBicWCA6It/SIOAyIwfMNT2I0xcGvXqLgDnVZSPJT81FQ4ymPygP4P5j8tEs3YAjEBG7C/0d4DeAVhgwAIQ/0kAuj7xdTVtfbiFU4EwASwBAb8NRAJjNeWFtgHuvQTVy2uKcgrAJRAAJj/h3AsvuUTlAPNwAMK9FeD/UYdPnDbxLDKAPZIBPKpg8VeRS1jjqeuP1O5Er10HDbrdNbdxY+st7e2tY8HIbE+bBADA9jQbgNmR0elIAB3AlgLsSD3zvCC7AABkbPrPXP8NzneA8jKxFwk3XJIBALgOwAIwwBJQrxTAsco7HADO/XVZ/oX+wv4MCWiwbPddOhS4wxkFCPBBGQKxAFZzMP2lK5i+Gx94YO5XbKtkzMzMTCYnJ7uTyWQ3uuBnZqaA1K/A3AOEOUwA3/lHpeoLUX4q7B8G+oYVFPktAQg42R8D6dEDYFsAeQg2UeoviNjfDfQOwEJjGVkASQF2AQ9vffjW2CSHAfRjg/8SCZANKAgtcgtBUZHnbwVA48JL8swBQiE8Nv+Przv8nMrXsOMfBmAp+E+vAioYSpwCgN0AtTuHmP4ymP8AXqxfmupM9zwr6/+Gnll2AOnRUYT+0/7d9M762I7BdDpOHuB20wDQ3r9sASDWZy7/OtF/VaN8IsoT+zHUBPclAuAUADDAe4HoWmdSX10OASAFoJnDAbRyO5CtACIBIgKWAGDaAL0xVAaAyE4XdwOQLbhyTQPxfi41DrYnkTEdGRxs63FHW1vb4ODgyMjoaCTyppoAHpFkMhoCEkCfYDhE1B9Wiz8NRgAagAwgTQea9VCQVqCmllgIdt+JzmTB+S+vB0QaUAlA8ydNW5v4nPAWDgN0j9C4XyMcmyutLkOU+z+BmwBcmL8ALNqPf2cFBwDbzzmtZ3/wv6dy6dJK4PhFC4nFde8S/w0BeKpU8V9pwC3rJz8WA/Cs6glogwBAAQbTj9WSAqS2DY6m48gDyD5gxX9GducfKJ/Z+mtH+h0dxHb+yGD/rw2A8B8OgGMAqQJg5uEASAHWCf0FjjQgo54mfh15AO0B+KIoALAUQNivHQBtDUAuDzafiP/rFIj/5kgm6UF0hRGFUUBxHYjH40lAURCIAqB9FBVZYn9oWA2C8D/DAQRc/H8zphgBbQEowY7IH94/0e2OZOH9v7YA+NeLxSgHuHXrVgjA1i3rwyoMAEwRCDNQFxyDBpT8PzTAEoALL9QCcO4leeYAPR6PTgAcNXHOaWwAXsP6T0AJcAEBAfho587nsgzALSbax956V4qAKic4ykin03219Hrm1LY0FKD2BTEAsv7TyOj9Ve/6Veu/5r/i/VUwAHrVz8DN2gCIAxALIHVAE+4OgBWA+S8j2wHoTUGiAKrzRiChgBgALQGiAeD+HVew1wfzxxPdkTdH2yYmJkB5E5r/gyb/IwSb/WoTLiEB/tsjBPLz6h/SFsBwAGGRAExbBGLG+h9QDbYAs7/JFw7ZPT8Lz3+zEBC2coAwAApbUlwNCGcs/+NhAf6sPtaAokX/OQwBOJXHcadeSCmAM3QOMCf/PXYAcM7S0yonKABg+vMuwAXFga9+RAEAB/98fwoBQDtobyjAte+Mv49WAe4KggGYZv5jWgrwPX60rXazyX/A3Pon/Ed2L2v5Z8p3XNUhdBf6aw+gDYAhANIIIA4gZ+UfhAYcBUBTATT7adBsUAU44T6e0hW02oRyAMT95UT9SaI+kxtrvwsGBQb/zeXfXvz5OG4aCcX/UB8mmN8nDkCHAFkOANSXixEzrQBJAMX9LT5/wqK9PE0UPv9v9gLAAsQsBdhqKUDvOFIkwbA/E5Lm5JtvDN0BywqdEMhfAIj7NDgHWHFGHhEA+L8fPRT/YQCWbmcDILsAF/hPVvTRLywAmHYGUIhvSsA9qfcmZtuUAZjWCvB9SikAftZdezvXAFEAoNX/a334h9T+1J6+DPorwl8FA6AYr2F9ZvZnCMCAOICG3AIgdX84AILQX4IBsxBotwMDwn/2AANwAbixBhD978LIVABa+Jc/QIY/TpE7GE3Af5nBXPwfJP5DAej3EfNrBwBGGg6gL6odQF+IJEAGOwC/loAwBpPDpL9QP6YeRH4fjL8vGELVX7b7uPn/RE1N8aKFQlm1N8D0pxygRguZAG3/x+k+LqUOQSDWi4RA+bKihY4G3AUAIAHgFEA+AgD+L/FIAAABQADwKZ35uZToz7sAFxbFH/0yZDqAn2AA9PIvH1rxo3t8yTbqAxiNTEMBpiUO2JbazAqAn0ahAJvZAJD7lwSApj+ieS0AmfxfCwOg0WhmAJn+pgCIBQDW5u8AwGtNff1kBQDWZTkA2wMAOg1wByRAc58W/tT4ZJLSdrgiQn/AzQEgDSj8z+kAhP4SA2DyIAVQQYCRBNQWIKCHIJaZC2huIuM/HAXpQ0EmvyviiZXVC8d/5AHL/c0+qgJwFlCjBT0BmWkAQLMfA4j5xlgEiiVNv+BYfOChZ5xxHgvAcUoCOAI4wzUF4MniPxmA/Y6xDMDsdukBkhLgwqLo/e+ue85yADAAD2y0HUA7BibQSrjl7vA0tgZHIACmAvj+ZAWYju8Y3k0GQNZ/OfuPgfw/EZu39N2YRf/Gq9ayAXCHBACY2QIwkDME0MG+ddbf1cbyL8hyAPV2EkAU4C5dDJB3fPC2gDX4HeT4Z0B+DSiAuAA3BzCowfwfyRCApDMHwENbAKJ/hgXIcgABxQwDMQzCJh/YHwsmOgXBYd3wj2kgHlxZvaDBdXFNOcKSLgkADNx/67iqBQTHMXUmUBDggSeLQE3VwquAdAKKADDAfzsC8Dh+mRkv2M+zZImVAEAGkDMA6hiAY6UEuLAoOvq7xucU+TkC2Ai0agVQYAnYWH/LO8Pp0TgUQGGUb3E6FHyz73v8nxzeTfx/xjj5S+gvZ3oDdpO/oBH+f+Bmy/Q3YmSVADAFjSIAA9oB6N1Azt3/wvd6QwEEWgdM/6/pz5D3/wyIC6AggLYKgv3L5yjNH4/EGVoACFj/33QXAHcDAGSkAIT8OgnARUAJAqQSEMxMAgglMDD16s/fmP0hZn+UbuC9PwHiuyB55sqqBbbUZTXlEICupi6T/VwOuL9lPAT+h/gPKhKgw4AYLtEAiEAvqUB1eRlkYCGbhTxoBTYEQOUA91IExJJv/I1LVnioAigG4DQqAfZvb0MJYJZ3AS40Fl/+RaOKABgQALSutIoAaLACtLa3r++LTEcAoT8wuqMZDQF/+r5PJjtTr4D/z1j8f1TYzxADAMjqz7gZ9IcBIF0A/Xlq2CVADIW1AkoArOVGgJz0FwdgRgHueUCBjgHg8OVUcEiAJAIk5kemPxlPMuK7IAC7iP6YAnEATv7nEwJEMSUG0FFACDfkAIX/dEkQoB0AYJE+7OcEQRjkb2lpiqFbGHlFwDroL+GPuqz/yeSqleULHVJ7yqtXfQL374L77xtPyJ8SRPcTsiXAtDy+3t65d0pXQgeWlRQVLXZNwxdGAC6xHAAEYG9FQCz5HiMAOGaJJADEAOD1f1QCXEpJAGwCKCQgRadcAJxfV1d3/gUXnMLCVLFzCCGAgjiAB9gEtGeCfgBRQCpAKQA0gG74tKP5Z1IA/H/U9+ujHwr/hf1DQn+JAHDroIqfgF72z/wn4qu7WQxsNMjvzAEM4MphADBNAXgSjbcm7TOrgQz9kmCWgAHwH2GAHBJy15p6XvrBFcEuNgDxDAcw8uaIUwAM+juLgCb/Nf35soIAcQDOCIABJgj5mfvQCTTPNrWsH+sF+xOQgmGmv60AlAjMBP7xiamVZYsWHIuhAFvRBOgEegKmxmPwL+pbF+0QNsoBmCIC2vRQohNuoKa6qrwcfqDEYQgKKgC5ioBLVmhf74H194CIiv/nHF5Z2fNsP5UAwf/CbQIQ8l9QV3fIBgE2H+No5Lq6Cw6o2LMTEiBRwPXgPuOBp56CD2g3gRP3yAjcsj46HdkRIbASgAKcB9izqfurzvCdwn6QX7FfYAvAVej5AST8JwPQwclBFSPgrmFRv9HkvwiAwwGsy47+tQNorWdoBcATlwnZEYzBYoFfxlyjG4IG6tctHwt26nq5OIAIhqkALAI5DIAUAawuIEcbQFQkIDMNGFISwPwPiQJoNtDOWdh88iXdnQl/zCfkJ4SG8UxoB8BBQJCWf5P/oV9XFr79z90D1EABXLFlLKaeW7bcT9iypcXHGqCjABlQABqbFGKxVau85WXcyV9FgUGBZGCxEoCLLzzp1JMsATjPmQLgaF8EQPi/QiqAEIClB1cu3U4GoNA9gHAh59fRmT4KRx4+gTaetsPplA8cKrRnz25IAAcA4L/gwdtue/CpjTb75f2bMAHIBIQ7IwBUIL4jDiTj31MtoPZl/N/LCvD0248PEWz2iwO4WQlAh4r2O8B+DAgAM78RkAqgPDT1XQRgwCUHwN+srh9Bq1MBJP3njAUMDbiaFMB6EyC24oyFQTE7ga4cADwAs9/K/48IsvlPA1O3AbinALqNHADTP6qTADTEAUgpAFIAYuMi5kcIoH/IH+vtxXFgtj0IJkCYEGQFQ9AdDYcy6J/4taasuHjRfwJPWc2qLlf+r/f7m7sYW1kiWAe2oJMhFhAXYPB/EwtArJlApwmEV3m9RxxaUrIMe3yrq9A9yKQsgAM4DwIAKAE4T1IADgOwYj9bDGD98UX4f9Thh6EE2L9/wQ2A54I65Bkn2tIKiN53MKbTE9vJDRzyLrsALgEYCgA8dcu1iv/33isKQCZg+fpoJC5IJrdhPeyDAryRwl6VYO/Q248L/Ycysv3aASDpT/Rfi4EJkAHQEUCGAXBGAAMsAIJ1Tvrr/B/Dpj8v6hkKYEoAfyYJ0GhgD0CB/1hsmNnPsIkTp/I/in6Etn8ApQUkA6QBwn9LAbQNMEHdgEJ9MvkhuhKTnZ0J/sbvcYgxJGAW0Oo/jJ8kOk0H0B0KR036ryz/LzvrlrkrwP1NQZQIqEawlRQAGsAXq8AWvOIgQAKg+M8KAP6zAmAy+JXj3opDi4uLS8qquF64aJ8CAnAKCcBFxP+TtAFYnNMALAH1PVYAcNQ5+y+lEuD2T5n/6cpzClMCAP039E+A84zkjm3Jbdvo/d94Th922MH799N7Un4hEwD+mwrwILmAVpCe+G8qwDWt7/Sxcd3Goxt4bOyF539e3xzw3Vo6xNCLv/BftvRCAEB5Wf2x/t+FIoAc+i/sN0uADgeACWAbAFQADxEAF/vvdABPgtFiAnBTLQCa/XpvMMcADWqsaYD194M9JkCbCDO/7V9CKwHpAEkM1v4QIwhWyxinjJ6vCcCdbjED0iLLdxNhDHqEEnTTDoDNf9Bv0T+aolOw/1OUVL/TstUpABTUN4P/mA93Cf0BZQYgAmIFRAIkBIAONIsKCDaFvd6KI3hvL0TAsy8dwCkQgIshAIS9RgDs9m1eg/+IADzC/6MOO2hpGzUBIwE4yxFAQVKAoP+GI9NgPq80gk6F9GETB4sEwASMzW0USBoA87bbNsL+E/1ZAUQCrrnmnWicBADRcHeUjhEOds29uHnn+uYt9903x/zPVIBGywGA+0R6LP08B+guKUCmv4as/ybWWgD/JQngcu5flgiA/jRBZ0yRAKMDQNcCCNIUJL8Ow7C8NxjNID+4z9TXvf49eyG3GgA9nejpmSD0DI6MRuJw78FwjAku6AJ8XT4GPvLruwQBhpPz+okpn4JRbLwnBdMKgBkeVqt/qhTvwfivUVRWul7obXD8L+auBTiqqwwTiELUJoGu05qqIOqMWqwMPhlNxReijtPGJIDRDUvYbBbWlWbTNks2s9lgWDShyYTtGGk2IGEhKo4hEh/RGNvIqJhEQePIY6agZtIx9TEyPkZxRr//P/+95+zey6tGy3fOvbsBfFW+73z/45wTpP0LRH9YAIP+pgrU+32sAkEGyJ9gF5CLrsGeFFTgbhiBlXfNlw9ANH+vcgDKAlAE8Ga3NkB4fpT99O5//GQFAPctKV5erAyAOgcIocK8Y9EGOsdj+mK/Ij1eJi4X7dlTBAlYQhLwo44xsQAeQwUQBuwA/w0J2PFxMgHDcdaT8+C+2pHSfeUrX3k41AbMsQHAJPor/gMiAOA8PTJoRVfeH/x3ZAAdBsB0AM4cgPuu/zp9+zcv7JYEMJjxzqsCRAJ2ekYzUY3+Vq7x894+QL5xXD+kMKCGicMYmFwDEIh1GBhpbsHWN7Den04fP368uxu74poUHCf3YfAve9XPiRpDBJARlPVef/KkJ2lZAIZ4gGQsqei/bMHtAJiAnGagdBP4D4D/6BPkGMAJxANtbe1pb44GaAOAOGBwsEchlVr/CuQEVq+cn+2EeVkCQPwnAXBGAFjt163S/FcQ/i89+hNVAkAAQFj3PxCAQvC/GMu/6gBH61rUQLx/T9EeKMAEFIBcwDdGPUoB8PbYCvDYpx6rVQogAiCJgGHUk6MpzjapMnT71Fe+OtUGNE5BAZj5OgEIcFGvjOnPPC5jR99ndQFUOwzAZocA6M1A/K5wOACMHP5TEgCDILZenc1jkF1vCuCXjZLRlCZ/s2zwNZg/oIJ4gWQDVUOgEoNrYAjEx3oP3oP2Tx0nnDh+wgJWPBs1MmhaX0QDmP8S8ocD2fTntzyReBgfVAc0FSATBv3p6OvbAwtRDchKBaTl9BJ2AOD/tZGGCPi9VCSMKREw2d+TjVRm/fqXrZ6fo0UcAvBO1whg1Tpk/XQAwOwX/t9X8Oh387kJGPwnrCicdwF4z4se/e403D+oKsniqImzZAD2FBUV7V+yZAmO/fjxGzxi/vfZ6YC6XVCAOuF/tgJk4pmYAu/s9rY//JUvzrQBnmOy/EtUrx0ANf6wAvBizoH8ZhEA4PoJAHEAeCQHkOMAXE/7wGe5jT429gy9C0ArgKUCogWegMWYVl74hfn4BPObxVJJTUA6AjX9XRUALmCkNRnwMvMFQv9uPEx/TBf6a4gBSNilf3EAOvaXl3rQBWBaAEkC9EeGS1bfHqu/YBkSdeuNkqDsX1Ym4HoCQN6gvT2EaEA0QDkHr2b/nZE7w4YIrMe9QyvvXvzfC0ChKQDvd48AFq1bt26FxX9z/UcGcHkxqnJ8EKDsAlhVmDff/H/i0b/87XyrLP8sAOb1z61FJAAYBftJAfKPPvqiX6LfDziI7N9jB/fpesCuzwjMYkCj1+pBSwBITvmvfuXqmAoCiPsyCGIANmPVF/oL//u2VrkJAP6wE9u0AwByHQC0wJnVp8FZwBLVDiwWQOKACgNKAoyfZlKy9IP9mvxYvvtxdQLAiXVmEwuAIQFDNK2IwGR/czTgS7fzmm/SnyYeJQFN2R5AL//Gj2YQoAQAiPEQCP0xw3HJAmgH0ELm/7ZZ/QUL70Kq/u71NSckAgDouGB0NPkpNsoJ/4E2PNIhgF9r4u2OiUBgkCXAon/4zoiIAIatAWGcMohQYL4EwBkB6AAAAlAoWqDXfzYAa5cffQI4ah0ECAMwzwKQt+7RJ4b+dkpWKqcAiAHA2A8sARAH/GBfrXCeNWDGYyuAsN9UAI/XZj/g8/rGvv7VhxtZAST+F2y2BIBTf9tU8F+xrayvokzq/zfgfxmG2AYAzJePih3XMgA6pK8rN2FKgOn3jR+4QDgabSH2D4D3wv7DsO7xVAYA/aW5RgTApn+zjgFEAujhVEBrMuhvfwrsd8UJHmYUIHx3QhTAsAAOByBfGcl4xLQA2BHYUXL7mP+sZCCV7O9e/+GmE+01wQ8Pc2/vavTz3O/xNKYN6oeI8j4vgJyI4HRNkLc+kBEQ8ivO44Vh/gpj0DuzBvWPeRKA9zkjAAkAAPH1OQmA++5bzncBPlFgHQWOc4Ln9/+VDY/ec/LUhUGivKsAIAOgRgHxn0GJgMdqOfcneAwSUGd6AFMBNnl8Qn+gyde2t23mi1+cIgVobJAaQE4KgAjcq2x8eR9Zef5N902AzhygmQNQDmDNymuF/xV6cBJAKoGcB7QloNzYA8DM5xdmSQL/yJqHQHyL/K3RVGZwcDDM9I9jigCIAXAogEgAQPwfiSb8xw32P4Vp0t+hAToScFcAQkIUgARAnH9uFRAzwxaAdgRY9N+5aeWC2xILl1GiHl18a1av4dI9FlQ+tv+uNTs+tzed5rR/TEQvMsloAVA6RQOkl0oCCTgBb9C2/8J8wwGoj9Qzz6QCwx7YgHkQAB0B5BiAQtB/7Sr5ztynqdb/++5bCvpDAIpFAF5bWLho0bz6/0cH/naqyxfOFoCoxhBnAJEDtPnPp3/++FM79ikLgOBfJGCfKMDHzUQgFGCXxyfsh/bW7/3y3rapL359jtMAVZwHBEwBkDQeOYBK8B8GwFUAnNynuU1gJgFX37HGUQDQzBeUA7obkIdANEBEQGtAbZDjfoBtfzOSnUx+IAVIp44WAOG/qQCGCxhojvgMtj/l+GKyX+IAHu6QakAQMAQgKwNo/hyOswVAMxA8DehfsWnLli23VfxvYjGa9wA072X9GnoF0t6Y2eWABsc/CybRDgXglFH8ZaQDEBAN1EAEQP87XRwAntRJwjOpBF078t8LwPsgALoLyAwAgEJ9/jemdAAsxSagoqNkAEgAJAUIBZhf/vecwj+KawpAyx4dACxREQBvEoAC1LIFeEwGJIAdQZ0dAygLIB6A3T9Q39a2d29b28NfnPVAAEJzhgGwQwBl4nvxquzjap5qAbp+AFCmHgQPPLIdwIL1n90hLQDXdAB1uhnQoQCiAboFmPhfEp5WcT/YP9QazwwSgl0EpJszKcqp54YA2gJoBWARAP39TxkLP3/ycI8DdCBA053/mAQ7CaDpTjMcy8oFJjkNSO0MGVr9txBetuA2xsLFWexfuWamAzpmHoCEF94RRf8IGqMxRQTwd7FmcDCBD28NNCBlOADJCvTEnzlp4ZnA8Oq7Fj9nAZBOIPDfLQJYRQZgnX3+N9FfAoC1+9VBgPnFxUeLdQQwnwJwL/jf1YQdoRG7gZVT1TkGgDOAgM3/o/ggBRALIGOGtwawAmDqdgDyAH7VveJX/G/zfF0FAR47CNisIwC1+CMPqJbwim1831+Zg/9uBkDsvwr+6cUCsPAF+3YQ+Z2X/xvIMQAyBXytNkNZBfCftFGxvz8+SP0oJ1T0+RSh/Xj6RFePIwZobrYVwCgHYnNg1Kfpzw9z36kCJyz+N+ElEqBFICcm4AjA6ARgpuurNDRiHANkqBIYsem/acvq2+Ns3RviDlTtPpyQnIYa4/JAAZIkAEnujg7zwP6ISLgLBiBBgu31kRjoSMCqBjD/BRdPZjrQDPnfCcD7XCOAQrB/LUcAcvqHxX9EAMvvW768GPwvWl6Qj4MAOAKYVwFYtOEv4L8fyBaA1uwegKLLkgEkPMEGYMn+/Ee/v6+W1nxTAQ7Su5bJb6YBajftGvOD/eC/YO/c51UQMFclt3w4IwCwV53ti7IAiJwjAI7sn0iALP8A3QkgArB4wfqP1+pTv3N7emq5psf0l25gkQCD/vKyjw0oaZnYo9ifGqxp6k4fZ+ILWfFiFWjqiROcZQBxAYKh5oCQHB/mg3HtZKCSgCZ5iQrIpykBSgFMw8+DDYEMAluAxDDTfxMGsOY2OFj3pui/cv2HY4DmfpYOTCoHAAPA7IcGcBf1IAcBbNtqvHAC1A5k4mQ24qOUDHjuAoAI4J0uEQDzf50c//lawgqrAkACMJGfn1+MXUAQAGkCmM8qwLrfqfW/vj5zDQGYBv9pFmj+iwDsz3/iR1CAgywA/MKugBn6erBW058sAKcB9nlIAUJttgJMff4LFASM9apbPgAdAfRiIAbgLL6wGK2ANzIAEgEwyqxGQHEACwpndtRq9lvlfLn1kyH0lxBAD60B/ADCf81+k5vZBE6TApiFQILtAjCZ/y1N5r8aU4b+7poGMNGkPzF1EsC0AFYd0M0B8F6gxFjJznKQH9iy5bZOAmgsVvTHDieD/eNOCzBJFsAeGfwUGGQN8AahBWESAdoiqDYIsRSksPCbuPhMbAbJgOcoAO97n2sEsGItAVt/ZPMfQwzAWtwAnn80P38CdwEtKZIIYD4F4N57zg/W+IH6+nA0aseqIgDSBUz8v8z8lz4gQj5+FgVg9osLQEWQtgbt421BkgYA/0UB6v3tbRqe7x2awkfIszlHALb2Gdv5K3mW04+bXflfpqeKANQgQD+0ACz46O5a8QACK/Q3T/sqL3FYAMwcCcCsKJmcQNYvHmjygf2u9Jcv3SmJAVwUQERgKKr/PYT2mvo6HeBwAGYUII+PHyM3WJNjAey3OAA15WatGaT+GOQA2ATcteB2x90w/x/mIlNQOwAgIIO+wgEAUVaAHp400AwACQgHvX5fEMlbTAJvLqI9FpQo7EnFsyXgZHhm9bLnJgDvda0BLLpvOfiPNqBVq1YJ9WX95xLg8oKjEIACCEBxESzA9MvnMwWAAKC5JxP0sQIEaLk3BMBsAkIAkMP/J9gP7C9WCqBjANCfv+zaIaUAuxKAROAuT5tAgoBDsACh9hCCAEMA5FBvvIj6/GyrxA85KQBn9K9GVgrAKgKwALznDTtKNPd5ash5nwaE+/IyJKCXXjsjiPsDNT63tV/IK6/2jCEAjGwFgAVItjv+1Yr75jC5L9PVAWg5cCYBxg0J0I1BDLphm+i/RQ/CytuwEcDRHBxLEIKJmLb/1vKPb5Ek8b8ZsyVimQCWgHBAJACLoG9QJODdg10E6ixEPwHg60I28JlnTAlYecetVwHeDwPgFgGswqoOAWC8dp1e/5UAwAA8kZ9/dP+rlpIAQAFeTikAOIj5wXt+9zdq0k+gi6reFzVjgBajCagIAiABwH7wn5FPPxUcHph44sldtfuyFABvzDr2/3gwAaUAm7IVoPHYoWON7aH2sYZsA8DsL1PrP9hbKZv6troYgDI9zTbgMi0AfYASgEU/GispgQFwOgBMBc3+Pn4rHXAAm39Hn8kEHc5f6CvTesXsGAAQBTDRHDUL/zL4myMSEIQA9S2b+k3aBGQ7gIThAPhxtgYPC/0BQwNu9yzg4pWrmf6GAlgFAMJ4GJcmqi6AP7dABagTQAcCJAAgPT2DXr93sGeQIPRnNJ1QaV10HA6iJ8CSgBgk4NYdgK4BmL//cvh6xX9FfJP/nAE8WlycX7CUHQDe69AEMG99QIUv6k/xyRGJeliAcAvHANzYZkcAzVQCuHw5l/9HYQcKth/GsXYTL3rbZ2o5DcADIQC98FEL7tsCICcG78pRAE9n51x7O1mAbAFgA9CnUKkSAJICcE0ACPl56C4gLQDiABZs+E5jSW3uZV8CufjTNAA8HBaAQ4DyYUT+J6Q395oqIJ9d3A0M6B3WBqAJwS8LtTXVDQtghgFtjR5c+l/Og+HxeEL16W7x/GYsoAVAOwAFO1cOARAEhyn0F/OfbQGe/23A7sjLW7hwwWLY/6DQX4IAm/70NQzo5gdWg2QEkDSA0F+5AJ+/hiUgaCmAfRehnC/SfXoQGiC5AA8qArfoAN5PDuCdL8iOAAqXE8QBgP40TQOAc4AKiooLlsIBgP/IFcynAGz4y3kSgEwqTDGAP9UStXe19GcbAOI/Rr7N//0Fe9CzPj09MDDx468ZCoAE4D6lAEgDAIYEqGsDSrKCgKnHj3jYAjhSAL3E3UoMtZ0nNwVgLv9CfuG/hbIsB8AL2Xt+POqpMyyAJAANlJs7giwL4IKSrqC3PhQaa/QQSjxgYmMjohlXGUA6abAHi0yAz6sMA5GMuO9wAL9U04Zywd69eCmWmwNTW4LGEsd/G/5vSDowhlZ4qxIoQ8ErDoC5kRv0y736Nv03igDQI5WAuxfcjqCb+XGS1+o1XcjcobWvBgP8F5tDR6MAsv+E0SUYDAN8cjLe4QBsPw0CxcI1lgM4rfjfTcNCmkSgZvAZJQFn1ty18JYcwPupBvD+d+amAJcCrAAvX/dy8B4Q+rMBwDlAxUWvKoADKCrAn0K1sBD8z5svA3DxfIpLIylvPSkAzrOyBMBSgOkibQA0/4n+AB34PTI9cY9WABr79j3GTqBOzge0FYAloDbLA5Qc6TyGJEDIs7XKSAEQ3W3qkhdQerD5ehVAnQHAFFRAAPpEAPL4f/CTYyVu1/3pIEAWf3rJlKFBBgCUzyGjKgwSFRtD7XYej9DOq3AwBqGNqjvAD2fdAIJdQyOt/amYFy1Se79MIiDcz9KA422eklz2a5gyoM7Hc28EYOh+4DCF/l5K/Fdu2lQJ+tseQFmA26kViC7hx7Fdd+PQHjrHc/UaoMSDGN1PzSV+PAA+vHT6ER0AXONFatuvgD/Gv1ejmrRAc6iAMgeGAoQhAUYIgH+IQn8NsgLdXTACFy/GR9fclDjaAkARwAfenB0BLFq7VB30fR/4D+7TgACIAtBJwJQALIIDKCiyBCBvvgRgw+/Ox8kAQAAS9ewBElQciatj7FrV+fOXYQAmZP2343+mPwwAH/g9VPy7T33cVAA0BBP21Wr2W3kAwFSA9r1zCALIAvRmRwDI+hFo/S/bLAagbLMjASAvZwawjB54fy0A6n/xPaOeEisJqMuAJso1+tzpT5d7Mxc39m6s7N3IA78o24YAcueNxFyEjjWBQIZagvtHDss2QfrAtDEh2LMde4D7kwmowFOM41oDePWv1Li+DEAFcvcDiQOwewAU6K88hf6gv7Cfac9vloHnOwmwEAu9UB6Ev9/DGBsL2cQGxYnXsAAxOQUYrX2iBaG2NG0PBJPJyENWeUegn1SAAREAhP89GPSuSTeZDuBaJwuka3qeuXgxNbNy8c2eCUYKAP6/RmoAOgXIAkAlfma9pj/3AOWTAVgOB4AqIAUAS9cWUgYQc14MwJCKAJQDAOpD/kQsHO1vgQVoJnbTQb6X92zfD0gDALUAgv6K/3Le/9DEb+psBQBwQpj6oCBARMBUgLo2ATzz7mOdR8agANoCbN2s+M/H+ePVUAUSU1dAWQ7/y+Qx+W9tIFbYWWEfC7pS2p6/0+jRDsCRBAB0AoCmSyFA8gAbN6p3L+kAa4ACBxH4t23srqFb9hRa0eevj/iHFGigCZh2ACt54JO/RqJhb1pJgEzE/nr1v1kV8KOQZZwKJPzH1CIg3h//mk3kALZkVwAlBFjzvCQB8hbfQefzgfSIrUJAGugGmmoc8NYEwjkIYLOPbAlMkwyIBLAKtFE0TyQXDcAjDgCjJ+hvkhrAaU4BXEcDUhcvxm5sAvLkVNB3QgBwJVBODWBdEdivRAAmAOAEgLQAcBNwAX6vYP/S4uKlawHkAEkA5ukQkJMqApAcQH29D+dC0Xapjnp/MNXSyrf6TQ+dndD8f+Lokgk5rGqI+Q+QArwB7b5WTzDWfpwUInlAob/0BKtrQ2obtQAgCDjCeUCyAIJedbEvVIAqgGXV7ABA7qpqzX+3AqAZAZTpHCBDGdlFL/q+31NndQFhSg0A090DVIoE5KCXHi4HigfQItCLA8J2lowlInG5wU8dsWJ1ADoEoNkqCvDxoXwAYMHEnpFUsFtcAIZe/m9dBeiqDIbkx2RS5N8BN1SiyC9Txf/aAoD//+8kAKL7ZUJ9EF+RXu157GYkvA6A/64IBLGQW3uD6SQ10QCIalt79+kL+F2VExhkAwD+R6AAaOuCANzogKETFAz4UhfjMy9beMMkAAkAAP6vz4kACkH8Ii7vsQLcp/mvMoAwAJdZAJagD1AEYL74nycRAKUAAn6wn5LC3mFPHS/SnnqfLxhvHsLZ4Ge3cwRwFIt//v6J7XbkCvrTIBweuLJjRx24T0ApEHuExAJo+hN2MGwFCIVgARqOHPGE2tO2Bajayss/cxefEACQmQzAZuvYMNf+Hx6a/PRhCsBd1s7nZGOJ6QCAbBPg0gxYKW/hvnwQ+yEBTHz9og6hMS/CqKi5D0g2AbgKAB+ZTpA/hMTq9omJwyP90UzTU3vZAOwV/j8XFfB4hod9ckS+0QIY65gp2Vmxif93bcJEBICpyS8fmP/HJMBCrPrEfKY+s8xJQbTn8FXB5oiF3SElAL751K9UQGvAXmgAcAESwOghK0ynqvcM+iAMp13YnwuSgJOjq++4qSwgC8AHXpxtAFa8hZnO4EyANgCqBJg/QdKwJD+/CPwHVlAFAHNeIoARMgAiAN5MMtYxxuQHDepqKzw+tgRRaACKAEuY/1T5E4wo/lvY3uzZsYMbglgF9kEBcGUQLIBAtwUbChCi9F9bbfWRBuRy6sUC4BqwcqFtL7J/4HR1Qx/RuUEODtzsWP5lANuy4CIAhY9+o95Tx/wXB4CRA6G/KQLuANsl/lcmgK4G2Omh04FbiP0pQO8C4LSKqwAI5NafIP52Ng2mWoegsK0tqaanAPD/OaNcVACH4NjA/9MlFPkzNqkh5CcTsNFsBPj/JAHyFtJW3jWgviz6Gq4KYPKfGvYU13niETjDApYBu0Szt+346QuQgAucA6DmoAhfq9IT9nbXmAIgSoRHfrKRhgQE1iy7UQwAAXgz8399dgSw6CMK972FBihPJsA2AEVoAi7m6IAbAYj/L1/BBmC+IgAxABCAcDSs1v6KWrzr6qABHT6OC3zhfihAAd8JIPRHtkrIL4B9PTxZt6OW0/8EWACWgF0W/XUtgAcrQIiRbuw9Uj1Xnw6VbJVLgXvLmf29vbABROqqKo4AcFUg4NIBbNHfPAvQbARkWD52wxPjnhLndZ9mKxCmZr8eBvFlwv5jkgfg8QAW/5lYio1/KiNHAhgWgDcC5grA4WahP40WQjw1ePwpNAYMnuc/HK156ssVlYT/VgVmOhLMfu+MUcHYpMdGPCwCWd0A//v9QAv5Rg70M4SsaP1GCpDLfz7hw6S6UwXUFSkqwoUKSMWVJUBcQE+GmIAJBejxtXUT5L9OGgiZwM/6guKaxMzdN74aBArgjABWfeQtH7nvI1l4CzyB4v9S6gHaQ8ag6Cj1AawlrCIBmNcmAAp8ItgBCvoT84m3+3bVAbJ7FyoQ67+8pxgHgPz4d0L/IaY/HqE/B7DjtbVaAWABGDu0AcCwAQVoC9WH0uwBPJvJAuwu4bs/0e1XOQf2PwL0qgOBG6qRFIAANPCh4I5bwNQATANQZgoAZsUy+/SD34yJBcB0tQCuO4Kc2JilAtArXAwUVsY/mkJ2KUsAWrQDcAiASIB18x+9MyeeAk5kzvfT2UwxDynAfy8C0Cdcimmv/ZvMgUm059XfDAHw/E/3A92Bhf9+z1goLRk6IA0Ya68rmpDhxIsHJj01CdnvJAjIVI0XTH85Gagf0VUC/r2dW6uOcyBwapCT4RiY2BXcvZf7f+pDYx45cOxlNnAOCZkVz5hqwUp3+z133SgJAAUA/z/w5heaTTx5r/3INSAGAAs/UJRPCQA2AC9fNV8lQKQAWlOWAUgGxoj9uw5SHy9wEPyXI3ygArABgemzA9//MSsA6C/MF7QCfIbImR2sAIYA4J5wm/JaAZQo7EaEEcKACvRWV/U27t5dqQSgzHOl9xPHjh37xCc+AQlo6O0tO0BK0ECQzYIO/y/Y5hYCsAUov8P+n/2iM2QBzAAg50yA7F4A4X+fk1Eb1aAJ/ldWzOA2XdCfr+5WAuCIAVwFAL/erzwAQe4UbZJSYIb+ybaM7pwPCUCAgrhfmhtpgPl6+aeBL3i20LSGIws4zxG/J5QWtKu3QhuGiIGowI0h9wOrbiAtAqYAtFA/8Aidu0o7OXztbdSncULiAEoBMP8pCujeG/J41qzENeJ30D3iCzXxUIZHeZJTlaQDIfyntpXcdV0BIAuwfv36D6y/N6sLqNBa9R38v3jf8pfwMQCUAaTdwEuZ/yQA87cPyOZ/xOsB/fcJ+6mfv662biwWoB4qSwPCrSOkAAND2fRvtXNY+Ct+BVv+WAEkBiAjgV2BWgKyWgI86fr6NEYo7Wk40lCye3cJ8RvL/cyVqWPHHj4GQAEayiAApAIW/3OuAccj9l8qAAYqtAO4f7E+AOnPsAA524FNIPfvkgakl1kCkEm1QAD0LxmNg/48wPmMFgAzDdjq7gC0BdD3/8EDEBAKtOBflZyBAswDynNSmmL9MaQPkC2AfGD8LzcE3rG6pOT+NSEpzCekWMH3/BCI9U1NUtSnbh+T58fZllMvJtDYiIASeqHWdDbu8ANyBhIjYjsACADsKkkAX7sQ8bbv/fKXj59gE8AKkMrIYaDpkpWLF96EiLGGtZdcTyUhANwKsP4VL1iUlQK0CS+f6/X6T+v+kgl8FC8pwEZgWwAWzBde+OcuipsygUR4FHzfxbyVjTz7UAUYjQRi0kbpRYNAKNDc/I0f/2UaMMmPqReuSQ8U4GC2AEgzEGb2CQEl1Q2N6XrB3Oaq3t27G+nk/6nq3o7SqWMPH5k6NgULAPQ2QAAqIQBbhf6YDLP6xxDvb54HZDmANXk693kPwh3pBOaZi/LcNEAfHgd67YnsX+XO4QxF/kx+GiktAGYMALS6OQDJAmj6R1tSSFSLBHTFW6f7z5SUa/XRr5uFVjHLAWwyHQC+sAGwya8LgfMvANr+YxWFm57BJeVgPkOEAF/4EdBC5GOT4B+DJ/fMzU0BRwDcVTuL58ixqak5hofUgKUAboDtQCBHAOii5pEBgK9raQmfbv/y3uMXLkABkAbIwP7jOKAMRvD+68c+5llkYyGP/GFtE8wsYOG9fNTXvdkRgF7yTf6rsgASf9gEsLSguAAaIBkAdAnMnwC8INxELVTQV+8MneV55crMjBzrQRHAMDVKc0yVoD8Dux6GAnx/xFz4tW+Va6vHUePfpRRA+E8WwN4WSJAtwhUHOg+Ut/mVB4AFqCYLULm1qmGqem60VBzAJxoeeaTskd7eA5uRaef132kB3EsAug9IJGCl0Xrx6OSYJycJgOmMAWRq3vRp9us8AJ4HKnE2MPn+rhQJAA+nALiHAANEf4FWgChQw+wXFxBtbU66ZwJEE25BAzBdUoAyN2KY2YAtDzz0sf9pHRB1f+QAIQJePoqD7+zCK5gQHUhYooCextPd9XPVBw6A8hpf4Mn4/K9+9asf/vCHnz80OzsFIdjLOkCtQwmIgCEA+Ec+ZAkA9bzHw6fT1BeAMCATwWGANIFUEKS+6YPKS7KKJXkGuBC4igTgzdkCcK8j9H/tR7gFEHgVGQBcxLWkCDWAAjYA3CW06rmeTLqI9hBkyW/CR2iqycSG/aSUQeSHh2dIBbbUeoaRF+T4KZawEwFh8gC/Afs1jLg1CkzOWEHAwX11glqJ/+Wt+d9ZXVuvmrUbKfzv3f3lkrKqqamqfWfIATxsGYAyCEBVb68tAFsxHOR35T94r14Y8ndYmoGGtQW4VjMw3mb+r8+FdzxU9i8G958JoqskailARguA5r+LAAyB/zRMB6A6iLo0/6kwGG2Oe3Y6opBsR3KTGiCCBr4bGrCRpuwI4GLgFmb/Qx/72Mf+90cC5KEIuGbMX6MAvosZoAExUKIQhGONPNzZ2Um0tweBv3z+8z/8lQaU4JCSgb0wBMjV1QQDEaUAgBgAvnOd/3GnAk3pbkoFkgcA/9XjvfkCyMJldy3OIhyYjxft3OM6IATgzbj9N8sArHi5HQC8HMy3DgHjvuCXLMlfwtuAkQNcogoA9Cdwe9AtI+/e92zYcM89L3rRPRvWvUefJbT4wzBIXadO/Q04OT3wl4ni4uKJAcqMjNV5Zs5EeeM00gC8pYocmPIAPx7p12UrwFiz4snoOPr8yAIc1AIACyABwA4G6cHO6s4DBw50bmv0Exop/K9iC7D5ytTmmfEr4D9nAYn+5ACqK3s5BHBKgIQA7gKws08ZAGkD0FmAXzbukkYA1yCA6F+ZfT0I/LL7isudP4EWpn+wKxiPykgpAYgbAuDqAEaE/vTqB9hJcSGxRsUAZGUBCHVry/BOJ9F7jbd8vT6E/gwjBrAqgVvoG5zAlgceBPuBx/73AiBOerVn2CcaINwH9YX8eGPGIueqOu0lH+7/COrC1Z2djwMQAOBX2WA/MDWGY2j3YhNPUzCTbGEDwPe0Ev/lby4Q6eruPn1KUd+6IqzjFv6nm9k9Jj4EgIAf2QAA92YJwKJ1hLVU+beagNH/s5TxqoJ8AMs/UFykDcBrC5/Lnf8M3C5C7w3veaElAET+v4P6v1OHfEIh8pcAE801oeGuVDIVCYP7HEBloARQAM4DfEN4L2ix16z4ZDIQ70A1YZcpACguWms/twJT/F8L/sMCVD1SqdZ/QCzA1uFjW6+IAID/4gCqD8AAkAOoyo0BypQCXE8A+jCyBSDPtgAgv0xnHaBPon8JA4ByVwdQudOTaUkNUsCKkbFjgGulADBMAZhuVb9Gkqr5zwKg+d/E6IqeHC3JJvmc/BcxkxLXh8Q0Fu95GuEAFwE2bgT5hf0YH/t/bQfKWwYb4KuhDb6AcgBBSwRECJKlVY8/PjuL5/HZztljZQ1TBqAJ+J1Dh2wvYH1+8ersFeQOGumK4EgzMoDiAEQAkskUBk5EbYIE3HnqFDYL3kmj586x55j/0AJAEQD4zwYAEYBDAEB+hhgA1Rn8KhgA5P6J/3YGgP/EilvV4nvp0u97iicOn52+OH124h5w/UXrWAMW9vx9aM938TOT/56//GYAm9Qu09E/SyaS7d2DyUgsAcuVij8DxFMUC/iVApj0J4j9jycj9YmIhxQAPYC7tADYKcAdqhFop+J/A0g9J/wXC9DYO9yw7UxGCwC1A4D8SgD0biFM0wC4lgBs988fd2ffhHCOK4Fm/I+3kB+w6wCbdBKg3DUS6EX6D35f6B8MDuo0oDgA4f+1HICkVGjYCsDNBOgDJlj8r6Hc+GBPR4mD9gJHQHD9CEBILw+gPABzX8i/hci/BV8+eF0jPP82gPb3SCRgOQHWAsyawOTUAREA4MjcG86di9gYPzc+Pv6GM2dGpx6effyQsgM/xGBcunTp2dnZd+DysGDLgLqxmRWADQArACQgnOg+ceGUhcE7u8w0wC2YAUTczH98gOnEf8ILsgSgUPiv1/+18P8FS0gA9oP+ZP9fwgbAXv9XFN7ypX+Pfvfsxb///e9/Y/z979PbifMbPvTmFev+osh/z+8Gpk/+ref89GU6+gcScBmZh4FodziCa6KS2BZ4EWglCQgm/BwF/KbFZr6OWJNxmCh/KENBQN0u9ADW2qA0IENagJj/1Y80VB3obBgL7VZAI3AlKq/DWytjGU4BsAHoJQOw7RFkAcsa9LnhZgigewCu5wCy87l5G2ABShw7AjXMHAB/aJgROPv/jrha/jFzLYBrFwDoPrDHKAKY/AeE/xCAEwb/axTgAvwl5tpvveborf9b3SSE/qr4T9xHyM/Q7IcD+D8KgNz6hb5lIw4I2m/6qEme2woBYAU4BHc/noy4AVudRq9cmZo9pNiv3p/+0tNPX7p0dXausT6s9mcqBYgT/SMYHAnEurtJAgS+52R/wHzF/8I8FQBIDcBFAGywANARoEVLKQOI8P8loP/SggIpAKy9dQOQt+HR300T91M9XNhIpZQGHMWar2z/X8D9v51CLDBNO9VBf/YAS4BmXzgZjkRbUfajLYEXf/4MTAAUIAIFGDHZL6s/EIl4Q97kMB/9tY/7CkUBeP0HOP6vraL4v4ro39l5YE74T00AZaF0/di2mUxm6ogIAC3/mEgC9IL/ogCGBJTxFP67JwF59smWVl0K/CUuMrRyAPJo+mMCFXRFsC0BfRjOBba3YjieUas/T20BMEgA7LNAOW1iRQFGFRA/6rqKFgDuBwaO6/VfRKC+xLHs49H0v35CsFwmv3QAgHX/QZv7wn6tAR/8P28IXrbyfq4JQFe1/5c8QE2sZWrz48rpH/r67MOjLADj/DgQjo1aIvA08E/gS//80tNwAu/wXClFPrCZ0wAUAkSSKdsGBHyUDxQ8hyAgD5wXAaBAQPjvEIBVJv9fKxHAkqNw/BQAwAgQimgTACRADMAt8v+ek2B/j1xYRa9MT+pv5/9+cTvTf+Itf/9bz6kLTTXxIVr8Nf3309a/H3nDLfGT1DMBDE3/QhSgPt7c/BvF/RaiPgboT4iQAIR8Maa+NgAsAApsADYT/6urEQMAnZtLdtsWoGEsnR4rGU0GIADHxAGUYaAT6EAv9wHrHIAZAlxbAPhFT85fYZwNxhbAYL+jEthnnwrgil7FMg8dIMMKwBPDtgBRKwCwjgPWZ4IPEfWlCMA5AHoZAhCHAHQ9ZQqAIQFjFcJ5N+qb6L1xOQDUZ+5r2OS32P8Qvv3fTwS4A8kAr6K9WQdgLUhONlSTAhxCrP/47BWmvjz2wMwWgav/fv2f/in49a+hAVeB2dLS0nOTLUoBSAIiIgHxsNeOBC7cf8etKwAJwCIRAPBfFKDQFIA8EoCXazD/IQD7wf8i5v9LMIr2F1kdAMAqh9LcYLvvqRODGaJ+UMAq0JOCBEw8QQKA1b+pKTW9HcQn+uM1gX1/RH/gG75Ua+vIyG8IAyNKAd6Nk4NampuJ/jb7Ff1ZiL3o7PXO7KgDjAigdocIAGUAG5j4oD/DsADlDZvn0NrliSVjLABsALD+Ew4caNjstAAMtxJAmTYAgtxyTt4GtgDkANwMgKK/aIBZDKTHpF2JD+TnYTmALtsCxOVmYP5JdQNS+VlO/9iOF0CZaII0VXNsxQYgc0IEwDzYR73HyjXDWYk26qhEBub184BCfXDfBBMfzxbbAKjnebgcBPf8znhJUq0KQFBmMBA9t62TBeDriAGuxFwMAEsAD4UwdbMkSl//9j/9SSTg199GMPDss1dnp6aunAmD8qmUOACeuCY16JNIoPtWiyB5JABcAWQfYPN/1SLAqhXg24psA4A3HMDrVAZwSUERBwDgvxaAFYtu8cjvCye6hfyDNGSSBCD7P4EI4Cxi/+bDNv33aPoDR4e8LSN//o0C8iWIAn7WE0iEvAhXhf1xQNhPCFO/kDcGA2DSn0p/IgDMfwOIARoadQzQiz2BY5nUGUoBCP+3gf7beqtFANxyAE4BsH/SAuAI5AphAXZVaAVwqwRmXw6WEwLwqKjvYgj9B6UQwApASOkdwYRo/9DhPRMGEHZRNmoI1GeIANA/VdQAtABoDeCXp/yBB3oxNjruK7je+q9TmQj2wX3iuxDfWP4xjSCAncDzIQDcXHP/cEKUNYEhE+X8flaAQ89+/dDXv/dwh9Af0+kAjC+UxT4z/u/3vT1bA8gIXLnijaV+lkyJCNCEJCQDSgIueG7VAmDVFwHAY/Of/HseoP4I1GAF+K9BAqBaAF9SkF+8H/x/CScArB5gbQA08qT66IoXfuPC8bQ/aGKQlSBgScB3H330d4cv7wH9D+Ph/D9f96XojzzAkDdKCvCjH/3oN39umUyGCYNeJAJblU9NCiIKyVgIAuBLwgJo/mNoAdjRC8ob7K/e3IDcv0KIY4Cx0TgEwDQAmL3VnUgZAvr+YNMCYGwzsTVXAMpEAEyse9LjqdONgJimAdA7ApxbAbX/Lvd0BWVIHADYvQCYiv8phAm4NlRd7d8kd06lUudPtuLoD3UM2HZEWXZPFe8mPq4FAJNRY/uAkgc+CXp+8mMPPggRMAuAG+euVQ3sBe2J9wD+peA+vR7CVOCy3wPM/ceUAWDuY+Lj4PN0MPDil3k6gkFFe0sBuBuodRwK8D1YgGcPzQ7HruMAtBYEYvROhmNnzv377X/6q2gAicCzMAKlox1ekAJI6lwARQIoC55Kv+w5pABEACQByDDX70ISAHBeYF4EsLSIDMBS5v9+qQC6lwDx83UE4M3B4+lQvbCe6S9Tu4ABcL34MmE7L/5Y/W3607n/UIDJPz/5gx/96Mm3dXgaaSnf3ejHxoCW5n5N/wgGIR6HAQBC4TM7TPabDqASnl/YT/RvAMcbHlH8b0vPkQA0BuKpKxwBCP8bGkQATP6b9Hd0AWs90CGB08Ut2vAGzgO67wcQ9vdl07/PPA6MA4DBLgNSCTT6gbnHrIu57A4ShJ54PwnBxIBuqggeN/6AGph2FNDlLwf7LTz4wAPYkeiAnFFClH8EnNcg5j/4MTIAD2LkRgDaAGCKIDzwvJ0Mvmz1DJuABI2gagugjj4owAEoAFmAKZ8w3vQAuQgkrgwH6bBLIBk4My4a8GsdC0ADfDVhVgBi/89EAyIJ34Xu1bcuAJICYP6LAKzSAsB/oFD4rwEBWAsDsD9/CZw/BOB1+0F/pACXgv/SA+QUAJc7AqTPBwduNIb04i8f8iIJQEkApcCjWIOw9pv0fyIfPxdcPnu5oNk7+eSTP/jl2McJn/3sxz+LKL4xFIAACP1T8hlH+aQ+xALgjdSxAqgXQwSAC4AApwGrFP3FAjTShgAUBcdS8dTUF0QAaP1nAajqbGhg+osCCEQCcvlvCUCfRf+yPhcNv/f7HATwMFGOKUGAdSkAvUwR6LUMgNDeBjuAQVn/GXEs5TcBtPqe7wfQPQCkmgyFsBSAYScCK5UAsBH4pPr+IIGXeCK2hU9iOPEgpoyHaDDszB8+8YEpZuCB5+t+QG0CMLtUMRACMD6ebD2z7cgsWYCvz44FLPILcqKB5LnE6EtfffWNr351abKV0QIjMI6sIIIBCMC3v40CwSWUB0tLfTUZVoA4P3FSgCgigZJbuRU8TxwA05/Xf4Fh4BEiFC5YBVpr/y9XAWIXsBgA4j9dBqgzAAtcI4BrCcDdoUYgpOiu2R8b1CmBHkjAxd+R2c+mPy3/SybgC86e3d5f850n37b7M58FEMHjgQTUjkUsAbDpH0aXEPjPCHd8nKiPKfRXAvCvz1QoA0DH+gj76c1pQBytMLZtqyc0nIpnpr5wRASgDPx/RAkAyK9yAHgEuhCQzf+tuQagDI2ATmz40RgUwNUDYP2HCZAuoHJhvmH+JQMwDAPgtABxio7Yxg92NYH+N40TNbifloErx7QAAJYC2HlAX0k2rz9p42PWsF7Xoj89OR5AeA8VwFvAEvB8XhC6bM1wLCgWgIOsWAD9PpMj41CAr3/+0OcPTXUkhfxuBuBcEqn+q89euvQrrPOzpZEW0YDJyPj4uT+/6Z///Pa3P/30l56GCFwiG+CvCXMYIK2BnL9JhkfvhwTcWg5QodDi/2s5BSBggYAAGBbAigDYAORzBoD4D6gAAFjkbgCuIQB5qxsZCYP+ArMgAA0Yyc/X9AeY/vs5M3AWaBl9Q93HwX5yAGwDduCHsWgLC6S8QP960F+ASiCf/Sv2H6BeYEI50R8EbgCtaWCC4r0UANQDlVvnGr2pePhhEQCgwRIAIr51JjhA7602svgPZNMfAlDh5mEX3fNLz75yTX+dAeDBDqBPVwFFBIwse4lXeM+k5bI1EoEq6ZdBJ/9zAWUJ8G9EOYPj2gKwBBjlQLEABtvd8Unz04SiPrFfDYamP2f+4AS+RaEA8LzeDbJ45QyOplDymmABAHVRihqfgwdAKfB7c95kdtLfXP4jV0qvYnlHFxD1AiLaH49aCddoBD7gT+QAAFIB+v3htqYeSAB5OPnrje/RyKhn5R15N0V/zvQp9pMBEPpnCYDqEF4B1mPqDCCwFhlAMgDM/9cR/3UG0N0AXEsAljUq1HtN6sdyFYDuQotPZK/+bP+F/kA0BMrD+dN5YdzVRz95W+IxrzdG5yzSbmE2/wLc/x/2fBbU1+u/JQDbOkUACCC/mIASBABAumRrX2MiFR+HAFAXQIMSAKoCbO4E/RtUDMCochgAzX9HCgACsMy1TRpnA4kCmBLQx10Aiv56+cdjtt9glo/x2fKgvoUaxgk+c/bLAI70xcTXXNxIBU6A4yICUARAOwBBU8mDxGp59MJvegCm/nU8gDMGEAmQ92N2KuBlz+sNwXl3ebwB/Vc3EB4fRxaqdSTJCvC9Q7MoHZvUl6/hCPWxRmOlszAAv3oaEvDpT/8KFJ99Q7K/VYAtb+f+/Y+nn0afEIsAXEJpdwI1G2nLlJOdoQHJ0RtfBii0FP7rBCD4DwHIM3cK4Wg/FgATHABQD1AxGQDhv3sJMM960WYjV7wM9r+R4HM1AByrciYArjM4YJp/YIL4rxRgaOhs1PNZ0H/XPsauuh2kAHXhuD9EbFeoz+L/3uAoYgBbAWwB+HhZJ/t/UYBHLAkoRwAApD1lfR0QgNIjX4ABwO+r2Qs0dFZRHVC7/yoMXQY0+O8UgLI5CID7/3XrKA1QrumvmwDwadUBc8p/MvFCDwBhEEyl42sYPh8e4mkgk8HFAFLUjyOxAWRQjuZ97Thr7jjfBqj1wE0EWAO4dMCw+N8kFgBUtyUA34X1+lM+tExo8uOlvzxkOgC9BwDD1oLn+4rwu+8fDisJ4O1pOKqaca4MCoCOgNm5WCTbADD7+62If5yCAEQBAK/ys6UkAYJoJDB+9ZKyAJjPzmairQLdm0WuLnnGs3LZzfAfyDIA5N/NFADxf0VeHn7dlABa/7kEiHOAlqr1f7llAPAHC13rf3myvdCBhWs4A0CPZP9jGDRNDPKoaU//Rq/+bP9B/7MEagKePhsT+u/CwJsVYDgeo9sEBSb9IQAcA5jrvwhAAyf/QGOWAJBfxQCVIaI/Lgfqm4kl4vHSL7ADYPqzAJTBAVRDADbbMG4HNPmuf8EEigToA3JvlXpybB+nAcyNQJgYshtQr//ZaUCMkhqq7uFg6Hof/l5m4uA7HY3IvdMAEih7CObpP4SzA/RPlTaiU5ogAD3w4XzKp778OYcUHO8mDYAN4FOuxABoCyCBv0T62Yu/5j7P6yUCMU0HILx/TNcCMFY+31eEIwwYD8eAACHZDIz8Odl6rqFh9nE6HmAuYToAYb9Gf0vyHESAcYkqf1chAf1aAoJT+FUAqYDZSKsTvGEgCgmYWb3sJgUAsPivFKDQ5D9Keovwiyb/lQF4HQxAweWl4D+1AS23UwDwD04DwNVEdwFYXI+DkSQI6MJOXh/trgiyDOS4gC6v39/u/xFif6I/8/8ssf+wLQBDrR0HwXs1duEhBdiRiPtCDvqD/4RQrO7jZgQAcBWwSgzA5mMYbAF49obSykvUIdaLxx+GAJAFgARg9gJlDSQAKgMo9K92GABX/pdhQAGcbQB6TwCCABQCNP3V8i+dgKA7hrH6b5Mm4D7YhhDKrL5ELBMF6TUuTl8EcJ/SYZv36s0YODwgUHeFTU/LpnR0bEJNnCkBaAAMBh8IYEIsAIa9+GsFkJ8N+rtDOgI0/7X136J7gYDVENDnFwgDzoTVvb/jk8z/1nPj5/onp8qO8Nagho5whIGPHPabq/nkZOklbAmADyhNyg4NIBq+CgdAHuBS6TOtjD/2y7Sg9g1GYzMr77ixAJgG4LUM3QWQB/5TRA8BIGobBkAygEuKwP8C5v9y9wyALv2vutYhwYvhAFgCQphtiLG76YJUP25OtWxAFwatYD46cbHd/xvUHlUxYLuQn1cqvv5rKD6s2L9FqUDdZ2EBxtD242S/IDhGAqAefSBoRTVABuCYWAAJAXrHWAD8w8OpROB8SgnAsQaJAMgBwDqQAGAK/Q84DQDbf9cUgLQBuN+NMAoFyM4AkgQI/W30GXUAyhrsLJkZHY+3NA/ggjQAhMfEUF+m9eJvQhRAuC83BWISpAsQFzXUnKAMghkLUCiQA6iBv1xzXk+L9o4AAFPjIW0BcmIApwWg+cHnXQAoDBhFth+ICv/PncP3Pz+8bTOfAlA11sWdPmjt14T/I00T/dHSS9/+NhSABaDFEoBSLP2Axf9+Ij4mHvvfIUp9cNgfG+7AreA3bwCE/7KEC/85ICjkX85KAEgJUPivBQAKsMhVABatKOSv7g4A5GcXsLtxPOn1eemU/zRAIiCo4VuVSRtC6VaqBFD6T/g/wMs/L1DT0wks/WC/DJz1jaxALOl3sl/gHQb5hf54iQBUsgCA/jx1FqDXk6YiQmI4nPJmzmdYAACs/0oA8EeqWQAIYD/4X627gbHIC//dBKBsjn7/ZdfeL/GN4Zld5WYGUFKA1AJQwUEAplH8A/nnrpybbKaeXnD87EXCtAzWgqHDFvf3YGIIDosCgP4DzP/pEfNgdTvYRGAAM5Buz5YApwZ4HrQqf/LOjQJu7AB4gvdmBMCP0F/qgLeFACy4Y82ZycnkeAvzvzkJ+gMIAzxlrAAH5nxoCJhsBTSJeeKbjeTspaehAE//IzappaLn919SOYDZqN2ULf8qvChYG+xKt/NlBbgDIFQCE3CTGQDN/1U2/6kigB9XCf/1+q8MQDEOAtxPbYDLuQuIzwowewDM0v+qdYuuJwAsAXsbIwPFPz3t8xL8iUQHOQGlAV6mPwSg21/flm7h9R/8F/rb/MfmtfgMaK88AH0iCCALkAgZkb+Jvb4OK/mHlwIigAYWAFr9SQIkCUAiwALg7Rg9n0nEz48fEQdwTPhPd4JUIQuo7H91NU6FdBqArRrZHQBlkABHG4B5QOArx/aVi/sHeOXnVx9eJvfZ+O/ceaX0z0PbuYufQYt+s9YAfDL98QCa/Jr+Z+31X45XtsgPRBX/UYIGSAWOcxkBoAxgjgR0STOQlgCb8pIeVD+4FwMe0t9oigbo4j8mLf4iBdhMeRtg8eoPf7S1X/F/chyga44irf2j26pZAqrnvAHT/8vi3y9WgH/93FXaG4wIIKL5Hw0T/Yn/55pZOvBgqG/0Mci3fwhwNPHu+++6ngI4DQBQaMX/VBEA8kwBUFcBIfVHBqA4H/xnARADYJwFLBpiZ7FXXKsReOFqqwrg/eM3j373FxAAHwnA6PiZM2e80AA+Dxgg/mMgBdce1fwfMvnf3zLdjCyAeAB+swUIZEIMYjweE/7RWsMAyMHgdWCvRABwAFYdEJMFwBecGT+PFMD5M0e+Jw7gGAmA6gbczALA/OdWIr0hWNt/NwMA8iMHqM8DcqsFvsEjCsArvzgAQG0F1hYAi79nnFZ+7e33HMZZKSwBzeL+BxTvxQFc1wCMjOQIgFwnmiT2K9D9tt3tEAGVDugy6C/9wFYroJYAYbx+m+R3RgEPmRIgfQDqJbh9BGDBwpWrP8phk+Y/Dq6GCZhDOQDorJq7EjMlQK/+/VYE8CwfHHj1zGSL/evhf6s+gGdL5c+SdPzxJN7KPvzs+IlTp7LuJmkrednC6/PfNAB2FS9P+E8KsIgEQNNfAgBkAKABzH8WACDnJECz8l+4bhV/dS8Dhmj59/3stz/57ne/+4suCgCI9GfOxGh665GqgwGAAqiRBpP7l2yX2J/tP2DtUB2KzNCFvzIwqSm4I14P4rsilKhj5qspqOT4Hd6fHYD0ApbRU5IO+YOjJaPng4Hz8StfgAOAAlRBJxr4QDAQn8oAzP8DDH03QJle/g0B6NMWgBxArzN1ax4NcEUrAHMfD2Yl3joBiKzfzpkk09vAHnCeJACQ5X9CVn7DAJgCAGtlG4ARdb+ilJpsAUhZ/DfutGxKt7EGqGxAlxreEpv19JKvPI3agIiAuwnQDgBPThSgiwB43R4CsGDBXavfSud4Ef8DBDqw9nRXdPLKXEMnHxNUNTecCCQnuSBjw/raMnnu6rN8dujViP7tltglrP5UAGiRVV8MgPXUnLiAXYHdafOu0LGV7lGRjgA0/zmLL/2BUhN0CgBvAqAegGLwnwWA+H8f8//lK/IcBoB+ZcU6SgG4Y/3exsZ0OvKX7zJ+ypUAWvLPwAJAAEY7hmH7Q8x/UYD2UH0L1n6BXADC9I9GxQJICICnFgLgSQYhAO6IeXj9FxFg1DaQANDKzwqgmwEhAO31idjM7sZMMHM+NfU98P9I9TGABeARDvxJALZWHVCo0veDlcnyr5GTAXwXJKDy7usem/CjmRlSADXAfVn9lQSwBrD3nwS7hczaAJwU+jfTHII7AO/FA2DyEPpnG4ARpQAEpwMAIqIBAQHyNZQVUF2CAL08D0jwr9N/jm5ghvnNIQJ4yaeuA9hpQPn54LIFtwnuWD06OZLF/yDu8h+MB4bnqqkccOjxA1PDHd4EYoGkPosR6OdS4Cz4DwV4trRFC0Ok9BI5gG9fOmOpxR+z/EO0m/h/CteHqXtL6Uai9Ifvdystw5CbBkAoDgsAD0+/xvxfwSjEV6G/lQFAAAABWPI6MQDLJQOAP7bKYQDy1KGi1+oDXrTg3t2h7gt/zD96VAnAqRQWqJPxcZ9X6N/R0ZHwswvwp7vTjNDe+rgiv01/4X88alqALfhSq9KAoWspQHDYLgDsIGB17SXaG/wX+mMcDNV7Y95GbAjgFAALwLFqWIAqOhZUWf/OA/gXCf+r8Qvu/Hd2AWE4BMCxL/A7YwcrufsfgyePSgzb/I+2bM+hPxF96CQbgFaOAMB/hvDf4QAAwwFMj9j8zzoLNG7QHwgM0ogpEUiQhPvA/iDJQNBTqflvlgHlUw9DBT5h0v+Rh0wpEB0Q7mNaP9xOArBg4V1rziECiDH/uTmoCwoAQUwMN3Sqg4Ienz0yNTVMMnAGSoFqQTJJvUClsAnPsgA8ezUqTp8+Yld/hQDg23/9xzk7AXCScwYSPoTJADB89eqmUNwNuvquuxbfKAMgAsAOgASB+S8pQZYHxX4zAwgw/20HgKMA6V9tSIzm/Iq15AzcXciCwu7Td44cBf+VANzZ8xLC9l92/HIc9Mc/HdYAELg+7U8L2nb747z2C/1t/qeCrdO+g1YZkMCVwI64z0UAOCeQGN0h9N9ZXslRPEMJAIJ7FgCrE2i43R+LjWFHwOfq4+dLH4cAsAJgQAB4GzALAL0Yej8w2L4VX03obYA6DOjVDta9G+BtCAIk+UePdAAS/WlWfHamf4+mvyEBbABo0muA7b/WgJwigLYAWgJcHUBKkgDhDN9uydQPUPGW1ztO3TTV4C67rply4b1IgOhArgYA8uGOh3Lpr0uBNG8vB8BbhN8w0h/WBgCoOQ3UnB4+xhKA4wIBfJtSeAe/KUIA/1kAzhmhAQqDaASGAFw6J+UD+S35QSKAC/4xuin0DtwTKivwdflfKAxn0KoP/hcS/zkFwOqApR0MF/5zBkD4LwYAAoDf5X+1MwPIBmCtawogD/2B966/884//g78z89nAfjJH7rOor13+Ut+M/rLJ3957g3QAPDf39FBqYC0jd2Nvqiw/6J5PlXGFz+bYQvAGkDYgQ0BqAPsdZKf394YVwHqhjdua9CLPQp7/Og+QPrS4W/zBTp2M/yphw9BABjV1cegEbD/mCwAspm4ivkPbEYTkPDf3QBIFsA4ECzvGmmAUVIAu/unAty3jwJB7O80/+C1GABIAA2s/4r//Bbvb7LfUQQYEgsgDkAOA5QIwHQAmKIAAohAGlffne6oEPqbcDYEGfuCP6G+aCOgWS8K4ATLwO0kAGgLvNLSEhb+BzkmggdoggawBAgOAZ9Xhl8Bn8L/UjMxkCy9dIkdwBfH+VdlShURL5wOCPp7Vt5941poHkH4TxS3oAQga/1fgaXdTgCuBf+VAcAuAFEAi/8UP2Qv7oJVa91TAIveA/b/bOS7YD8G0T//u9/8+emL4D80oKXjlU8++crv/HK8w0/o8GsFaIcFaPQi3geyDqhMBfyBof5hqx2QQRuEasMBB/vFAfgCdB3ITDiamDnYy3RnMP/hAPgD/MfrYMfpUCgRsw4GC81+3nIAR6rJAKBucIwEoHNzlbpOoNo+EQT8xxeHAPTxNEuBfXAA11WAdd+Y2ccKoByAcSF4+Wc95waE/u4GQHC4oGDCgvIATogEADoIcE8CRFK2AigJwL1tgywBRgsHTgjvfUQnAM2lX744sgHCfQ0X+m/RxN9ye1UBdBgwM54E/7mhTRQA7FcSMHeAogCBqQM8Pn/o0LNXW3SvH1IA2CyoHEAp/ar8zkn6VBLQ1X3qtHMXwPUNgFh8Jrg4AIP/Eh8I/yUA4AxAkdCfLQD4r2oAi3L5n6cMwLpFLteAfWj9qZ/9FIs/8x8OQGKAC8+8BAqwfPnl4BuefOUrX/nkK3+ZQFKQEGIFaOeBpqFEPCsspZg0gxJi67T34EFm/xYRAChAIhLK4T4mP/7A2I66M2g1zqRw3yBRn8Ef8hV48OBMx+kaX6M/MLxb8Lk5OABlAapJAND2A9AR4lVgP3BAnwyM5R9wTQGax4EBN9rMsnDDD2YO7uPkH9MfD8cBWP7PjExMuJCfTvKCAThJwMUp0RbYeRT2hoYGDuN3c6DpDwj/dSeQpKiMGACw+D9ohAAm6OeEt2PGU175oF745YuOCHT6X15uGvCQfms8pj9uk0ag7EMCRsODqqOVQRYAAtAEDThRP9fAGiAqoHEIAnAICYCkpPclxKetgrAAf336inXlHSDf/qiSgB5U/W6MnCZA2eKvBIAEQfhfKPIgW4AlAHgdlQAKFP9fogVgbZYBoMtGdAYAKQDH4i/WX/M//5sqBrizhwxAUdH+If8voQCEcwnVCwC+gvzt7SHM3bvrE3FjQeK/jUGfFzFA4OBj2gGgDEBJgKR/L/NduK+fdGCsPhFs8jUFgtjE4hueeezggwf39fY+gPkg7g2amcGV0KhLNgH+xkQCBkDw5anvPS4xACKAY+gcwCDqV3cK/y0FAP0ZzgjArANiADfS78J7vuPZV8lhv239K6jw37Ini/5CaNB4qPnP58YptfTvN77xH8BVC/TDnxhv+tObBAOHDZw1W4GzLEDUtgDiADLsAJQBAOVdUOMd9pT3ZgcBGOYWYdAdH1oCBI/guS50IvD53wzkclLQTGJwEPzXDsBLFsBHNqA7PTZ3pJNXf5P/h35IF4aWTmbXB8efZQeA/sCpVLOs+2QN7FRAczhNMeSt7AO0c3yACMAKqyNAOgQ0/+UgUCoBav4jA4DfkQSiqwFAi0BhzuL/0TvvfOYv+UdN/h+FA4AEUAxweb/a7BP1v1IwGUMxGQqAVCDRPwQgCPAnEI8SrJx0wAsBCKIbEAJg8b+uVm0JTLRpmDJQHxuracqGD/Cj7cjng1Ib8Ib8sfrdGl+e+0InGwAIQEM1QagvAlDlpL8zAqDHxA33s95LicBKyQH0qevAKj47isBeh/zUAQTit/z73/8GyS9hV4krnrZwiYEv6tdZFKAGWZVWpwUQB0CFAJ0FhP0PBK+FDlMCtAGQR+8PFnyCH3f/764CD71swe0HHBeIraz6JAYKAXwnTlvoHp6bOtLZKVGACgTouuCxmIT50uUvAvBpCMBVny4O8geKAQz//TfngLQBQJ1P+A9QCkDxH4P5rwWAAf5zD1ARsf8lRbz+owooCmCv83zPmDYA2RHAIuT9fvaL32n248UOAPwn/PYCtfqSBhxNei0F+E64hjKoPigAyM8agCDAF+/P+qtYQz2EvtZ+rOKqC2DTrjrlAMaSASE+nw0g31kGYt4gOI/JAzMH/Ktemv9h71pg4syqsK1oO1oEyygFH0iNpL7WipjVRFqNSdUa4/qOqaOTyXScLpko6MoIk5mh207dohIY48QuGsGpaKoZJkw2YglGJCodlnYBI4+krS6W2Frdkkq3W5v6nXPP/987D8r6Zs1+959/fgZoV3e/737n3HPPdTe5oodNHBt9VDmAAwfU7iH8W/z6N74uAQBgbQmWSMAEeF8c64Zw76LuIOoQIEkAfPQrcw7HIQvZ7MXZDjB/beIL+7HlXHDFRL4Y3PsmUF+KrYC8JECLzgOSA+AFr3x4KP4VCcCKoIkDhv3Hg2kC1oVdEfA1/eWO52xAbK50dqLfMoMjAAwDCxOD3c2jlx999PvfY9DSYPfgRPdxfwcA+msH8EuOAZAEmBgS7nMhIN7UUmDcWfm02G8JgBAcBBYHoOjP/H+uEQEw+WUJUPoAvbhMBID5j0Kgt+sigBe9S0qA6BkGAGsA+lsVFdPXT2v2YwhIAR7BdXbhEPhPnX9eEHD9FOz/M42WLoKnlxRAeXn05wwEDfr7FP/d4VCGYgAC+P9ZEYAWnvCxy5DgpmiCr6bjXldS8RzQQmA80QNLQG9zjgFoxS83r3wP2f7vH0AeEPgWqbgIAGcEhP/FDADbfx4G+Gigl66Xx3rfr1eWvmo0//1odaSnRy/5D0823lLUP0/TP183TSmgLrPYZQIFyBOAb2BcuoI1KMEFLSF/ufdaP+80ZWgLENMWQDsAjHxESQYYox95gKhe6APsDcMHjPJg1oTi0EUBWgO+s7FygEYmgOIA2wFMuMkCtOWIAAAhAPEHBy1rcCRK/4+b24N+iQ1CFANcWOnSBUAG+lOjVZufvgMQA2AIAEHV9Av/ZYmQBaBGDAAaARLKLAeAb4L/SPXrVoOa8e/U3wD931dxdeYRe/IHiP+iAbD/BKQB46rn/4mT5UH3HBuAa6/88+TeLkK3PXsjGnfF48L/ZCAK/89XcnaEBEAUQAmAsyXWjISfS4MWFVgAjjRHhfumA5Ant3YAMADuTs3+VngJ9AftzcAEkHJzAKAEAJJgGAB5KFIEUPyQwMuu/c9TAdRdNgaiItA+BfijzhAao9uh/yQ1jbFj/SvUYAZfaPr/Ttv/CwJZfjLxDRmGDty8eWdSjlnPqwZsMdcBitHfg0ucAExA9cOa9wKzIMBk/TppAN4fbOYBdm+4FICuClrKuFgAtPefWA+93paOkPb6jdQxFPRHb8Arb/ZHQjo/YO8Kjldkdm95WksAIgBiAOowSAAwGMJ//r6ZASzrKSEDAOwC/5UAEP1pQ+A7X4UGoiwueNmUJ2VQfoC9/xRP/gKhPrhPQxTg9JnbE7MnrZ6fs57oT1/552t/xjWpTFQbKgFlK9/hprgvHuYOVkx/VxuGO5A+BwEQ+msB8B5pdplwK/4f91bu2O8V1hdYAH4xXJ3NTaM2+48gkuAGY0oCvgUBQP7PFgB0AWCA/sX5/yFj/sfNFIClqGv/8++eCHj+e1+59B0mP/N/GIbpqOzoyaYbnwL1X3Lr0q1L+fO4hgiE4JLge5c0TB34hvpT6Bdv3gkum0kAUQAlAOIAZClgbbigABqY73GJDTBFQL8O3NUCmF9UPmfDYsv2fbshAsgsTTxtIAzojkMCZKKPcM/gn6BD+F9/8stLrjizX24CHK7rrS99+ouAYgBAf4njNf8NA2BkAOUsMEz/gEoBAuB/FgqArj9Mf8A+9ZsiAHp64b6Kq9OP68SfDFya/xQDAFMVXS+gjv8Auv7F28Z++mfGJOi/AA/Q64UEtB45QhYgFfVHPWT8XcR9dgDtIgAEJQDSGVCYP4JLFIAEoP15OOp9ZycT3SS+vnDzuN3NzoNMfvQsaRL6K/Q2r3yfOP8NWwCoKyiFAEL/ogbg22sYgG9nPK7oK9bJBD4PiUAogPL/xP8e5j+Q7XjjzZeAvzwuEW8ly3eT8FrCu+8NAcjr81JgHxL9CsPc8WdycnIOKwYoSHvzm18C+8AQPeAWNXdSqXFp/aPOA6eObQKuBPBj3Vs3duRJP0qTP25iAlxIBBQ1AeaCINN+fcjOoI0dAQg2l+6o3Ll7j3N0tNnb/bQlwB3Wu4Ear/wW/xJ+RwqA0wH8y6H8TkIJwLVnx9Pn/6u0AdAC8BrwXwuAwf8yOgoky9O/GQDQGUFbX/zOVykByKkBwvzPBuD1FVenHrFnfjP8F/IzHmGcmV6IYfpXbf8ctTfGPS2TrACJBVKAiV4qCgYDKQsAHhPAZ5IAVgH/7Nh3vibsB7gO4LO+sMtL5M/3AMdPTT6P/9VU7syID9ASYN+8KEl2e2X2b2X6N+NuSgDl/wB6+7QwX8/+BQZA6F5EAKpd0LPoC9dLBP76HDwA7/3pp/+nHHYGIHLzwiWAOXsB4B7yOFp2LhweAt31yr9UARnQ1UEXH0uHhsIBj/vNVJWqcwLkJC4cK9Ya9BTQrdqB+oHcMKDLSAUwPKIAGgfwkh3D8qJnudbNAzA2QEvQp4FNm7ds31FZtXN3fX39aAYrW4j6NQaNYaH3uCtsT/WNl/AvgRXgrz/5yR8a25c7crCcIHRJNcD6RQDMf6AOoHfhv0X/QgMASpY7ygSGAEAYKASwHYAuApYigPfB+5t5fxkiAEx+rQCP315YVm1/yi42NNQ1JNo8e1tiEIHxhfGurnFSgF4vGn22go/gPdPefrm7+pEDIP6rCABnhKAUsB3NwTVECnBCSO/gB55vy/PO+mY4tNwVAHcmg0oA/rSVCwCpeQG4zxYA1Pdi4B+n+VFWAET/EADM/nkCYDUFNA1AMRFQBsAV3b95vUTgz1agACj/m+sBJAKAAUi/8akrtomHvb9zpyW2PKTwGO8AXAN99JIh6JtdbmumP4flROUB3vyOn98VLAOiAkYc4GETwA6A5YB6hBxg3mvzbz8a6YCnA50GuG9DrgGswcItpduhA9isU79nz+ho/aiz9cjgBJrfBQLJFjrwA00Du0QCjh/3BDsESPFAAAh/+evvfvenR0faE+jxKvP/chyAAqRGd695NgARVPhvCQCx3+I/8vkvf5V9SpheAiDAADD/d5VlNf/VIQEwABIBAMgB6iVAVQb8oj+z3cdLU1/ob/NeHghTt8dnqesX6N9QU9PQhX1l1Ggm4EG6FOgmBQAJW2lfHrn+HAnwREZQCigG4CAEgI4I8mkB0KB+I20f0GuUmyDOVTshA82ZTsLICpUBecUZeJpYAADLBABeywR0dz76LQALAd+igqB8B6AFgN4V2TEKcBn0JwV4xXpuEluDoQBfGWP+OxSvwe/+m+ct/r85RC2/ZocshIT8d5MAEQF6HAiF2xvfePPCFSQBhP233nykeGPwbtp9yh6A0G23BjdFQGsBAwqQhwM6AMCbjgLoE3le2wJsmIaA/7AQwBKQFuz+XCYVthuEUKP/yRgdFMwiMIhItd+y+3OQAFaAv/7lr/AByM1C5ufm8MMpLsJy0Sk6bmfVmhJQYADqxAEQlRHTv4bJTzfTAPAmADIAWP5zYGgBIAdQTvx/kSkAEgDAANBX73v8kTNnHjldwjCnf016xP+GAkzHB7aWNTQ8hlEXJ4/v9t+4kRgfb+tmUARgHyjSZtMfFwsAnQpAEAG43xAAMwuArSrdXe/dlO/Rdh/OjBFa5nxetM7vPezlZUCPl0MAVoAjhgJ4e+kN1qHzUTD/G9/gCODThQGANgDM/eLoJAOAVxSByTppgFdmVj53ztFDyFpNfS6+VgzAlfNv7ndAEAaGbPSJTZBbIfT8j9+LBBpfckuxn+h/k46kbDslbn8QTxrWaQAYIH8336AIdCfZLqS/Ry0HavtvVgbLTRhPqiBYxxBs0Cqgp2MFkBmoX2nhlt76EGtGjGitUgG9cTvQv4Nk4A9YAggcDSCti2Tum9/8ttFWbyoBpNy0KWjzltLSzfns1waAlwDqCJIFeHG2rOblRP4iBqAWS4AAqO9wGAZA1gA5ADBTABIAvBMGAE9/PnPmzOPAmfISDaH/GQD0J0geEK/HpxNDDTUNuGqG3NwndBX/mA0NFW48urp7WzWY920cCLAUeMPnRAAOAsoBOAMiACM5MuDuHoyLAGiUHnaFebNbMMb1v4cfcgdUQGALAJUiSPRP8DL/AUjAN7AXCPuBLZgnA+YbgCJY8bjYAHii+9atCPzSL5xL2R6JAMQBhJ46L/y/0shb/RZt/s8eXZP+ferSe4c64o2vfrXF/gsgf+NIG5/+oc78wjWYKwDCejAeT25xAd3AqW4KCUwRiPJdFOBAQSZAnxkiNxIBPN5dAjbeVuD1II6zEsmAlXNjkx3BoNDeID99QnLg6+KqgC6YAMEkzg64+RPgrxZwdiiWcy+9bSSQTCikXKP1jPzASLcCkgCAwfwvL3/xPdwJ1BIAuw0oHQbOBoAEgBVA8Z8VADx/DSUACvjPBoByVlNE8ynAVABmv0F/fac8wPT4+BDsf92ii1N8qQbGDQ8v93U3awFoUpN/mzQTbG0NnxP/z/znHMBSSyzqEnTyxWlDRPbD731OHnZGg+EYEOz3dIP/tPk/GPa3Aa1aADgM8GoJ4OphAIEAHQ1WbP4HxACs6QAue4j+dFvPAgDv+hUvAJgpwL6nxACcv/C2jixvAzYNQCH9C5UAf0j/GKw/rwECt16CmX/CYzb8biOcMvkP3oP2gEgA3niwBDAGDSfgwSVRgEiAvH3YyAMYxcGCNWOAjbsPYE1s3gzuVxH35yIdw4RgIIDZ3qB/zL4ATgcc720x8v3hwFjjHYC3c5xH6QfWcxvHJq+FExYqEsiZIWPm3FlZunnTZiGm1gAWAOa/eICa8pPlyAAI/w0DUEddgI46qAtgOdHfCgAAq4KQ+M/HDVOGQTqBv92qDtr0gcfJAUwBF8sV94X+sAUUGgi0CSBMXZ1ILFICgLl6o66BULfqZu52UwSAF8HrEgnA1YxPRQAOyqHf3BUwBgEw5/9OdWsb/+O78ou2osqHBYdT4L/7GJE+FgmiztjjNgWAFIDRqwIALQGPPlAs/gf08SDF4STue3CGIS5X5boLy3smt2oDwHsA/vLUBeb/hacujXHGz6b/8iy+uiv92f2je3h/46shI7L6/5IVN6Zvg/zsAQoEoJu5r1Sg275Afjor6JSF/HBAGgUZOQC5yyYhc4vw2niGpQDh+CnRVO90Zs61twT7yfb3Y0k2EgDyJABowRAJIBPgihilgTj4Oi7nCsfm5uicgdmBgeGOcCKVCFQoCagYH1xIJNpxYChQVVVZWfkKhZe+8A06AGAQ/0+cvocMwBsIuQagrMfBAcBphP8ENgCAbCHAr7D/F3AFEPgPqDXAafCfHEDD1OPZEqgI8VuCAqG/yX+9HDi+kEiRw2cDIPC0sQBIEMBExAeSAuAvIyPYAwgo/vNZ4SOxgKa+23IAMADz72W50ti0j/nfMjkc6OZJnxCI4JBhX1uyVQsAKhEsEyApAFxyyzz6/UL/D6iHQgMgX2ZcgIQArub1AtpNu1ccPQyHxf83IQAQ/jceIgGYNQxAVvYHrg1yDJE7N7HSd4WsP9KInW1+OpJRQwUAhEEtAEJ+K/5nFZBxCiIg+PkpPjcA3YJsDxB1PmzP/wIRAd0d6ABfum9oYfGPvG38FOBmpj6qgZY6R6J8cmA7wdceo+NDWnL4H7OGjRYfm4B2SIAN9UjHvIXQsyEN0P7NjmACZ+kSwP/UMiHOfxs67O3v3I8LQKdNd2r1RkMDqP9kHaGh7MTLEHS/n/EawDAADpT/OkpoG6CDkWcAoBlCfykCJP4jAOAMABmAKbBdWYDHz2w9MzUzRU/4EtO/Sf1yDJn+z0AgKA6oSGH2AVcTDRaUIkywBRBAIFgDvMoQRDIy/Qv90e/HWgXsNG8o/lkYyDcA4D9jOKn5/1CUCt8iyY7oQ4cPawegJcDLFqBTSwA0AF3FCvhP96L1P2T/M6xJLkoAQMkOr+MANlctHepRUJE9+I+ZW/H/SiPzvY+pH5EMQB/h0F1UAJm/NxL9Oe2PcNKLJgko6OHmvuZJP3kW4JQ9+bfhgUVADIBJf7rk7BCzJvABoX8RIRC+r78dgLGBDYC19F8v1Pf5VNUkHvBI6IAFiOU5gJhAG4GWdjIBx2MDVLKFKw/c5oEUoG9gOBJHWRbm/4kE/t13DC3n4Cxeq6tXr44nIQDCf6Cm/DT4P59MvhF47btv3IAY3EPAd7D/j/uAnXYABREAdQ6h+n+GyX9ZAnjRtOI/YeqMY2Z6BpgC9PSvvb/lDuiOa2r69tVx/He3Sva/gbCqMn4TvbkxAIbkBaKRUaE/8Z8VYLSFTxzqVAYAQ8HTlngZQhQTr0D8HwTd02Hi/xGiPycBGMPBhwwLIOpDKUBWADCfbyIBnZnLX9D0B+R9Df4vuaWkieBFvWHpOo3nnQNbTQOABCC4y/k/8F91/euwA4Dwa//yl5uEv9x7Lzb9Hy1G/77Qay36XwH93X7u9o9Wtiba6MXoznEAgxbtjfkfBgAWQBsADPULbXYyMFOtqY9LZf9191Aa61QES4+QDboNYIua8/egBlio7zMRGAsQxoLDIU4CiALkz/4trAAAxwG9k/2T9NGkOjBM9mjSTRSAVnEH+hMQAMTQdP7TQJo0IHw2vHwWw8IqwPwXAbh4lHJsb3z1qxuBN05CHW6oqLtma0kP8//kSW0AAG0AEADkTP+bhP9UGkBFKzNnLAWoefzM49NMfyCX/o9sVeznH+V3XHjN3L56tQKNThPqH6juBnMEFsCIAThNIPzHFkGn0J+6/XIKYCQcUKZfDUsA/AuhvDWALVhI9bX0p7Md3YgPmuytP+EgEO4IHSMHwBLABoDRRPQX0uMSCWBkLl/+whc+pLEm/y9n3AIXRvPhY613L2or3b2S7hFkyf9nwX+wFxU7T1n8z6Zt/t+5yadNC5662X+0sGtY6LWo82Xzz/RP8Qa/FMX/aOur+S8DMATAbVv/NjMDgJFvAABtAyQReMBMBOj9AbIvUGivSwI07U18ZiMuAWzaXV2NGQLMFxTSX50RDO72t7ACMBTlDVhLAgE38s2qLR52xOPZ1R6IRTqkVYPV6YkwMBRPjKdmcfojf8mnPA9FloPLNm6DT0oAausItZxkf+0bBe9eXKQfeKJuG/f/d1AVPwxAj84AAFxA/E42AAROA9KxAq+yDACvAU5PiQAwZgg8/Z82sfWR04r+IgAiAcAUFACoGBcV6CIKIwgwYoBmDv8F4dhB+8jvT7IKfLYl7KUf4fmfhsoCRP2J/BRgqZsnN4+vTfgvSEaCQGSg9xhqD0kBJAuAS0mAWw1c8sJgdK6sPPqAQf4P4QygPP5fVvQX3eDpv7X1rgcE7Ngz1ufosQwAkb3vXtAfF/h/a04O/RhaFv43IjSAqZcKAYQInR1H84L/YRX7A2T+O1PJAMACIPTvMjQAwO1UfhJAhMAOAXCd0jGAHgxLAlQa4IDcxP4LhPGsA+vWAGzIKuDSyvpRxIjuHAkY8wXoBf4z+UH8QBCuPqYTAHOxgggAQAyAwhU3quE8qq0I6mGoQVav249sIthPSJMFuN53fWBxaDkxi/OzzO7OOBASrlAEQPH/SeE/0ADci80i98L+32i4WLatgWbcbTj/DyUA4D8JQHmPZQAU/WskA0jLCpYIYHlB+H8PG4B3IQIQBSANAPuZ/9b0XyL0Z8qzTNj+X9wA4oCrV28DCFvGFxYmGG4dAwBu4r8gEhX2AzgaEO+dwZbDDzWJB+h0d8pM60mE8lKAm3Y28+H2beT/9d5/TgIQDvmPHcPfRUsNTUJ+ywXw/K8koJPe7HjAhYqCsXOkAsR+6f0luHz58lLGZj//vhiZuxna0p3U/8uhDQCmf0VfSMD5W5NUzW9mAH3nKTSQnf8YT91sDx3Ndf+TNv0vMP2T3OQPDb5UCOA3yC8KYJYCSAEghhICurQD0OzX0BLgqrZODi3aIQA3s1UwLhsb8UiwYl5t1O1F5bjbpURgDEEAX+C/ZfpVDBAJWPzHZWoAnhT9XW3UUpxe4D8NBmQA8Lp8sUhIhQDAofTi4nLwEB2gJ+3zSQAsFYAIkADI/F9bmyMA995oeBNZ7Vq2BHWOnto61P6dPAEB6IEAcAZg20XQvwZACQAygFQCZFcBav7XoKsIpQBniMmiAMgAzuAS/pdgSC3wVqa/8F9g/x6nAm4zrloY724yggDNf3dw9H57/udxMBB0PXT4odZmjhR4+udg2z+fbwB2HG6i/7oDMT/afxw2BCCjuuD1JX945BiRvBVgCdAugEkvKkAa0Klo7W0PBnn3LA6JXbkMPHz58qOXCbw1VKCdQxMOSrqrAdhSuecc+n9lLQOA6X/gzk2h71MXboWI/2YNYPIm5wYhDldob8DktTfh2MCC6f/8FTX9v23FR/RPwgMkfSkWAL+WgDZZB5zgGMBQAJUE7M51AMx/7QAKRIBzAZ18btgBHnSB5/SiD4Xz66UBMf9v4H3Am6ucbo/LzbliFoEAYwzsh/0P0GAB0BZgjgy/gUleA3C5ifq4QH45cs2SAOxY4fJYrzvaEuygbq99AzgAJhw6epH4bwKH6TFw+g6md83/J55QZTbg/733vhtTv+CJbY7aulri/4mTJ073lFMSAPzfxr/UQAKAAIAEQCIAKS9g/tfdg9CA1gBRBqwxw3jcpL/M/xIjgP4y//OwAOcwbdAfjxNNev6Vd1zuZPSgnv8pAngwE4xJK0/VEUjgScy+4Ll5K+toMhTweAKTLWYAIJUAEIB05IdHjjBtm2DTjTyABAImlSUo8AUFUAEPaUc0HA76NPXlBzl3wNO/GIC16b/SfxSzfo8AbA+JfSeKN6YdcuZvhywALL9EFQeglr9xWDYD5vL/2huN6T+aZP77kj52AFwDgMvMAFgw2CwWACrQhheQlwGQkY9THqkILIRuEKQbBMt7ATb4LoAdezIuD889XDLqIhkIqGRfEOSmh0naoB1R7G/RzCfgRzD341QsnvP5RtyXMwasXYRuaAAuOlQ/GutPY6FgsSOWvqjoH+IB0FesABeBOsT3deC/CgGeYAm4kZx/42oEIQDA/K8l/u9ylBD/T27dKgYAAsC6gV94//slA0DVRVaX0ZeD/hCHV6kU4PR1Tf9HwGM4gMdLAB39M0D/KeE/wG+mAuBbtI44Mz0NGzA9g6CAYwBrd64uC24fxbq/nPbF786WYNSgMjcFBI63iQEwAgB836eWAT0oATTBPA6HhtFbuNltUlW7gGOiAXo5AP4/GTTg99JHtMjgwpP5g/LjTdYfuWNt+gcPUeW/bQB4+j+Pan3w//ytOWQDGVk7AGjEt65wchC5gWLJ/3er6f+b4P/bMuT+MVIYEIGUX3IA/tz4nzGYsx9A1QLxRYV/jFODWgEYygaYGLSrAQ7oSwIAcgFi/QvXA3UecEMvAdphACmAByAZANysA4FJLOEzhgmSy0dOf5Jz/lQoEKV+2HBTivqUjAH9BUoQ2iYGqcVYNw83BQTeaEskNBsJg/oA/gY8aAdA9IczqKkDIABC/zoMlgBNfoJjW13tNsX/E6eZ/w6b/zQaFueTb933enL63ENI+I/TAusaXvMG3gc4PQNTrydy0F/x3+gBcBqDqwT0/F9Af3zLxMzVqwu9TH9FaCUF/gBK6JxEfaE/Xe3BgBgAEz88vno9bwmgksy+S5UBB7gGUKM9jA+D/X3UldStIAbAAP0GxwLi/t3+cCSoEWlhyvtQVRQ3eN/J0T9NDxb9W+uLGYBNpVX1K7EQ5fy1AXCE7pzn6fs8zfD92azM/31WAUD8Fr59/jy+f6eD+Z+X/kvz7wO/hP13JYX/7ACS1iIAS0CeAQC982ZzhW4vNU9YGVkBRuh/F/+sUoKiOwk9Pnd13rwvGsC3wsNC5dGUgI1eBLy5qtrrsYwnwdUmZ124SQZa1HQfRJzIOwBdXqDZLjFrI+/PowsDEqCAd7YArABsAXgAOD/Xm1oOU9d8q0RA6E9ADsBOAdQCT9Y9CfKri9baWRBAf8K2XbW1OAgI7D/BBsAhBoBCAPYAtTU1s0OBzP59b3mDxX8EADU0/5M14BTglEndqRmMM9IFgCAbASELqjBAQ/jPd+E/bvI+Q0kAoT/AAtDsg2a6Og9+UqZ/DJUBFDdv4tjx1YETuQagtJWX/FUdcFgVAQha3TGlC2k6XsCtAjq6M2MxLC1QP91MCw0ckOWhnef8OBQg4BXnr2wAoOlfzABs3lK52zkSxg5f5q1VA8jRO7l/ZPZuzaXBf0GHvQJA3uAn5xEetID7Sj0M/j9m8f8C+O8n+jP7oQEsA3AAOggw+E81P7lEPtKK4yidlw08/LHLl6ur8SH2VI9mlkZHnaNNR4pIQBs1BxAcwLQvKwJCf2stkK/8w8Iw++O+cTOAZlfQUYQBJuRLOw4ErAe7HsRw+XggdBmY4AaD0mJUhQA05Ob1JpYRd7IGGOdnhqlfQFz4r0j8pNC/ARfAIoAPgFoH+L8L/CecZgEQ/jOI/rxhb3E15fbsQy6ADcDbX/z2mtp73v+aN7yB1gA/IAIgXCb+IwNg9QBXfQAQGEyTAOj4P9cAUGwgT7hoPA4BqJiQljxiAcB/KEB01Jz/qR+wqgLG/GrO/0cS6RNkAMw1W8VekmMs+3v0KkCrF7Y3yenYkJ+SAF7QlHjuZRuggShA5AVhgisJr5+PKAcB4QiHA0J/gpclTJQEGYBC9u9ZCfSnH1P0lwAgG2q8xfS9oKZ/Pu1POYBZ8J+RvIX4nnqCPYXsYM7Ur/z/X1T4/02E/yNx8F87AAwf6oCtQgC/XgWQKV3R99gx+J5qgJuUK+CJHx/GaasPywcK+Dkn/ifmKYBb8oACqQMyq4Hulv/71Ac3bgbQPB/E6SXOt7kA800ePRj8TiO3b7jM/yC8Ghq8HMA/q/nvlkd3E2WbIsz5OIUTvkAyHgf1hwArBUgGADogDqCBM4EI7fEFYxcWALeB/9yhl7YCGwIgqMFvLDYAy6novldxAIA+gbU1yA1IChAZfzBfpwDOcgoQz1z8gxvV+txmAcCHJmz7T9Ig9Bf+T+FXKia6m200Mf8hAC4565cGHg8HIAB+BSqwFRxJLb7sBS/KDwAY0TApQKS9zWvTn6e99tgktm0EIAA88fO3cDaJuxVVO2owbNVoRo0G/QsImgi7VB4wQk957NdGYntuH7mq3dVLY/2PGeRFt7Sevn6L/heoWWfELvbXNcBkAFT/XyjEHUkPZDWODgj/ISGX8J8LK4AsAOCOLCAvA/hzigCE/0R9Jj4zvQiKf67UAOUxxwwVGGQLYCQCNPlx1ycGAdIl4BlQAlCAHSgJ8MiudXoT+uMjj2I/0Vzg0YNvQBeNPNB3AaxaC/npJk9YHkwkkEWgDkypRDy8zBGhFIcuqiIAoj8G2E8DF8/+ZP/rJADAQWA8/6NHp84AiADQu1o8XGQNuJGI7n//a975dov/lALc9D4IgGXkQWk4/Yrb02cgAFIGTNM7ZfVIAB5XtNf0N3YQCPCgBIBWBBZMAWhS/N+7pPmPEkCicyAqQLcUt83/7Jfem+vRhLoPednsR5Jtbv5JRX8XXh5fcHiABKBJBIDQ5PK76Zmnf4zDGpQOiPogAoYKRMIu8QB4Mslv5hOqpJ4Sm0fQKaL6cMYXSduJewkA0pO3rlCvT0X/xuCAddAn3zqI/WIARADO3xngOnE0/yRQ/8/ItZua//4wYDsA8QApn1IAZQFEATD5Hz/SSlN+PrmLsv3hohAVsJYR2QIImPI6GyhbguTSeMYkALQJQFUQqk9MB8CPxP98MNlN0uPB/MQ8ZagNN7fOAfBFvQa7qTVbANQXOxgZsjB9A4R9QvgvFoAdAEnAEzQIdQ50/3TQ/M8ZACwBagHYRrHBLggA0d/WgNVEYv6eF9eC/wgA3vJCTgEqARDQGsDehWlQXy348QfTlgBAF/Lmf078a/4bBgB1ASIAAi8LQKrTzv7zLkB3jPjvlwEJcCv+D/V9KbcGqFRP3WQAOAnQerhJ6M8XmgOFBxAC0PFCBtNxsqC3VRl/zgPys/11E3KC0UBLnMMKQHjvSoZjbnBftENWEvBH40/Ys4U3jcL177nf2dkeDj1Gfp2KO2TZzoHMHzX/v/Dd77L5vxMR+h+SFwIAAQyACABwE639TdAvS/nAJV+YEIcAiAHwkQGgIEAUgAajrVfI/8DD60JEYC2JIBFQGtD6sCoFAORd7wegu57/9U2weyOvABZKgDNDE762AEL/KAYg831XMci/ACsQYH9Al5UClIsKAgDwvyuRwLRvnR8GAZgeArQBqK1T8/+TEgIQ7Zn9gl27wPGtsP8kAEgAGClADHwPAlArDoDGjVWq1q+praXFwbe85S3obY0UoL0IgKkdxIUATMxQvw+AvxQB4J/Lpz+4L/zXMARgfMLux4OXnwRg75eJ/w+C/lwEiE1AvqgGJKC9ifg/nz4hAYApAIIAWYBgxNOmmgG6MNS7BxE/aE0CgAcjQ+iPsgQgGMDLBH4QnG5SUF0DXG4rZ6lVgoh/RH3y4IOHd26n3tFLKyP+ZHiWWd/HwAPb+9C7QV1M/t+9gLebr7023Cf0p8veAxChK/6Sp/76E8oAGMcDmOBvfBP5AeJ/DAPcx0glxQPwcd9SDchTUpt31FkNGuPA5Idp0LWeFIgREPJ/nC9TA1pJAfSmIAKnAnEp7gNrlQN/6vO7N34C0MSWHbudGcsGaC8woWJ/wJjk/fn8F+rjnb+SCKBNLQIC3d5uwiB1zhzsTi3TZiEqDhxmdHRoB7DIAiAKIPxn9huo7dm1y4EA4EuSATAMAM//+LbUAwFE/6sQgAZ8QkqQat/v81Vuf+kHMLNr/ioBWHj8ESH3jAL4D8yYGQCp/puZKc5/JQAVLACyGQ8CwAaA6C/4bIb6AEX99qBb00NNqfnZFxD/TaARoOAhV5Cm60hAaM93pn+zzWvisOn13dGonV8wJQDcxwUI3x8CDueA2N8KEPX/Rniw2rkygqrO/qH5eHwA3FeQdh2H0tdee5MYDdD5P68NDRw16M+vvqFly+2du/nUX/HTckIAcB7IPxNM+B8XCxDwoQLAtAApJQFIBbiZ/Q8ARHncrAGwGlymh8v8wiXfwJuoAH0oMoDxMUsDSAIOm/uCDxQ0CpUjwwDcTf7vfAbN/wqbt1fVswaICaCb5AFwI06zCkS7gCguHgRbGzw6GpBlQFVE0quo37VAjbMnErI7QGM2lGsAarEPkC4O+QtQuwstACQBwAbAYRsAnv9JAKSImATg9iog/L8BBUgk0JIgWh0FhXUAz5RfqECsj+Yg9FWDJQC3VaRgTv8o9YEAFOO/CABiAC/4L2hOBWAAnKC/XAeX2sMtFHG7tAPAaG0KzIde9l7hv0aVnrZhAGjRnnkvN9DfYDwvPphEp5OK/bSLJw+yb5j9AuxBcXzSov4nq5dGxmLY1oGF2nBivGshAdoLQH9mP0/+v1Xsv3MtfUix31YAKQEUCxBuVLM87RFG30gbF2x8lzYH3vKD/DGwny0AO4CUaAAf9MFI+TOjMvcz6XER7uMvCPKRSAI+pztuGBbri+QERAKOtPKuQL6E+TToSSSA+X4g79Tg+555/FebhNERaLTTJSD6t3EOUEM0ABdBHjwiBKYYUPzfRn0CjnVPgPtqTPSmMPUXYlbxf3lR9gEy/6UOKA9123qQ89sK8hNKDAFgwAD0sAEQCbhh8h9YJSyvZpZNAWD+IwnI2UAw2XIA4L8YhdO2AMyA3/TpWvynuOHqOM/9glTCl3Ld/+CDzP8H719qj4H/btljr8iPu8sN/r9A4n8TOzSZW7glgF/mfr6Z9G9tZgjb9adRVG3pT7VSSMBQgAeF+KD+/dWZkUA40iH1GqFEF2PI4j+FAcP9OPCX6XtesX8gCwj5LQNgJwAi9hrgJQZHADZMA3D+pj+RDBNiZAGI/oGkWgVgD4CRgh7gZG9r8tcXhmiA/hpfaomg2wd1tKDjAXYB2gYgGZBXBcyQQEDWAug9x//fV/VMyf8V9wHQAI8kBMQB4BKA/0z1qDpWRSTAhIeXAdrcE579+0erDw+OL1gCMNEb4PYgJtKzwxgh2wGA/jL/wwEQGnjYeHLXVjqgWzIAJboISOUAdgHbLANQU8fz/+3FGoT/jFXGcjRq5ACF8NMV0/kCMK1SgNoBCP9FFnIA+oP/LACIASAA0oqDBCCQGn1Q4ZPOc2jsG1D879QaACTnh9/7rk3FOuzpqr8gIoC4Zr/H3Xvk2DFdSqygJUEv/EV9qOISuotUaLHgHQqIAh4EhPiY9HFOlM+ifkjQkeoaB7ri3KIfeCwUQdpPyAvyY+530D4ggTYAOgFAaKHyHo0LNn6E8V3kEH/5S5wc2phA5o/mf36ZdQC4UhjJeKCz+iOgs9D/g3QXsjPu05cpAeoL+/fuujoAAdAWQN6J+0YmMH8hAOv/z4z1vzU1ALVdSxkyqCQC/E5DIUqvLj8uQjuG1UQlVwUm0N6rvr6qvtme/jH/x6m4OB+sANwl2jIA4L8qA5ScvxkA8BkAOKIXIP6XYw0Q2MUCAAj/GTV1ivDC/4bFG8s35lfn5+eHVuIznAMU/osAzPBXLAiIAXAj/otOWL0Cee+fqR6PFPAfqPAixy7wpuLtXkz9hC+fi6DXos9l0b+T7yQBWBWZfF/xfrs77SRAJy3c+cB8Zn8b6E84pjnNGqB5rlP+auO3X3oTNWmtEJtv8/5+52iGikCT4XlfsiOUi9kIjj/iaxmc7puNzCn2g7l0Qm8oLb3A8ukPZKUEWN2DjbcabymwAnz3yi9/eYEGgDccCnwJ3f6ThLhkAZEFkDUAvBT74z6b/toA3Cfsx5tl/DXUTxjPOjooEAG8+K364dy+QHyT0kDdJ9wOAPBYv7E3AKwLOZEORiBDrWAFtgxw8G+xH2AREHRh7O3am0oF9u3bX7+7cst2pwr++RbtHxb+FyjALCuAMgAkALhZlr/kpBaAJ6n+vwT8JwGQImC1DUhCALUEKNjWgAZjMv9DWuAvhuYBlKGP0NxOVL9O1p2Zi6mdFUGsPKD4D6rzZ3zjZf5CAyD8lwAAuNprCQC47km5Wnn2X5oLpWc7gmgCKL0/bB9ACcF9Rta4+DrAQ00xrNKL/3eB/oKcSb1AAuxcP5q0UEly1CXl3KPOg8hMfuUrn6t2Qu8znS4/lWSF5wUpD6VqQyQCi7gw2AB0ATABof5YYyMfzclbeZHxP9pjIWvw376s+F8WAvE+gFM/+69FJu/caRwZWXn00Us2Hn3bitvjTypwBEA3VQ0cCEAB8BSOt2eqvy3sFh4bfBYHoG0AXqYzEIhWcBywthFAHrBgV5AkAGWYawHv2YgtgP65swFYBDqjflMDaPbX7DdBn3AzQbAfjQZx/MdzNtV7hf5dOKH1WnkB/9NgPw0IAACKsgEQB8AoLynX8T+SfDgGHPwnBXjZy8gAOAhaALgGSFCrEgCK//jDIQA3hoZwmx9aZAGQ+X6KzX7FbSnmYTIT/wEtAAB9g+gtv6t3BEnUIAEACUBzk1RNo5Te2zXRdNA5em5yAHvh+1v8URcg9Ke7CyOzc8emtcR4n1EJEMEaAIPMPx9DDKgKo2qAZnee3vEdAX1CzoA1AEv/fmJPIJpxHsTZpAeXRtQca9E+PB8WJNuCoTx0JLrGU6jdSqSiI2A/cKsRu/iHB/pQAaRRGADgtbjM9KcbBmHWLvsLxcFzTuoLENprxDH5Y+AO8vMSAH/WviR5f81lPaeLD3hYfyowyf9h+RpD/fAaZQKUYFT+X2C1CRAPwBdb/2fi8t86KlC6Q6UEotGilGfGj+GiJiKgPr6C88e5grsrSzmB5VwA+Zn+2GecLde8T5tZAGCRdgKtsgNgIAMgBqCkzuT/rq0nS2gFkA0ABGBrj8l/q4eItBJj/99A/Cf6k8XAwPPsbMc0dgKoeV24jhSA5r8hALdJAWz+Y2Hg7G36XfrRovw/W1GBQoAmmpC9AL2Nd+8dvn79j3+8fv36oYGOuI8kwG0FAHjszOzcvmbS6Hn7jSreQCTSBfKr7QPVNHOv4PSWMWzYwtkskcm5czgz0FkN4NtSEiSSwBARcGeWPouJ35mJJkH4QrAieOLMeWX96bbYH8dmjWTKQ83EcKovmJ8ekPye8F8bgBwTAITsCgALy2ne/pPNpsPJuyGQpOmfL+oGxIoQjEed1aB1Icx1gAJ50NTnS94ZkiAoKBOwnhAGmM1BeMLHwKW7AVBdMNJ/z8j0/zppQT45PNNJOtDePmZgbmwOGJvDIzYIj3RmRut3795ZtaPU2sbiBf8REgCB6LWS8gFqDYYrPYCXtv/A4vJqYlULABUBMLY5cvmPFoCcAOAi4BJuBCAKoPn/hOI/GwDaQMzhP3MfaQbQ/7GLs2dpJwAA6grXz1IKQNGcFUAEgJb8SSX4G0oAKANAQqHD/zNT+NE/Yyxj8q8AJloNR+4en6jcd+33JAGUHO+bxbkJvKEagBZk6qvWpv+ml2Z+aNTxZ8bOjToBFOOMTaLPEtbaHTmTb/npP17viEAInJ/7CmwBZQCOEP+beFjOH+1InSMg/3wu7WUQwqlUSIMlYB7ztA9HEkXHQH1hvuzeyebzX7MfA5g16j0jYgIG6FvZvn5Q/O6IWaIUZ/Yz/T/68AMHQFu8NAyLXxgBaO4XPlkWQCSgeCyg1wFlY7BcxmIg7u/Z8YxO/60Frv1GD2Fce5wAIsYVjEwGsjDqBDDn7KkH8yt3bDeP/NvupBUBsB8S4IteLy/PDmhAAoT/aXQKTYD+Jv8t0ufzf+tJ3gIECwADUFKM/4JaMgDLOMZPzf8y+zP9y7LLFRVnZ0Dp68x/5vrViinNf8LiNIBVfXQO1Z/OTJ8lAUAIYC8DcmYAHwL45lkSgPFuEgCc3ktX88T4ROlzSnfs2zen7PKhvjQVvNOZa77o/ipESmvi+fvUVp5jkqyvdi4hJIt1pPswdwIOhaxcR8tPqgbJ2UMD1+YaG1+3dP8nKQNoAU+jn4Xzd3b6hP1xeyjE8TAfRKahKzKs2T8Lxe4IRvqxhKv+ZjBbQ/hvBgD4ARNpTX15RwqgT9Hft878D4gDEGvSMsL0B/cLJMCczCW8L279xQBg0M381YLaYDsl+IBYAL5bu4FxpwfxA/f9X9n/gkMECM/f8rzSF770Fa/Yx5DDfF76wtLnbXn+5s0F4lfVnCKwA+gaKydksX6kJQCYRc1IOp5Y1c0AjQigriyH/2WOregBqiqAcKI3CwDlAHsgAAX8h/MfWpwF/+dvgP/sABax1eAxVBGloxWiAERriQCu4itTAKYVrk7zZ7hEANgY4EkMAH3j7FUwHx8vE/+B8V6wjukPNHdBAFhG6bTVqv37XzeGpirwS4iVKrdvuduM8cL9mMEZxP3MCJLzcbRW08wjrgv96RH8L2HusTRAIPpCY0vV1TrtP3oQ7B/xxWXuj+OaV0NUYL4/lB5Adi6ZstlPndwA3GS/nia/nv8LDUA2l/8Rob99C6F9WCjuCxQwvhD8zym5wOSI8yOgv3C/kP4FWUHNfv2mKZ+fD7ickwvMDQUe0C2C5Q0BgF0KBPq/p/IZu/r/n8HmenfKnwJ8e1OBiVi5IJuFClgCMDuA/0oTwn8IgGQAhP5lOv8v87/QHwJw2ogAxABo+hPg9hu4/Af+H3k/ZQAeK+vBjrWlCbC0YsZM91Xc1vxnrk+LA5jJMQAKM4DeRXQb/IcAYID/hIUmNe16GeML+zebQooz2AilW6CYd5XcV/D0T1tblzqjATK//dx3w959I8wXHciWCP+zauCCEBwKzZ2DCNBqAOj/2SVz7je9P0QBp0GmAZr6/RFuB8XkBxSj8TcPoGIj3KHZX8h//lkT2bTp/zX/D4XCgYBJfVzFPYCe/pn+BwgPqFEISeiZ5r4YPiwXhvYEshqwpgYI+zn9R+/iAPiLz7+n8v8u+v9XUersIvYrB+CaLEdC30aWq8ixC7R8IKLmf9MAKPpvdeDNnP9LFP2lCFAEQHcDlPK/WhoAdxC5ASxyAdD8PJ7Af5jUi2PNTFRM7kYKgOhfyHWsDYgDkA8F0AXuADZN/GcFIANQwdgvtltVA3V1/zPrQsj+HcshfxD85MbKNvt47hf6A8R/B9NfhhDQAYm99pvXrRy8/8sZn577QXkJ+Nn3R6hCO6QwHPZBC1SNPwFnOqVD/ZEw8v8oAw6m5bR+7f+NAEAEIGvw3yS/LAU+dnS4gP5AcQngUgCqn0LRHyZ/4T9fPAogrH+a8/+H5U1+QG8aKNQAtf6vzwmiKIC/uG/3s/QvROWohP+4BdyTBv21GSg/FIwnlgFtAAAQvqy8xJz/Of8P8PxPKQDOALAD0AEALh6MGub/Kgb4z8BfsM0B+j92MdQ5Tsn6irPCf04BKPoDyuwL/6eZ//pDRoVVCUAfEP0FCWUAmlkAepUETEzAAPzjeGHm8EHYfiI/aBrs5+mYoKknxJc7HZDgoEkfL+a/vAH8vZf9JpNMjCeE/XQT8gcjFN3nwNdB7Fe7/WDUOuKp8S5azAXiw7wPQDSgD/w3oSt/GZTkN9P/8jbbB4nxKcIH8shfGBOIU6Flf4v+chfu4209aJbzvXD2x8X4oFkXaGYDP/Hl+nqkud5T/8EPquyffn34Ozu3P2v+i6Cq06I/4I6wAPyRXwaCCeb/0LScB0JAu2/Qe5sx/8sJIBAAQJYA8OdxIVBZjwoARAEAvgv/ifiK/rQlYFfZY48tYi1gzF1RgYn76lmmP6cApsQACCwDMEUCoG2B+vEJ/CLXB0wbAhAUAzCONQDJufdCALr3l663ylK5fXNB9t95PwXrao4OR0J8vKqpAJjZbQcAlJdQ/o8oJ95f2wCkBhjXaRG9K2Ev9Cnya+prBGPk9tMMdgWpBar/G4cKBOWfQiD8NwMAvgRZOQSkX7Mf9E+HYigX4UU97JMM0OOaGQChfzy6VE2h//cPiAQo+vMDvd/FBHy4qAYckDuGfKajAIFB/vqdlTsQsm3BhUTOTg75qeXHffe95z1IfZf+X6b+/3XsdnH4r27uyXINrQHDcaY/InQIABGdBGAX2ftaY/6nAkBM+WwAgBNiAMx24Jr+T1K8UKu2Amn+c0uAbRfTs4tUjBbrrABtSQGE6AtWCsCCpPVvT5n8txzARHcF8oBIAPDPaBD92QAASgK8zXfn/+Yd9U6spEjdhLCf+mxm2m2DHuwf1vwH7PlfWwDhP/Nesx/voD8rJ27XYy1jSb8nFQ8qDZjvzye/9XU8mJYnCQoSRH7Qn/nPx7wW8F+fBqolAGk+Zn+/3PCGvQX9SdCf+Z/iyp5AiqlfHGEEPxL6E/lNMP2ZxOu5AHPdX2j/YbrDAtCg3/0UHrQO6Pkf5N+NVK31b8aujqEj7XfsoETOs+S/qwAAbANaXCgDKEQ2yPzH/E+tAGpBZRKAbSUljjpj/of9LwFOqhQgg9cARAAs/kv+j37cga+Z/8J+PJAA0Lkjy4wRFwTgNk3eiugL07kCIFTHIqDwXwyAOIDjZ6EGohI6BIhXEDqrVe1NL67u0c9V3S3Pt323c3A8NT6+v2p3VanlCHbuWYom4zbCkWFNO3bfJv/5hujInP/5lUd/CEAL2ER9CKkZGG3zWQsdgf7cD/pRAkyD+S//KMX5byuAWuTv0MynG1UWBwPtPp77jRHw2fN/AEMgq/6xsZVqhP5Ef9xwmQpgaMCH1+K+hkgFf3pA3UQMcFl/Crt6cQKY+nc8O73/09jpAvkxIPRzc67hknKUwmX/SKPcwkCYi8OneSMgIvSyJxnlZeb2v54ShhUAEDgFKOcBSAAgEoAwAjuCe2T/LwmA5AFUOdD8/DIj0EkCwINW9irGZ1SqL1cAbrMA6A+F/2d7J/AFw3AAsUSC5v+lamC0uRfw7q+vbt2zdgpw+06nd2EcApBK7HspJGD7JjiC3Vilx+SvEcTKHMF0ALnpv3LFf5n7FY5q+lsOIMklv+E4THdYKF7UAIQDoVxgDxAbgHDfgKkAjp5ccHNvGXr5XzSA2N8fbPER/UH6gPT2EyVYY/0viFX/pY987IHvA6C+yf+cbABTeZ24X7NfWwDiu1IQ+AA8UYpPAnw8fKz+WXP/LwsAEGj5zW9+MwcHgDIgdUDooUPXD2UJ5SGi/+LQIoCkfZkDBoBg2H9M/nD/uAn9tQEA/7ca54HoHgDsAIT//NKYX02Mc/vxeOdecPa2LN8hBTAzVSQCoFDfjABmJDDoPotzRDCUJbD8/9mK8QWv09m8vxpQ5VGtg+O91Wv8Z7S5iumP8nq0KAnPfyC2Ul0F+o8k47no0JzT/DcXAGX+t2x/WZZh0x93fvg9CYDSADAuYs7wQITB3dqT4VAuwioCiA+YEP6bCwCmA8DSwxCDyd8xC/YnfbxXBFD0lyGHfRDypv/YuZVqeH9mvwxAvQmYxmv7APrInu1xB89N+kv4gDe6C/8F99U/m9j/15OA2AEwB/pP/ibmaSmnSmBys3Ygmy2PcB8wgNbqasocTypo+mN3Xw/t/1MCcFL4f8KIAHbp4wAwaigK2FayjQIAE0/QbZX4z0hUuKPgrHIAGCQAeQZAsv2yLJCTAqggA5BvAWJUAtw8SmdP9x4/hV5b2KzTTQQfHHXWU8kPCgBQAbCjsrKKI0jE+fgukAB4E1446gT9acEPfIwLkkFNOYkAaAFQBl0lMv+bKLPprx3AtSTIzxdeyXZfUE37WN7TmKe/OhURP2B2AUBFZ5oMgO1GCud/ADfp/ztr0X+R/oRIOEAbRwBNfrzrYa4ECvtxZCmzX/Mf5P/U90HSXOhUIF8mzKQfkV5rgdz4l5n6tLHHlIDP7Pw/rur7L6FyJPYbZv8kHIDfdR0CQLD/c4YLCGoDsHrjxY5duQKwjfb27yKqiwEg8ksEcFpHAECtgiiAw8HHA2o0yFeK/xV06+pk7jMgANTky0wBSHSvDICC0B2YqOD6AVyAjgEq9o4280F0pwbxFywoei/Qq/v44ftRSI0dFbIjp9nbdLhpYRxD8T+OOpxEF+Z+kJ97pnTELQz35QbexH+d/Vf8L5H8n/b/pvkXBzAZZ+rbEuCPU0FyWOrs5HP8/fP+/gIDgJEKMf8xCH3Z4vO/9AedpciuYxFVxET+JPaL+ywEfPmzv0iCgXhsbGTpY7D+Qn++5IYLMqDpzy++ZDDTBTLz4yUaQYNtvzgHvlMSQOmADEz//59F/f9d7FgR9uM25/MPQAAYv5dZpC97nQVA8X+1hiIAgZr+idfbthbh/0kzA6hA7K/BCygroZ7Amvx0tqC0AyL2QwQSeEMMAEyzDFytoNY/BREA6gQIBRHAxIym/4wdAVxV/F8YbEslQH9gXAYkAGdUevCBxuAp3DT/w/PxrjgbcNUzKSjzfzKST/8+ZrloQFbP/0L+suzRMpv+JeY9JjS3X9F2KQqSG38Y6Y+nJCMg6FcGoENVb4oCFJv/JfQ/NADWg/rE/WA80E57x32a/3lzv/7KQiKJzUwf+7ZM/rhr5mv/j7diLkAmfGK0WHxxBp+S7wvv8SVP9toB4NLj4/9/e/r+FyhdmhP+49biv1Z+HbVmwwLaEggB4BCAsHrPi8uQAhSo0z9oWbDnpPBf1gCtFKDM/xQAaAmooTRA7QkxAA00GEoBVmEANCgGmFYaAKabAsCtPVkAKC7AyIsAFmAAhP9mCqAi0w32Dw6m6HCNFEsAbor/HAuYGBSTkEpQBgAGILyQAPuB0DAQKjAAgM1/hwaT26HnfsBRnuv95fbHFvDboD8kx+ULFyASSaRCAmMNMBUS/gOQgLz5v09qFLluCJJBzqIl4PMrkPm3JSClWW/qgC4Lamn84uWPCfstCfiUiADP/loFhLkgs6iAHmLyDXdAPym/8IBtHfgTFgo8EffxV/34wGee2S29Ngw27x4D80UBYr4WxABmS6DZ2T4SgGkOAW6s1ryY1gAF1PwfVKb1f4v/JVoAlAGQ+d+UAHYAJ06yAQDlmftkAADhP03+/KrwdDL71Uu1/rAxgw+oPFi+zDcA07QDgCXgz9MzNv87m0B/EJsyaf107llqnAEJOEUiYADzP7/hHycFkAno6qJf65CeaRErAxDJpT9vAOhxEIjqW5ndeuEPN0iChqkD1wNh7QDo8kVR1xcuwHzeTuAw9wCL2PwfKOT/0WAUx40xhenkaOkSZ3eN8vv8vnYwn5EMrDH/c2FQeCg48u2PwPorCPOF/sr7072oA2ApMKqEZWkP4M9l5ofhJ86zDij5EOsvF/6WzzzzW3ptEFSNTKJdAEnAb+gQwEm2AICi/yx2tgQ7JAZA475tDi0ASP4z/9EBdKvys1tx5xpggA0A7wNk9suRQAp1p0/UgvEiAKwADOI/cU6js0LoD8DJmwKA9D9HALwCkJ8DrFjAEaA2poX/SAAMErqC5OPxwo0xH09g/k8lE+D6uIAVIZWYn8eHBLy1xYeE/4RCA8Dza3oYdTT9FFUnaX71Tf7+Ouf/zaofDXMRQHKAmv5hnwf/CPFwIVLJfP7bCwDDaUZ+/E+OBX3OXaC7hu4Z6VMKAKRIAYqPVDKO2QCNfkB/Ez/WJgDs16NAAz5FBM8bdpgv+iASINZBLgx9/fj7n/o/aOm3UbB9aYz5Pwn+A+3DZAGkyQzG4uyh4KLif8ONxRpEABolu3BCKPX4VgsA5APsGgDqBML8pzUCwEwC1m390jaivEDaCqsIYP8eZ1Ove3+XkNC9VzuAPAE4e/W2RAAa2gCctfn/Z0MAlprJACyEQVAauBhIs3sGxzn/RuCVtog/jsf+ENogpBiJpCe1TGcliTz2WwYgnFaJd1hrNNBDRO33uHDQiqD31Cm3L9LnAPX1sn9xmCkAfktGYT/wUMQBJEIa8zz/p4YtAzBcOP87+tLYqBAK+tAEmeZ7gON+uWOwAgjII2jW2+9JnHAaHltCub8mPi6A531AnIAQHx+a5CeCy4Ne2tPE50vYL89aBUwlgMbU/3+09NsQ2FL/Osz+av5vCbS0B7LXSQE6lAIsdsxiFUAU4EbDi8vqDAHYugv8pxOAtjL9uRM4wK1AkBUQASgjCWARqL1YyynAcvBfC4A6XJS+vuf973/Dc59HbQ53794z6u1uWxh0d54V7D0rW3wtrqNEWCKAnEUAZQA4BSj01ylAl3OQkADBhf79aoSS3QvxSAQLbDbBJ5NkEdJH+8LxlMATx+/ZAhC0BKBfZt4Q0mlJ9BLDCXhyEqagu/tUW/CQg+l/8m64HtBrgDTa0d8vXBSpZO78jxFU/B8mBRD+a2CzYJpzOx1haIArCsrjYsg7GwC/BAEBDv8D/GZtCBxrbGxccVZ/FKF/cRzAkJlfnIBcQnqB5PiNrCB9V6uDJrsMIM8I1D+7+vdvROUKZQDmaP5HE4yAa5IWAmhWpDazWCU6GokrAWhABFD3hCEANLeD22QALP6rZoC0D8DiP4FFwE4AnP5Smc3/J6Q7GNMfpwJbR9qXYi0eTUtRp1Mhi4ATuJsCMM0CUDE9ZUKvARr+3zYAe529IgD9Qn+AKR8ZXEj1s+oJhjsCWB8P9WVL0nHLAXSlli3+065c0wCkaeYn9hP0Wdga3b2ekKO8OP3F/+P2ex/IzxdhPkaNGsLFMB8I5Mz/GGIA+DA3yf+byNLOIc7uQKgCUepxLBAHICGABAFE/KQAXSTRGmXl8uXLdLrHAaL3F+liaA+g0wHMezEAGpzl18k9a7lPNMG0CsZbXvCvIoAPPjv//ztRWj8n8z8LQMp1LcsKQBpAmO0ILC6yAMxS7b+mPykAbj3k/0H2HnC/BEAhEF5KAHp2wQEo+mOocwFPmvxvYAEAGu5pgAA8V7ZyCLbgBJS9wl4RAAJTnTcJnd07U0wAoBZTPP3jMgxAphX2XwuAPdBbY3Chn4zPsGCgLxjKogYK/3P6if/8UgZAhUdGBBABo8J4txPqHobB/0EMSED/ybWBbZNoFjKZVNSXRECyK6UTAPKxIJXS879RAgiOA3355OeGoA6SAKVeadIAF/uAdlMD7IUA2fUL4rs6M0tO7iRX9XF7dU8gIiAqYK4DFK0I1Gl9WeRj6893KfMxyG/m/filA4AHKp/zLP6dqFqR+B/8xy3VG8lyEMBY7BhajC/PEv9rGgz+7yKoTGAJZv9d4P8JXgxk8p8+cbKHDQAEABeJgBwL2nPiSw46SByoE/YD92D+B14k/DdQWiH0nag4C8ark4AkAqAUYFEDsHdB7D/doAcSAFSfGgQWWAD6wWQFPMUGFxJZdEIDrgPw6ukITA2hPMxrgMB413K/dgChcFwQpidU0GK6pkMXhP0YNvvduAZxMPa1tdhfXk6tfMr/GLDMv0zzHgjA5ORkcBKFhzhwiBFmjHfJ+n9czf9WCcAwcCif/1ISBAmAQIgEQANiAfQ85fV/yf7RwIVHNJnvzFjM31Faytvptr9HonttAQxwEsDMA6qbuRigV/Yw9AOkAJdpALQImMYf3KfXp54xR/o/U1DqnIsF2ACwB/D3Hon1aQWAAAwlFwHQlQVA+A/nrwQATKcvThL/e8B/PgvsJH2BeQcGAOQnEP3LqFlwGXNe05/5z/P/G2gvZz72gffKwFegPcA0wAIwXUECsHdGon+BZQCuTgn9DQOw19mESh9CChtYVI8NgDiN8p8QpmCFcqJj8Dr4T7ieICRX44mF1JAhAB1xA0nrHFyctqQUwKVDADdm/7bBwTbvsWPDRdlvdfAr+X27Yr4lA0kP79IA4jFpBAzgjobAg2qrUHxB9gAmbANwNL/8Ryo6LQkIMTgWQOACFQDbo8haYoWgs5Nov+R07qkH8Qs20m6pekBxWU/8fGkcsEIBfvoUqF/EAejoX94Lzb9+pIu5b0vBswEA8O+2AC3Cf3ohf90UoyYTRH5cbAFYAJ4AhP8844sCEP3B7JM9PSA9DAAJAL7ZoxwAsIuXAsrKERxo/guE/2QA3rJJ81/jebYFmKgAOBAA0a9CADgFaMJKAS5M41FCAFsAllpPkQDQrQtds2iDD9f3RzrCygBkrxNIAI52REoEwwlgFdxLTCS0AOgUIHn/dkX/LqG/zgGI/e9mB4Djf5uvF5v7FQ6Vn0QEYDoAFgA+5CdlI5FSRYmJQSTl0YSgI5xSFmBeGYBQOlvIfxYAFCeIBLAJwE0iHshAJAJnEa3+3M5KtYG+dK02qDvYBBRYgB8L++VNGwDN/4KdQfaTlPmZSUB5kinftgA/pj/vw1XPeRZ/Z+9qgKO6qrCBWBKFGuhOgVWsjX/FaQWjDnZGUMcxKOpULDhIu8zyWNINacqEFKHLupvUJjKNdllWXVpCJZtNoi3OJiSdIRpSpxNHMwvTVuPIkhHaTjQp6iAIsREFv3Puee/eZElDVSjO7Hffvn3ZBOIP33e/c+655/6PMaOkhlOAHAVY0ag36qvvwGxC/E+QAHTGOgdh2TX/wXWK+DkIAP3Beg76C/FSAlDwRD7+sWEoQCMgEYTdr8mRgAR5JP4D07UBMHHzTdQUBDN49CaFv9AGAH5Dw8BsAUDfgL8I/fHSBsD96NMMtgFOsQEO0QmnkAGgbdBgCu6vps911MMAKGSIcFQFmOoPJQA7AnDov8Oy1OSPYWFAAnAFcAlAfkgABAC9Q8smYz9G/qtlTowvVYABCADBb5O/j0Ei0J/C7yYNCMX5JECOADqCHYXZ/BcBcCSgDkuC4yBVn+Ge4qkmVzYBHAM06xyABsiKl9YAvKQqUNPftAD8IPU+E8gvMKd/9fXyXAHw/x5zlpXZBqAm6gWivsogPICEABij4L8IgFC+heZ8SgQWcPUfkZ7a/xDRW9gJ2CvQ7BCgELw6WIBtxOC8NAbV8T/w1rfkXX7emYPOgKQAUVgABr6mGxuA3wj1aYD/pgCA/sYSABuApxsxWACk/pcQDxzvCyIFSIACYBk0fKYofS5NOcC6GPF/FFXAfcczoL8kAWtDQn8/eG4fvG5BAgimBWgX/ke97T46O+AVM+s37nCOopYzvAYggyXAipC2mNM/ow/X8QA7Ac7VUxvQGPM/u/zf7lKkdgGm1ffTLAEDdHXjJejorh9Cx5MpABMAhgv58aZNwL1GZaCMyXYEqJd2ANmk15RXr1YVAeQMwNXB3CExADU0/3t9O8oaPdtpv1tngjuBDHb+3eB/QYG0/i1gAaDaP+QB7ZEPNcA/spYWzgFgqJ/mg8J2g/+0e4BvIgDC/7e/RQQgGzNKbyIFuIktgBaBX990E/p9Cfv5+jUD38sOAGpcPPmrCxE581/2Arb3xakPDtt78gDdOEOXxADRQIfaB4QYIGKF2QHQT0oRcCXoD/4DQv9sBRANwGinQ39/XD+R/fJenm55J1qLarAEJL1yGl9ZCkiiFglDRKCd35K4UnAOsQyl+CX9r1HeoSuUz9WdEwlgG4BIQGNAxQQdwRem3mA/Y+5d92jum0kASf8bqUC+CTTr5eUM+VKz3wSoj0sCAmQAciWAVwXFQ54aSIDM/9aW+kqYz1BtLe0XlSIgRwCI/3L0TwGsveI/YTffKAjgogDUBijy4ymf6wOgF7IhmKByAbD/hJvzwP/Jjz+cuwKcRxYAUz8uuv2FFgZ+TQkBte9fnftNBgDfsksAgIkGAG9RdgCOBMAAxLfbrTagAG21R5QbQF4gGFcOIBSzIgkC98xx6A9YIgAUAtgYZwGiIH8UbxXbAG8+p/2E+rh0BuAV0wBIEFAWtS1Ama0ASgRi8UAqhmeRALQOeRHszua/pr/sAqZGpXZzMHg8qfcUQAISPVO32JlVvJXpj9dE6ABAJwCzUgE6/teSQPhq9kKAhiQBcxHA1cG0xV39kUqe/zEqY1u21Mf8nsowJIA3AiEFMNEAsATgZs7/dCvgeiA8q83BeGbgQxQOav7jLvU/hAXThf+Ta8CcOQtWQAFAfbz4/il6YwmQRgD/4uJg/owNgLkEAPoT++ntaREAiQLaj3O9vSoCrkUdLRp8BkUAOmkFgCxAvN0vZUNhtezH/B6vAIKIlgAAa4DsAGAAAO85fS4IvwnK81vqnX0A8k6XFfWzBZAQgAnPLzgSCIAjAWXJ7R27J6LJ4f85blJ4DleddgE6Iygy0M0SEH5hCIdGTxkHNJshwE9MCQC0BGS3CMxuDmDM/5NEABitqlA4FwFcJcxY3GX1R72K//W08rSlHqdkb0kMUhmgmQLcLQaAqU+gKiAu+xH+QyCkss2gP1633aohDsDhPyoAIABT4a2lnwLpbfDKIEB7AtSxv7w7oP84zAF/MN4AgP9yRREECKAEvOk3Ludv08kewfogwPmAtkycMUpp90Qtd+UKhSjzFxAI/wEQn8gqCUGb/+z/4QBgAAjRc7IviG8G8l9B9c2WmJBfkCEF4ChgvAXAK5aK4s5fsi5g9T44sfxfz/9wABgaIgGSEtTBAD3hiIFjZ0um0IAZ87/S2iy0Fw2Q4J/e5E4jG1oC9IN8mo1W58YS0Pq1XBHQ1cKM4pIVlhfw+THDbaFBOe4dW8KDgAiAzgAqBWhx+L9b+E+XcJ4h7Ad2owzoVrMvkGoIIAlAMgBTY9rbSz9Fx4UIPtUnIQGeceI/XhQB9KtvYu0AQ8HjVvyP8rDRrnICLABxtc7OO4GOqIUyBAPdMc674Zt9JAC1tGCGzB9be4EVEAMgFiDFJkALgMoBwgAwrFdbxPrTy4gAiuorGaQCsZARCPgbrRSgLYBIQCwQYAvACoABmdjSYfLfbgtEOAcJwIAKKCPQpDUAwC4FVScsQDVx4rmzfCDy5JhTck9rc3YQoOsAhP/ynp0J5Fs2+bMTgubiwNdyRQBXDXlzF68otXw+Kw7+bxEFqEe3mMrhQbUGAPY7AiD2HvzPB/Fx6WFTn18YCgXcOkjdxACoDcCUANQJgKmQBwmgiV8JwHE8qCEaQP2/YQEE9KFaAqxg79/4KFp9bXMxetEXHJIAcCpQzfOjJALx7UHu+UHr6irxPkpJtxQ3zA5VEv1NOA4A5Cf62/WAUgYkFkDx/9uJlnzwfSL9sQZ4htvwJ7UI6HIg+hV+or8gpgYUoGuooQEfQxaSKTYK9c4yYFr3KDonQQCuJrkIsio4iQygvvm5IWjAjGmTzxh3ZS0F3qvtP5Ne9wbKDgKMKCAbEgIIZBGAHEBuG9BVxKziFQtKPZXgvzMIqdQopQBfmygA4D8A8qvw30kBjNvubqPA7AmijgiSDkCp+M3TrpD//GN5b725lJ0/tvf3qyDAVgC0DqPI4DieGfwxJKBhGyUAK6jCDRsNFxcXF+OOc9S5LzC3/QOwuqbQlwzC7LMCBIV3JAAWmghggz5P/vLSAkDwiwTw/A8w/WUJoGIb45HuFj37mwbgXJmfKzFwJfEiJEUGMhkf/nP2dnV5amqoal/+I+EkRxwn6t7o8vAXSYwU4gBIQIEs/+sWZUoDnEd8qL4hNsBEIRoHNqm2Yk0diWM9dOTGJEnBaXPv0muApgYwwNkJHcKylwPk0h9pmM4fN/uDklwO8Gpi2vyS0gWlyAAI9+lGEyALAPf/ZQEQBaDJv4BZLxD+2wIAfcCzor/mv+wJIP6rQ4Hi/hsmFADNmMUH876uDbjp+dKbZ711XhQKwERncMUQSI/QAJ/p0Yt5v0TVtuLkqGl5eXSO+gz8Gtpx6G7nTkDtDgIRigM6E8gH1tJxAAQkAZ8OWObk326EAPb0ryD+3ywEQgDA8L7KBsAEL88XHaspY9Iz/fkmZoB673Zt3LbNreECpKH5I3Qw8RCZAEIldKBsR30QElDexgDRzykVOCcXPiF+0037gMmBg4vrX4AIzJuV7QR4d0BWNSBe5piE/EY5oLxNbgLMNYHFuX0AVxdzFq+4+fYvbiHEcJELUALwV1gAEQDH5BcUMuv5JjZA8V+lBzkCYOAboP34zkDEfxYAqxSMNk/hKyYsX45y9HmT/999w9vfymnBBVAA0J5B7+j6UXrDDfNQOSAaAIGw3MuwvJ13eS2ZNs8V5ayg0JWKheMZQjjRXesY71SUC/rtn9J3xX/hPtL/2D7X2ysc7UWHYR/tBRD+f3sLUoAm5ICuoiM+q1I5AEHS8AJlLvxJugQP08BR4gJoA+IApj80iNp9VSbSBYVqngfj6U0PB6ID2ghMggLkCYPHemCd0Ci9ePH8aeOket78e80owGwQKkNf2VGAfpoS0mO4+C05XF3kzS0pfc+Xv8wugBAHWACY/7fhxSxne18o9KcXvykDID2B6Ccc/t82k7cEA0oCbpH5H6h6u1lksrj4fQsWvO9zYydPXrjwx6NX0Pj5Bg4ImP0A+L4gj8/zKjWCgPmIZCfH4ocbrUifgUjfaIYAE0D8H8WIoKuHcJ8vQTvzPwWA+T4Q3+3et2/fBgf4gk4gqhCqVrTBAGSjKOiL+nEUEC6GaIF4gS09bls/eGjwsxu/crPLTyagjBSA/pqastp0oTh/VgHNfOPJ/ID7mE+qAUC6LfFcT1mPe+IUnDdn/nLTBOhdwWaX4InQ3Md9aubroCC3Cnj1MWN+yYpSkQAMMID4D5gCQNhdiEe+nCoAQPOfoPw/8V+DBEACACCy7AZ78/+8+SVHP/i5z504ceIkMDZ24uSFU1P3fkZSYF5paemnboIQlJYumOH8y1yhsgPAW1/3v67Lq+ifsjcHYAfw6ChrQMKK0Ozvp3K+aEDDmP+pCtjbBeoT8VdWV69nrFy/0gZUwO2CWQdhk/lF5VkBQF2629PolX34GkkabANcbiG/QD+53CQ4pDPKBJRRCqIM2AEJUMm+cxhA21TgnmZ8nPEE6quVQmpxmPKjSOgySjpr7vKsDYGsApPEAML67OJAweSxQM4BXBvMIgko/XLIcQBsALQD4Im+wOC/4wTG818nADRICkgA7BRgvNFVPHcWjtsrLul1f+LCGJh/gjFGj2MXTpVM1f5ZnPwNiOpvmGZ+Not0YUXpitctbp1T4rL6AD9N/DD8xPpEZzI+SsgkIu0BS/J+T/Pcr18CH7i/F8xfo7B+ffX66pUaG5QG8CTuO5dvnMstT+B/TWPUD/LLVTkOyWSDWxNfLnq5ae4/JX4DEuCq4RDAD9D2fr+nLNzGHuCKFUChrYl1QHYSBEF8dAXxeC3L2+ueZKcAIoFikF6Dmc9vWSuB1cT1aryyigFfb/LnRGAuBLh2wP+ji1d8aEs97T7nCEAbABEA8B/pQGMFUN2Y/7w+kK8EgExAoXBf3sF/OAAlAH399C+rpHhxr9fyfeTCn5j/h85jHDoxRi7gDmto7n8ezzBeL+s51302hkUAtgCpWEaQyCQhTRi1fu34owbrTfJXV69du27t2rVr1lSvqQagACurNf03sAaQAjwSbkmb53KyGDD/GwNlCtkKsKXGzdE+3Vx46ckfWE1/vwI0psuvFEBgeXYkVK4fuLwCdMiFIcAjtxWgTgEQEa/Ph8oQD/Y4eianvxyXfK+ZBbh8FrDamPercaueYvLPrgsozh0GcI2Qd+PN80uGzr5QmYyN/p1ygGwANP9h65UD0Coglf+S/8tXAQBe2AyMCy+D/x9QEQDl3/vbsUoe7euLNjj8f/nixZFDJ4j/C5ckU66rVvwxa7GrJlH3UmecnX9GgyxAPC4CIKAkgMz/wn73qa3V6xhrQH8A7McQ+69BGrCvd1vZzzgAKJelf35Op4OexsboDmnKw/wfHwicIgOAGMLN4KDfJdZ/JYBfxvSnl8sDBQDUxmQLvYm3BDvsTJ9DeQFzXfgvn+JhgHY6lNV4fACY71FLj9DoZVPtE8wTCZB1APOoYH6fIANmFnByZAUQy3OrANcQ09++oHTFWU9qVAuADgD4UdOfh9ryI+l/uxSoQFGfZYBg8H8UO/FwUk9/fz+W4aqI/2Pg/8sjF+Eizp9g/i+6IxW5Wou/80q6kplwsA5p7hjR30SKk3/BMiPhFx0/95+qbm0G1q1rXde6ds3aVhgADCiAWABNfnpb9UIlAgACL/zZewDrznjB/5oyOZUzSwOSZzevRjdOJjygiA8o7uP30M2WAMoE2A4gEqmxaixPTTJcO9DBM7zBfBkaRHyY/Uqa86tAfY8A9Af7K1xT0V+2a8znZUF6Zc3/9IVpAjT3pxYCnQjIdQO4lshjI3D7e774RZQBiAAQ/VkA6JGJb8b/LACS/mfy45n5jx9W8uEIACcAEQH0Y8k+HocTaFy6n+b/Q8x/EgAyAEtIAOJdVyX3i+xfTwidf7vPIfNVnsiMRzxFFqA22e5k/q32dof+LvdWsJ/o3wz+IwBoZQOwRiKAbAdwd0O98F8Zf7zhMV1+xAf+W+C/Ppqr0tSAF9z7Vq5fA9g855s991PGES/1SwiretVeBBgA4r+FVl8oHaqs356gAl8FM+rndkCobtxBZr9KZv0aD8Py0N/grXK5S5CkmRKSyBUNwGUOzX39WM0PoP2UaNVPd+UqAa8h8oDp0298z/s/7PC/gMFhvTH5O1sAnhD+Y9ilQMx9vFgGOAIQ/uPq6++LjxLRburr910A/YX/wNtgACAAi0gAIq6r8H/7nJKhHVjqp5L/QiA9kBmPCAUBiZhN+khf3BILUOXaV928p5nRKg4ACgANUA7AjAI2yJu7rDs/zdG44QLSTc8p/pdRhR+gLQAP8N+1D396jYCprgUA/MdwJIA+5jDAzxJQw8OykMADQGucC4ZTRQGifH2S2phyK0AG/4gGqQD8gxc5Dt4ScOXImzFXqoMMAzC+N4ikAJ07VGAK3mtszbUDuFYQ+k+HBXiXIwDEclyg9W029bX9503CJv2J/9QPjF9mBPB3AAIQicQV/1N4Gj524STs/8sjb3sbCcBF4v8/liz5bBLrW7AA2XMNtayc4t/inAU4XYAwF1WAb5cWl5L9czUkMxkq+C2XM/xenBAD9OE/Wed2WezjzQLeKBYEejEnC/3FACj+mzlAob8WgX1dwn8D6aJXakB/4j+f0iEKIGD+n8Xvwp9er+jviAALADGfJIAjD/mF+AbCAKK/CACx2PIwvIrr6s5PDM9lQcKBKGfZ4rmoAHyjmObYAGaxNv+tiv1HtQWg68pTAPfmlgGuLSAAbABYAGgln2jO9N49E89O7Q/f8B3hvygAzMDl+P/arepQcFQApBT/kYAb7sRZ9duXXhg7hPmfDcDIGHAHkInflOpZNmPiP7ESl4v/fb7ezoZlQ0NdXXQNqcrZZcvno7D9Bt7I4qqhfqAo9y0n+tNx+XXl4/gfCMACZBJCf/AfEUu0sQuUXLdnj9BfFGDtOs4BgIiOA0BwbmBzb3d+HfjfhCGoKyo60wD6IwHonM5lmgBcO4ZWUZbftADyRirAMz+oT7KDj+Q3cRhgcQZAOQCPGmLqrwQWBgob3G7+X/eNQ0oD0DPEzP/xu9h+oT9j6snfRC4JcO2QJ/y/nSIACAAxGJ3+CE4GABdTn7MCwn9J/RH/8Q3mP93E/jP/1QpgSvE/lRoeHBgY7BzGuXtHgHf/8plnnvnlzy9duoCjqI6FMzEkCCzXvHH/uha7etG7OBWv7CkpnjPZAt+yhiRXMqDZB9pnqjMuqFSPSlpLqgIp8B8RAPjP23PKu4NNdZ0ZQdKKtjdSFgDLABGb/pmUCxm4NTz9C1qVArROzAHgMvnf1ZZfLvvyRQLS+eeeqwL/oQAeP5B9Rndlj3tftUz364X9BtYDFHGwAcClFYDCAE4BEJNrbFZPQn8vXROAsN9VMp+q//8LYF0QNkB7gGo8ZLUHrub3N+QCckmAawVRAIkAbtUCwDv7dOU/awIUgPmvDQA1C+ByQc1/KQGk84Bx0nhc8b8vNvDiixAA9B0hID4loAyxvh4MzWD+p9rc3mXFc5R9z5tHxwaiOicag2YMx2qGimdddk9Db1kIYAVIorEBI4UTLxrIDjQgqZeCAHSnQX9CUxDdPpvSGYvpz/m+RotigFC7bBXOZGrcG1aC/pr/bAI4BACQAyBCykpgNaXohJI7e15l/perCyOdn/+KB/T3RUkDkGmvwWAbwOBavi73BhIUpQDaAJhQ1BcYmrPB3QAF0A5gau7rD23j/9+vt+eJDdAs1r5fbpr9VywCX801BLhWGJ8CmEmJvAKb/7IESORn3sMD4EEfdcf8xzufGcYugI8G4vBfHQQeE/8/+NJL4P/AoEgAOB0OoxP5MKgLxFHHS107H/H5XIvnYnP6vMWuKim/76wND7MEuLLWqGaxw48BoQQaePqTIWK/2jMLFUjie/5ANJVoKyxUm/M7avnQr7a6ZCCTQeGvWvcfxX/EcIT4j+k/1LV5w3q4f/DfzABwEhAPax0HQClATf/1G3Y+97P8JhskBGgAfO6YT03/pAFeIT/dbQ/Q41q1YQ39dSqyN6mfrQFaAdbbCtAVsdgAjHf/Abk09fGgPrCI/Grq/9+ZbNR3fpWzAYJWg+xTxQHKPGQhdy7YNQQpACIAdgAzaQ5XBqBwJhsA6QtAgAAI/+38n9oOSA6B+V9YyCcDwf4LhuMp4n/nS+946cUOFgAM8F8hJg2wQX6qFOqPRLDrFs60ZLHLR/Tn/a8D3VAATPLDsZ4SkgBzfQ/un/kfbkvXJaAAHAUAygtQ45/OjN8b2k38T6ebgnxcOBr+DDSlAqj+VXia0oCZWB/zfwfy8Wsx/RP7+SVAFRB9vVbYKCkAFgG+9m060lLUZADtP18941H09+GFy6sdgEgApRpWkppoBZgazH5ZE1zVJUGABPVCcwNeUwYCmPlB/uK5yPj/b4F4DRrAQUDrOPZvtW944enKkNsQfO0gDoBSACQAHAGowr6ZbACkKwCjxQgARACkVVC+Oh/kHbb9FxCBEVUPYAY2BGCQBSBUGYkcpxJ8C/VBNNXH8WGcj9qoAP0j0g8jXt5Wm8BPh2LDkABdqZI3d1lXWYgQywxQ8800CnvLMhkShJCA9vp2diYDQRKA8g7jnPCBATTwEjS2q15AqdHMpaOrKPgHmmnYoLkfnzL/W+1VgHEKsM/1Sgudzecgnf+zoL+R7T+g3hs9wn8WAJr+QX+gmqHWEbIVYC0uHvIoCiDY12tZlg79rSzrL3ee+EH+xQj6r0p+DdkAhAISApAHyEa1fp86H/jVXBLgmkByAJwDvIUNwG61CLCbzgTX/Ceqoyswy4BAdEEWB/h0AOX/bf5j6mcD8OJuJiAUgMEWIJayAlgd5Gk4ag0Pkipg0DdAzYjQH01xt6dB3DAUABqgJGCGdv9E9e3Bck7v56fDmcpkOAOA+XIP4+vOVKCjMA0Z0fzHSDoCEH2a+D+a6stc2LuqmomuBi4BPmT+Kx5SNp4lgB4QBsD+v4DyH7XjtgmDg/8yoj21X33aF8V4mr5kB6BUoKxmyA33byvASiMNYLJfbkDrWlz8lexCxAUgFUgKoNmf7QK8ivvLQH6sqF5FYNWGNABDmI4LU796159dGXIxwLUCLIBKAdyiDAB4j9O/sJA/kw2AdAYVA4Ank/9YAuAFQggA+3+J/4X+APO/qBATNFrRQQKY/yGw30rx2Xe80zY13KkUgJGKGm3xrGC6O8hZgBAGkGwgCZiH3L86RTPRhr8ZwPE+beFQWQYQ9gsgAQF/U1NCmD+YCOLV2ZkJSPGfxACjo8mjq/at3aPQbOQA8Hz48J7De5rXSR2Q1AFUS5Yea/Jn8otAfrsVR11+y7l6j5fYj+icDACLAN4CYL8sAzS43Q+tBJmVArCp1xYg2wHoNyQi8TsVIARUEVBjMVgJzIIAZj5Rv+SqTfzZ28ugAcoBmFQX//9G1gJzhwNfC4gDEAG4RQnATNnLIwYAPFcSQEuAsgVYAgA5KoxiADv+f40DACr/a0dUzem/Qj5ODALQAfJnYqkIeu5YTP/nYxY6c0EKhgeBToW48J+zg5Hyuu4BJAu3DwPbMULDSeQCltXEGOHucqY/H/FfhMP8k2j5zQOgtzBFAcloMgGwAUAfQFoFhM6oHEAqloweHwX/U0Nq+nccgGa/8J/KAJxlwDXERFoOQPb/XH5dm4LQ/4jy3TU0K4P6KgCgy5I0QI/L3etrfAjzvSgABqAVIFsG+GrFtVY8AEkG+w93r9dBg6+rq6sXkMaIaLc0jzp+XkOgTnjxV2EEpCIgqzZYf5hF/txC4JuAPLUK+H4SAFAfoT/RnwxAIRsAJr+d6zN6gOBjPiqUBQApQz4Z/AM4E5TL/9FT21Lr/5jX0XWvm4vRQ5Wq1SWtzsVif4mNPo8mnPjAUIDB4QhTfxRjeDiVLGqjLr2IDcL4ZrgzTD7A3+uPEULs/oX/uMq7E5Uhe953kKjNYDFR6J9IyHc6Mzz/018UaYdQed0bxOhrB8Ds1/wnzqtKYDytU/xfudmF6d/ZcdOUZvr7jFpbLDMgAPCpm5cNgGfI7aryAa69tgLYApClAGv1aOU7MDEKWOVGMzQFdEKlgkiwng7/nfYmzaLTZs0tpmBAqJ8dA1yW/a25dYA3B2wARABgADDQEcA2AE84wBfSBZDpz/znPkB0PliB4j+B+X/HpaXJUQKZ91AozP5+sFO6XVsouo+RAsT80QhP9ggCALrFU0T/YbAfsMJFTTi4ELO2GoTtdH4Xzf4DTaA/oYj5jxca/CMLQMN2AHSFEVVYYZX/z2iQBWAhSR0f7evdV23SH4Mnf4HmP7UDABXJDrSuW7N+3+YPYfG/o8NhP5l/vcuO7TiY7ziARg9vuXeD/oyqvfgbJ9QTmwqwVr8L+0UBtAXAwPvyWTMIaIKad31spZ82i4IBsf6TcL86tw7w5gMRgBYANPOA96dc/mswAAXaAGDkczQAAVBgLwD+kwAUtbQUOvz/GKb9OxYuubQU8/9fwH+GkLuT+I9XBLMvWI+r65OeOBNeFAAGANQXdA4HUFvf0Qnm19ojkUCiMBJNBZvk3J006K/4T4F4WFmAMIgvoKd4e3s8MZ7+iEXwHyJJvxsxiXsv6C6w04CHHdAH61qrUQpADgBLAnjCWLth89CZ/LQ02KkrwuJIW1Lq7g0JwNwvicAoAPrD/duIVq0WBTCwflIPIDAUQL3hfj3Ol9PmkBEwPX92OVAuBnjz4QjAraqMjyr5qSJIdf7QS4D5IgZMfo4FVAYANqHopZd49y8WEj+WSYL/py/R+l+cSAyA3Mzv4TjwPNYG4L4j4P9wzSf/uDRFZh8YZNBqoADpAKs8v6huINE5XgOGU75AIs3WX7G/KE1P+NG22mQyM8EAYGUQMYcVCtMhfCasqMV5Bgvb/mzum/Q/iKEAPwD+cxJgnVMWUL3PdeRcuqMb0z92/GDy/xno7/Oq8N+rSnEAywsFIP//NOhf1evefJ/P6yM0+hjfWQ82T7AA6ycsAcBzaP5DhtZRIlDzn/7I3uuTLnkz5nFGwDw7pFoeplCCXGfQawJYgOm2AMxkAcBlGgCAm3/odKANzHjE/yIIwztm30KTPwnAYHLpwoWnR0gA+mKdhgEAOAIgWAi/wXTrk388uTCJ6R+XWIAIUx/kp1sqVUTsbupA6s7QgEQs4Et1GOxXTffw1BbkhQAhvhrgf9zipAP4byIV9XM3RNeGdcJ+AdH/4MEs/oN7xvaADZt7anHoppAf3j9cGVD09+KuQwCsAxB8uLDnfvOmr399m48hEhB10WJAtgcA8yX5L2MdhSCgP/3nYAVgsAbQH79+s+YUDRQvv0svEGoZaKVXbkPQmwvZCQABuA2FvK+xAlBBALhtGABQTR5N/oP+JAxFs2ff8jHq/wcRyCxdODZ2HgJACcCsCEAkIILFv7i/549oDnT63eL5WQFSMUoF0k+rr9IKOMamAxoAJEgHwhYsQD4g5BekkQRIlKHpj2Y/dzvkegOsO9AnoxkHsXY/tUK07l5nLP4J/YX/IgDEf0BvEFgH+nfjVGEhf/6rwS0e3nkr5Kd7wNYAg/47v07YVOVl9sutlxYDJokCRAd4AKxCuOG1xlEAgGqRr+st9NNmzCEV2LtVtg1lI1cO/OZARwAfng0BuBUCALw2+7YCYw1QTv4XO6ADAMT/tDSYP3v2nR/+GOOWxKWFC8dOj4zc4Y9Hhhnh4YQIwDDz/3madv01PUsvcFfwkWd+GiMLACADkBo0YYXTNrcxsIwYrGUZqK1sbI81yQH8BtJt3RwDqApBXER/IOLhpEOIhWE0hJEhmbAi4H/cVW1zX2DTH5fJf5UfpPu6lasQ/LcATP62cJm30Sfkp5vefyMxAOiP0H/z1x14/L4qIxEgqcBqemGIBZAYgO5CfwV+FwUQGSD9uP4nzDxSgcXLOSIwGwhMhuW5HUHXABIBwAEgAqDTvEgCZsMAiACohh941Nl/BrKCAJUGtYD/d34Yu3+wA3AwCf6TAFz4hIUAQGFQoFL7sVjl0qUX/jxGPcFP4Eef/WXSifqxZ9hAp9VtcpydQDl3tt2OXcK19scadVhu3O6PxwRxGsg4WFzyExmFAsRG5SxOsgKpAFYqvXv3CCT4P0jA/bL8p1f16rNnZOI/153Y4vc6cz9fehAsarfVy97fRE+lr8Kn8Z01a6UgQCsAICJg5/7XUQDQjIEL4G2DtgQgezD/+sj/T+0F5sILqBUCkQET5mclOQW4+sizBQARwOzZt85UQQAbAGa9zX8AN9IDiQD42yQExP93fZG2/w8OZsB/RAAQgE/WcDD/a1yyxj+MHTrHjqEDAM4COQT2Y5w+fXrkmVfPxMUCxC0uBbAxbDUZAmCyPYgOOyIAdMal0wQPyYKwnyqJASoo4hP8AoI49vqxBIziTm4gjo/87mbTABzW/MdQAgD+Y+IXNG91nz2DzAS4fwYdtQGU+wj9Nf/NnhtDYv1NfOtbZ4/UaAXw6lRgNW8OchTApL/wnt9YBuzNw6IA13cQMMELzGIZuAsyMFEHtm7detddy5cvX4yKhpwAXHWYAjCTBUAMAEEf/o8bYFqAJ6QssIjn/3d9MUMVgOA/CcDIyMj5sQtLnztm47e//elP3/2Hv/1tZOTll1/GWQCEkyfGwP9Fvxx5ZlESCvA8JCASUFVBUhQc87dxS31CnRoK6Q607+fwoKmbjvgNo+cHoTaYCIX8cpinebSPlx58Fv3loxmNSIoDAEGzuH8gm/+H7R9yu4d6enp2UH8vOuq7TEivcv+6Ep+q8sB9kB/s/5bw3lSAoTNbqqp0364hSQRwlbHKA+gSAG3/hfp8yd7E9TSA/4cgYDymQQbQzI0OcS5ZjiImqWLiIibUNPxfGJr/e1AVgBKAmTAAs2fOnokLGQDlAIT/BXQrYgUQ/qu3lqJ3zKb4/853vf/9MfA/pvhP8zpT/fzfANxGLl58G0A9wC6OnCfyA+A/MLIIArAw+TyVDMXbLTmHE4uBXBRcOwB0vPiiOvdC24BuKxqN1ZW3BRPMfgEUIBwKJYX2BiAX6PDNJ+72djVw48wYrQkeOda110z+afbLAJqF/wIEBK3V1WjN7RqiTmQNXRVVQEVvL94BrsOVQ303bt65k6f+LAHgz+47E1aJAC9HEF2UCACLqwG6QQG0A2C+i/8X+tNwWoiJB/j/CAKykTeNkGP8mwApA6IkIEcAs7UBAEB54X9LETBeADD5F4L+mP/B//e8P4kNAGESAOAP58F/At7O4/niO4n90gXwEE3+wn84gBGMRUlUBY/CANCJ22rytlBDHK8MDhoYIHQQmrqtxnZ/d7eQn0r+RQK2hzJJzf52XDy8AR+i8E2bCaDlZpy2dero0aO/OLo6e/oX2Py/p7VZbQYysba6FR+yGsheF7zTs4uP9QAQ8k8OUYUjtV6tAJ4GVgDeZgwoBRAHQF0JHerLjUDViUbvsOt8JSCH6xFGBAAyg/90KyxQQOwPwAjkK/5zDzBAbQNA+f9s9v+Y/9/zno+PjkoAQDmA88AhwfmRi7/C/K/4/7aR8zgMCPyHADB+uQi4I/l8bDTeL4fuB5QIpFKx7hhbAd4mTKiMKYQgAFaiFtxHb7EMBjSABu03iFnCfnmRmBD/hXeb7NO3H3bt3bvXJr+mv+EAcO2ptvlvmoA11Xt+f1kcrHhk2yN0Pcy/ayePSYAw4Fh3TZXTt9fyciIATYYElOR3/H+z6f3pzu8O/VkCrttyoByuW+Q5AjBbCcBskPodMACiAKwBTH9RAA78mf42/+9k/t9e6s98lvl/AfxX7EeqjwAFeBYKoPj/q4sjp0+wAvzhtMIiQhl2BqWsYcrasQYoFxAa8EcDFn/ZbgOk5lZ+7YFQYjuBF/2o8gcyEA6JAAj7IymVDqzSa3DbKh4BRTGqvu8w2rT/pgggAcD8hwDIIDRXtx7+/eVxP50OPNEA7KTX5RXghY6yKhIA2Tz45Eo1l5sKIOG/KQHyIBYAw4kDVuYK6HP4zwQAEQDx/x0AEV3lAIoKCoT9haA/hwAqAODdv7NN/t++4oUl4/h/woG2ACIAp1kAxoT/jPemqH/4cIwT95K7twL1A6jgYdYLtLN/tD0Qw3zvQPYA06NyALzPWFCxyeH/RjnE/5GKo2b5Tzb5ebTeM4H/uFpp+p/cAGzDJQZAO4DJJOCfZzu2sAKoA7pqhlYSnR0FQDfgcfRvNvy/fC2JQns1YEOueCaH/6AMiAQA5h/sLyxk/hfJufF4VvSXHIDk/vT0L/y/sbTns2wATP6TBWDAAlAWAONt7/wVBICDAAiASAAdDOR/Pt4fHyX6W9EA5mwOBUJBS3PefIIABAKV27n/Fxf8CFgA/A79BQHN/03MT4xH7590+tcpgGbmP7BHj1ZM/5Ph+2wA8LfryZ/v4wOBb/FNFGCoezsKiIX//h1d+9azAqzhngO4iwCYEsAegPE4BQEYxnrg8lwQkMMbNwDv5wiA6Q+eg/EKu5UB2K0dAPO/0OQ/6A/+f7Trs0uE/4Div+kBJA1ICvAsWwBg7A8UBSwBFi25owf7A8BmLhRK8Qo+CUCtkcgPtHtpiAI0IkfgVPsAoRCX+NDL4rA/rvlv1OAp/uN1Vs//wv9sA7DnnlZpB6LbArTK9D+1AdAOwH0fnk2YCvBQsNbrFf6XlW0/c7+EAcRprQDNDv0F8sHjHAQYUcD/7UpADtceZg5w5kzhfwHY/g4GCUCB+qCIoQxAC9Ff+3+y/zfevuIY+H9a+D+e/r87yRbgbWQBOAh4ZuT0mFIAAikAQoAd21EJrNAZs+KsAIHtCZ7tmfNWRGDhExaAiLO1gN9jtgOw1LcEKZ9bT7+uR8QBdD34mJn+ywYHAOC/Bj03tx78/f7XMwBqjKf6zvse2rjxPqwO7NTkN+4bz3TXeMF/Ot4zWJCf/uZKqvZtxm2tqgVutg0AX8bgD/BjLAFiAnIrATlcOfL0IiAbAMV/kFsEoBBfAoV8wQBwEzA1/cv8/2ni/+3TEQAsEf6/nM3/kydOy0oge4Bnnzl9egz8VxKwcCEEYOGxzoEBm//D8QAzNxIIh9uVm9fzuUgDNfW1wPpkPIkb2wCu9ScNiKDhmINIr8H/jTz541X1oPb/k9EfFQDNh8dhj5r+IQEHMLJwsOqRCloFqNhmGgD3Qw89dN9D3yE8tGmS5cC2Mm4VtKWNNzj99uBThAP7f/g9pveadcYRZTYep9mf7qpVqYgAeYD/t3KgHN5MGBEAaE+EL2B2iwKA9gU6B8DzP+iPn1UC8GnhPwcAp09T/D8yjv8naUACDqHkXxTgCQ4CRABEARZeom7hAqz4RRXRA+FQVJt5E5GocgBJZj7eecRDhFjA4H/AZZbh8vQMNN6v/f/BSYAAYAL/oRX79zP7GfJuGIBHKxiPmPR2g/ciAMBG0F1oby4GfKhtCyzA9rRadC04c+EQ4YGnIAF7yAmA5kYWUMy/+hJvYL7pAVbm9tHn8IZTALz+X4g4v2C30P82ygGw8ZccQFEL8R/fEfqD/8r/T7+95MiiJeD/Jar/kTpfGb8D/U/ia5T8/8pOA7xTLMCfMKAAxP8E+B8U/hO9UyIAsQCeLisAUY7zY8x9MQB4pD3/SePPeBH+azxM9h+zdKOdADD5/3u56AUgABjHf4T/h38P/vMANP21AahgaAOwk/nPAvAk8x/Pl18M6GnbXlNbxPSH4NbV/+IBloBdkIDHiOiP0QIk01/jcR4A7RUwEwF7cxX0ObyBMkBKAdzJkzoWABEA0AOFA7gKmP8SA+Q/Ify/Tc//zP8bV3z8S+D/JfD/4sghRX8RgZO/A/8pCXCaLIApAH8QBSAHcGxwAPTHbQD0vwntO6LK81vhUBb/xRs8WoEy2iqPzXwMMQOxTKVOAFRh+tfYVFGhqu8bLsN/UwgYza1UCOQAP0q0lwv0p0twmO8PPko1wcAm4T/P/0oAvnM/FEDhvuzCYF4MaAL9ZdE13XZs6a5DjF0HfvC9x5ppnQK//vBjEAGe/BX3RQPWGTEAI1cMkMMVpwAkApjJAkBElwxA4W1kAPJ5OAagBfRn3Kn5f2Ne6YovLQL/LyDQlwBAin1/h+sf4D8LgBQDSRpQFIAE4FJocIDoP0D07wNS0WhcWYDwcBb1CREv1fXf7XavGqJDwEwViMVDfls0+nrH78FFGw5Gw4NZ/NcWwMbhBzX9sR7w4MH9B/bjOkDhP71l4XBXYxVjm8H/IRGAJ79PD6vVtUlLgLkzIB9QKZd0uqMeCqBAcUAzPMDB/U89tf8HiAlMB8CXBAEygOuyQWAO1yHsCOBOCAADNcC2ABAK8hXwCP5T4x+Z/k3+v33ZF4j/l3gDkMN/lgAYALIASgGegQWgLAJKAZ4lBRgbIwH406XMQDAYHBgIduLEAIVHlQMAmUPjuK9qBL1orbP61FHGapwPpMIAUQFcdtLAgv034fJ6uRufVxIAWfl/sf+4wHaZ/qUg8Bf7ifXgvhKB/Tz0/M8GoNFXxbBFZyfmfwIlAb8LAdC4L1sC8MFv1fRfSAJQ1xZa+hTRX1IBe8gE7D+wa9euA9CAx9j52/znIGC8B8gVA+RwJfQnAdARAHuAgvzC2TD5SgCoKShV/xUx/1vqbpGfYvp/mugP/t9Y8uUvgf9LT1MC8LwdAYD75AD+8bt/QAGgBdoCPEGlAFoBli4ZYPpn4n3HI4DVbwW2VfT3qQbiMU1+qg7GC5v67t67ldl/z9F7Vu/c3ICf01FAMpaSFCCt/pnY5AUaoAFnNf8Pm9w36P/UAwd/4ewIhhk4eIDBKiDcp5cpAQe7Gn2kAL5eJwGwySUCcN993/8uHgzcvTHbA/zzQ9TekPlPChBeeoDoLy7ge6QAPzgAWwAN2P+Dw4gLlAnAtYdXAoT+/FpfnCsGyOEN7ASEARAByG/ZrRYAgHRRAZ8AQgYAff9uAf9vm8D/6dPfMn8F+H96KRYApAJwF03+jgH4E/gvlf9iASgGeFalAS5cuBRctCgYTGDyP34c5Md6f390W0nJtv4U017Yz1sDaPLvxeS/d+vWozTuvXfr3Zuww2+oLGYbgCSkQEUAVu/EJhy9HtAf/DcCAOG/kB+DcWDXAz86QPw/LPuBHtz/1AHBfoDYD0ACTDwY9Sk87BT/kQGQHOD3kQL4mhMD8KeyIGAqwNlzReA+BIA7HSSe+/MhBwd++HjzHoQBHBjsQnLQNAJ7HocCiASwAOTygDlcoQG4kQ3ATEcA0PynkPjPKOLtvy14osbft2SH/+C/CgCWIgBg/osDoNmfc4CwAEoAxkgAfvVO3kvEQQBlDZZmBgYWLQknif3k772YRHuXuefNKtlGB4tFIlwOIOwP+FyY/EH/U1tPMf/3bt5E2OmuibED4GqgJP+ZrqwmPC6PcgCTBQAC2OwfAboeELmAA4r/zH0hP4ZpAPBqEP5XKP47AcBdOgWgIRKwc1y5EKUCoQCMOu51csRQgAf274ECHP7BLvUVNICDgcfEB1C9gGBtLg+YwxtZBPw0RQCC3fnY5iP+HwEAl/5xAJA/+xaxCZr/OFU8b3pJ6Zc4AaANwJidAuQ1AMGYFgCOArAjAGcHYfpfEkr197P39/i6eukI21lzZrxlRvHDjSkWgBQ7f7b+NPmfooH5/9S9W1dvVPz/OsIAKIA4AL8/nmpwYwKeAJ/HS0AAMHkGEPR/4EeEB3QxAOw/FeXIzE+DriwL8CDSC4xtTgBA7JcUwP334+HJJ508oG0NNuoFA0kFvlKQZqheZ2dYAQRPHeRdC1AAkYBdKBUiDaBEwOPqsBCng0h1Lg+Yw1QYvwbAewH5qF9iP/Ffbf7JZwOQ1vO/yf+3LFjx6UXMf8MAPMX8Z97/7k8nxQDoEIAVYOTSpUuoAF6YxLxfU+NpYO4Xz503S81ceZ/56XeqUpH+vgjY7/F0DSHpvxrb90/tJf7junfvKrh/oj9hc5eqCIAE+OOWUftjBgCM7BUADaE/sMvZDrxnP9MfMb7iPyHbAsAAeAFq7bHJDgBQ+6MjgO8++V3gSUA+ddKDG8cvB379TIE0QEMHpKbybiiAGQfs2fO9/VQiIBKAdQGKBb6HsuZmrQAcCOTygDlcoQB8WkcAhaA/bwQslJ2AT/DOH0QCs838H9Ff8f/GZV/4ksP/89jltwtD8x/QBmCEBEDaAv3twqWFSz577DlQv2FoiLk/RzeBm/6Zz3/jnR9yD/mixy1Pw9B33HffvVroTx4AwPSv6U+Mc+1Q24L8ni6d/NPYqPr2vV4A8Huiv+Ap/oSzf0R/+q7M/YIDEzTgQeY/Xr22AXBjyicLIALAgAwoBfiaIwD47s5xHuBbv5UsYDmhThRAS8BjlAl0JOCBXWxOfoCs4OMsAFoCcpuCcniDEcDMmQVUCbgb125U/6mjAMB/OvrvMvzPwzGU82EAFl4CuYn/yE7pKkBcBsao9Q9HAISLJ/+4dOnSs0MAH10/Z4b5j/UG0P/Zn/acHXrI3dsF9q8i9tNgDbgLAvDVvXdv3Az+mxG0u4HO+fPryv/sAAAacFYf/5NNf40D+ESmf6E/090mvxkCsDc43ONt4OHdKAKAAIDxJKcA/s3elYbUVkXhLCtt0kIabIIgaKKioIhoomgiaLTZZjNvljQnWWamSL1bl+o1Z1etjIvdUAuy1KJoAC2sLISwURuFx3vUjwaqb639nbP2PedeG3jvz/V+e5/juddm+r71rbXX3ier7JehcL8g/xuxKEiwLxgKIAJABfiLbCfnh2BUhmgC6AJcfeLhh2RnoLwmxFmAUh2whH+qAYL/IgCo7dMAlKPtF/a/WvhfrfyvVgPgtgdse9hUUP7fxPF/y8AAaPz/ZREKAA3IkPuGXxdpAB4X+l/704/uBNgdYPm9nSuM/lvc/PonsAW9q+pqzzrrLAR/hx/rEP9dClDX0kD6G7AacNsz49HaH0k1WV/vHMAL+Q1AOkP6E+kJ4b+E/7Sw/+FI8B+SW64BIK4L1gCl97eXNYDGpAmASUCrolEUgKohE/hjZuoBCIAogJyF6hTAkJJ/gJQpgioAIBIwgBeGBRJQqgOW8K8WAY8+bK+tWAFAI7qk/7iqtQIQ8L8yd/l/m4D/ZQcef7QlAFIBSAVNgAX5/+crP51bu8fW+Y+AJf3Hlf5nCurI/ydkqgU4zYV/JX2uAtQy+Y8hERzbHa8AzuNC4T8C0F76bhD+lf9G/yEZrh9QvqQDmFgH7vsGgCuAWgYEwZtXg/4+AvYLauXWk3tMkCgABYAKEJGAjBUCgIzTAJQD7nNvF1AFuKG0L7iEf7EIeLR1AaHlTyEmQN/5J5+lNcjB43+ZYKPtDzrpAMZ/8H+NKIBIgNHfEoAD0AaEvQCg/0DtgdvFyc/S3843vz4N+q9y9H9KRp0MswCn1jU2NGj4pwYkTAH4GMNL9QBy9Hufy2MAzPsbJPwL0fHrnOiv9MeF4ScBbzP+119H/jescvG/lyWAZqO+XMJ8kr9V7hgJvxCAhoAHKACCNiqAITOUsUKAKADgTMB9F5kClPYFl/AvdgKGGcBeqABQALj7v1y0oDwn/jP9BxCuD5r7GvxfA/Y7A7Ao9P+VNYCIAfj+9df//D7108CPBxbKTcv2PfFxRH+lP9kf+v+nfqzTQgACaouFf0w+LYsasP+K666+5ermuAEA/eO4VvgPNo087NPfcZ8SkFMEUAMgAlDjBCCBBIAQtrdmm43/pL8H97mBtUD80IaAiinHf7zuKI8CpDKpa5X9GCoApgADOBMECiAWoLQvuIRCEP66NsBwDaBK+V+FIQKgZ4Hjmfw/LB7/N9phXRsLABr/F8M2oF9jBkDx6++g/45lBem/xbtz60j/s5T9CP+5DgDkkfTfAr8+/hNeEvZjI/DkQNQAMPWPIvMoSC8CkH7Yj/6YBE0AFIAGQBWg/goX/3sae7UCILde0HtVlgmAfGPRH0N/YCoSngJ0LgxWdDUJ/6MKYIE/FAOAEkAPcDoU4HQoQOmQ8BL+eSegZgDcC+x6gHBVSAlACwDVjP8n5pb/QeNNa6cPoAGQFUBA3vaXijmAX1OLjv7PPXXgjoUKU9uc+N4bMws1qxz9Nfq7mysCUAJaG1rU/mPiMiOwLG4B+4GreQyw8T9N+seQkZ3/CP9pw5CPdI4HGBkP3gpe06kC0AKiO4D0bhHAcn9GfIv/bsitISwFduKowK8rukQABMODpgAGWoCU5ACWBWDjEBWgtCWghOUQzQAqlf9VuNxBIMr/avP/Xvl/Ix17jLeB/0jvUf9fIw6ARUDgC1EBUwAA9Efub/SP1v5e321c6M/UX3AWLxAflwL8Tyj/dZgP8DUg/lnJj7O3XzIDECT/UABchD0NyTah9Egak/R3w8c8HYAYAL4P9BKuALayAiD8d4sAfu1P+a7JP37gjsdwKPt7eFTgGBSAAjA82PEX+B7XAJoBBT2AHCHiFKC0JaCEZUqAZUEG4ARgq+py4T8zAAWMwAPR8j/DP7BlazsSAMd/NgEq/+kAfg3pL1Lw+/s/WukvXvs78dV1DP4S9+EA+OMs/QLxX+5I/4X/ZD/Jz2cjfqwy0CDkRxEwugkonQLlMch9zBBpFQm/8odp8PcFpcUA1Cuumux0CYDyH5cKAGi9erUJgEIivrIfg4rA7xPMAjqhAIm1UACl//DY2HB+BSD7yX/2LD+EAwLwruDLsSC4x0YllLBcG6C+E5gGoEoRFAGnJBHYdve85X81ADMHKP+RA2CssRcBWS8QVeD3b388co/CsWhfR/86oT8oL0MnHuRGOwD+NyQcQgdgN/sZwyRf27suwn/k/0b/XDws7wqZ8KN/gIxOwFoB3q5X3HnVnc4AtJD+mHD+4LYtAlj/H/nOyz7JBiEZqgCd0xVdKgBjgo6/mPXHgCTg82A1MOMKgZIFiAKcXaoClJCX/n4GwCVAnAMmmFL+W/w/LF7+l2v72r/2dvwX+nMfMHOAXzECC5D+9v3aA3fcuvCppCftpvQXlsP7a+BX5osY4IZeIFyw/43kvj/Iej5HwF+4FuB6WwK0BABTh7MC/ACkNVkg+0OAXTIpAWENYIZn+l8jBgD/iDAAlAABeB3UAFUTuCeAMhAHTQAVYK6iifxvaxvr+CSVn/+v0AKkaAEkCaAHKB0QWsI/nAbII36rpdofWgDy3+I/0n+z/3Lb5MAjkADIe73AfycAMkK4IkBagv9O3OBTIPx/UlPjvL+FfTH/Qn/c6AiQ/icI43/U7fOb2C4glYDmaAJwLeBoH8OQCMDACLt+jP+qAAAdgGD+7Tvvlzd6PPjd9Qnhv7QACNUxwXPWAHuJZDOhKhDRgFWYVABJJNwJAXPVTSoAbVCAtpgC2JYAUwDXEvgoFOBSUYCSBSghvwHgGgDeCMYlQOn1Nf5XVD7g/L+V/yz8iwH4MeC/WgDyP/VKEP/x49ffJfjvwG6UAtn/6/vUMPeXGYZ99QCUAsT/MxsD7psCEAmBmQB74DO3AZsBmODGP8ACvzd1GVAtgB/9ZRDyyRzAPi/edhvo/9nseCcaABKsAGIK4U0AQP7Vq1c79oP/mMAq5b0NzDrZHWTvEsPGgCY1AEABBbhWLcDn3krAw9ggiAMCRAFOv7xkAUr4F11A1UgAMNQEuPhv/PfLfxzoAYIBWBMIgPCf7p/AUZ9HrKs5aCcW/gpg4xNfHmf4B9XJfMiAjzOF/y78mwYw/jcgbXZpdUO0Nyj4XEMDkPQNwPy8GACTgHgjkArAwz7/fVgZcP7TFx955o7Rz2a/7Eh0JlwC0KtT6A9wJwDYr/QnfAlY5cF5gAYIgFgAKkCfU4AOGZ8sxugPpAJwKVAUQA4KFAtwUMkClJDPATAD2EsFgO0+OPNXXw4qAgD+O/oDfvqPAewKA7AI/h96aMh/AsYfJ3059hcO/lz7f3ed8v+soPrvBqYAwV9R56p/BqW30h80C7LqRj8JaGhN0B28lN8AZIz/+WyACsDAhJ/6G/ApSAGWRuY6BrumKtE2NfOH/O0ajP+y80f7gLK3O/rLMAWQIVPKATpNAhoTTgG4Nai6DwkA0NHR0dY/txQvAfhFAG4LehplAHiAkgUoYfnTAPlS8HJ9HRgNQHk5+R8t/5P92gSM8zyE/yoAXAEENO3Hkp+w3xL/Qq1/773hN/2LAZBLia8VAM589E8o/em0ARCp1ZIArKtxobBW4j+wLvccUCQAvgXAJOQZF5YBBOlMTvBP6QCCdQAYgJ/dwcnPft0p/G8hkUMDIMy+/XbQP6IASZMArQboGQGYgC4F9CREATDhAUQBAMR/oL/7rwj9P8eNsIZgOSlIywClKkAJcZSFbwTaFiUAMwByoSFQjgSo2j3a/WP+H03A74P/Qn9owG9r7E0AP/3+7bc//njQTlv/cwfaxidtsRv4z+K/s/68Ce8JfJGIgvQn1xz/F3Bj1JdfISXoUT8wySWAF0IB4LGfcQfAoTPtBGBEYz8ush+TDkCxtDT/dbnDs+OdAf97w/wfN7k7AWhWBcgnAfQBAbQOqA5AhirAVJMIADFtDQF4YPiPOID0yNMTDz0qZYDLLy9ZgBLiYAbAEoAzAC4JqMzH/zI//sO7wwAsCv8PlRzgV6U/gKLfj0ceaLF/efv/+CfY80v7HwZ/ZgCEPEbZnxD6C8l9BeAO+wToz7U0dQrMAKIGIJ1JoW5OBXD09/mPa4h/9FBO7CfHBPjFEu6LfJuXMwAsAJgsge64H2IOII8CEJCAi/Enn42hFiCREAUAnAJ0ddAA9PebAgApmSwCZsJtwTwnjElAXckClFDAAOwfGAAN/kwAlP+7R/gvzKcEqAFY/AXcF/z2669Y8X/np5809PNMP2KZ6v8WW8xNSvxXytsPJv6GBOCXAIGQ/+a37XgNB/4ZyACcALxwn8f/+SEwOcwBPB3AwyvuY4Z6kSb9Q/brIy73eennCkV5+ToaADqAsOyfDASg2Y0YVAQwAYiYWQBA2E8FGJ+aIv+Bjlv/Iu/Jf6W/ZQBuHxMEAOcE6lpgaUdACfE1gP1EAHb3DQDfC4CCVuXuu++eL/4Tmx3516/gv4PQ/6dvB3788cAdSP5/w/+bd35T/L+t+3PiMQfKflwNZD9uoD95vso0wNbSFWwaYhNAfdwAqAQo4THBfFy8mQBMaA5gsd9Dxs01ODtNX5+yVgxAS6NjP+6kPwUgGzoAyoCRPxc8MVD/+SkBoQJUtvVDADr610IB2qEAFv8xFeYA1AJAAMQCYE9AXWlHQAl51gCDDKBSBIAOoBp7gJ/1+L+NF//lRgOwuOYXZP8a/n8X43/QHjsw7f+X/H99ZmFVq/p/0l+GTb0BYDvgGQDN/o3o9nRm+FkYpGeGoCnnCicAN97nVQAkqkccADRAbvY5BfJPyBhi9M+HzOKgHt+JV6gu/CH/ZK2u/o9B+usmgGYVAFI/vwnwJcAJQIsceayVQLYE4ZCgNtA/wCEZWgAl/+cx/uPfE+eFu3ag00sWoIRCGYD2AEAAmAKA/+WPvxblv63/KTY+CAnAmjUS/H9i1r/5f/r7n3Tzy+MLrvkXgxkAuW8ZAPnvp/9Ag3HeQA9gz0429CQQSMC4GQBJAFQAWAUw0A+kXpHvIQBupI3v13KYAOzWJZiqePbVP3pAWPIfV3K1cJ4OIOs5AAUfCkDWBCBgLVEPsK6rAgogGrAWAwogoZ8jnwMYmcALA8QC3FCyACVE+I8SoGUAqPrxlcCO/8/G+B+JHzu+/5fb3w/2g/ww/v8JGx9981v3Cv/P8tJ+KQOS/rgZ/xM+NPwLPRjxz9GfZ4ZLbnLRAABaAqwXC/D+fZ4AaFovfM6DFC8IgALnApL7NjCJxb4unNo79UD5DzWdLZIAsPoH/oeQRQARAGU9J7GMBMi/gBx8BBVwNkAPCWqqGOsX+gO4/+UUwOhvpwIBI8BDj8IBXHS+WIDSEeEl5M0AqsQAqAAAcvw3+I8GgN0j/C/L+dOxCwBtwDdihx+z/v+EzU68ebeXFpj+YwYjjkj5nyZbjtQITT+ehP7acuMO3vcFACXAesx7B7w1wLQr7IestiQAsZ9IBQIwn9Z6obteMQXQW+brribE/8qKZz9BAtDS0Mryn8//ZhUAPtMDLK8CSZm9q+TfgALQk8DQQ4L6KsbahfwqAu2HZFJKf+JXlQAzAFgIvG8AAnARLECpF6CECP8tA6gqr8CrQPgmQJwDGuN/NIDvuA5dvsj6d6Tv/6/8x/If+K99P5wW830hiNKf4Z+lfv4E72UA7odzAGYAAGwDMgMASnNZL2A+h04dgpSeFyh7AVKkPOhvEiCKkFnTBAEA/8tfbjgPXHXJRy/zf0Iq+yoAfgFgeRegAqAKIC7AZQFUgMlBUQDFWsxPRQEiWwGBJTUAABzMgFqAG06/vPSisBKiBmAXHAWgBuCBCtn8U1FB/u9eIP4TO9YurDtoB6z1/y9seuJ7+7jlPy/0ux5Abv3VCUTdP1f4aQAEuuFekHRDbspCGoBGsD9yEIg72itD+rMBSB6sCJgSEUgNYbuAssnxH99Ex+KgGgC8THGfzkRLC8TJyv8mAK4PiLACQOFyoM6kCkCLU4AelwXwoMDhdloAzE8hTzn5v+8AxAJMIAeQKsANpx9UOiC4hIgB2GWXrapoAEQBfP7vEov/hs33OHKP//1/075bvI7dP62u9K+MV+7nQzz7N/5jKteC6M87DQDIowZgsl7hHwSSTpP+oD45H8b/HAfAdr8llyuw3pZTCFjT1OQMwBvamSh6RP7HBCDSBbB8DVCuZOgAWAXAVAV4iR7AKUA7FYD+X3qTxAAASn/gvkAALi+9I6CE6EkAh2kJsAII439VhP95i3ibb/z/+f/yuhqx/2YANNzn0YCGePGPYN4PuOivIkBwa6CuAjbc6zKA5+7zDQDYH/b7kfPyg5c+S7ynnYYCOOuvvA9VAHOxTwWguuKHdZ2O/4Dw3wSAbQC3e4sA2eZ/BQqAICG1QEoATgq7V+sAaykB7Z8u+bsAMJYCAwBMANIKoApQek1QCeEaIA8DlCaAKsR+8QDK/5vJ/z2N/+sL5P+7yn+1+zqt9xefluG/0f/MRtKfzDewBMgaYKKnpl7hvw1Q6Q/4+b4+pmTi0kewXQVAA+qQ/sox3/cAXzc5Aah+VXqAIEox/nMRYDUEwByA2X/e4njBcwBaCKQLAKQjyFUC13IeshTU/5X9fglAHcDEo04ASiuB/+ag/BWxVmIGQHf/SfyvRvyXBQBtANof/Nf+PyT/653/LP+T+0z3yf2oAGAGjb+2yu+8P90/R4BmNQDgTqMrAV4G+l9Wf2EY/+eN/hr9SX58SD3PJ1BbH4KICpD4rAMEH9bgxG4RgKnBGlQAGth/kBRa+0iKAPwXA5BsthSAaAESYVPQQSc3mQJgHDIfblECljCcA3haBQD9TFSA0tlghVlfhikXH4tbB4T/bg1wfxGAKcn/hf7V1eC/CAD5z/C/HrEp+F/D8l8oAgb74LcAyq0xoP85Iftdyc+Dy501CtMANNarACwMBAsA6Yzy2xqAQwcA/oPe5L76/RQTavBJVIHW3+6Lg04A+vr2Uf7TABj/rQSQvd2agIF/lQTgX0JUrNaZAKAhUICG7bY+eaq6rT/IAeABRtzOJOG+IL2Eg4oBx39Jf7QKcEOpDBgBCR9FsUsABIAlwN2ZAUACsKUN7YCg//770/+XAeuZ/++9rPxn6z8Zz3u0CODor3fafwZ/ggpg7FfwHG4nAJOX3QnU/0j+zxv/n2fOz4Q/lATm+vLkOQBqg4iAKcHXOKwXCtA33O6fS5SMCwBKAOFWoH+J1a4VSP41qAEt2heoq4FI5bfep3JK+K/0Bw4ZAfUzGBL/WQM0BQCgABCAJ0plwMLs3yQcimLOBsI1gP3lfQDV6v+F/q8Z/1n+X2/g+r/W/4TsGCIC5v3dh6gAAAnMkP+O+ZgOPv2JXkCoo9bhkvvvvOzO+/UkIBBBOoAD18+7hv5QBFJMCJjuswagDiDlXIEOTGDN8LAqwFjbQif5LwbA6G8C0Kw1wGa9jOL2lF8A3AvEAguQ0FuPQNbzt5ur6GvvNw045FPHfbmngxLA0yH9pR9QcoDShgCf/sb8XFAEive/VVACVAMw5QyAOoDdAYv/wHrmP+O/n/zLE2/8SYDBGArn/y36J/WKen/WztUAOAGouex+GADJAMB+8p8GIKXm312cKcd95vpWAgDU8uPSwQRgbFgUAGf1vdnZww4AIBkXANYA/3UVgAKg2wGAhmAxEJcqQOPW2ooxHZQB2te2Y+7zaZj/L2EwBVAo/+EBYAFK3YDG/jzc3yZXAYo1DbAMQNYA4PuBmP/fZEPF/5DiZ0bYH80ADOS/7/1xFTYAzAASL91///3QgBfQ/et2ADD9N+9vFzhPktMBpMJFddQAmfZTHOR57ezYGBRgrG1adieT/9YCaISHJDWHJYD8aUB8b7DohlvvBFwKkMBMtEAAGMV3XFvdLwrQLqN9ehoK4Nw/ZtwAQAEGYAGeKHUD+qGftM8Fvy1mC1BGA7C/bv4D+zEgAdtq+Cf/qX8bgv9sADbbn08DWhJq4gWx5B8zYgBiGUCjGIh60P+a/jcfnRf+qwEgnrcEQGO/2wOAm37nUn2W1QVB3s/fyB/8F17SAQXAzpyFTt0DRPSKACDeGygAgQREUeA7WBnlP5Y8BVAAQUKuII/fsW1QkgCJ/+B/+/Q+I7r+vyTXfLQEMCADFmBFtwJYuV+QQ/59ZeRqQNFaAPl3ZwmwCk1Ayn3M8ioJ/7t4/F+v2Djkv1l/Iq8PAH8xFbnhH+vs7PuP0V/stmUAPZMv3v9I/+BwFu/uBf+1Auht/BFQAsj+oNTvWG77anwDwGLAYn+bKAD4P2MJgG4DogOIrgKS/tSAbGENSNIAoAQAWBYA8utIGIV3WDvW3i4pwLSi+/Z5sf+Y4L/Rn/x/DLfnbrhh5bYClEXIDzjqE3gIREBSgWKuAoQCoAYAkPpf+bb7K//t/J8NxH878ZMPMuNwpwAJtO2319Ds6G9wrDEBaOUaQP2Do8N9fe1v+waA+T/rfgH9U4z78kE/WxcA6mrySb/UP0okIPNJRxsw1t/eLQkAC4CBA8i7Clh4FSD2bdIyADgAJwHsCDYDAJTtuLatXeO/KYDwH/QPSwD3sQSACTx3wxMrsxWAxC/EfoNvAYrUAbANUDIA3QYA/svoMv5vkPj/Ovkfj/r2IdIERDQ2kv8mAL0mAZY4a7QVtGrI7Gm8dXgQOAQGAJifJ//t+B8+Mf3nGiAP2WETAJDOaPcPcwAmADiZS/g/fasmAOS/cyh5BGB1NngjUKEKAC6/CBAaANC/tRFZQItaAJkH+R5+x7l+KAC4j6u7GwowguofDMCSlQCtBCASsAJbAch9o36U/MfoAEIHUOQ1ABUAXQOo0hKghP/yqf0Bn/9l65f/742D/0Z+Y3w0FyCE/wT4D3qFSDb79T+ogTHJSoCY583oi/XHPpUM4On5eR4DHpgAUJ3VP88BmC1I2et/aBa8XsCl6Q6gre3W9vHOHhgAR38vBchGHIATAAza/+VsAAWgNURQBEiwAuBjByhAEP8BKID4f/wbmwJ4SQAswAprBSiLVPws7Q+4D+CORyqAophLAGXOAeAkAGYA5eUyd4/wf72i7KQtZrz1P9YBTAPiwP/tMf4TiJLGf4/9QJABAKgfrG0alCK9cmHeGYCUst8iv6gAYA6AjT6v0ADA/y+pAdChCqEGYFQdQPuteBcojwFW8mMmjf5eH1B2uRTAvvZzGaW+GzAAtTwapCVSxNv8oO528n+ue26u+/rsfDqH//f5DgB47ok9NloxCMgfof42jPwEHswBAEW/CKBtQMwAUALUDgDyXwuA670JquyYx/cx/x85+sPXAXsCfwPQYINdtNiWAAAhZZgB4HvZCAgDsDA42NbRPnrI02IAUAGw+E8RsK3/zz//yvPyig3GehYA6ADwUVVBdUDviyi9QQHap7uxByDBlxPpsBpgNkcAVv+DAVgddQDJVbrzWRMADBYB0QvAGp4JwEtzTgHmulUCRAHmMVUC3IlmOQrw3ArKARz/o9y30H8wpg58NPoX/xIASwCWARj/N0wDwDE3f0L+s+2PtT97jiHC/14Ddtcp/Ul+IuQalgicYz7vzdl+EFVLgKwAkPvmAXAp+3XyHbvWA8BXguJr9gDiN3qfHhX+39p967huArb3AACgvoxII2DA/+WbAMwD0ACwBlgLC+C2BCei5/ptfODkvd3OAMyB/8CbqgCRRUBfAVZIDsDob+T3qS/sx3VS4AEEYfQv7hUA6wNmBiD8/zLKf8z1h30f303e/mlkXx5n5hoAGuwAzdkkEQn/QFIjMAwAkGjo7kB9rOOTCREAqwB4SEkpULivNwR50FvnK47/bsgLeLytQHj86zsYAPD/jmvkkDIeA8qRDNmfzbcXMK8FWM1psDUAkN9lNGA/EIveG+8xOXmvMwAYguudAtAAiAMg/cn/i25YEe3AFv198gfcP+ngkwT4qfF/RdG/zBeAynLyf8M0AHED8Fty/H+s3Xc5QXBbYAP+93oJQHa1sd8EgFxTfYD/x0gsIPp3zA4eoq8BGgkNwPP29h88OLwiYyn1PKivQwsA3AcAAyBgDUB+ufQdjEVHe/et3ZNmACwDyEY8AL7UD/ZCkBj940i2hg6ArYBI/zFifXxlEIDJcTUAgLvflhX+WwYQqQKcX/w5QB72k/onGQ7GCMO/1f7J/uLdCWRngQQGoCvKf2K9bQAm/7nfrzDx7etwG8CZQXwVKJfy1f9YeU+C/9lVrmjeM97RMTbY1/b20yMY82jmieF5H+lPIQLCfsZ/OgD0ACiYBugKwHfto+D/HbfeeV6P9AC2Sv1/gSLQnAUC/mepSvhGYQIQy/75CyqaXwKsFQloUPrbEqABAiAK0E0H8OYcMJMd8WsA4WFIj6kFGHii2HuBHP9Jf2O/0v5wTB0CMQP56F/Ee4FjBkAXADdoA/DrsgGI3P6XcOy3AgCm4mL4515z/5hkP5CFAIB+zVoCxJ/aPTs8ODw7N+HWAIY8A4Bp9GcOMHTIG3AAbk8QY79czgB8JTeuGA79Bf73j4L/1zecZ8eA8QaBUvKbBOgqYHAaqEjA8gVAisCqwAEQLWoAGvJk7ztNCsa7XQ2AmLmRKUC8BiASUOS9QMp/o79ynzjlpFNOOe6UU06RZ2f/BcG6XzHv/4kfB7o/zgKEAYjwf/1vAGQDQGH6x3sBWm0FkC22RDKbjfT/WtEd3Mevs72gvxiAhbbhto7+9tuxC3DeLwEa/XkBwv+pqUUIAKD8B4Zk0gCYCcgsTY8Cd3Tf+t1LMAB6DJhBHAoUgFOzAREAlgDiVQArDOIWzQAaQxGoZQKQL3nfYRJ4aXJ8LjAAz8wB44/GigDWD3hRURcBLPwb/Y37mLhOwgTwK4/+RZ35x9cA9tzdNQFU6/6/DdcAuPN4sAD4VGHyn3lO3ZmsEjbWTF73JEsAjTQAtABSTm/27H9MAIR2yAC0DXCmTdYApt8eiRkAvZP+xv+KykX5xuK/Di0BPo/xFS55b0j6L9C/47sHb/3uKPCfBsBAB+ANrgICzRyrjfp8og74bwUisAJYawaA1j0uAMC41v/mAqybmDf+mwN4THOAE4q3CFCQ/gaRgMPVAND+C/2LPvMPkJMBBPzfYA2AZSdqA9Dy1X/IQx1udQH7n7znlgTjf1hh9yqANAAx/kMAspoBuC6g6/tlpxxKgE87A2Ag92USmX26KlQArnWhH7AMANw3DC31j45+NnrHrd892CivKZEoHREAFgH0bgJgrwUq2ARs/HcZQKPtBXDbgFq3LiAA9ABqAIg3PQV49D5zAGoBbireIoAV/4TcUfofK0M1AF964b/YDwAylPkZQNWGjP9sAJQGoOXp7xCw/4on77nnHtsCYP4/6VrqhfzGH4J8k1uvlgCQAQj9NQMwA6DpvwxOfRQxuL2pAq/4XoNPwRkAuAA1AM/L5Mgsrf2s47OO774bRQIA/vMcQHtBOVMAaoBMnOshbQCmADYwbcgk3D4AQv4rcBtgQz4B2HEywIzYf9IfaJ5gEVCG4DEMLgUW6aEA8fDvs//QUw499lDwX+ivBiAM/yvA+ntNAJYBVOIEAIv/G6AAcEzA/+Xprw8a+6+7Tvh/dygAjP9EsxiA5nj4DymHTXdSAtAMoB/o6H4bSwDsAiZ8/hNvD4P/Fc++nFIBAPX1sgrA83phpNKLn302Ozv63ehn15xnBqBVBqACcDstQKAASROAZndZ4d8SgMhLwch9TL0llhWAqydpAuYIKsD7E7YXAB6AIqACUJxFgLLl6H8AcOgBqgCQAI3/5P+Kif6RNQAYgBj/N1rP/D+EGwAK0p+/alX2A/cI7ooYADoAJgDR8K90c7g9iw5afSFI4/V4g/Zo/z5vaw+ANQE970bO/HQt+F/++M2vp/wcYEmmBX9tFUwvzs7OftAx2jH7UWun8N+VAHGTIZMCYDZABAB9QFnfAXgGwEqAMQNgEkADcJ6t30cdgJUB3Grgm6IAM1QAzwJwJaAYiwA5S/8R+h8gOAX0P+BYdQAW/1cW/TcqYxOAZgAwAF3G/w3SAPTq8vHfgr+wn/yPZAC9mAH/XQJgh39Y+CduRwbgDIB0AbkMYB7IxPlvJiD9iYT/mx9/HAKgFsCgvLcxtDT2wYdfzn728ezHsgkwwX9E0tUcwO23mwRQACwHIOvpATiCjw69+tesayUa+FqQTu4DigqAYabbhX9MYA4K4FUBKQFqAc4otiJAhP4R/mMg/OsA/3UR0PG/qLf85EOZlwFUlU9t0Pi/zRZoAG5dtvbn6M/gL/ZfcYvjP+DFfxYAYtm/kR+8QwbAEsC4xP9RZAAiAEMZYz8VwAxA5hC82e/xxx9/9tkfFkUAGPsF10qLAC7OVPqNb7788pvZ2eEPj3IJANBq9DcBwCB8BxArBPBnNAtIqqQQchSA4/95nVy+LygALy3s0x1kAJjwAM9FFGDAzYELiqwIsEzyfwAh9BcHEBoA8H9lZf8CPwOorN6d/N9ADUBv1LQuw38u+tH7P4lxxT0Ojcr/BhoACoAWABj/rfnHvD8GAPMsDiCRuLJDHMAhb8+zAhCN/5YCHNJV/qzQHzuiF0UZLP5fq7znTazCYldVVdXwMA4C3uk86VQ0ATAHkFUHkCsAWRUAdgNZMYCP+hAxAKwqnOkMQEIEoKfzvLybeHZADYBYeOKJN7sd/4mZGykAPoqvFUj4H6v9+9E/jP/HMv4r/4v2yJ9CKPO7gKp0AcDn//pE2TYnvrVQmP9n8m3At4D3gLCf/GcJkOQK/H9ylSsAmPkn+336SwYQlAC6tQRw+8S8bQMy8+8vA376bkD/6qlF/QXpn3I9gpy6AtBUWVnZN9jXdNimG59cE2QpBq0BqA5lowKgJUGDxX/TgUgCwBTAVQBbcJ3XyRJAIQcAIbjp8l62A+VXgMcwWQQonqNBGf0Lh38zACs9/gv/w30AlRss/m+yzTEnncgNAPlR5wxAzdWB98cl/GcG0EJykf8sAMSSfwxTAMXqVSoAXATsmL7RKgAa9XOHzPRuYL+j/1TTossNUkJ/sf/cJ8hr5GssFXb1NU017Yv+hn3uqtVOJeWoOYBk8M/iCwD+weIKQOKbHbAEAAiNhe4CAHqYAeQXAJqAJ06/vNkVAUh/VYC4A4AAFM3rAYT/heiPQfa7oRVA4/8mK6j85xkAdgFF+f8fUPjAAKjLMSeeuMXNN9/8+r01Bfh/pg5gUnhP94+bst9KgECQASQRWLO2/BdN/g3IAJwAjIP/ox1zb5sBiNNf/f4nAft/xvFhKgCsD1j8J4YW8QbVqb6un8eO3xgNjrvdUgNq6nmlqNOT/ioADqJKwO1OALwNQlEZiNYFk71Gf0sAwP/EdgUFALhF5k2nn375OiW/7wG4DkA4B3BBkZwJsEzyT/aT/xL/hf4+/1da/PcXAau2Vf7/rw1AZfueeCKSqE232WyzzXDhv+Rm+M+P//hHK/cVP7ABMD/9n5LsX8I/g79MMwD+IiD57xcArfWH/Mck8C4ddgFoG+A+E2YAfOZbHvDpD+UVoP/PP/cNAn/hO4K5vz2mlqrxBuWmn9vWnry1vuLgal8AfAeQqwAUAIB1AOO+/+gvAyRlGfAcXEwAEpoA2BpAvA8A3Ff8eDoUYEZLgIZxUQB/N0AR7QdaPvz79l8KgMced9xxh5908MH4I1de/v83e9caG9kYhtU1ISRqWNvFD5cfiERIKoj7Xci6FUVX0QttRbpbrVGX0W5aNTNBpHHpmrilsmjdxr0GZeNWlGQ3JfzZjAhB0onEH8Lzvt9z5j1zTs9oi6Rlnu87Z2brLvs87/NezncoAGwCHm38X2gnZNtDz3zr3draza/v9/a777/1wQcfnLlq5513fqi7iIdWPdS9qjdH/kcZgJhQHxctQMgANPtLAMr/ucO/LA/jKRGAZgBzwC++eLsIQOBlIMZ+uX58e3uwX44Off55nPH/xz364zA0AYBT+GXr1Ozs3jrivCrZ4wQASoVh3bAD4DIBUAkIoiPQGaQCQMkcwH6g+c7+/noU7qMdQI+u1PnACBSgRAImHvenAJwF3P8/UARYQPiHALj4f6zy/38Z/5kCaAlg98X6/21PQnZfmywU8kChMH3IITMqBVsFvwCPfv75x907z+QxABTBfi3/9Qj1Lf8H/9dbCZAKwAJACsdskv9W/hs2+hs6pAQAtMVuwllAL960CQkAM4Cg/WcC8NHHem6w4pbXXn+KCYCJwKvesMC34P/W2anZqZXKnLO6e3tqRACAeI1zABQAgqXAWzsgALXjiuBRIcGyoFkAkQAaALYA+4+PmN2pduyXuwjAyPnnZxz7DYXg84D/jVEgC/8B+oeqf8J/APHf+P//i//83yUCsM/RBx1Uwv+q+Zp/0H9motCR9lAQJJMTExMoOF3/xMxtX/56XffOU2Xi/yVyX3+Xl/7zflcgA7jICQD5n/b4H6j+GzbdeuuWW9NxJwB3Jm8XAUAJAKdjlkwBl6pA7WuPPinM93C7CID1CEwI0AHYfvtf8P6dtQkkAO6UwwEKQA1bAXwvmNGfF04EMgdA/kcrAPkP6DgwEwAagGgBoAPIny+4JgPSRysAHMB/4XkgC//h1l+I/loAAP//z/HfeyWYOgA//+fvAED/l0D/Qjpz3urVqzOr2aJTehaA4447bubLX7of2pxLRRUA9WoG/w3sABLSAmAKkEl5/BdY/A+G/01Kf80A6AAmb79JBEANgFUA/PzXBGDqeZAf5/vP3gHIKb/PCPe5AP5KCgDfvzE7MNDS0Jgkbw7tnkURAAIgHqCGKQAFwDQAWwRgvNbmg3HZCtcDTQEynAFkBSDyGK9q8j+GlT//GlgAFAInFcfhmsaa7HUKYDnAsh8FKjf5I8vg8f9Ux/8j/7fxnxkABQDp/0Lz/92K9F8dROaCTxTjx81s7e5+nfyPqgA2D97VDt63S+jnMgPQVkwB4qVvAaABeGV4/BXyn5FfsQW7Iy4CoFMAIgC313IIKOQAyOraO255rAS3/xiuFAJSK9g6M9nb2NjQ6NFmx523qgBwYAEICwAlAA5ABSDgAnCFZwP8DsAlAJoD1NMARDkAcD8nV0wdwIinAI7/03LrKGH/8n8eKPDcTzj5N/rT/5P//9MBAAevBggsiP9M/t+vZfQvxcWrV19wwRVXXPHJJ13HHbe1+6FI/vMo8ObB9Z1+aAdgfcAA4GIBEHyQDxoAxv8uCgC5jw1k4tIFlCmAm4Dbb9piFQBzAPwqBmCzvFULUqFQAdjCGUGsEv7XTk0mGoX/LJ1JFfCDplyN/Mve4BSAAjDsIz8/0uoATAJ8HgDb+B9QgBQNAC4agEgH0EMJyMXUAQAjE4z9+FARmOiw04FVA9Ys51GgiOw/RH+W/44y/v8vBwBDXUA//+f7Zo8z3z2kwOgfxHkXgP1AF+J/lP8nUACAAHQCNADYNgIAHSgagItYApBYCGKlAw0Aen9sSgBWJkUBmL79ppu+vOm2LSEDwOUMwJbazXh2bmAKYjE1sHbtAFDL48JkEfd8+8fm6d5EA+jf0HC20pBFgN5cjchVSQkAg4AhpDPD4gCwwxoQkAG/AxADQERXAIBq9f/YuMVAfdm4psl9LEWyq3gw0LKvAlYJIukfWf879v8e/70UAJh//Y/J/7u1YD+jf4j+4P8VAf5HVwBu6IP/J0B9uTP+swRIB0ABEP4jGbAaoGYAoJNQH5dQn7eUE4C2ZpQAACkBsARIUgtMBJ65B/hRiH/bwI/AFvzdirzX1wbgzWB/bJ45AewH/bGzVjhDEWCgXcaBa5o5B6D8tyaAYTjVAQGQZfQvqkBwOMBKAGIAABqA6HC9Nx0AlhYBR9yVmZ7snZzudQkAMJHt8r8leM0yrgL6+A+UDf8Kj///8/hvRUCh/0KEcMez3nb0X20w/qv5p/+3/D9KAepoANqV/u3Cfz0DiGgGqACXsAQAL5zySgBjNACW/28xBzDuCUB84CZxALVWAgxZAL10Ekgj/9of3a/u4amAeMf2Iy9sgUWYnR1okNCvEpBdUfKso1QBrQbgDEBHWABQm0zX1t46pwfA5mIOYAYgpQaALYD+MnN71THHfvUBSP9Bf9cKcMTvlT0BJLUQyBRg+c4CetW/HV32f+SRRv8QfPn/qf/7+K9QAdhN6T9vIaza5dxD8ulo+n8i9A/l/9EWgAaAj/9DBXC3IQADa4BpEwBXBFT2gPvmALBqcQ3HKQD5m7687SZkAI8wAzD+K6gBen/mEBWAyae8kP/INzhDY9OWLZs3yx+5vlfp36j3pE4A2GmH77fnarQHwIOBNVExATC4KqBJQDgRMPgMgKN/Mw1AtAOI0QGwCHij7JF1548UlPuCCacAYyoA3vuBlussIPlP+h9pxb8IA+Dn/w7/6/hfzAGM//PADqePg4WZuel/gQZ/8p/+vyz9gZ6i/W8H5eXTSoB9JP9FcABuCtgvAL4KwLjm/1hbvLVlSzrOR4GmbwL9vxzY8swjnAKMqAIAP05ef/31LS2bnnkG1Ac/ujbdihnH16dgClrQ9APAfHclA7NzWgVsxYqLADADkFPJQkhDADgYFK0AlgLQADRTAOppAMoJQIzLagCAKoDyX5CcSGoSYG2A5fiS4CrA8X8Hhv9jLfxH5f/G//95/GcZcCGvP6va6+wMcF4U/d0CjjvubeN/OdwgAtCuG4zXIuD6UAkQaC0KQAbfVACsCWjdf99KAa1SPJi86TZIwNofnyH/QyIA0Op3TSRAjOwVj4+OjQ3fuuWP12enrk80NOHhBBf1iUbsw3cKnneWyMVqYoV8rFgCTM8tAMPOAVACQqUAvwQY/1sl+ANsAZQVAFkK1gDkdiNuE2B/wvGfSYDlAGuWYx8QIawk/B977FmnWvSPKAAY//9/BwBFCMC8/z/stJLsj3L/2IDE/1mr/5VFa3vR/wP8DAoA4viFSn8KQMABkP0S/6kBFIC4CEB87U233Yb39nwTFABlPpP9Zx6B1e8ak0nGiUNqX399v/1mke+3NK4f7BsalNGkhgCO2DV04NEMPHf2/emYLwOYWwBS6AMCZD8+wpUAOzTUJQCtxQogBIC1h2gH0GMOgOxXpCb8BsAlAXQAo4+PLr8+oIX/EP+J8v5/x/95/PckYL5vQKqqPiNl9A+Hfy6N/3c8tHMt+V8eze0S/E0A5CkALIdQCSAtcwBgltUAWALg8C82F0sAIE7qtptuAwaeCQiAo/5Tz7wAFoxKOfEQPMgwMzV1++zs7VNrexs7e/qG+vr6eto7m5oaQ/wP1cy3QxUw17P5pWSMZ4JLq0L4HUaGAkAbEG4J+FMASwAUEIDWXf9KAHQDkgJgCW4UFcgnwH+lf0E+0AnwDQIsuz5gFbDtdjuC/6T/sSA3zvon56MaAMb//3P+bx5qXvRn+F+t9L94Dv4z+uOuA4CzD63iAeDzdgDKeP1i8KUAKWW/CoAaAEDp/worgLqK4R/o8ASgAP4Dm8F/OwxYoz6yfFj9W/Eo42Z5of5AS28i0dDQ1N4zODio5Af9wf45+J+fIws/812cY/DSu515EQAagAgB6EAbgBIQUIBQEkAD0Ka48856CIB59XIOoKemJxYn9z0PMJJXAaAGMAmgBVizzM4EsfDv4/85YHhZ+tsDQJX4r6jC1jWP8I/CH/bFEZM//gLA5p0/OMTO/yiLVk4BeQLQRAPgE4CLrASQ5iiwKYD1ACz6607HARGACScAtXKqHyHc7+rqQoFvv61bX5udWttyLZr7Dsj323ugAeX4H7MEwHDi1g33TnVPeQKQoQDMWQWkAHh5QFADTACcAQD/m4X/OAeEB4HMzwHEHfXNAozA+MvGAkoUYM3yOhlYQxfCv9Df4r9QHHQP8z+YAID//88HAOaUgHlgp9MznPPFjgr/bAEWal96d4L8n5cAWNzXL4bBZg8XqgEAMAigC+AUEEcAN3nxH5fcEP5Bf6DXZQB/QAC0tQfyC/XfxuPKIP/aXsd8FvibHDrB/8G+wXZ8DaT/Cazc/tVz5MsnvX/vV6seul4FgCXAkACw/J/CJxHpAHhmKBMAMwDWAyzrAHRf6NUAcCmuiYH5zv8XdCc/8ZoAa5bTIACYa/wn/QGhP+geQX/jfyX+z2EDyqIaxX8J/6B/RO9PLxqA1w+piYP/ixUAswDr660EIPSnA+jQiwbglVu7/C0AbEWHkF8FYNIJgDQB0Nd/c9Om2j9AfjzLP9CSAOFBfFkChH9E/GxTU3ufYNDCf8JR/2p8JnOtK6rmHI/8/qvPuj+4O5u3DGCYRcAgUsMUgAgV8LUBOAKkUAPAowAjsULcPxXgQpYAgHVQgXU/xGI5MwCK7BgVYFkJgPB/2yD/T9H4H1CAoyIKAJX4vwBsuyLN8B82AAH6A8O3Zm7gKz7mXQNoJ+PdGJDha20BYMQ+QweQctF/TPYrZgCwNjn/vwkSoAZAR/L0UUAIwH33teBE4Dff3PLHZnT20NRPaLDXsI+LqwkA/ZX/g47/jY78uCfwmc2jydccUYTfbdV7r3W/9GG2aACoUHMJQLp2bvZTAWwa0AoACP9qAOrp1Ms6AJqAOisBjMi3fE8slp8oRX5U6T+6Zvk8EFwl2HbbHXcA/3cptf/Gf4v/lQHAv4ld90f1L8NH/eZ2//4rc+FF86X/hSIANADtPgdQxEZagFYzAAQNAOL/ONhvGuCwSZ6dEWAQ+IknWnob0NxHW//t2dth+Ul9JT7vWPhxJ+gP9ID+Lv1vVMcP8iPwZ1N1dXUjdXWM/2Fst+q777t/vhcZQJwGIFIA0nHLAfzFgJAH6OAzAOA/Vj3Qf/y2f+kAOAqkKYAaAFqAvP48z/jPVCCZYQ6wjCaBhP87Cv8D9h8CYBIQjv+VAYDFoGrvM1D8c/E/Ivz76X9BHcm9IAdwFyFdQD8G+y0DgATgEvc/puF/zI0BcwbQ1wHAbSyTYQ2gvhUcPmQGZ/fB9K9NMNvnkluS/Gfy34Tun6AHv2hIADL0m0/VjVwjGKm7MDJObnfmpw91f9eUR+0x0gAQw/Hx2jD9OdVI+uvlOwWgXg0Aa4DlBYBACqAOQBb4/0M+F9PhgOxECbJXPKAWYLkcCwjmkv+B8O+jPy7S/6hKA2DRYPMvKvln+McW8PM8BPX54xKYACcA7VgAngdmCYDwCUCaAjCm4d9rAnbdOl6M/7KATa+kOQOEt3WlJjbP4nDCrTLSp6k+id/oqJ/Ep1X/slAAF//Xa+6fTObzmcyIRlHH/3hU/NeDQbtXPZukAAj/I2sA4/H0HD/UXTIL0CH8b2b67zIAngZcXgCU5/ioofcX/JDrEf7ngOTcScDyGARA5h7m/8ng98EHH3WwTwKoA1ihJwB3rMT/+YDVPxCd1X+skuIfOe/DFWj9LxTtWgIg2p0DMPS5TmAq7YAMQCUA0V+WGgC3NP5vEvpv6kiBNWBMc36a5MdcD/p8AjoA2w26G5X9nVr+H9y4cWNPJ9J9MP8aMOeqq64C/RXg/zbROLO7+5evsi4DSHdEZwBAKhVVBCScAchIJ9MKAEA/sGIeDoCjAMU5gHXC/5wChUA//acnkmnNAJaLAAT4fxrpD/6T/t7S7+ECQCX/X2D1L0P6lwn/Y9gLtf8sAtzQs0EzAFoAZwAMg64IgASAAuAgDwKD/2IAXhH6YwOkv1CmOeYi/y+v3b62pffa3t4EQz9df1K+JLGV/yC/Q7u0/9F0rCP1BYz+QF2qbKH8xO7unz80A2CDymGkW+2ooHAeMCwXIIUMGgATAFqA8gIQw2IKMML4r4jpDhQCp5OfaApwwXKYBCryf5ddQP8S/stSkP52Apj/CYBK/r+Q6h/NfxT/yX7iPDj6haOnpPfvvhrW91MAFKkMwr8ssB8LJ4Ep/7EkAVDzH2+rb2vNT0+B/Aj9A9cL+XtbwH9A6c/N7wDtP/41crHWix6+BtR33L9U6U/+P4yL879ROKn7oc8a83EglaYARDmA4dZ0kPrhPmBaJ5lcAaCtnvzHPn7Xv04B6AAk/Gv8J/1lyTYF0GeDC6MiAEt/Eqgqgv8Hk/+kv1kAMwDWAPifngC8cFRVs/oXPfuDy4Dq/yJwYU27lgCwXR+w1AFs7G9uNQGI6wgAbnoUiDoA8l+vVzLN9TD+h5jv7xWQ/r7KX1JdgEf/TnAjpWU+EJ8g/43+EACO/5V5//mq95Ip4b+UKsj/qCJAJqIIYClAR4oGQB2AGQB7K3DZFIBdAEVGzgnWUwI9ZJX8RQn4RHKAG5f+IIDx/0jj/8kHO1gOwE36VwYAFmn/ZfTfUv9w9Z+gCbh4EfyXv+SGvg0uBVCYG3CDQFoCMAEA/VNx2ADnAEQBbi1mAGN1SPsLtbMu9MP3u9jfYuHftf086uNbNo/6vjIfKCE/NnN/8v/hhyP5b33ArZgCoABEJQBEKj4e2QTkFECGo8xgvzgAbDUAwMr5FAFxFwcgDYARjfpMAPilQPLrmi58Aguw5CeBqgTa/mP6f9qpJ58s4Z8OAJtw/DcBIP8rBYCF2H/jfcTsn2X/TP8XCn0n2BEre3yk1+NArABwA87XsyJgJtUhrEgPIxFw/O/Cpen/2Oob6lsLm9+WrH+qJWHkJ/0BM/1gfjbPmF/Ce34P5P5gPxTgcON/ZB9wAE1AwG8AlNlhZFo7Ig2A0l+Ujp0MgWsBEivm4QA03tfwMWB8NTgNyDvzTwGYKHSNji71SSDW/1n+I/9PPvhk8l8kIAzG/1MrDYAFNv+PWG3RP2r2z7B6cfZfruqqwxH9dQs2BAqAPgHokGN+AX1nliqASAD4/8oFFzXHpl9X4z/Qi8EdJT9XA8FZXxf0/W7/0gD9CaO/oG7/vy6R7/ZWQzYWyAD89PajozUTYD/5zyKgTABxlBGoxzYB4Hkg0QKQ85Y6AFcB7DH2uy9Z0l+2WICu0cuX+KFgJfEf9D9N6E+Q/iEJwE8qDYDFNP+vJNvLu/8xdv8Q/hcLRJ29+4qWn3fjP9626XMA7sDtDvIfFQDE/1fGLr4oPv36L9+D/RjzK6V/S8K4n8066pP7l3LrogDIIv0BH/8vKcd/expoQ84EwCoAuEIYhgAEYUVAGQHmJCOPARIPoPk/M4CyAgCyu00HcKNx3xBLgvpcqgAQgCXNDY//h7L8B/5r/D/MUwBZYfoDlSPAFojqw7XwLyv6wR9ijMM/i4T8ntv2iPUa/8l+478TgDbxAZoAgBMqAMPkP1bXBRfekN4ssX9K2J8AfNGf2X8ybPgvFeBO9nsCEAr/5L///M/oQaDN7Xn5V/SmAIFAiDcMx8NFAGsBSAJA/je3eRJAA8CHAcoLAKFdAHEAfFuosd9LArAVkxMdo5cv5UPBSvL/Y4vx/zAsXwqAbVBJ8PO/0gCYX/hfYeE/uvZv8T+1aP7fcIOLOSt61iv3dXuov4FDgHqDIyZaIQAe/5H5xw/ZT9L+6xOY+BVcC94z+kv6L9wn9cluoT2JLx8Ckp4SEMj+ARv/K18CaGiP1bTqkaVmACIswHiqdTgq/oP/HRmP/5YD9BP15QP1Cvdy4HbZF3pDgHMiyzNCseSFoWNLWgD8+T/5Dyj/sWkAsOxDl1cAcEcAVRoA88CuCP9l+e8nfxerfxfORW9c5QH+O8k5wri/nh5g0F4KqD7AB9cD6Bofq0PZDw/1g/2O+7hIfgDZP57f8bf1yXbdYQdwfpj+5H/E+E/4ceB7MUjQWpIB3BqJVLAKOO43ACwAAG2E8b+/r7q8AACgv9xZA8h05uZEcpr+H/yfmbji8iX8MID2/wLxH+4/6ADI/qICVI4AWGT1L/qVH6IBYyXVP1mLAvkPrMwOuiTAHICdB9oaFIC0TAG+csUl8WkE/9m1Qnv0/IT+CYv9eIAHDPa4fym3fdp3wugfiP82/lMeJ31/b6cKQCAFkFsY6dIiQKAD4PGfKYCcAwC4+9dflx0FXAH2d2LJPQ76qwPQn2Rd3MfWlZckIDEtAP9nJjNLWAD0+I9g/D8MMAk4yre8j1MO9k8AVRoA82n+XxnJ/0Dlf0zif92FZRkuOxrmOHc6u3OQ9MdFA2AKgIv2XxDPgP9X1MUPeVs7fgnp+En4x0X2TxQyMsprjp+XfTUHYOzXz1D4r0P7b344c9XdEIB4PPpJwOg2gMV/8t9Hf2yGf/cx9DUtQLQACDqx69xzwCPKfl1Z5b9e+dUjSALIf6Bw+eFLVABAW87/+Phv7BeEbAAg/D+1UgBYWPX/4r+s/o/xBvxQx/h/SQT9y8L/223fyXYrA8gnTsEn2qQKANpjgRQqBqnz6vIzW1H0vxacFyQ0/veS/T/cuG6dUh+LO/SVHw7QCi5BKf9Z/ptPDfCh+zfkTABEAeyVwHMIQGp8TgcAAWABEGiTVeR/veP/1320TpECIGPNWBCAdVjn/9AplHf01y23/Mi6dTgnnAkAMH3ekn0aSOJ/kP9mALDIfbkU/FYpAC50+Gc1Uf7RX6b/q+suBCAAi/EAR5Qwa8eZyfVUAL0G72wGWAMTAZDwX/yBpP5bb79ep30w7ovo3yv8F+dfyNyI59rWXbrOgjxvJgG8+bN/uv9w+j+v8h+PBcdpIDl9EigzLwcQHw41AFgAUPpb/O8n8EUzgKG+nl3LCYCwP6ubDmB11kD2Z3M/rFu3DueE0wAIMktUAKrm4j8QsgCUgLABqDQA5wXM/kfH/9LOH3DBxcp+XYZ5WoHjV+5E/hP7DrQMShZAE9DfZgJQ7wSA/EdBvDCLwl9LotchoRIg/E8U0peP4g0Xl40Ku7ks5yfz+dW6/4z/xn/FQtJ/OoDurR8WBYDnAUYNApkAsE2A7WUAaSsAyjb+mwD0rSwrALmsSgAcAMI/9kgnWN9p9Bdk1glGsuS/YOKIJfk4YNU2xv8j/fGfGmBlwADwlFBlAnDeqNppRea8MvwHcBsrhv/zJPwzBZg38/njw1eEfqftMDMw2TNI+utBQCYA4L74f9J/WugP2iuuFf4n5HbtRMfYqJxxvWb0ssss+JP49tV+6i/+h+h/zYLSfz4M+P17TTEVAPYBSfBoBxCeADD+AyXxn4MAQ8L/Pg4DRjkASgAEAPTHs4AhB5BLSfwXBZhgAgBMZpbk44BVQJD/QNABhFXglJOLCUClAfCX2Kl65cr9Dz8jiv+yDAj/dXUX1tXJ4X915aM/Fu726+MPXznXmdpVZ01OTfZs9I4BUQEg+lspAKB/Kyp/twz00vsrEtoBKHwC9iv/11wmAnC5F/gDZsB+au5fbkH+Y8Ux/bcQHNq98x735lUA1AKMezWAiC6ADALwz7D4zwKA5f/9JQagXg0AsHe0ALjgnwU6heZSA8gGkV93PpbcUtPgP1FYgg8DaP1vOz7/a/V/g/UCg/Hf+F9pAMwDVeICdq1eefgRIf7buR+4XPYvgAO46GGWAOc19nP8/iuqd902In6+/cTUTPsQwr/soADwfM9DtqLtp6m/xX8J/oWxB/iyexGA0RIHQPCrSYLZ/6vC9MftyvmW/2wQqHsAAmA5AKgdDfDcagAeSgqAQf4XS4ACduwiHEBW0KQCAJpfFRIAFQacEioWIF80ADPTS3ESyBqAFv8PiLYAAH9wMgsAlQLgwrDtrnuvPCMU/7GL+AHhHxAHIDnAw39J/QuPOP6Iw0H+narK/GPPvP2JqYHskEsD6tv8AhBXBajPg/7XG/vlwk4kO7reBB5QrKEDsH6fDfy7G+9l7D8upP/RMTb6RKCtG7IUALUAFuFDGKcABDsAKfE6reH4z1FAOIAhdQCxyOxkZV7Ij0WiQwJS2WwSu7jyGvvdLZWboAAgFzhi6VUB/QVAxn/Q/wC/BpgN4Jbvp5xcOQPob9QDqlccXpr/W+3/CoR/QsoAl1xySfzKePxKfFxyyZXxIwyHH77//itXrth77+rqXXdlza8MTlp13xMDUxNDG0UB+u4MC8CdeYz89Rr/1fw3FD55QOhPBXhwzRpXA1znkf/8umvMAZgGKOvJ/yD9kf7fwPLfAnOAVRs6Y14OoAoQiWG0NYvlP+N/hvynAPj5j19QAPSVpSsiHYBjP66kOgDsEaW98R+RX98TAkAc8tMe/2cKS04AwvwH97GM/sZ+0l+/n3zyqZUCwN+tCZxh+b+V/8+7uO7iI84443DhNsldgp08bAvw//s822hPPtGCQsD6rwf5PgCiv9k74j/ZUhL+tfAH+pP/b7oSIARgVKguv/FHMoXCiHUBrCbA6F8c/VUBsPJ/W/SpW+X7ACesz8VLFGA8ugSQMgPg8T9N/pv/J2wWGCUAEYB2uPVoAcBWwmupDykAvhb5n8yPXKW6gBtkQPzCJPk/udRSAD0BwBqAGv/BfjqAoAiQ/FhSAKg8AvxP+ID9z6ABYOvvjP1X7F0NkpPa/yhO3PnLZ3t7ZwYaYALWy6NARH0z0+I7Y6Q/R39wjM2bBlcDGBWA/Ddm8oUJGRGeON8G/0qzf2V/uPoP3Ik22yKw45ndPw9SAJgERHoA9PrTgdOAh8f5CPCc/GcGgCaAe2d55NTeSrAfRG9KYrlc/6qUygHIL8j+4KjvSgAZqQhOUACml1wXgAUA4/8BB9ABBEEJIP9hAE6rTAD9YyJwxhnSBAT7q/8li0gL8Nqz1zYk1k5dPzi03pcD1LeRFm1qAZj64yRbBP+gACj/L88I91vcG3/zEACAzGf0B8LpP7N/8H9oaNfFeKY9Pur+fn1PrFQB5jYB4/GSEoDjvxUAXMczxH9OAQyJAOR2LecAkuYAgIsd9cl/l/8jA8DHSBaQJGASmFlyzwLwCSBfA0DYj63Lz/6Sj5OhAKc5ASD/K88A/g1U7Vq9IpM54/CVu/6L/xdZBXj26saGyYHr24cG630OwOuMt9WwBgD7XyD9zf9jv4KDra4oTMhMoLIfSHnkt+DPFRH+L2obGjp+Ef+lO5z50+/dDyU24nEA93JwVYDIKQBOAo97C1qR8fG/LcB//vJr1gDb23uqIwUgyWhfdAAjngCIJqj/50YCoMhPLkkDYCeAkv8HKMh+XCENCBqAHSqPAP4D2HYntAfRvvu3sd2qW569u7Gpoff665uGhupDAgBaZFu8CkBi1E9/vQNdHRMu9Av7KQAM/Xbsj2Bu/uMm/B9auYgKII4Efu/l7p+Helo9BdAyAC1AOAPI+M4BYAKg/KcCGP/ryX9TABiA9sipvZVZMF8X2H4pawCkv3qC821rbqBJwCSw5A4EAnVL+e8yALlxhSUAUP5XCoDLECetuv/um/FKzt7JtY1f97cVUwDfbGyDUwCswoNGf0R/wStjBXcIKI/+T+L6QbnPFaj9B0f/Qf/mviFg10Xw//v3nvvqi+637uoDh50AUAEipgA6SH6P/8Nx/mcG+H9nm8B9HwL/KQDoAkQLANEEAQCcAOjFviA24AxAUkUAA8FnL7EWgB4BQP4fKPw/5gAFu4D2EXACFf4vW2x35h1f3dy0YUNj79q1nf31xWS42WZjYuQ/LMCNpL/csFABRPy/tngCsGzcpAYgSzbH/ngP0p/2H0CBbeH8/+rpp5/76vuHTpA3mrMKEOkBxtkEtEFglwDYf6cv/JsBqP8agAAgA8hV/6UA0AEAKgDaACT9WQbM40fcE5PTS+5QcE0ApACwLxsAB5QagLAPoAFAAQD836VSAFx2OOmD9z68d8OGDU29a6/PqQLQA3jGWFuBGADE6k2OFot/uLQF0FVIkv7JBjEAQOfDWgK83Nf7x6dDKfsx0NQ3pFix4Pxf+I/xhad/6n59CK8W85cB+FhwqAQQeB9gujVsAMh/oJ9DAJYB7FROABqTgkY6AHH6gPIfkAKgasDqbJKrkE1OL7UEQGeALQFg/PckIKAFJfS3AuCOFf4vL1SdedNz926Qw8ETa3tzSALMBAhYB7xWFvqAeUZ/R/8HpQf4ScEcAJDEK79yDwvl7eSPUv4/bPRP1Qw59C0gA+AU4yrwf3AQCvDL94NDbaoAgCkA2e6bAkiXjgGyAwCE+W8tABOAyCpF1f7O/YsINF1MASD/Lf4DV92Ypy/QFuGSGwKsCvCfFUAjPRHsCxr/KwnA8sNJL3313AbwHwrQkugRBSBMC7JoAegJAC2JT1j/V7zy4JrRdes+yYL9Gv8bYACaBLm6kld+lab/XuwHGdrB/UVlAFVnrXoP8X+wD68V/mrVCV/XmwK4JIASwJTf1QA7vPIfLiAdTgDM/5sB0BqA9AD2LicAIL+i0y8ATToASP4DrADiUh1YwgnAgdYACCPQFizG/10q/F+OqDrzvufuvQuAAvQmexj4iTanAw1UgJYWTQLI/wcfXAMHgMmWpNUAwf4sNl76+cMPI9eM4CWZ4ICP/478F8bzyYZrGweHPCyUCyftfL/yf2ho4+DG278f7HcKEA8oADWgpASg1gDoiMuJRzVsAtQb/4MGAALADKCMALAN0JgVAcBWASD/KQLaG+R4cAF/dKnNAPoMgBUA5yEBLACQ/5VDgJcdaAEgAE2JRLYPTApKQFuM5/9AAfJdRf6/skYFABUvDf8e/YvoBKThlU8BOMigpqYZ6Mslk/o2gc6+oY0bF2cAdvjgtufuVf5DATa+s3W/r/v79SjDoALY4R/x5hT9AB0AK4Acdwj4f68C+JtnACwDCGPbwx39dfsEIOf4b8iD/7qApXcUCJjrGQAkAMeA/9Ew/p/s5/+Olfi/DFF15mewAIrG3mSuXihP8he/ZMUB6Pnf1+Y3Mf9fA4yuUQUYgQIASv/OJh8aG1xjoKmnb1CxcWN7Q0L4n+wZ2gjQACy0ADD7XCP+lgAV4JDfoACI5fZgICWA/JcaYFq/mAEAHP9bxQCQ/0R/iQEY6mEPIEoAMAWs9HcCICulA4AW/tkaLE4HTyzFBMAZgL00ATABKK8CTACU/5UC4PLESVJPV2xoSHTG6kl+EwHs5LXe+d+NGVWAIv9HdfJVDIBGfbliqboffojhiNympNK/sRPEB0DYwfYGhYR/YHElwJPevxlvGIcACEQB7prNg65wAKIAnAnmIaGUABUAzwHIZ4r8r2llBmD0N/4rnAHgzG6UADgFaKIDEAHgCWCGG9UAqAmYWIIJwDZ+/h8zN//3DDqA0gJAZQJ4eWK7M797WjpqQFMimWsTxt9gBQABkoAWx39Y909EAZT+7iwwPemuqZH+vzOFAqACGX8dkIrFagQ9glheEOvbSCwmA9jhrWefa+rMiQDQA3x97+vNMsArCpDyK4BqAB1AB/mvDiCjBqD4MkDlf+iNIL99jQeBgJ7IMWC+ZCXZxBRAagCXqgNoKuE/nw8CaACWXAeAArCLJwDKdyzDnlx+KP9PqxQAlzlOkpaaOyK4MdHZAyr4qC8bV84JQAIGPte1qQvnACn9LxvV3+8ocOWaFLlr+ASgr/aPLRgZgRygBlgj0Z9gBrCwDsAU+C8GABsYAr7unegPKIBKQAc1QM4DtBlA/DJeIgD1Sn8sP//rNfoDgzQAZQTA5f/42AABkOORf8gH+a8GwK0lnwAo//cMcZ/LXAAmhY3/21b4v1yx3c7feQKwHrWrvnpfBYA3fSYAFQDwP9GY6+oaFYD+MACeAuSbgOyIcN//KFDo/L+HXfg3AVhgNDx0683gfw78B6gAeGCv3imAZQGsBKgVEAHwCgBYw3EH+ZNFAPpdokOQ/54A9LECUEYA/mTvbEPkG8MwbghFfFgva8mXbUvhw/JJaL0UoawIWYwGY8mx6XjZgxGnY9oxc0iShKWwaPIBdShMg6WUNq23Wi+f1karqNXmE+W67+c685w542UHs53ZznXOzOz+SZv//q7nuu/n5USmCYgXFgJd8RKuO6+6PSUJAIwArTBzTwWPO4BHHjkxcc6pEEDH3XXhTjnAqbYBmJ8BPMw6c/u1V6riANWaE7YPT/QBrQXcXJzDlh/t4JU34ACKv/J/1RVsfKEBsHG70p98u7h7EfCt5N8awGifAWDuUS0APM8mAKzYJ7YY1eEASQtQGxADeBx/YE4FfZYBQCUlAF0u5n9G3+waIASAvzcAhZ/rAFTojIgt2vc7Wf7LWytzm4DTHQAb/zv0W/5xG3UmAA7OJwCGW4cecxiW1cEC4ABudPjRyQhANnRPgPAP+e7GHZoAMNQldPvT7Y07CX7nA+paBDzTbNa6HaDPo4BO2AL/rvKfsADAysIdDsAFAbEFPCzCA06fFd0C/m+RDiBlIgA9zkwB0gZmDP81hwHg7xNAiTOBl4N9/G/Bjc/0FKBR65eszQByDZDwzwCQGvMVf8h80gLOPhX8T5xm+N8353+Ydd7Puq4WqtUiLxUBaAEPtn3gbyzAffalbvbN2V9Y9aPcp+i3+D+ow7+1AEF3vNBfAKgsSgCoeRC7AIwA1M1qAVoI0APwepbfQ3gQ+EPGAfQ9eSIwlNwKIPlf+Pe4aP+vewAQHABvMADAr30AeVMPkG+eBf1UK8xcAwD82w7gcQwA9rKiE6gBnHpq3gDYMzoUM4FgXyJA02kfjkhspwCtB7hMAJDz40u3X4Xwb8QhXyYE+CU/uncAX3pzs5YOAKwA+g8ANIBaxwHqne18+kwDS7zwDwN4lnpIdbe+k3+eCUzxbLAZNgC4CPDvE4AGAMwCuE8L/niZS+hXcRMA1GplbQ9QVwEwAf5PJeZ6UWkLOBUGAP6PzfnfGzrvsPerjABVFxGA9CcTAO4Q/FPtp1+y8BN5vOSTF2Tot8M/VgKlLKD+7VR/LcDzZ6UDIPzbCFDvLgJoASwEVDQAfvcQdTcNoHMeWGIhAA3Ac7gL4J9KANAvl3vRlZoA9O3PA0DWDgHoCgDKf5z9E/pebhWt4VTlfyLnf4/ohPvfb9Rkc51EAK9tIwDx575AlgCi9vVXUEp+18W7C/9bb+ZawIQE2xv6KogPeO8edgDJv80ANABrAVoHGAF6BgJ5tw5wt50I7FkIGM8AeuOFfzQA4M9VEE9fc6VJAHi7UluB7AB2GgBZOwWsNwAkkr6hH6+T+AV1KnTcORPHHpmvAN4bKlyIEgCSGqDmtBEB6AGkn+WAV6ToAPbYX3vzO4Z/6tKZgPjjxkslo/bJYwf2FQBWdArAqAb6NQM0NQTQAXpTgBoBDADgWwew/MvgT/6TC4EYAOQksB0YACOAe+c1ZnGEOkDcBng20QDI4rPA4gAwwQCQ1kknnXSE3F38nzMB/vMG4F7RkTAA4wA1dAEi4SDVA4DqzXLR6nDNAOQ9HQAY/236N2rK1cG/PnnUgX0eA37To1gD0AkA+C8GuFgHwAFSFgDdTcEBEhaQ5N/wfnOSf1YAAQuAnRkAFIoB6AQp4Ncb/NsA0MrkDGAiABynAYBJn+Ff0VcPMJdIxv+c/z2lA8pEtFptVp3waIDQsxIgqJWxsj8WtuM8QwNIRwCb/lUPPtCsUc1YGPyn+MzSvhYB6SJAESOA1ACMAKkMwIVBXO+nKUDYtw5gpgCJe4p/GwDGCzszgNAmAFYBuFEE4EvdG1wE/qGfuT2AIhsAyL8ViDeyFsD8fxz5zxsAe0RjzaoZovHhhW0hImZfZ8dxOEZT9vXEDlCG4ABk/y+L/4uR/uu1WFz7K/SPY/DvW2fFFYATlwAmAxixEZiygKPvPvrGu/HOzcJyQToFSPx7NwJxDpAzADtPADAAs0lKW4GSA6DrN4qhUTGDM4C9ASAhRb5LagHk/8i8AbiHNNKMi3QxgBZxSOyP/7YK/qv1God/FaqA5OgvV7r3343/t0aI/v/qt+b8OVkEYPmXlyYAuegAvRZgdHS8UUA8QB0A+PcO/9TOCgAawEaXAbxkHpeMS+cCb2cAkFcGZwDjDsCRqQDA9J+m//sjps34P6H85/l/z+jAIKYUr8hHBGA4hpQIF6N+DfvjqoZ/txzFDsCL/Hev/EmN/t+mo3+fy4CvW3TbYgB0AFy4NQLQAbgcoMcCJAWItBJQEX9b/af5ZwHQnwEwAfCJyeIDT0edAJDBPYDpAJBO/70y4z8nAPbNdwDsFe07mTAA1w9nJA3/ZiwAXwQo/13dHQsH4PjPDMBpQIhz/7b3H2igEMX0B3jY2X+YqyihBdiVANgDwAXVezKAnRFQC8BbPDPArJ8a/qm6HF3gOXwaWD8GcNUL16gF4AL+uG8/vET8W1EGZwDTAaAX/1P0ijV96rThP8//e01jtapBFbdT8W9gBICEf8R/p07VZNufJACXDsDZgGT1z4V/NTEA9vyhk0cP+U8mdeEiDMDp9AA4E4g2QNOYAEymxwE4ymsCMB5wNCf+eqt/KhDV+CyQfgygZAzgituv0QwgEwKXhUWBHwsosrgEEOoNAGz3k//4og1MT0/n/O9FHXpurdFJ686yHBEOTH7DhYMxglJJ+Ke+rZnRrtypAhgAWP0T/64Fv6by3/c/TlUcTwMQMf+zAoBMg5EZoFfSB8R1NKP/Xw7/M3XFv+ZVsQmwHwPAemBjAJfc/bRJAeD/Tlf5x+VncAmgDQB2ETDht/Trba5p6FTLf94A2DsqnLf5ClYDswrwlishan8ZFOEAwn+5KsvtVQCtJuM/bsitBpgLSPP/zM2S/jtIyutk4P8ftf+qCwPwqh5uQZ+7AWpsAnJTwF84wIxd8/N3w/9MAKm3cAnQjmYBSiK8t1964ZpnF8t3XqOVACYDNkq6eLLV8sMsFgCpANDLf0J0AJkAIP/5EcB7RyfOH6P7gVgFLFdaAQxgRg1A+K8ZlOtU4JaNHKHlMgYA4I8X8edSX2pq9H8Y/w4OtQWg2Z8XIwDp//sMYOC3+rPhf4b4w2MwA7BTAxD4gb8YwDUXuaXSRddQF4VCP+K/n71DQNIBwPKfxp8hYPqUDv8H5+P/HtN587oh0CYAvw0abjb9vyL5p5q4AldKAD2YC189dK1NAAj/QbPWhX99kvj/R40gADhtk/75JvhzFoBbgvBiCPh7zfwJ/qj+Papa3emivQMnI6FfXxsv/RgVi+HTSACYCnjh9g2/6ENIAZNZLACSAeBUKDX8pzUNKf+H5OP/HtN+B80f86FNAN7yqq8R4Gbt/5F/JoCmcQHwL5PwTlnUfpotwGduVfwhiz9r//+uo6QCcFj6ewF9oMZpAMZ/qx3wzzUOVIy/jv8oAPo3gPZGFKoBGD1UBPwtv1XMbAHAKQAbAP4B/zHwP3LI/gfm4//e0lnzUgI0YgNw11Z931M+PPT/lX8agP3SMcO/CiHgdvB//a3Y9JNK/8T/fzEABxWA48T5X4J6xwIYAFL6B/5nkn9C/Kt6OR5mAPooAWIDKJeKTAC474x8qpXJAkACACsAdgDS8T9tAGOjxx6V878Hdd48EoA1gAgGsBoFULmI+b8U/vF63sDT4Z8LYaOnJfxzr1+i9v8fd7+MxgZgAoDHZqCNAD0ZQA71spRbJeFn+DfsOx4uHgO4Q+17chjzX3aLIhrAFRuCvtzZnAFI7QKww7+l/3Rep0xNQ+PHjR4F/g/J+d9rKsAAXvypYwBBuOb7lYrrmUf7ePW06ABVM/hzOsCbqdt9/kbBGHL0/24ADkdqfam4I6DZDOQjblRSzR4HmDHB39I/Ew/+Di8sAepjCZUYwKN4FYu4pesPA8B1WdGnMrkHgAZgA0B6/Lf8TxkHGMv536M69KD5+Y8/fO21e6q6Y7e+vOavVkJXd/7QAGwA4DdCuRPPBTqeeUpXd/E//j8XvqORMQBdChSryj9AOzClOi61gw73Cj7XNiezP+l3lH2IBUA/BgAVVTLqwwBeeBIdQKqVvecA/UkLsNP9o05X+OkAMv6PjY7m/O9NoQUw/8nXX69vvV+D6tHWsr8aYmZLHSB0wboh3uLPDODp0B+YuX6w39X6H/m/f01G20677bpCvedQbU+VIp/sU3Hu1zVAf4l/lfCzAOjPAIqxfBrAk9IBpDJ4DPCfBoDk8G/oN6+pqamc/z0tVABP/f71DwfNyVqgerCytboa+r6kezEAJxn72QOgI3zr1ZT4Tm+A8OOFB3793xrVXF8zvMubBZ6fln1z4xsaQK+46Fen/PBybACQJUB9GUACfxrAky88WyL+lVYGTwFKGAADQBJ/8k8LmDpF+M/z/97VfsfMz7/504fHHPQIzgP6NlhbX1tuLW+VFnH6jhiAR9wJvxWBt9+o+PUAfutHTu6uRAg8rzo/5ZaeIG7obw1Alvyy9Ff4qcNH+9tGZfGnAdx5zZNXRzH/fhZPAbIVQKoFaPGngH+S/3z+fw/qRKkAfvpsfvv+crUWbm2/vba6ur3SWMRCP8m2HmO/Fv0d2PUijvoF8W8yKQyg71U48KjxKaaPf5A5KZAGwNCfkv4rwn/V6VZ7rPAvDMC3Cp9+8qUNQz8UZrQASFUApD82gFgG/3z839OSFsDvP20+9dW961tb69tbXy631rf9xcVySSNAORDilP9iOZUCaAKkX/uAnCMczMoXeMDYZEAD+mf9TQJQeyD/Wv9TrtPnor19xxP4swR44dniTYp/hgsAawDkP1n/d4T6f3J8zPB/YD7+D4n6/CvSScDfn9pcWtqCvvxyrbX15lYZAaBUdorqAGY/D9yglII/nf2b8ffB4Ma9fQ8cGR2fnBK4011JvuL34C97AFI8MP9r7W/xd/s9t68wrvhb3eQ/fWdYiXVBVguAfZKLAGz8N/Bb/KcN/yPgPx//h0MFCD7d1yqAj3/6Zv7epdllaG1tdW1zcwEBAA7glItQSRFBOZBKAIz+Kh388dJ/PFADoAscMnLU6NjYOOYgHgDjvHirOhMBf8K/jv5c+5MY/XG3Ubv0bQDXJfG/qXXpRiVWRtcApyuAdP1vDSDnf7hUiNXXRoD5z3/6ZP7+pcryGoQGwKZWAHIKkFMU2acCSsxnw18uW/qr7FzA1C6tfTvwAjfgUB/wIv3peUArpV+Dv8n/1gJct91/Yh8rJunHXWz7sxUROoCZLQC6KoAY/974P8npv5z/4RD+VqH+MsChMgn403cHfTVXWYUDoAGwub1VNgZQ8opdchJTAXb475z7g4slwMm7k3z3PW+l7OInomRJIPN/IqYEN8sioM4yYF0umGj6d4oAF6+xQv8G4EOPKP8VXOC+OJv9AiBZAUzTAP6W//z8n+xL6D/AOsDOe4Dv/PTh5uZjs5XV1eXlcGtz+63lxdgAysWkPE0AzST/9aY98d+kA90DtDu/LGdtXlcK2wwgPIEw1aUI2lEUhcsbv3E5YNDpEcAJOAVAN3DbYwS2XwO4CTf4xw3Nzma/AOiqAKa7+Sf+5J/t/5z/zEv+SkW0AESAHfcAvxMDWFIDCNfA/0pr8RU1gKLMA1iVDFJdu4N5hojibxPA+D67oRPeXXqtFBXrdesAzAByG/pDJPTZhdvaZhkg8Rf6p6ZOnpw82awqNkbgccq+/xJAon8FN+CHiP9shguAZAUwPd3bAJyCA0zm03/DJMF/fxzVBDED7HwS4POvvxYD8LECsLW9/dbWQhmrANQAMA9g5bMF0IM/+DfqLAfclV/9A85bv+fRcjgbyI8FBZ0qgPKisFT0K0t3LUVeAAPgzz05OjLCshYzCmPjJ7edf8c/DeAmqIKb/ONDrtksFwCSFrkKiPwTfxv/8/bfMAn4H7i/UR8OwB4g1gG/tr75agVT2OH65tbK/cuuKQEgTze5UdVGsx7YHoA8SYwn/6ZPAN2V7HvWQY+9tlj2b2sDaloAQ0BgIn40G4b+3F33VyK3s5yJB5T0zCu223xQab8aLWq7D/wr/WoAqgwXAGwBSACAAdgGYLr8V/7z/J99mVWdkDoADWCHPcCnsArg61fm1pdQyEYrm+tvrb/VapB/tP2kBqAHuNXFRqf+RwEt+DMBpAJAMOBJAM5ffnTdo25YWQiF6+46QE8KrbVnF5bu/+L+sB05zP7B5F88lmTfQ+y5ZX0bgPb+Zrv5z3gBQANgAOiO/6n2Xz78Z10Gf4oRoCDaYQ/wzQ9fef/RBWlarW5Dm+uuGoA6gOt0EkDZwx87PBKsVlUp/70JYHI3wu/+7y7gYaFFf2GuTgVxCqC8tn/f87OuG7WZCcaPGsAepWISf6ssFwCaGGEADAA94z/wz8v/oREndEQwABYBxH9HBvAJjgOrNqolP8IMALRWZQKAAWgNoCqBf3TK1QE8p0H82QCsdSeAXTkC66x1BABnbva2hTq5b9YC+Uq/pgO4LmYBPGMPY//zDmVbAsymNTfXynQBkAgA0xz/U/E/L/+HRQXd00XRAfroAZyHFsBrDWG5Wlve3L4Xq4FbDWsARZ0IxGfoOYtmM37guW6D4386AdAAduMInML5K4/CkRZmF+6ycxH6JoozQOS2vcDgf8hgfpOPKs6qzujAL5ef0WMAOy3AA2MDsON/evY/L/+HQPHwfyzUcYA+EgAWAh/D08CaVewEWllZWXM7BiCFv8v877iQ03DcMHQN/qkCwJ4IUt+N0e+AjyoIAM5ddz1/f70e898t/ERcD9g8eRA/Eg1gjtwL+JB+ZPQYwH8IAFMm/uez/0OjBP+0ABoA/+p2MgnwHR8J0Cyvb61Ay05sABj5ORHo1Kpu2V10F8F/q9ywDQCClwgA9V1aCHzCB/cswgDu++I5NQArGhNUp5AQBpdJRkJjAK8K+Lj1w8/oMYCxAdgAMC3Dfx7/h1TkX9ifoAF0EsCOzwP8/euGAbm6sCJqVW0CwNWWJwMENSeKylICRK3QqSYTAK50AtiVQ/DO3zIGsPD8/QGHfn6QfKvAG9ijuWkAc6/OqWblhTurxwD+aQCw+HPxT774fzhUsPxPTNAB+jWAszAH8FrczbttBVqIDP/sAZQ8r1Zvgv8wVANAAdCw/EPk3yaAwS8D4jYAtABQAszddr9H8tPgc+rPc6MBHstziCYAxf/V2AMyvQRAOwCH0AC0/s8X/wynbP6fUNEATBNwp610mQOwBsAKIJkAgm+F/5D8owPgJCoAtt04/tvDAAav/d+YkxaAs3Db7G1esupX2fVKgRdBg2rJ0QAUf3oAvqtkuwPYHQA4/Ofxf9iEv0fT/9f8nzKAHf/lnacVAFmeXVlYWFmFATidWcCiGzSF/5YxgAYNwAaA7goA2qWtgGd9dJMagBy84/H5QDWVmROsm0SC0R9qD7AkP/ACy74GgIx3AE0AGDny2NGx6ekpHPoP+hPDf773b1gE/hkA4gTAHkAf/GMSQOcACE5lAYqkBeDCAIwDKP9lCQDGANAC6JkDJP6M3LuzCuB8rALQRBIVjQFw8o9qahrQ0d+FAQwmk9AASD/fh6ADKAEAx6lIAJgC/hz98+F/mFSIA0C3AZD/ws5PA9lmBQDBAG5bWHZNBcASwJP875L/xUajHJYbf9kD4HL7Xfn9P29LE0A5dEPfkx+HFmCFvYB+JRQHcAe5MnFfJgAq6x1ABgDwzwCg/HP4zyf/h0aFTgBgC4A9QCkA+vjbO/Spz79+pTNq+jCAVSeRAIrgXyYAwb8JAA0A12AJQPxtB4Aa+CQgnetVMYBSKEUJZCxAlgQFbAh6LVQHRfDvVAfZlSyMz6memOPnBVk9B5i/OML/iAkAU6ppwT8f/odKcQBgCZBoAYD/firpp36VCoDyb7vtthD8O3EP0DX8QxoAnIaMuHEPkEruBdbtdoMeANm83PwQBuAWI9ePHEf6k9YB9Iv2wqzvwxvkRx1oJhkn/SwBsrwJqDsATE5PwQImDf755N8wqWCe7CwOwCYg1B//5OidD60BNGEAy9ICaLhmHVBZltCAf4z/ZhUQInfZrgLobQGqBkmbDQBP3fs1DKBcjEIf/EM2A8hHEN77BY7k8PB1tYpVAAPUGCcBqMw+CCQRAI6CAYxj4Af90+M5/kOoghjAATQA1YThH/2/fnSetgCoZvG2uWVXDIAlQFCXBqCIBoBzQgCajQDWAeq4jQY9CcgAcMxX95S1AvBDlCiRiQB0gKAeRAuvf/rFHGxKNLCuJA1gieFfXpneBKSt4/hAZcCfwD/nf5hUoAGwCUD1xT8nAT5/5RXbOQ+Xl7UF4IgBaAOgGRcAi662ACRrG/pxpTuAquagKwA+zWzzide0Agh9V+YoIjUAOgD4r/gLny7VDP/eYDPJaIUGIPxXMl4AMACIAYwL/Tn+QylrAHAAiPij/98vSD8kWgDN8vJyy2lA5qEA3zZNAcAEsCgGUHZtCWBE/OWCmsFuEHD+vKkAAH7UjkIoEmdi91/592+7SfmHL7QHm0lGb1ri8J/5JQD7gH8NAGIAFv+89z9kKnRKADqALgBg+78fHXqMtgCoujtbCavxOsByvZksAHQrcMOlAdABeguA5uGDpM1uYHhZA0DJdcG/CD+eNYBIDuUvN5V/7Fwc8PEkR/lLnQBQzPQSgLgDqAZg6Vf88+F/mFTQWQCNAMwABwv//ZfSx7AFYGh2K5Wo+r5JAKVACoByiAsFQBnjP1R10wkg1QFs7koFcOb85lfXLcIAPK/d/uWXCGITUFRv++DflfFff+bagDMJDeCJIVgCIAUADSAx+Ovonz/1b4hUoAEwAtjlf30bwHaXATjgpmr2Apa8b9kAELmQwiSfyRYALpv/tQLYhSHwhKeOeV4WAXie11pdPX51tRVG7XYcAJpe6Psd/vHjegNuy40Ul+IAkNlHAScDACoAFfHPR/9hlBiAdQAu/+9b+533xWvsATIBtBwaABsAYYkdAJ0DbFSFfyrVAaABDDZucx/gU289ds8i+A9Bv6olFsAtQYEbgn8T/3WB0KB/pEOKSxj+cS9lfQlAHADEAfDO0j9/5u/wyTQB2AXAi/j3X0t/FhtAoxobgFYAXAEQdhqAkgCwBNBhAEicB8wEsGsBoHD+/PZ91y16XrR6vOG/JUIf0AsCCQARvhT8dfPiQCsAGkBraW6IOoAwABGX/eWtv+HUH+ydPe8MURTGDUEhGvEaoRCJhMZLKCQrNILER5AohoiprsJ4C7ImJjujEYVENgrRiIJiGkwkxAfYSCQiKp1GIaJ2zrnP7L07a71mZ2c5v1lLQvEvPM99zrnn3glcBODj/0Hwh7vpXx9nSABiAFdzmwDCVPR/PD+OPUAkABhASs9IC6DJALDt7Porp/oif9F/ORD9EybiIUA+/helaVTYoiV5Pm1VLj1iDeB2uw8B2QAAA9Cp/7kmcBGAwPL/RwZQHQVMxACiq3mW8F5f8l42AK3+7V1gJmMDEEnJv/YDQK+ZAIAC4OyT+/2o3EpIBWD1X8pWYJLyqwD598TAANKpn02EAdyegw7gMACs0Cv/5pyAsA7wFw2c/XdeVQaQWQOQTYB+1OtB/4Ih+aMEYElZanPAjQQAHAK4fNMMtgrQPxJAEZqEDMBwADCFVAD0c059Mg/HAe+3fgZQAoCgp37mncC2Af+yhDv0bLgJkGWk54QMgBMA9B+6BoAcBGL9m+/MABEIAFOVANoWd648Pg71MyUCABwgjikAcAGAADDlcwAwAAkArb4GqAoAgr7w518gAH/zbq0vNQMoeRew/6CH/T+MABF921GPDKVrNwUEGpwBCKgAeHfxJdZ/VwDAAcLCxM8RAKQDOO0WoDsPfL/dp4ARAJar/v8RAvB3R+qq+wBZ9gk10EvDTmD1jw0ASQB9E/UlARgkgBkEAHQAP94685bEv2fPHugfDiDwuh8/j1LerrQGEE9flsG6OTgEwFsAMIDlqv9/gr/eu/V3AckAMirpcz7q10tCB4tfPpEkgMgfA3KHAJoLAHfu3RL9E64DkPMjhOwAaSr6l35lE425de2/B5D0zwbAqP7/FYK/Xk6Ht4HI8A9pOiQDeODp3/TlMSYzUcaCEgNIQW0GKG4iAHw5d+ql1f9LNoDSkoOCM0DcTeOI4LCCn2m6rDl5v+0dQGsAqn/F5wA2AWAAFAFI/+QCjn5oV39+oswagKsBRvXf3bRg2iw5tP7KGekAvqQAsHU0ACABcBsgTRMEgO3T/o+O88Dtvgic9M8GQA6wlOSv+lcs+z96PcB+RgYQZ4mvf1MlANJ/Jto3/IXR4VoHoIFq+/DZe9cv5ltBPQAgAYRSBEQ2qzSiy7UX77e8AIABMLr9p1Qc+vC4MoAkIxI6/pNG320A2BaATQCsfqI+BDxdreEHvv/yeO6NANR6gEgA5nkMA4gbmc1be/JqywsALgEI1b8ychTodVUBiAFEFAGSxJc/qx/6p7+FATj9W/GjA7hv+gFg4dH7Jy8aMgCZAi4HY/Iv+OGji3FqjwHEjQhzTcsPAeHsmKAn/xR3G8jtoQFk7ABsAH2nf3EATAESGQmKDQD6rx8DbkADS49epNNKpZ0BLt3y71kA6V/uBogTGQOedlmCOYCdLS8AhpOjevZHcWxzLYAkE5Ju5Otfln9pAWSGEkDGBuDvAfgjABgCnirLt14c5NFAEgDUX0sABRuAgQGYqBkDWLiu7QFABkcFlb/i3QbitwBsxg8FNwLcJwzvANADA0AEGLkHKG3kKuDVVPYX9hgAx//aFgB6AJUDRETyvJEEsLz9AcC6gOpf8Tjw6WGW+AEg8vQvwmcPIFj/HADYAGoBAOt/M28D2yAGgArAkstXXlZbAFIBSA0gTYA5yOY/pS1jY8q/xv5bL7JhAIi4AjAu/8sMkIAOQJY4A6i1AFMaAWiCNbTomwIGAHLI3wUAepAA1ABqqAkojmD/uxeuAkAAqHUA+MlQAMj+n3cPiJsA6u5rRmfryACiHBXAWAcAAcBrAkTJ9la/pUdRZsiiS6gAYACkcCd/0T+BEQDWvxgA9I8OgNV/SgVAEwRkAHlUjlYAue8ALH/5qAEoyk9YfK56JQBaAGk/tED+hh7Wv4SDjB4xAHcI0N4E1O32mhmDhQEMagHA3wFAABjuA6btvqNHUWbItkdZ4gyAlvjYy/8uAWR9lr+0APifQv5wANJ/IwUA9tthAJMSQFgM9S8GkKQtn9BXlNmx68JoBZBGx536rfgNq58eXv798h/yF/2nvabGYBduGgxygwTg9A8KQtI/PzCARA1AUSZw8GaWjhiAyB8NQD4GIET9TPSPHkCV/zEG2KUCoKkpGN8AyvEEUOSuAGADiNUAFGUyCw/2/Skg2wK8KeqvkFuAGASAB34AYBPoEs312RYewRiAuwdM1O/pn+Uv+pdtwCRu9z3dijI7Fl/tD1sAkVQAiP+wAEkAVALAAXwDEPHbDcAuzgA1wVI2gGLrhAQgLUDon+AAoJsAijKJZcf9FgCZARoAjoj0jwYAw+L3rgET/Tc0AugSgClwEUBN/WgBQv8GBqCbAIoygQ3hSA8wTUY7gN76DwuA+CF/1j/RVJGNBFDaw8BsALmzgHIkAUQuAWgFoCgTONj3eoD0577I3wPrv9sCGJE//anBHUBnAGUtAQwpGOR/SQBJsrPdF3UrykxAng4zkb9NAKgARi0gE5wB9ND/G+q/sR1A3wCQAPwAYIH+kQC0AlCUH6kpTFImTpKqAujX878zgJQg6Yv8nf6bLADQBMzpNnAG8h+ZA7DyRwKgn7n1x/QVZVYsL8LESwAPMADgcBsACABW/NVX0wVA3QBy9AC8FoAnfzYAPQqoKBNZkSMBkLhRAdRbACAhahcANbwDAJZ+9gygMDkuAvDkHxn+MHGsU0CKMpk1ZYj3/LMBpFlIfHf9d/q3w7+g6QIACSAflgAmKkj+sIBK/viWqwtibQEqyiTWbQ2TCgoAkyuAxF0A5tN0AYAm4KAoKwMgClf7I/3Ld0IfDQCKMplg01vDyyRTtQD5cfp3AWDkJWDve0LTBQAGgfg4YFEiAZgKFP74SuQgcPJcA4CiTF5N3xgJ99+tALKhARBu/Yf+GSoAmt9jW1ey8iOT2wQAsPDjS/Qv54B0D1BRJt+w/SaMRiuACQHAzf+L/t+/n0EBANYWWPvpd8798nGzP9XLi5hUtwAUZTJr98AAUAGMtwAFL/9D/xICMALUOCtKOQxcRKZwAcB46of+TbJdCwBFmcyap29DjsteBTCeAHACwDMAgQuAGc3YrLCTwDlp3PLcmJr8mZ1rdP1XlMkERza+tAYQuQpgSAbQAPDkbzMALgGYBWvFAdABgAXU5f980/jyr9dqK4pjKQyAH/8gYL0DUC8ACDGA2QXsFUesA+QmQvXvyz8j+W9fMS2Z6mt1lH+CYMGKrRsHIVpmXAHwbYDf7wCM5f/3KABmxdJ19s2AeWgIp37If+ea6YWTIND36yhzD/83XvvmqRgAPagA/ATgVwBO/wA7ALMjWHtEDgOF4Yj8syx6vnL7FIt/fbOeMv8ElnVv3gxEPxwAEgSAegPA1/97ICMAsz5mu3TtkXJQhqgAKvmvPL997VSdSfWvzDlBsNCy6ak1ABmai45X94EDFwAeMKj/LaT/7uy32Bau2JTneGspwYv/+e+u/poAFMWT/xJh8ZGnbweFiYQ0FAOoB4DMCwDv/QBwbcWCFhAsX7ezwOB/9PzGzk1rx2t/1b+iDAkWsvSZJSuOvHlb4gRdkoQuAUwMAF4HoDUX7S1fs4kPAj2/cWP7muXf16ZWAIoC+bP4l9GHnrVb37ysDCA2x5EAJnYA3vv6b9M1OwuXr1l35O6mFT9a/HUTUFEWkPyXMavle93QAEwUh8esAYxawPf13+tuapsMFi7/sfx1Bkj57wlI/qs9jux5OygLHKQ5fqyWAGoFwHvHg+4+nbFVlPkiWMjy3+Cx+y0bgNyiH5tjbABM/RoQ6N+fADjdigagoii/s/yT+jf7lG+3kgGIA8Q5DGBsBshb/qH/uFUNAEVRfs6ixctE/Vs2b9lycAtBf+y87XTKvCBMdIwNAA5Q1z/h6799DQBFUX68/C9bTYpndm8Bm3d3Op1BKS/TioqrVv8wgP7wFNDY+p9qA0BR5oog4OWftO/BVtAhSokAz3MxgHoCSFP0/+kjdNNUGwCKMldw9Q/5+1QGINdpl64CQAJAAeDrv/cgTVs0AaQoyi/Gfyv/Dh7B6r/DBmAKFwCY4QiA6//3CHkRmF6zrShzxEKJ/1bu/OUcoDNMAFwBHKsFAOifcPKnD10CpCjKnBBU+mfl7+10Vu3urBIfcAYgFcDVsV3AYQHQg/6Z7r7ZHwFUFOWX4z/0b+XPv+hPO2wlMCwBigL674/pXxyAbwMXuifmvAEQLAh0nPcbe+fv2tYVxXE9mzhgEw+mdn6UeEgMJkoDSU3dYKehceySlDZLaaGDQIOSlr5JHSqCCnHVR4XtLl3L+we0N0OFaIw8uIMGLQINmUQXjQL9Af2ec8/TvfKzM1rP8vm8F/XX2s+533Pufe8p5wYa/8F/af9ZfwQAIAVAEkA+6gDE/3CoAFTKFaH03dkdAHh0RaT0nV7KOSBa/wWJAR9JG8DUuAWobQ/7LwXA6F+OKkDp5dn8zAb77qBP9CvnAS/uP1/go+EEQB2A9R83kABQlm+CEi+fn8ETAK79k97kJP7g7/S9nsq4E/nPHKkBrv+1bA4FwN0BsCOASuD6/9XZewRgIP/E5MTkFJicmgQaApSxh/2nw//CRzYJmJtpwn8/hwBg/Y8CACgzFeba12ftEQBrv7wDbXb2wuzsLJcAjQDKWMPrPwaAhngF4ALQ/qQI/0N/jyYArL9NAGXSHzegAwCla9+cqQGAu/Sz/BeI2/hjSoBGAGWsMf4bloATAwTyv97MQPy8OwGwAQC3LP8l8PsZGgB4dMnSb+WfmbltuDCLCKAJQBlfPDr/M7NASAVwS4A8CNBuG//D/HZGngEi/Rn2fxD/yf8zcwIAYgvW/hmwYrgNZlEBNAEo44tH7/5jhmrAZ8uWT9qtdt34n5MAsIvLt48BlgPr/8vvzsQAwI78J47ab6EIMKUFQBlf+NW/M7YEOJ0A14DP6GUgrVZ7O8sFIGsCgC/9PzD+BwP/r52FEwDWfif4D+RfZyQDaAFQxhj4z//3iwBuKyDgdYDpVqueoQKQy9stAN8eAopeB7hTAi8T/wiAM/GP23993YJ/pAKgU0BlTJEFEFyEA24nYFlZSK+2W034LwWAAoCdAED9gf87FAB+SPQAYFh+EFv6t9a3NgkuAGYKqPor4wk8MEgNAFIDmOsL+CbAheurq6tRB5CTCQDXANwBOgD7MDD7fzW5tlj7RX637V9n+8Hmprk5AegQUBlf2AW6bBYWIwDkB0jAV6tpFADT+ueoDrD91AOAcgH+SwEogeeJHQCQ/e9e+gEt/hubzFaUANR/ZVzxBFMCrBdkBn7om4DepfQiCoCZ/eWdQ4BMIRi8DSTZDYDd7I8t/dfFfgD7cT3eeLwJTAHQDkAZVzynBky4JUCg4/Be6nIVCaAeFQD+xQ4g3XC/wP5TAUhwA3D8dt+Kld9A8sN9YvMxzwDIfw0Ayhjj8a8bAyyTpH/q4uf71XS6Tkv/H2EOv3kOACgC5H7kvxSA53cT1wB4uKz9In/cfsgP+3GZHw0AynlBDJF5gCQB/Mje15UWCkCziQLwRxjCf+Djom2AIAiN/9IB/HDt4VzyZInZv7Cygl2O9SW4L/KDx+a6hQuI/3oIQDkXePTHKQKegf/T1f1FFABsAmTDMo8A8yGgDsAvhGFgAwA1AJeT5YpUtiH7FxbMIQfH/k2WH+7H/Z/VBwGUc4GHewj595dancVqs4ZHAEPf+RaQjz9BGEoDANj/G8l6C7DT+Fv7Hfk3Im5t3IL6x/ivDYByvuA64P6Ly/tUAPA10NDPFPMhBwDu//0gZxuACg8AknQE0C7+Mfvj8pP7cf9RAPRRYOXcQO7zX+QH0AjwEC1AbS+Ty28XX+T8EMgRoJxTAErgWqI+A2YX/7j9G2u4xH5cUQlw/denABQFXKke7ldbtWzW7/1YLOYC8xwwr//Z4QBw7dvEvATMSx1Z/MX+5a3l5bW1gf13Nu7AfUH0F//1MUBF4RHgYWcRBSAXNDovisUstf1MgBMB/mACWAIJGgBE+l8csh+w/bhu3iE2bt0R9534r+u/ogy4lO4fLOJR4OBFv/d9cTsT7Fr/w90h/xPyHXBe/SeO03+Nubl28+ZNrP24xX/h48cE6f90ZUXfA6IoPALsowNo/7XX6f+IArDtB5Af4vvG/2AwAHj+bUIGAI7+Yj8Ytp8u4K7/or9d/sV//TCQcp7BCLCz2Go193r9v4tFFIB8mdd/GQA6E8BfEzIAYP3J/ktHFn/xH1j/LR/Hxn+6/ivKlVUKAOm9Rqff4AKQK5P+NADMD+0A/JCI7wDL5B/6y+rv2D8/Pw/3Xf+d8O/Ef/Ff9/8VZeLzfewBrO41fu536vAfBaBCASCXyYU+/LcFIAkNgJcy+l+U1d9Z/OfXoD9KgPjPWP1vucs/t//6NRBFSaVm0tQB1Nq9TrdX5AKwV4L/PvynDsDxPwnfAR2kf9F/eaA/cAIAER//2fivXwJQFOazKvYAmvVer99vF00CKEH8bNYEAPshgNHvANjlf2ZuLtL/mdWfE4CdAEoLYPO/Pf2rp/8UhZn6snO4v5ruDQJADQWABgA5uwVYIv9/HflLQOA/63/p0swc9f5sP/y/N39v4P8JASAa/z9V/xXFZWWx31lMN37p9XkE2EQFyJYKofjvTABupEaKXf6h/5wZ/T0j/+ehv60AwJkA3HGP/0n7r9N/RbFafXnQP1ht/9z7GyPAF0gAIFMuSAMQlAcJ4OGodwCgbLT8XzH6g3tgHpcbANz8L/7r7p+iHMvtxf7hYruHCUC3VzebALVMAQXAOQPACWDEzwDa+D8H/0l/9j9WAWwBcBOAe/hfvwCgKAOe7nc7rUYPAaDfogLQpARQKEQBgCD9d0Z9BEjiP+l/5fKS6C+I/7EAIP4Pj//Uf0UZMLV42N9vdDrwvwP/gSkAPAFwK8CIdwCi+D+3AP2viv9OBYi1ALYEbNwy+q/r4X9FOcKj/e5htdcH3V7zBQJAEbsAGT9AANgd6F8p7Yz0Q6DekP+Xpfm3yAzQNgAW0n8jWv51/K8oQ0x8cdDtVBsN9AC9dG2bAwAqgO/LBCAqAW9HuwXoeTb+X736jLj/7N59XIYTNgEQAPAqEOO/Hv5VlBi3D9ABYATwqtfp1TJ7eCfYNuH7Qw1AZeft6EaAcvafp39Y/ll/yC/2i/8x/YWNO/B/y/ivHwBVlGG8pwfYA1jF+t/pNOpY/akG2AJQNlQqoz0E6Hk2/svyz/6fnABwif5ga0tP/ynKccy+Puh3qulGDyWgXt9mqATk+WlA6QBK5VJpdCMALyXtv43/ZH8sARx9DhC/Rn/1X1FO4NHrDjqA9Kteo8EBQMhEBQCYTYDRPQbkDfy/HPlPSAI4qQkAA/+hP76AqKd/FOUIU08OcQy4ne69QgFIowA02f9mJgjcBABGNgP0OP9L++/q79p/NALgBjb+w/8L6r+iHOHR+53ufrVdpwDQrhv56Sdbxh4gMUgAc6nRAP2P+P/QVoCoBLjnAG0EsP6T/jr+U5QjeE9e9/uL1XpzUACKpgYE5aEZQGVU54C9lPWf47+xXyrAyf7Dfvi/hvi/FPk/Qfrru/8UxXJ7+hCHAFrNZgPQDFDIVYJdNwGM4k0Acf9vwP+HUQA4fgiIy+iPe22D/L++MiP+67f/FGWYT//tYwTYlgJQNA1As5ipSACwM4APR+IOpHX9fwj/H9zH/c4AwD9r7P9S5P/EhMZ/RTnC1Ptvuh36HEBNOgAh2JG3ggOpAHdTo8Dx/8aNu+z/A/HfVoB53ITbBNA3gWj5XzDxX/VXlDiP/uyiA4D5e1wAZABYzL/lV4IyZWY0u4BezP8H7D/dbgNg3acLN30XaIv9l/ivb/5XlBgTT6a76ACkALSiBJB9u1Omz4L6gYF3AUbxLLCc/zX5X/yXBCARwO0A7AxgDRVgeWvJ+q/jf0WJ88Gf3AHUi1QAeu3itqHylkaAu76TAUZxDMBz/b97F/q7/jsDANd+3KQ/x//rC9r+K8qJeJ9Od7sH1bYtAEXqAQLyP/R9350CjOIYwHHr/31bAtwRoAX6g2WK//Bf239FOYkPpv/t9jECxAPAf/2GTYBtMwDYKZV3w9AfjgCnfgzAkwEgnf9h/x8Y7CaAMO9A7T/YWl4i/3X3T1HeFQB+ek2HACB+ptB+1WhuF3FnK6VyEAIkAN8PfFMBCqd/DCDyHwHA9v+M2wLMDweAtXla/tn/GR3/K8o7mHwy/ZqOAdOXAAvtXoNOARYz4j9AAoi6gHLhtD8JKAPAuTnr/8kjAIGWf1n/F7T9V5KDx1fSkujs9Jtun0eAGf+feq/N/mOxRwNA5He5ApgM8M+N1GliTwBa/90K4PqPK778L+jun5IcPM/on6xu9NGfb97vcADw836tgQJQpEcACggAuTAf5n2wC+C//98p7wJKA8ADQPH/26ECcJz/QPzXw79KgvAsCfoWrfdk+t833AHk/Xx+r0F7APmCHxQC+M9wBQhwB7n3TnsXcLgBcPWPbwHgJoz+dvdPd/+VZMDvs8ePRyRmVfqfvfN5baQM43jeaBOw1EORdkuph7JQUA+LshdBVy+iC/Y/GBjCGANDDpPDDiaiYwwbkjmEoYfCktOCSE7tIR6KoUovNlAwF6GHPRVBeoz0D/D7Pu+bzKy1mnS7k8z6fGZd118X2e/3/T7P8/54df34+AdUAJ7T7TlOt+R50L+DwN9sWxaVADYhI4D/frxDACHE3wuAb/GBiP6jPcDo8r/C3T9mrhDpCHPTl/rwwTFVAN3uYNB1bKV/x3FrtgXaygLkhwrAfzveIQAFAK1/GAC0/+RfegDR5Z/jPzN3CLxmD9L4QBrMgQWkUQEcYxuw7w8GHgzAV/rXBtC2SP+KmvN7vEMAkRoHAOif1n/6Luv/8vLPe3+ZeUMIKH8hE2EOHOBN6P/8598GvYEnE4BjWbYjsWttnQCc9sgArN9jPgoEy4wUAKT9SAR4ugkYbf7z8s/MIzCAhQjKAlKz5YNXfjo+P3tjMOhRAnBcpX/f1wYAC7DJAVAD+K/FOwQQTwcAqgDIBS7JH9DqH2n+8/CfmTeEgAEs4rcnwE8SXFCXmiWZ9eMf1i9Ojkj/A99xqmQAlmHYTUtHANoOTC2AL+IcAoinA4DO/5enANQCjKR/3vvHzCsyAixGkRYgUjPkLWwD/uG3U9J/b+D7ttuD/ruGYXRrSv9g1AOMdwigA0DUAKI9gLH+Sf2Xmn+8+YeZOwQZwAqxSH/AA2bqAOLjR2fYA0D6x0/yChDfkut/LxoB9K0g9p+xngQQf+8APKEaYMyoBNjefneb5M/LPzPnkAOsrGCdIuhPs3QAbANeP8DmX1r/e4Mj50m1Y/sO6b/nu9gKOF7/gR3nEEAo/UdHANC//mmU//EuKOQP9Wv58/LPzDcqAmyEUGZ99aXUjPjwwfnBUK3/g8HR4ZMO7v3uGh45gOHUoP8wANSdL+7Eo6nLhwDAqAJQ0J3A2wDL/0j+3Pxj5h1tALfHkAXMzAHExw++PxvKACB/uI0OaHQrngF6hu82lfztWhP6r/tfxDUFJP1fugUA6tfIO8G3FU+t/qT/+dlkyTD/6AAwgK3bIbNzgMz6+sHZSU+W/0d+tVMnA3CPdAKwHDgA5N9skv7t3ucxTQHpEpDILQAqAeCH/qD/95H+JUr9Sv68/DPzj1ARYEuj16/FV0VqBrz5CBXAUU/q/7BRxX0/MID6E78C9fuGT/sBxwVAzfQ+i2kKCPmHz4BoA4iy/f52qH74Z1T+XP0zc42MAGQAd7fGzMwBPnz0/cGwAvkP3AbkX3faHVCtyPyPAADcek3r3/L8z5ZTcSCizwBK/Y8d4I787mwTa2vh4k+1P5/7Y5KASCMCSAMYsQVm5ACfrB8cnAwQ/xudOjK+2TdrHeB7vmGYDuHW6zXbdizT6Ppvx7ENQET1TwFAs4knATa38W1uroHbq1C/WvxZ/kyCECoC3I1ADhD/NFB8cv7l8OT09PBJHTIP+obRpwjgVgwTFQDo2lXXdQ/9nt913Id3sqkYCPWPAgAGoFkj2WtWwa1bUv1LCwvZUP786Ccz/4iMjABR/UsHWHkzdgfInJ0Nh8NBtQH5t8sGxn9mICNAo+eZpqUCQKNadW370Lbd7kkM2wDG/T9qAK6ugZH08VermlsbEP/y8njx59qfSRIoAigCvIdvHAFm4AALQzjAoNGp1domln8jBwNoSwOQEUAHAEKeDHYqJ7FMAbX+KQBA84TUPFZ8zfKtZckS1J/NZtKc/ZmEIdIoArbIAfCNi4CVhZhPBi2dDN9Yc1H8B+Wc1D8ZAEUAv6IDQBU0qpaBRHB6GsMUUIQBAAagUbIPWVpeWlrKgkyaF38mgegiIJIB1ChgId7tAMv3V7PLddcJgsDoGzlP6r9NXYDGkS8DgAPxAwf6N63haSxTQBiACgBgtO6T6iNklfp58WcSisioIgDoBEARIOZGYBpNvVXE+8AKEP89bQAUAQ4HDrApANjQv2963w9imAKGCWA5jPtK9CEZiJ8QgPt+TAIZOcB7kTYgplrxHwxa880AIP/DAAJpAE21IdjQFUDDxfIPdyh9H8+FgGMD0ETEn44yRxcrM8y1HUAzOswedxsgfUfq31IG0IcBgHoHVH10AaoSB/KvVAoPD2I4CjROAEAt/Atj6eOf4CPm7WkFhpkaQaOALa1/QAYwxRVBNyKBJceE/AMr58EATJUAmh3tADZ1AE2vkpcGMNxMxYFygGyk2I8s+Fr5+MEjfybhqGGgRieAae4HuZEIvGoFwDKl/nMjA6ipQ0G+WwVuIV8Bha8xBIgBoQ8C6D7f32f8LHzmRUEIOhc41r82gAnvCZWSeHYLEJuBdIB2H/LXBiAPAMoioN6gXUBVJ68MYDiI8SgQCPt88/ecIsPczLkgfTcA5E/6JwPITKhqcQMGkH2bOgBW3wOGMgBQU0XAodwHbKMAAPlhN6ajQDoE8JCPeeEhB4AFkP7HBpAWU+jk2RRyy4H8gRExAFkD1DsS14cBOGQAheIwtleBRCr6eBpv8mFeWISI3BAWvdFy4mIZQflZ5LEWqASADkBLDwGaQDoAzgd0nK5b1wmgFMdJgGiBwwN+5sVHOYAE8p/GAHQAeMa3RVABUAIwIX/PCyuAZk3Rse2665EBPDzdZDkyzE0j6KWAFSX/Ke60FikygGdzgGUzkFj9lkwAJgUAIggQAvB16rY2gJNBHC0A7vQz/zMEvRe2SEx1q62qAPDfLlzfAdaMwMIX9L0CxgCBvgK4HQT7++2mygBV3QMY3k+nGIa5cYSS8RI+MKEBCKD1f30HyN7PqQRgQP+eIQ2A5A/2AziADAGdqinngPmD+9kUwzA3j1YykZ34bquxAei9A9dg+cgIzADkCl6LDABA+2B/P1B3AdY7DZkBShecABjmuUBlAMjim0L/2gCocshcS52rpYAwPZkA+hB/UIbyQwNAAgCNqmM8PltLMQzzfNAjvczkZ9zpP1EBAE8MXusccfp+UQWAfqtQ8Az5i35/PyD20QUgAyCqa/f/XE4xDPOcgOajB10njQ1K/yvXc4Dlk5ZpqhaA7AFC/eV+OVD0UQnUxg6wmUovcwXAMM8RIUkLIiUmbB2QAVz3idHVYdnULYBCpbjXIgfQAUBGgKZ0AFCrr6YYhnnOiDGTVg1kACuKqR0g/dHXpkEG4FWKO7vSAMqoABT4BSIAoGcBllIMwzx3RGqas28iNICNa2SApd9KygDMvZ0daQA5OEAQJgDVBoQBmHc4/jPM3BEawIZygLSYrgIoGFLwZgv6L8EAZATQ+kcLAD83VQAweADAMLEhJvg7oQPAAKB+9UjWVMPApbsnhmGa/VYLAWC3CP23crn+KAFQDdCU679jOrdSDMPMDoHvXwwA+p+6CFj66KRiGP0W2NstFouqAtjfp/WfEgC6gHgwvGYa3AJgmJkiwFUOQAYAVqa6Tyz70evQf2tvbw8GUNwp5eVjYNgJjJV/HwZACSDANkAXKeFtbgEwzAwR4moHoAgg9Q+m2BO8enFmFPaATACQv+e1Cvl8odyG8iV9eR6oU6+aBdO6wyfzGGaG0MhPiKvvEyAHmCYCZD89/7qwu6v0n8cYUP56D5VArtmG+KkCkO+EWhXPdLgHyDAzBQYAhLi6CFAGMHEE2Di/OMkX0fkHXqW0s6t+CQsotNsqAfRxO7hdka+EvlDbgPA/kZ8VYBKGOvgDB7iyCABkAJM5QPbnl89OimQAOa/41Q5lAaJQrLTbVAAE9Qb0XzBM+0U4BaD3WaaBel6EHxZiEoNIXX37FzmA1v/EBrCxfi4NQIreK/2BKWBJ6z9XLuRbTbkLCAGgWsgXCqaZ7CHA+JLhTAR+WoxJFEIIOvn3nw6wMNGlwtlfXr44e1iUq/69h1/t7KgKQDtArtVv7lMAsIqVgpdoA1Dah+IXFIv4gPYAwYUAkwiENgCQEVdcK6gCwGQG8M76+cVZKQ8D8KD/qAHkcrlyudVu9/fRAagUC6gAzG4yDUBE1b8IVvABbQH86gCTEER48Cds818aBQD6xxNcKpz94buLi4NSvrXnFaH+X1EBwAA0cIBcvxYgADhFWQEk1ADGtyZn9ZUJI7QFcARgksPo9p/Fq3b7wR3C39j/aQCfPPrx4mJYyqMA2N2V6/9OVP85o5xr29gEWFAVgHmYSAMAtPzr1f+yAWQ4AjDJQKTGBgAWr3AAlLeTGUDmp0eoAIbFe0ZrF+iTQPeU/uV5ADPXd+odq5inCsBKpAGMTRNo/W/gA+NSiRMAkxCEvv2H9vxd7QAgM8Glwh8+wAwABlAw9kj/vz6VAGQN0G85HbegKwDLTd4YUIwTQFgAbEhCA+AEwCSGqAHgEcHFhX/sA2SU/v/LADIfowI4OwgNYOdvBtAv53K1KgKAqgCcBBoAHOCyAegjUyvcBGASxtgA6DHhqxwA/8pkAeC784uDLx8XKx7k/yv0XyIDuNciqAcQVN0KVQBJNQCl/6gBbEQTAM8BmEQRTQBbW1sbK1c4wATLWuZYGsCX3zwu5e/R8i8rABhApAIwcs1qt5iXFQCw7QReByBS4QyQDGCcAUBoAKx/JgnoBLCoDADcvuwAQEzypv4nDx79eH72DRmAHAFC/3QfWGQMWC7Xq96oArDcJBrA5R5A2AMEPAVgEkXUAG5v3b17lQOI/zQABAC0AA4eP35cQgkgHYD0D8IKwAg6dn5UAViumzwDENEaIDoH5BbAX+ydu4sTURjFnfgIKCthCx/IWoggaCdoIYidjwX/hIFhCGEkTpEpYkgkmRUdwRSLpFgINoaExcYg7C7EiMpaGHQKG8E6jWwjRPIHeO43N5nRGJPRoEn8fuO7sjlnzveYe5lZpG8AS2QAwgF+2gcAIzsAVAEUCitODmNAWgO6dOlSvW74m4DZB3c0M9FrAcxoApBdQOkAQIof8uc1AGbGGDAA4QAHlV2DjLhWIHI1Xa6hAsgUVjI5Ta+XMo5lWfCAVUQAwwsAWe3+LcOrAGbXAIKrQOCAj5A/dwCZmcI3AOoBkAMs/WwfYFSkPVP2KoDPhZUVx16tO26nUclk8ms52xAZQOhfjd9JJrwAAJKzaQBK8FsAsgB6BFGWPzNriHdZ0AB8BwjnAddQATRRAXwuVFYqpum28ecMyOct2zZoBCAMII4bwaUB3Lo1s4cCB74DhuxJ+/6HgGAXNwCYGUEaAPUASf8XfQcIwb6WVwF8RgK47X5qxO6tZDzcDHoC1AHM6tp91RQGoIH4zBqAIg8BIQ+gCamEzwJhZg7vc2DfAAiMAnbvCgNagP0KoON2uu+fVSpeABAOkE8UNdECVJN3c9C/bAHMrAEQioeQvfco3PlnZpEfDeCiKALCOoBy1ZsBVIT+u7Ebt7EOUCD958kCzKKWFQGA1oB7LYBbM3smoFA6fniaZ+kzs4yiBA1A1gBhi4C9+2kL6PbK7U5np3ZjRei/kJEOQDFgW8VxIPdttAD7LYBb8Vk1gD5c7DMzDyJAwAAgfy8ChHIAtADpQ6BGp32sFnuGfWAyAM8CIH83k7Fs/S7OAs0Z/TWgZHyGSwCGmRNEBJBTgHN+DbAU5lbwCCoAHAbWXe+8LtferzfIADwHcOn97+J3R32iJQxBrwXABsAw/x5EAFoFDiYAEQHGbwOcSafTzS4OA2qXy7H1RsAACMjfzTsZZ0MlA7B7FQAbAMNMARQBpAFcgAWEjQBUAezsQP/pcuyx0L80gIKn/zyAA+Qd2zb6FQAMYGMWPwdmmHkDRcCBgQSwJCKAMn4F0O2+bqfTsfVnjdt9A/AtAPp3nLyl2mQAVAEkZ/NQUIaZO8QFAOgCBnoAp+h0kH2KMuYMABVAu11O15D/oX9pANC/W4D8YQGOZeJxzKLdrwCS2nJ0F8Mw/x4RAXpjgAs9A6CDgsffAoL+y+srQv3SAICUv+uY5rZpmpaVKNp6rwLQlvl2cIaZCuAAVAP06BlARBmzBVDrIgbsQP5EBRQ8MigDLJL/tpWwqkZRbgEl49oJNgCGmQpQBBzyDeBUPwGMEwH2XYUBvH2VFgWAJ/8V0r+sAUT8B9Z2TrUtq6qmvACQimtHeYuGYaYDLwKck0gDGK8LgCHg/k3ov9xdpwEAUagUJI54/VsJ8eZPlKyqvbGhJWkIWJyDRUCGmROEA/S+BwY9A4goY7QAWpv7aRNArgAE9S+6f6gA7I1UPG44jlXNaRupWyCuFXkKyDBTgyKKgHPEdwYw+kbQ1qty2jOAZ4EIADKOmXBcJ1eE/IFhwQtMQ3spZgAwAJ4CMsz0QG0AUj/p3zOA0REgcm1/GtTS5Rvrcgro6T+Ttyy3cdsqplJxQktUq6aZ0JN3RAtA5Skgw0wRvUbgjwagjGgBkv7LMICubwDQf6Wxg+1At/gS8peopjCAehb6x19OcA+QYaYIOQuU+h/PAKJX0/tb+783gAqpv5w+9mZ7I4nXv49OBmBkk5gBqNwDZJipoucAJykAjGMAkctpzABetVAClMvvyAAwBRTqb739WEyS0FU7ocUluao4Flx/9BL/zJ8CMcx0QQ4g9T+WARzZTJMDvEqDd2gCNhrdnWPp/W8/vkjeRaPPTlglYPhFACJAbjV7q2hwD5Bhpg1yAD8AeAag/DoAgHJrsyXKgGPHylgIlupXDdPJg1KpWlXjEoNqAD2Z1M9yD5Bhpg3hAEtS/6MNYHHT03+5vKe7eQy0WpvPXyTx6jeqee9UcKckDICKADkJEDXAw+TkFoEVPHwSN8NMBPo0WAYA3wBGBIBarbZn3bTwtofS1VzVyRTkmYDkANVABFARAYzVbCp1dDKHc+MBfCI3w0zOAUAvAPzKABZbPf3vaTbX67gQsG4kSoWKPBEwkACquXgPowoD0LWXh/9E+nQ1j08E8OG8DDOxA4ICV10PDwDXZQAQ+m82zBLIZwpEhpAJ4LsIoJlmztCzqcN/eC8foBv5+Eo+hpkkChwgeNX18ADwKk1QAIit1D0DyED9PfIu6d/CBmA93sM2E2QAf34zP5AewA7AMJN0gL0Lo6+69jsAzVgs9qVeWivlYQB0EtiPCcA09X4EMOpoAoS9FKCvftL+kiRwLT8XAQwzIRQoTV52O1xU0eN+BRCLbXVMGAASgI+b95uApulvA6mqYeja0VDqD8p/CZwULAFyAI4ADDNJFKhtlKaOyBYgGcDWVqdOBpDvy59KAGEAMgIYcSK1odkwgOzRsF0/yJ/0L9V/iiwgOK+IcAJgmMndGhwBw/Wv9FuA3xtAPtABkAnAEhGgXqciYCOu6vqqoesnlPDvf+/1D/ETgZVFMgB2AIaZFNAc+MV4feFtwAC2trZcaQCgHwGCCQAOoKZeQv6S5Ui48t9//UP/vgMEIgDXAAwzMaClXwrqyP7AEsBWrOkaa2syAggHEL+KBODAAaxSFeRsVdN0QVYHGwsh5B/U/ylAp5aAvgFwBGCYCUPyxzNkCaAcMIBYs+3U62QAAPKXPQDhADQGMHO2bRurnvyJrwth9A8DCOqfCEYAaQCsf4aZFBDT8ACwsFnu6R8GsKebqzu5YAKQawCCkmXads40TfT++thnF8b9P3yvf//s4nOBCCCHllwCMMxf4cgOGUCNAgCuBXFWS1auvkYGECDvWNu4FNy0EALoKAAPtXjiSCTs+N8PAJJBA+BPAhjmbxC93nrV6iWArXa36a5m10oJKL2nf9d1LGsbmJbj4I9kADk4gGEXlw8vRsLP/4MBYDAB7OUEwDATRxnaAtzf2nz1Spz7127v1N4n1lazhpGzHEuwTeAPjoNIQAZgwgCAoS4fXYyGmEUMCQCDCYDHAAzzl4iKJYAywv9Ot9ttb+3Zs44ZgK5pWT1hWWIBABR63wMCiwygbtjLR49Ewy0ADU0AiADcA2CYf8HiG2EAaP4RzXfNNgygntWyWU3TDN0UV4I4sAA343r6RyMwpwbVH6oDGDSAc98lAF4EYJi/z2FR/4vu3xbxrtkRWwCGBgsgDzArHddyCwU0Aghr+4Of/MMawLAEwFMAhvkXyKOAarGmeLAH/C7Wqa9RBKAHFuB0CgLXJfG/WD48oP6QM4ADQf0PlgD8MQDD/DWiy3QbWE0kAPGzG3OFAehC+/Q8TED84NOn0x8Q/Bciv9V/HDoEGEwAPARgmL9G5MiRy9evbx6riSGg2ATGFHCtTgkAP1SUAdvnz58+/fTp8onDEP9vM7wHSPxQAfCBAAzz11Cii3CBt809YhVwz5c1Qs8KNO3rzZtXTuDNH1X+aBFxoAfIAYBhpodIdPHwZWSB85cvL+v2ixcvllOCjaOHjywOf/OHPwDwABnAySE9wAPcAmCYf4YSiUJ70cXF6MJCdGFpaSG6b9dIwk8Bl34wgFMcABhmflGCQ4CfLQLyDIBh5hnlZz2AUxwAGOY/QMGPwT0ggbcDwPpnmLnmZ4uAQIif3/8MM/cMfAsEByD8w4B8/fP9oAwzVyg/HAfSjwD4eTn4/ufXP8PMIT9LAJeF+r97/fMngAwzjyiDc0CAlz+//RnmP+Bbe3eQAjEIQwG0X+jc/8gTHQuF2XXZvKce4aNISPI/EHCGX/rh/XIk9xdAqeRX9n38QwvJuCqBtlPnD+jh6gdQzukzDWPAoYX9CXgXjf+hh9T+GWtth4ofaCHrZHH3QzsSDwAAAAAAAAAAAAAAAAAAAADAM19MZ8huUBUyPAAAAABJRU5ErkJggg==')",
		"url('grayscale.png')",
		"url('ink.png')"];		
		elf.style.backgroundImage = elfArray[0];
		grayscaleElf.style.backgroundImage = elfArray[1];
		ink.style.backgroundImage = elfArray[2];
		
		var sparkArray =[
							'spark1.png',
							'spark2.png',
							'spark3.png',
							'spark4.png',
							'spark5.png',
							'spark6.png',
							'spark7.png',
							'spark8.png',
							'spark9.png'
						];	
				
			for(i=0; i<9; i++)
		{	 
			if(i < 9)
			{
				var sparkImage = document.createElement("IMG");
				sparkImage.setAttribute("src", sparkArray[i]);	
				sparkImage.setAttribute("class","spark");
				spark.appendChild(sparkImage);
			}
		}
		
		var DontGiveUpFontArray =[
							'f1.png',
							'f2.png',
							'f3.png',
							'f4.png',
							'f5.png',
							'f6.png',
							'f7.png',
							'f8.png',
							'f9.png',
							'f10.png',
							'f11.png',
							'f12.png',
							'f13.png',
							'f14.png',
							'f15.png'
						];	

			for(i=0; i<15; i++)
		{	 
			if(i < 15)
			{
				var dontGiveUpFontImage = document.createElement("IMG");
				dontGiveUpFontImage.setAttribute("src", DontGiveUpFontArray[i]);	
				dontGiveUpFontImage.setAttribute("class","DontGiveUpFont");
				dGUFont.appendChild(dontGiveUpFontImage);
			}
		}
		
		var starArray =[
							'S1.png',
							'S2.png',
							'S3.png',
							'S4.png',
							'S5.png',
							'S6.png',
							'S7.png',
							'S8.png',
							'S9.png',
							'S10.png',
							'S11.png',
							'S12.png',
							'S13.png',
							'S14.png',
							'S15.png',
							'S16.png',
							'S17.png',
							'S18.png',
							'S19.png',
							'S20.png'
						];	

			for(i=0; i<20; i++)
		{	 
			if(i < 20)
			{
				var starImage = document.createElement("IMG");
				starImage.setAttribute("src", starArray[i]);	
				starImage.setAttribute("class","winStar");
				winStar.appendChild(starImage);
			}
		}
	}

	var renderdgu;
	function dguAnimation(){
		var myIndex = 0;	
		var dgu = document.getElementsByClassName("DontGiveUpFont");				
		loopdgu();
		function loopdgu(){
			var i;
			for (i=0;i<dgu.length;i++)
			{
				dgu[i].style.display="none";
			}
			myIndex++;
			if (myIndex > dgu.length){}
			dgu[myIndex-1].style.display = "block";
			renderdgu = setTimeout(loopdgu,50);			
			
			if (myIndex === 14){
				dgu[14].style.display = "block";
				clearTimeout(renderdgu);			
			}			
		}
	} 
	
	var starTime = 0;
	function starCount(timestamp){
		if (150 > starTime){
			starTime ++;
			starDetect = requestAnimationFrame(starCount);
		}
		if (starTime === 150){
			console.log(starTime);
			document.getElementById("winStar").style.display="block";
			starAnimation();
			cancelAnimationFrame(starDetect);
		}
	}
	var renderStar;
	var star = document.getElementsByClassName("winStar");	
	function starAnimation(){
		var myIndex = 0;	
		var star = document.getElementsByClassName("winStar");				
		loopStar();
		function loopStar(){
			var i;
			for (i=0;i<star.length;i++)
			{
				star[i].style.display="none";
			}
			myIndex++;
			if (myIndex > star.length){}
			star[myIndex-1].style.display = "block";
			renderStar= setTimeout(loopStar,50);			
			
			if (myIndex === 19){
				star[19].style.display = "block";
				clearTimeout(renderStar);			
			}			
		}
	} 
	
	var renderSpark;
	function sparkAnimation(){
		var myIndex = 0;	
		var min = 0;
		var max = 360;
		var random = Math.floor(Math.random() * (max - min + 1)) + min;
		sparkBox.style.transform ="rotate("+random+"deg)";
		var spark = document.getElementsByClassName("spark");				
		loopSpark();
		function loopSpark(){
			var i;
			for (i=0;i<spark.length;i++)
			{
				spark[i].style.display="none";
			}
			myIndex++;
			if (myIndex > spark.length){}
			spark[myIndex-1].style.display = "block";
			renderSpark = setTimeout(loopSpark,50);			
			
			if (myIndex === 9){
				sparkBox.style.display = "none";
				clearTimeout(renderSpark);			
			}	
			
		}
	} 
	
	function begin(){
		elf.style.WebkitAnimationName = "elfRemove";
		elf.style.MozAnimationName = "elfRemove";
		elf.style.animationName = "elfRemove";
		
		elf.style.WebkitanimationDuration = "1s";
		elf.style.MozanimationDuration = "1s";
		elf.style.animationDuration = "1s";
		
		elfEffect.style.WebkitAnimationName = "elfEffectRemove";
		elfEffect.style.MozAnimationName = "elfEffectRemove";
		elfEffect.style.animationName = "elfEffectRemove";	
		
		elfEffect.style.WebkitanimationDuration = "1s";
		elfEffect.style.MozanimationDuration = "1s";
		elfEffect.style.animationDuration = "1s";
		
		gameContainerBg.style.AnimationPlayState="running";
		gameContainerBg.style.MozAnimationPlayState="running";
		gameContainerBg.style.WebkitAnimationPlayState="running";
	
		gameContainerBg.style.WebkitanimationDuration = "1s";
		gameContainerBg.style.MozanimationDuration = "1s";
		gameContainerBg.style.animationDuration = "1s";
	
		startBtn.style.WebkitAnimationName = "startBtnRemove";
		startBtn.style.MozAnimationName = "startBtnRemove";
		startBtn.style.animationName = "startBtnRemove";

		startBtn.style.WebkitanimationDuration = "1s";
		startBtn.style.MozanimationDuration = "1s";
		startBtn.style.animationDuration = "1s";
		
		glowLeft.style.WebkitAnimationName = "glowLeftRemove";
		glowLeft.style.MozAnimationName = "glowLeftRemove";
		glowLeft.style.animationName = "glowLeftRemove";
		
		glowLeft.style.WebkitanimationDuration = "1s";
		glowLeft.style.MozanimationDuration = "1s";
		glowLeft.style.animationDuration = "1s";
		
		glowRight.style.WebkitAnimationName = "glowRightRemove";
		glowRight.style.MozAnimationName = "glowRightRemove";
		glowRight.style.animationName = "glowRightRemove";
		
		glowRight.style.WebkitanimationDuration = "1s";
		glowRight.style.MozanimationDuration = "1s";
		glowRight.style.animationDuration = "1s";
		
		font.style.WebkitAnimationName = "fontRemove";
		font.style.MozAnimationName = "fontRemove";
		font.style.animationName = "fontRemove";
		
		font.style.WebkitanimationDuration = "1s";
		font.style.MozanimationDuration = "1s";
		font.style.animationDuration = "1s";
		
		arrow.style.display = "none";	
		
		countDisplay.style.AnimationPlayState="running";
		countDisplay.style.MozAnimationPlayState="running";
		countDisplay.style.WebkitAnimationPlayState="running";
		
		heart.style.AnimationPlayState="running";
		heart.style.MozAnimationPlayState="running";
		heart.style.WebkitAnimationPlayState="running";
		
		profile.style.AnimationPlayState="running";
		profile.style.MozAnimationPlayState="running";
		profile.style.WebkitAnimationPlayState="running";
		
		t1.style.AnimationPlayState="running";
		t1.style.MozAnimationPlayState="running";
		t1.style.WebkitAnimationPlayState="running";
		
		t2.style.AnimationPlayState="running";
		t2.style.MozAnimationPlayState="running";
		t2.style.WebkitAnimationPlayState="running";
		
		t3.style.AnimationPlayState="running";
		t3.style.MozAnimationPlayState="running";
		t3.style.WebkitAnimationPlayState="running";
		
		t4.style.AnimationPlayState="running";
		t4.style.MozAnimationPlayState="running";
		t4.style.WebkitAnimationPlayState="running";
		
		t5.style.AnimationPlayState="running";
		t5.style.MozAnimationPlayState="running";
		t5.style.WebkitAnimationPlayState="running";
			
		t6.style.AnimationPlayState="running";
		t6.style.MozAnimationPlayState="running";
		t6.style.WebkitAnimationPlayState="running";
		
		t7.style.AnimationPlayState="running";
		t7.style.MozAnimationPlayState="running";
		t7.style.WebkitAnimationPlayState="running";
		
		t8.style.AnimationPlayState="running";
		t8.style.MozAnimationPlayState="running";
		t8.style.WebkitAnimationPlayState="running";
		
		t9.style.AnimationPlayState="running";
		t9.style.MozAnimationPlayState="running";
		t9.style.WebkitAnimationPlayState="running";
		
		t10.style.AnimationPlayState="running";
		t10.style.MozAnimationPlayState="running";
		t10.style.WebkitAnimationPlayState="running";
		
		count0[0].style.AnimationPlayState="running";
		count0[0].style.MozAnimationPlayState="running";
		count0[0].style.WebkitAnimationPlayState="running";
		
		count1[0].style.AnimationPlayState="running";
		count1[0].style.MozAnimationPlayState="running";
		count1[0].style.WebkitAnimationPlayState="running";
		
		count2[0].style.AnimationPlayState="running";
		count2[0].style.MozAnimationPlayState="running";
		count2[0].style.WebkitAnimationPlayState="running";
		
		count3[0].style.AnimationPlayState="running";
		count3[0].style.MozAnimationPlayState="running";
		count3[0].style.WebkitAnimationPlayState="running";
		
		count4[0].style.AnimationPlayState="running";
		count4[0].style.MozAnimationPlayState="running";
		count4[0].style.WebkitAnimationPlayState="running";
		
		count5[0].style.AnimationPlayState="running";
		count5[0].style.MozAnimationPlayState="running";
		count5[0].style.WebkitAnimationPlayState="running";
		
		guide.style.AnimationPlayState="running";
		guide.style.MozAnimationPlayState="running";
		guide.style.WebkitAnimationPlayState="running";
		
		hiddenBox1.style.AnimationPlayState="running";
		hiddenBox1.style.MozAnimationPlayState="running";
		hiddenBox1.style.WebkitAnimationPlayState="running";
		
		attackBox1.style.AnimationPlayState="running";
		attackBox1.style.MozAnimationPlayState="running";
		attackBox1.style.WebkitAnimationPlayState="running";
		
		apes1.style.AnimationPlayState="running";
		apes1.style.MozAnimationPlayState="running";
		apes1.style.WebkitAnimationPlayState="running";
		
		light1.style.AnimationPlayState="running";
		light1.style.MozAnimationPlayState="running";
		light1.style.WebkitAnimationPlayState="running";
		
		hand.style.AnimationPlayState="running";
		hand.style.MozAnimationPlayState="running";
		hand.style.WebkitAnimationPlayState="running";
		
		shootBox1.style.AnimationPlayState="running";
		shootBox1.style.MozAnimationPlayState="running";
		shootBox1.style.WebkitAnimationPlayState="running";
	}
	
	var winTime = 0;
	function winCount(timestamp){
		if (30 > winTime){
			winTime ++;
			winDetect = requestAnimationFrame(winCount);
		}
		if (winTime === 30){
			winInterface();
			cancelAnimationFrame(winDetect);
		}
	}
	function winInterface(){
		
		winLayer.style.zIndex = "100";
			
		winLayer.style.animationPlayState="running";
		winLayerGlow.style.animationPlayState="running";
		winLayerGlowBox.style.animationPlayState="running";
		winLayerBG.style.animationPlayState="running";
		
		coin1.style.animationPlayState="running";
		coin2.style.animationPlayState="running";
		coin3.style.animationPlayState="running";
		coin4.style.animationPlayState="running";
		
		coin5.style.animationPlayState="running";
		coin6.style.animationPlayState="running";
		coin7.style.animationPlayState="running";
		coin8.style.animationPlayState="running";
		
		winLayer.style.mozAnimationPlayState="running";
		winLayerGlow.style.mozAnimationPlayState="running";
		winLayerGlowBox.style.mozAnimationPlayState="running";
		winLayerBG.style.mozAnimationPlayState="running";
		
		coin1.style.mozAnimationPlayState="running";
		coin2.style.mozAnimationPlayState="running";
		coin3.style.mozAnimationPlayState="running";
		coin4.style.mozAnimationPlayState="running";
		
		coin5.style.mozAnimationPlayState="running";
		coin6.style.mozAnimationPlayState="running";
		coin7.style.mozAnimationPlayState="running";
		coin8.style.mozAnimationPlayState="running";
		
		winLayer.style.webkitAnimationPlayState="running";
		winLayerGlow.style.webkitAnimationPlayState="running";
		winLayerGlowBox.style.webkitAnimationPlayState="running";
		winLayerBG.style.webkitAnimationPlayState="running";
		
		coin1.style.webkitAnimationPlayState="running";
		coin2.style.webkitAnimationPlayState="running";
		coin3.style.webkitAnimationPlayState="running";
		coin4.style.webkitAnimationPlayState="running";
		
		coin5.style.webkitAnimationPlayState="running";
		coin6.style.webkitAnimationPlayState="running";
		coin7.style.webkitAnimationPlayState="running";
		coin8.style.webkitAnimationPlayState="running";
		
		innerContainer.style.animationName = "winInnerContainer";
		innerContainer.style.animationDuration = "5s";
		innerContainer.style.animationIterationCount = "1";
		innerContainer.style.animationDelay = "1s";
		innerContainer.style.animationPlayState="running";
		
		profile.style.animationName = "profileHidden";
		profile.style.animationDuration = "2s";
		profile.style.animationDelay = "0s";
		
		heart.style.animationName = "profileHidden";
		heart.style.animationDuration = "2s";
		heart.style.animationDelay = "0s";
		
		reward1.style.left = "52%";
		reward1.style.top = "84%";
		reward2.style.left = "35%";
		reward2.style.top = "84%";
		reward3.style.left = "90%";
		reward3.style.top = "79%";
		reward4.style.left = "37%";
		reward4.style.top = "73%";
		reward5.style.left = "55%";
		reward5.style.top = "67%";
		reward6.style.left = "40%";
		reward6.style.top = "73%";
		reward7.style.left = "68%";
		reward7.style.top = "82%";
		reward8.style.left = "75%";
		reward8.style.top = "81%";
		
		reward1.style.animationName = "profileHidden";
		reward2.style.animationName = "profileHidden";
		reward3.style.animationName = "profileHidden";
		reward4.style.animationName = "profileHidden";
		reward5.style.animationName = "profileHidden";
		reward6.style.animationName = "profileHidden";
		reward7.style.animationName = "profileHidden";
		reward8.style.animationName = "profileHidden";
		
		reward1.style.animationDuration = "5s";
		reward2.style.animationDuration = "5s";
		reward3.style.animationDuration = "5s";
		reward4.style.animationDuration = "5s";
		reward5.style.animationDuration = "5s";
		reward6.style.animationDuration = "5s";
		reward7.style.animationDuration = "5s";
		reward8.style.animationDuration = "5s";
		
		reward1.style.animationDelay = "0s";
		reward2.style.animationDelay = "0s";
		reward3.style.animationDelay = "0s";
		reward4.style.animationDelay = "0s";
		reward5.style.animationDelay = "0s";
		reward6.style.animationDelay = "0s";
		reward7.style.animationDelay = "0s";
		reward8.style.animationDelay = "0s";
		
		reward1.style.mozAnimationName = "profileHidden";
		reward2.style.mozAnimationName = "profileHidden";
		reward3.style.mozAnimationName = "profileHidden";
		reward4.style.mozAnimationName = "profileHidden";
		reward5.style.mozAnimationName = "profileHidden";
		reward6.style.mozAnimationName = "profileHidden";
		reward7.style.mozAnimationName = "profileHidden";
		reward8.style.mozAnimationName = "profileHidden";
		
		reward1.style.mozAnimationDuration = "5s";
		reward2.style.mozAnimationDuration = "5s";
		reward3.style.mozAnimationDuration = "5s";
		reward4.style.mozAnimationDuration = "5s";
		reward5.style.mozAnimationDuration = "5s";
		reward6.style.mozAnimationDuration = "5s";
		reward7.style.mozAnimationDuration = "5s";
		reward8.style.mozAnimationDuration = "5s";
		
		reward1.style.mozAnimationDelay = "0s";
		reward2.style.mozAnimationDelay = "0s";
		reward3.style.mozAnimationDelay = "0s";
		reward4.style.mozAnimationDelay = "0s";
		reward5.style.mozAnimationDelay = "0s";
		reward6.style.mozAnimationDelay = "0s";
		reward7.style.mozAnimationDelay = "0s";
		reward8.style.mozAnimationDelay = "0s";
		
		reward1.style.webkitAnimationName = "profileHidden";
		reward2.style.webkitAnimationName = "profileHidden";
		reward3.style.webkitAnimationName = "profileHidden";
		reward4.style.webkitAnimationName = "profileHidden";
		reward5.style.webkitAnimationName = "profileHidden";
		reward6.style.webkitAnimationName = "profileHidden";
		reward7.style.webkitAnimationName = "profileHidden";
		reward8.style.webkitAnimationName = "profileHidden";
		
		reward1.style.webkitAnimationDuration = "5s";
		reward2.style.webkitAnimationDuration = "5s";
		reward3.style.webkitAnimationDuration = "5s";
		reward4.style.webkitAnimationDuration = "5s";
		reward5.style.webkitAnimationDuration = "5s";
		reward6.style.webkitAnimationDuration = "5s";
		reward7.style.webkitAnimationDuration = "5s";
		reward8.style.webkitAnimationDuration = "5s";
		
		reward1.style.webkitAnimationDelay = "0s";
		reward2.style.webkitAnimationDelay = "0s";
		reward3.style.webkitAnimationDelay = "0s";
		reward4.style.webkitAnimationDelay = "0s";
		reward5.style.webkitAnimationDelay = "0s";
		reward6.style.webkitAnimationDelay = "0s";
		reward7.style.webkitAnimationDelay = "0s";
		reward8.style.webkitAnimationDelay = "0s";
		
		chest1.style.animationPlayState = "running";
		chest2.style.animationPlayState = "running";
		bow.style.animationPlayState = "running";
		bowGlowLeft.style.animationPlayState = "running";
		bowGlowLeft2.style.animationPlayState = "running";
		bowGlowMiddle.style.animationPlayState = "running";
		bowGlowMiddle2.style.animationPlayState = "running";
		bowGlowRight.style.animationPlayState = "running";
		bowGlowRight2.style.animationPlayState = "running";
		winButton.style.animationPlayState = "running";
		
		chest1.style.mozAnimationPlayState = "running";
		chest2.style.mozAnimationPlayState = "running";
		bow.style.mozAnimationPlayState = "running";
		bowGlowLeft.style.mozAnimationPlayState = "running";
		bowGlowLeft2.style.mozAnimationPlayState = "running";
		bowGlowMiddle.style.mozAnimationPlayState = "running";
		bowGlowMiddle2.style.mozAnimationPlayState = "running";
		bowGlowRight.style.mozAnimationPlayState = "running";
		bowGlowRight2.style.mozAnimationPlayState = "running";
		winButton.style.mozAnimationPlayState = "running";
		
		chest1.style.webkitAnimationPlayState = "running";
		chest2.style.webkitAnimationPlayState = "running";
		bow.style.webkitAnimationPlayState = "running";
		bowGlowLeft.style.webkitAnimationPlayState = "running";
		bowGlowLeft2.style.webkitAnimationPlayState = "running";
		bowGlowMiddle.style.webkitAnimationPlayState = "running";
		bowGlowMiddle2.style.webkitAnimationPlayState = "running";
		bowGlowRight.style.webkitAnimationPlayState = "running";
		bowGlowRight2.style.webkitAnimationPlayState = "running";
		winButton.style.webkitAnimationPlayState = "running";
		
		starDetect = requestAnimationFrame(starCount);
	}
	
	function loseInterface(){
		
		cancelAnimationFrame(detectAnimation);
		
		grayscaleElf.style.animationPlayState="running";
		grayscaleElf.style.mozAnimationPlayState="running";
		grayscaleElf.style.webkitAnimationPlayState="running";
		
		inkBox.style.animationPlayState="running";
		inkBox.style.mozAnimationPlayState="running";
		inkBox.style.webkitAnimationPlayState="running";
		
		inkBox.style.animationPlayState="running";
		inkBox.style.mozAnimationPlayState="running";
		inkBox.style.webkitAnimationPlayState="running";
		
		var non = "none";
		document.getElementById("DontGiveUpFont").style.display = non;

		doTimer(
			3000,20,function(steps){
									non = non - (1 / steps);
									document.getElementById("DontGiveUpFont").style.display = non;				
									},
						function(){
									document.getElementById("DontGiveUpFont").style.display = "block";										
									dguAnimation();
									heart.style.zIndex="-1";
								}						
			);
		
		loseLayer.style.animationPlayState="running";
		loseLayer.style.mozAnimationPlayState="running";
		loseLayer.style.webkitAnimationPlayState="running";
		
		loseLayerBG.style.animationPlayState="running";
		loseLayerBG.style.mozAnimationPlayState="running";
		loseLayerBG.style.webkitAnimationPlayState="running";
		
		againFontBG.style.animationPlayState="running";
		againFontBG.style.mozAnimationPlayState="running";
		againFontBG.style.webkitAnimationPlayState="running";
		
		arrow.style.display = "block";	
		arrow.style.zIndex="110";
		arrow.style.webkitAnimationName="arrow2";
		arrow.style.webkitAnimationDelay="6s";
		
	}
	
	//hiddenBox1
	function getHurt(){
			gameContainerBg.style.WebkitAnimationName = "getHurt";
			gameContainerBg.style.MozAnimationName = "getHurt";
			gameContainerBg.style.animationName = "getHurt";
			
			gameContainerBg.style.height ="100%";
			gameContainerBg.style.width ="103%";
			gameContainerBg.style.margin = "0% 0%";
			gameContainerBg.style.filter ="brightness(100%)";
			
			gameContainerBg.style.WebkitanimationDuration = "2s";
			gameContainerBg.style.MozanimationDuration = "2s";
			gameContainerBg.style.animationDuration= "2s";
			
			gameContainerBg.style.WebkitanimationDelay = "2.5s";
			gameContainerBg.style.MozanimationDelay = "2.5s";
			gameContainerBg.style.animationDelay = "2.5s";
			
			gameContainerBg.style.animationIterationCount = "3";
			gameContainerBg.style.MozAnimationIterationCount = "3";
			gameContainerBg.style.WebkitAnimationIterationCount = "3";
			
			innerContainer.style.AnimationPlayState="running";
			innerContainer.style.MozAnimationPlayState="running";
			innerContainer.style.WebkitAnimationPlayState="running";
			
			redLayer.style.AnimationPlayState="running";
			redLayer.style.MozAnimationPlayState="running";
			redLayer.style.WebkitAnimationPlayState="running";
	}
	
	//hiddenBox2，hiddenBox4
	function getHurt2(){
			gameContainerBg.style.webkitAnimationName = "getHurt2";
			gameContainerBg.style.mozAnimationName = "getHurt2";
			gameContainerBg.style.animationName = "getHurt2";
			
			gameContainerBg.style.height ="100%";
			gameContainerBg.style.width ="103%";
			gameContainerBg.style.margin = "0% 0%";
			gameContainerBg.style.filter ="brightness(100%)";
			
			gameContainerBg.style.webkitAnimationDuration = "2s";
			gameContainerBg.style.mozAnimationDuration = "2s";
			gameContainerBg.style.animationDuration= "2s";
			
			gameContainerBg.style.webkitAnimationDelay = "2.5s";
			gameContainerBg.style.mozAnimationDelay = "2.5s";
			gameContainerBg.style.animationDelay = "2.5s";
			
			gameContainerBg.style.animationIterationCount = "3";
			gameContainerBg.style.mozAnimationIterationCount = "3";
			gameContainerBg.style.webkitAnimationIterationCount = "3";
			
			innerContainer.style.webkitAnimationDuration = "2s";
			innerContainer.style.mozAnimationDuration = "2s";
			innerContainer.style.animationDuration= "2s";
			
			innerContainer.style.webkitAnimationDelay = "2.5s";
			innerContainer.style.mozAnimationDelay = "2.5s";
			innerContainer.style.animationDelay = "2.5s";
			
			innerContainer.style.webkitAnimationName = "innerContainer2";
			innerContainer.style.mozAnimationName = "innerContainer2";
			innerContainer.style.animationName = "innerContainer2";
			
			redLayer.style.webkitAnimationDuration = "2s";
			redLayer.style.mozAnimationDuration = "2s";
			redLayer.style.animationDuration= "2s";
			
			redLayer.style.webkitAnimationDelay = "2.5s";
			redLayer.style.mozAnimationDelay = "2.5s";
			redLayer.style.animationDelay = "2.5s";
			
			redLayer.style.webkitAnimationName = "redLayer2";
			redLayer.style.mozAnimationName = "redLayer2";
			redLayer.style.animationName = "redLayer2";
			
	}
	
	//attackBox3
	function getHurt3(){
			gameContainerBg.style.webkitAnimationName = "getHurt";
			gameContainerBg.style.mozAnimationName = "getHurt";
			gameContainerBg.style.animationName = "getHurt";
			
			gameContainerBg.style.height ="100%";
			gameContainerBg.style.width ="103%";
			gameContainerBg.style.margin = "0% 0%";
			gameContainerBg.style.filter ="brightness(100%)";
			
			gameContainerBg.style.webkitAnimationDuration = "2s";
			gameContainerBg.style.mozAnimationDuration = "2s";
			gameContainerBg.style.animationDuration= "2s";
			
			gameContainerBg.style.webkitAnimationDelay = "1.5s";
			gameContainerBg.style.mozAnimationDelay = "1.5s";
			gameContainerBg.style.animationDelay = "1.5s";
			
			gameContainerBg.style.animationIterationCount = "3";
			gameContainerBg.style.mozAnimationIterationCount = "3";
			gameContainerBg.style.webkitAnimationIterationCount = "3";
			
			innerContainer.style.webkitAnimationDuration = "2s";
			innerContainer.style.mozAnimationDuration = "2s";
			innerContainer.style.animationDuration= "2s";
			
			innerContainer.style.webkitAnimationDelay = "1.5s";
			innerContainer.style.mozAnimationDelay = "1.5s";
			innerContainer.style.animationDelay = "1.5s";
			
			innerContainer.style.webkitAnimationName = "innerContainer";
			innerContainer.style.mozAnimationName = "innerContainer";
			innerContainer.style.animationName = "innerContainer";
			
			redLayer.style.webkitAnimationDuration = "2s";
			redLayer.style.mozAnimationDuration = "2s";
			redLayer.style.animationDuration= "2s";
			
			redLayer.style.webkitAnimationDelay = "1.5s";
			redLayer.style.mozAnimationDelay = "1.5s";
			redLayer.style.animationDelay = "1.5s";
			
			redLayer.style.webkitAnimationName = "redLayer";
			redLayer.style.mozAnimationName = "redLayer";
			redLayer.style.animationName = "redLayer";
	}
	
	//attackBox5
	function getHurt5(){
			gameContainerBg.style.webkitAnimationName = "getHurt";
			gameContainerBg.style.mozAnimationName = "getHurt";
			gameContainerBg.style.animationName = "getHurt";
			
			gameContainerBg.style.height ="100%";
			gameContainerBg.style.width ="103%";
			gameContainerBg.style.margin = "0% 0%";
			gameContainerBg.style.filter ="brightness(100%)";
			
			gameContainerBg.style.webkitAnimationDuration = "2s";
			gameContainerBg.style.mozAnimationDuration = "2s";
			gameContainerBg.style.animationDuration= "2s";
			
			gameContainerBg.style.webkitAnimationDelay = "2s";
			gameContainerBg.style.mozAnimationDelay = "2s";
			gameContainerBg.style.animationDelay = "2s";
			
			gameContainerBg.style.animationIterationCount = "3";
			gameContainerBg.style.mozAnimationIterationCount = "3";
			gameContainerBg.style.webkitAnimationIterationCount = "3";
			
			innerContainer.style.webkitAnimationDuration = "2s";
			innerContainer.style.mozAnimationDuration = "2s";
			innerContainer.style.animationDuration= "2s";
			
			innerContainer.style.webkitAnimationDelay = "2s";
			innerContainer.style.mozAnimationDelay = "2s";
			innerContainer.style.animationDelay = "2s";
			
			innerContainer.style.webkitAnimationName = "innerContainer";
			innerContainer.style.mozAnimationName = "innerContainer";
			innerContainer.style.animationName = "innerContainer";
			
			redLayer.style.webkitAnimationDuration = "2s";
			redLayer.style.mozAnimationDuration = "2s";
			redLayer.style.animationDuration= "2s";
			
			redLayer.style.webkitAnimationDelay = "2s";
			redLayer.style.mozAnimationDelay = "2s";
			redLayer.style.animationDelay = "2s";
			
			redLayer.style.webkitAnimationName = "redLayer";
			redLayer.style.mozAnimationName = "redLayer";
			redLayer.style.animationName = "redLayer";
	}
	
	function getHurtMix(){
			gameContainerBg.style.webkitAnimationName = "getHurt2";
			gameContainerBg.style.mozAnimationName = "getHurt2";
			gameContainerBg.style.animationName = "getHurt2";
			
			gameContainerBg.style.height ="100%";
			gameContainerBg.style.width ="103%";
			gameContainerBg.style.margin = "0% 0%";
			gameContainerBg.style.filter ="brightness(100%)";
			
			gameContainerBg.style.webkitAnimationDuration = "2s";
			gameContainerBg.style.mozAnimationDuration = "2s";
			gameContainerBg.style.animationDuration= "2s";
			
			gameContainerBg.style.webkitAnimationDelay = "2s";
			gameContainerBg.style.mozAnimationDelay = "2s";
			gameContainerBg.style.animationDelay = "2s";
			
			gameContainerBg.style.animationIterationCount = "1";
			gameContainerBg.style.mozAnimationIterationCount = "1";
			gameContainerBg.style.webkitAnimationIterationCount = "1";
			
			innerContainer.style.webkitAnimationDuration = "2s";
			innerContainer.style.mozAnimationDuration = "2s";
			innerContainer.style.animationDuration= "2s";
			
			innerContainer.style.webkitAnimationDelay = "2s";
			innerContainer.style.mozAnimationDelay = "2s";
			innerContainer.style.animationDelay = "2s";
			
			innerContainer.style.webkitAnimationName = "innerContainer2";
			innerContainer.style.mozAnimationName = "innerContainer2";
			innerContainer.style.animationName = "innerContainer2";
			
			innerContainer.style.webkitAnimationDuration = "2s";
			innerContainer.style.mozAnimationDuration = "2s";
			innerContainer.style.animationDuration= "2s";
			
			innerContainer.style.webkitAnimationDelay = "2s";
			innerContainer.style.mozAnimationDelay = "2s";
			innerContainer.style.animationDelay = "2s";
			
			innerContainer.style.animationIterationCount = "1";
			innerContainer.style.mozAnimationIterationCount = "1";
			innerContainer.style.webkitAnimationIterationCount = "1";
			
			redLayer.style.webkitAnimationName = "redLayerMix";
			redLayer.style.mozAnimationName = "redLayerMix";
			redLayer.style.animationName = "redLayerMix";
			
			redLayer.style.webkitAnimationDuration = "2s";
			redLayer.style.mozAnimationDuration = "2s";
			redLayer.style.animationDuration= "2s";
			
			redLayer.style.webkitAnimationDelay = "2s";
			redLayer.style.mozAnimationDelay = "2s";
			redLayer.style.animationDelay = "2s";
			
			redLayer.style.animationIterationCount = "1";
			redLayer.style.mozAnimationIterationCount = "1";
			redLayer.style.webkitAnimationIterationCount = "1";
			
			var non = "redLayerMix";

			doTimer(
			2500,20,function(steps){
									non = non - (1 / steps);
									document.getElementById("redLayer").style.animationName = non;				
									},
						function(){

									innerContainer.style.webkitAnimationName = "innerContainer";
									innerContainer.style.mozAnimationName = "innerContainer";
									innerContainer.style.animationName = "innerContainer";

									innerContainer.style.webkitAnimationDuration = "1.5s";
									innerContainer.style.mozAnimationDuration = "1.5s";
									innerContainer.style.animationDuration= "1.5s";

									innerContainer.style.webkitAnimationDelay = "0s";
									innerContainer.style.mozAnimationDelay = "0s";
									innerContainer.style.animationDelay = "0s";
									
									innerContainer.style.animationIterationCount = "2";
									innerContainer.style.mozAnimationIterationCount = "2";
									innerContainer.style.webkitAnimationIterationCount = "2";
									
									redLayer.style.webkitAnimationName = "redLayer";
									redLayer.style.mozAnimationName = "redLayer";
									redLayer.style.animationName = "redLayer";

									redLayer.style.webkitAnimationDuration = "1.5s";
									redLayer.style.mozAnimationDuration = "1.5s";
									redLayer.style.animationDuration= "1.5s";

									redLayer.style.webkitAnimationDelay = "0s";
									redLayer.style.mozAnimationDelay = "0s";
									redLayer.style.animationDelay = "0s";

									redLayer.style.animationIterationCount = "2";
									redLayer.style.mozAnimationIterationCount = "2";
									redLayer.style.webkitAnimationIterationCount = "2";
								}						
			);
	}
	
	function stopHurt(){
		
		gameContainerBg.style.webkitAnimationName = "none";
		gameContainerBg.style.mozAnimationName = "none";
		gameContainerBg.style.animationName = "none";
		
		innerContainer.style.webkitAnimationName = "none";
		innerContainer.style.mozAnimationName = "none";
		innerContainer.style.animationName = "none";
		
		redLayer.style.webkitAnimationName = "none";
		redLayer.style.mozAnimationName = "none";
		redLayer.style.animationName = "none";

		redLayer.style.zIndex = "-30";
		
		heart2[0].style.animationPlayState="paused";
		heart1[0].style.animationPlayState="paused";
		heart0[0].style.animationPlayState="paused";
		
		heart2[0].style.mozAnimationPlayState="paused";
		heart1[0].style.mozAnimationPlayState="paused";
		heart0[0].style.mozAnimationPlayState="paused";
		
		heart2[0].style.webkitAnimationPlayState="paused";
		heart1[0].style.webkitAnimationPlayState="paused";
		heart0[0].style.webkitAnimationPlayState="paused";
		
	}
	
	function stopHurt2(){
		
		gameContainerBg.style.webkitAnimationName = "none";
		gameContainerBg.style.mozAnimationName = "none";
		gameContainerBg.style.animationName = "none";
		
		innerContainer.style.webkitAnimationName = "none";
		innerContainer.style.mozAnimationName = "none";
		innerContainer.style.animationName = "none";
		
		redLayer.style.webkitAnimationName = "none";
		redLayer.style.mozAnimationName = "none";
		redLayer.style.animationName = "none";

		redLayer.style.zIndex = "-30";
		
		heart2[0].style.animationPlayState="paused";
		heart1[0].style.animationPlayState="paused";
		heart0[0].style.animationPlayState="paused";
		
		heart2[0].style.mozAnimationPlayState="paused";
		heart1[0].style.mozAnimationPlayState="paused";
		heart0[0].style.mozAnimationPlayState="paused";
		
		heart2[0].style.webkitAnimationPlayState="paused";
		heart1[0].style.webkitAnimationPlayState="paused";
		heart0[0].style.webkitAnimationPlayState="paused";
		
		redLayer.style.animationPlayState="paused";
		redLayer.style.mozAnimationPlayState="paused";
		redLayer.style.webkitAnimationPlayState="paused";
		
		innerContainer.style.animationPlayState = "paused";
		innerContainer.style.mozAnimationPlayState = "paused";
		innerContainer.style.webkitAnimationPlayState = "paused";
		
	}

	var element2,style2,element0,style0,element1,style1;
	
	//attackBox2
	function life2(){
			element2 = document.querySelector('.heart2');
			style2 = getComputedStyle(element2).filter;
			element0 = document.querySelector('.heart0');
			style0 = getComputedStyle(element0).filter;
			element1 = document.querySelector('.heart1');
			style1 = getComputedStyle(element1).filter;
			 
			if (style2 === "brightness(1)"){
				
				heart2[0].style.animationName="hearts2";
				heart2[0].style.mozAnimationName="hearts2";
				heart2[0].style.webkitAnimationName="hearts2";
				
				heart1[0].style.animationName="hearts2";
				heart1[0].style.mozAnimationName="hearts2";
				heart1[0].style.webkitAnimationName="hearts2";
				
				heart0[0].style.animationName="hearts2";
				heart0[0].style.mozAnimationName="hearts2";
				heart0[0].style.webkitAnimationName="hearts2";	
				
				heart2[0].style.animationPlayState="running";
				heart2[0].style.mozAnimationPlayState="running";
				heart2[0].style.webkitAnimationPlayState="running";
				
				heart1[0].style.animationPlayState="running";
				heart1[0].style.mozAnimationPlayState="running";
				heart1[0].style.webkitAnimationPlayState="running";
				
				heart0[0].style.animationPlayState="running";
				heart0[0].style.mozAnimationPlayState="running";
				heart0[0].style.webkitAnimationPlayState="running";	
				
				heart2[0].style.animationDelay="2.5s";
				heart2[0].style.mozAnimationDelay="2.5s";
				heart2[0].style.webkitAnimationDelay="2.5s";
				
				heart1[0].style.animationDelay="4.5s";
				heart1[0].style.mozAnimationDelay="4.5s";
				heart1[0].style.webkitAnimationDelay="4.5s";
				
				heart0[0].style.animationDelay="6.5s";
				heart0[0].style.mozAnimationDelay="6.5s";
				heart0[0].style.webkitAnimationDelay="6.5s";
				
			}
			else if (style1 === "brightness(1)"){			
			
				heart1[0].style.animationDelay="2.5s";
				heart1[0].style.mozAnimationDelay="2.5s";
				heart1[0].style.webkitAnimationDelay="2.5s";
				
				heart0[0].style.animationDelay="4.5s";
				heart0[0].style.mozAnimationDelay="4.5s";
				heart0[0].style.webkitAnimationDelay="4.5s";	
				
				heart1[0].style.animationName="hearts2";
				heart1[0].style.mozAnimationName="hearts2";
				heart1[0].style.webkitAnimationName="hearts2";
				
				heart0[0].style.animationName="hearts2";
				heart0[0].style.mozAnimationName="hearts2";
				heart0[0].style.webkitAnimationName="hearts2";	
				
				heart1[0].style.animationPlayState="running";
				heart1[0].style.mozAnimationPlayState="running";
				heart1[0].style.webkitAnimationPlayState="running";
				
				heart0[0].style.animationPlayState="running";
				heart0[0].style.mozAnimationPlayState="running";
				heart0[0].style.webkitAnimationPlayState="running";	
			}
			else if (style0 === "brightness(1)"){
				
				heart0[0].style.animationDelay="2.5s";
				heart0[0].style.mozAnimationDelay="2.5s";
				heart0[0].style.webkitAnimationDelay="2.5s";

				heart0[0].style.animationName="hearts2";
				heart0[0].style.mozAnimationName="hearts2";
				heart0[0].style.webkitAnimationName="hearts2";	
				
				heart0[0].style.animationPlayState="running";
				heart0[0].style.mozAnimationPlayState="running";
				heart0[0].style.webkitAnimationPlayState="running";	
			}
	}
	
	//attackBox3
	function life3(){
			element2 = document.querySelector('.heart2');
			style2 = getComputedStyle(element2).filter;
			element0 = document.querySelector('.heart0');
			style0 = getComputedStyle(element0).filter;
			element1 = document.querySelector('.heart1');
			style1 = getComputedStyle(element1).filter;
			 
			if (style2 === "brightness(1)"){
				
				heart2[0].style.animationName="hearts";
				heart2[0].style.mozAnimationName="hearts";
				heart2[0].style.webkitAnimationName="hearts";
				
				heart1[0].style.animationName="hearts";
				heart1[0].style.mozAnimationName="hearts";
				heart1[0].style.webkitAnimationName="hearts";
				
				heart0[0].style.animationName="hearts";
				heart0[0].style.mozAnimationName="hearts";
				heart0[0].style.webkitAnimationName="hearts";	
				
				heart2[0].style.animationPlayState="running";
				heart2[0].style.mozAnimationPlayState="running";
				heart2[0].style.webkitAnimationPlayState="running";
				
				heart1[0].style.animationPlayState="running";
				heart1[0].style.mozAnimationPlayState="running";
				heart1[0].style.webkitAnimationPlayState="running";
				
				heart0[0].style.animationPlayState="running";
				heart0[0].style.mozAnimationPlayState="running";
				heart0[0].style.webkitAnimationPlayState="running";	
				
				heart2[0].style.animationDelay="1.5s";
				heart2[0].style.mozAnimationDelay="1.5s";
				heart2[0].style.webkitAnimationDelay="1.5s";
				
				heart1[0].style.animationDelay="3.5s";
				heart1[0].style.mozAnimationDelay="3.5s";
				heart1[0].style.webkitAnimationDelay="3.5s";
				
				heart0[0].style.animationDelay="5.5s";
				heart0[0].style.mozAnimationDelay="5.5s";
				heart0[0].style.webkitAnimationDelay="5.5s";
				
			}
			else if (style1 === "brightness(1)"){			
			
				heart1[0].style.animationDelay="1.5s";
				heart1[0].style.mozAnimationDelay="1.5s";
				heart1[0].style.webkitAnimationDelay="1.5s";
				
				heart0[0].style.animationDelay="3.5s";
				heart0[0].style.mozAnimationDelay="3.5s";
				heart0[0].style.webkitAnimationDelay="3.5s";
				
				heart1[0].style.animationName="hearts";
				heart1[0].style.mozAnimationName="hearts";
				heart1[0].style.webkitAnimationName="hearts";
				
				heart0[0].style.animationName="hearts";
				heart0[0].style.mozAnimationName="hearts";
				heart0[0].style.webkitAnimationName="hearts";	
				
				heart1[0].style.animationPlayState="running";
				heart1[0].style.mozAnimationPlayState="running";
				heart1[0].style.webkitAnimationPlayState="running";
				
				heart0[0].style.animationPlayState="running";
				heart0[0].style.mozAnimationPlayState="running";
				heart0[0].style.webkitAnimationPlayState="running";	
			}
			else if (style0 === "brightness(1)"){
				
				heart0[0].style.animationDelay="1.5s";
				heart0[0].style.mozAnimationDelay="1.5s";
				heart0[0].style.webkitAnimationDelay="1.5s";

				heart0[0].style.animationName="hearts";
				heart0[0].style.mozAnimationName="hearts";
				heart0[0].style.webkitAnimationName="hearts";	
				
				heart0[0].style.animationPlayState="running";
				heart0[0].style.mozAnimationPlayState="running";
				heart0[0].style.webkitAnimationPlayState="running";	
			}
	}
	
	//attackBox4
	function life4(){
		element2 = document.querySelector('.heart2');
		style2 = getComputedStyle(element2).filter;
		element0 = document.querySelector('.heart0');
		style0 = getComputedStyle(element0).filter;
		element1 = document.querySelector('.heart1');
		style1 = getComputedStyle(element1).filter;
		 
		if (style2 === "brightness(1)"){
			
			heart2[0].style.animationName="hearts2";
			heart2[0].style.mozAnimationName="hearts2";
			heart2[0].style.webkitAnimationName="hearts2";
			
			heart1[0].style.animationName="hearts2";
			heart1[0].style.mozAnimationName="hearts2";
			heart1[0].style.webkitAnimationName="hearts2";
			
			heart0[0].style.animationName="hearts2";
			heart0[0].style.mozAnimationName="hearts2";
			heart0[0].style.webkitAnimationName="hearts2";	
			
			heart2[0].style.animationPlayState="running";
			heart2[0].style.mozAnimationPlayState="running";
			heart2[0].style.webkitAnimationPlayState="running";
			
			heart1[0].style.animationPlayState="running";
			heart1[0].style.mozAnimationPlayState="running";
			heart1[0].style.webkitAnimationPlayState="running";
			
			heart0[0].style.animationPlayState="running";
			heart0[0].style.mozAnimationPlayState="running";
			heart0[0].style.webkitAnimationPlayState="running";	
			
			heart2[0].style.animationDelay="1.5s";
			heart2[0].style.mozAnimationDelay="1.5s";
			heart2[0].style.webkitAnimationDelay="1.5s";
			
			heart1[0].style.animationDelay="3.5s";
			heart1[0].style.mozAnimationDelay="3.5s";
			heart1[0].style.webkitAnimationDelay="3.5s";
			
			heart0[0].style.animationDelay="5.5s";
			heart0[0].style.mozAnimationDelay="5.5s";
			heart0[0].style.webkitAnimationDelay="5.5s";
			
		}
		else if (style1 === "brightness(1)"){			
		
			heart1[0].style.animationDelay="1.5s";
			heart1[0].style.mozAnimationDelay="1.5s";
			heart1[0].style.webkitAnimationDelay="1.5s";
			
			heart0[0].style.animationDelay="3.5s";
			heart0[0].style.mozAnimationDelay="3.5s";
			heart0[0].style.webkitAnimationDelay="3.5s";
			
			heart1[0].style.animationName="hearts2";
			heart1[0].style.mozAnimationName="hearts2";
			heart1[0].style.webkitAnimationName="hearts2";
			
			heart0[0].style.animationName="hearts2";
			heart0[0].style.mozAnimationName="hearts2";
			heart0[0].style.webkitAnimationName="hearts2";	
			
			heart1[0].style.animationPlayState="running";
			heart1[0].style.mozAnimationPlayState="running";
			heart1[0].style.webkitAnimationPlayState="running";
			
			heart0[0].style.animationPlayState="running";
			heart0[0].style.mozAnimationPlayState="running";
			heart0[0].style.webkitAnimationPlayState="running";	
		}
		else if (style0 === "brightness(1)"){
			
			heart0[0].style.animationDelay="1.5s";
			heart0[0].style.mozAnimationDelay="1.5s";
			heart0[0].style.webkitAnimationDelay="1.5s";

			heart0[0].style.animationName="hearts2";
			heart0[0].style.mozAnimationName="hearts2";
			heart0[0].style.webkitAnimationName="hearts2";	
			
			heart0[0].style.animationPlayState="running";
			heart0[0].style.mozAnimationPlayState="running";
			heart0[0].style.webkitAnimationPlayState="running";	
		}
	}
	
	//attackBox5
	function life5(){
		element2 = document.querySelector('.heart2');
		style2 = getComputedStyle(element2).filter;
		element0 = document.querySelector('.heart0');
		style0 = getComputedStyle(element0).filter;
		element1 = document.querySelector('.heart1');
		style1 = getComputedStyle(element1).filter;
		 
		if (style2 === "brightness(1)"){
			
			heart2[0].style.animationName="hearts";
			heart2[0].style.mozAnimationName="hearts";
			heart2[0].style.webkitAnimationName="hearts";
			
			heart1[0].style.animationName="hearts";
			heart1[0].style.mozAnimationName="hearts";
			heart1[0].style.webkitAnimationName="hearts";
			
			heart0[0].style.animationName="hearts";
			heart0[0].style.mozAnimationName="hearts";
			heart0[0].style.webkitAnimationName="hearts";	
			
			heart2[0].style.animationPlayState="running";
			heart2[0].style.mozAnimationPlayState="running";
			heart2[0].style.webkitAnimationPlayState="running";
			
			heart1[0].style.animationPlayState="running";
			heart1[0].style.mozAnimationPlayState="running";
			heart1[0].style.webkitAnimationPlayState="running";
			
			heart0[0].style.animationPlayState="running";
			heart0[0].style.mozAnimationPlayState="running";
			heart0[0].style.webkitAnimationPlayState="running";	
			
			heart2[0].style.animationDelay="2s";
			heart2[0].style.mozAnimationDelay="2s";
			heart2[0].style.webkitAnimationDelay="2s";
			
			heart1[0].style.animationDelay="4s";
			heart1[0].style.mozAnimationDelay="4s";
			heart1[0].style.webkitAnimationDelay="4s";
			
			heart0[0].style.animationDelay="6s";
			heart0[0].style.mozAnimationDelay="6s";
			heart0[0].style.webkitAnimationDelay="6s";
			
		}
		else if (style1 === "brightness(1)"){			
		
			heart1[0].style.animationDelay="2s";
			heart1[0].style.mozAnimationDelay="2s";
			heart1[0].style.webkitAnimationDelay="2s";
			
			heart0[0].style.animationDelay="4s";
			heart0[0].style.mozAnimationDelay="4s";
			heart0[0].style.webkitAnimationDelay="4s";
			
			heart1[0].style.animationName="hearts";
			heart1[0].style.mozAnimationName="hearts";
			heart1[0].style.webkitAnimationName="hearts";
			
			heart0[0].style.animationName="hearts";
			heart0[0].style.mozAnimationName="hearts";
			heart0[0].style.webkitAnimationName="hearts";	
			
			heart1[0].style.animationPlayState="running";
			heart1[0].style.mozAnimationPlayState="running";
			heart1[0].style.webkitAnimationPlayState="running";
			
			heart0[0].style.animationPlayState="running";
			heart0[0].style.mozAnimationPlayState="running";
			heart0[0].style.webkitAnimationPlayState="running";	
		}
		else if (style0 === "brightness(1)"){
			
			heart0[0].style.animationDelay="2s";
			heart0[0].style.mozAnimationDelay="2s";
			heart0[0].style.webkitAnimationDelay="2s";

			heart0[0].style.animationName="hearts";
			heart0[0].style.mozAnimationName="hearts";
			heart0[0].style.webkitAnimationName="hearts";	
			
			heart0[0].style.animationPlayState="running";
			heart0[0].style.mozAnimationPlayState="running";
			heart0[0].style.webkitAnimationPlayState="running";	
		}
	}
	
	//attackBoxMissed
	function life6(){
		element2 = document.querySelector('.heart2');
		style2 = getComputedStyle(element2).filter;
		element0 = document.querySelector('.heart0');
		style0 = getComputedStyle(element0).filter;
		element1 = document.querySelector('.heart1');
		style1 = getComputedStyle(element1).filter;
		 getHurtMix();
		if (style2 === "brightness(1)"){
			
			heart2[0].style.animationName="hearts2";
			heart2[0].style.mozAnimationName="hearts2";
			heart2[0].style.webkitAnimationName="hearts2";
			
			heart1[0].style.animationName="hearts2";
			heart1[0].style.mozAnimationName="hearts2";
			heart1[0].style.webkitAnimationName="hearts2";
			
			heart0[0].style.animationName="hearts2";
			heart0[0].style.mozAnimationName="hearts2";
			heart0[0].style.webkitAnimationName="hearts2";	
			
			heart2[0].style.animationPlayState="running";
			heart2[0].style.mozAnimationPlayState="running";
			heart2[0].style.webkitAnimationPlayState="running";
			
			heart1[0].style.animationPlayState="running";
			heart1[0].style.mozAnimationPlayState="running";
			heart1[0].style.webkitAnimationPlayState="running";
			
			heart0[0].style.animationPlayState="running";
			heart0[0].style.mozAnimationPlayState="running";
			heart0[0].style.webkitAnimationPlayState="running";	
			
			heart2[0].style.animationDelay="2s";
			heart2[0].style.mozAnimationDelay="2s";
			heart2[0].style.webkitAnimationDelay="2s";
			
			heart1[0].style.animationDelay="2.5s";
			heart1[0].style.mozAnimationDelay="2.5s";
			heart1[0].style.webkitAnimationDelay="2.5s";
			
			heart0[0].style.animationDelay="4s";
			heart0[0].style.mozAnimationDelay="4s";
			heart0[0].style.webkitAnimationDelay="4s";
			
		}
		else if (style1 === "brightness(1)"){			
		
			heart1[0].style.animationDelay="2s";
			heart1[0].style.mozAnimationDelay="2s";
			heart1[0].style.webkitAnimationDelay="2s";
			
			heart0[0].style.animationDelay="2.5s";
			heart0[0].style.mozAnimationDelay="2.5s";
			heart0[0].style.webkitAnimationDelay="2.5s";
			
			heart1[0].style.animationName="hearts2";
			heart1[0].style.mozAnimationName="hearts2";
			heart1[0].style.webkitAnimationName="hearts2";
			
			heart0[0].style.animationName="hearts2";
			heart0[0].style.mozAnimationName="hearts2";
			heart0[0].style.webkitAnimationName="hearts2";	
			
			heart1[0].style.animationPlayState="running";
			heart1[0].style.mozAnimationPlayState="running";
			heart1[0].style.webkitAnimationPlayState="running";
			
			heart0[0].style.animationPlayState="running";
			heart0[0].style.mozAnimationPlayState="running";
			heart0[0].style.webkitAnimationPlayState="running";	
		}
		else if (style0 === "brightness(1)"){
			
			heart0[0].style.animationDelay="2s";
			heart0[0].style.mozAnimationDelay="2s";
			heart0[0].style.webkitAnimationDelay="2s";

			heart0[0].style.animationName="hearts2";
			heart0[0].style.mozAnimationName="hearts2";
			heart0[0].style.webkitAnimationName="hearts2";	
			
			heart0[0].style.animationPlayState="running";
			heart0[0].style.mozAnimationPlayState="running";
			heart0[0].style.webkitAnimationPlayState="running";	
		}
	}
	
	function lifeDetect(){
		element2 = document.querySelector('.heart2');
		style2 = getComputedStyle(element2).filter;
		element0 = document.querySelector('.heart0');
		style0 = getComputedStyle(element0).filter;
		element1 = document.querySelector('.heart1');
		style1 = getComputedStyle(element1).filter;
		detectAnimation = requestAnimationFrame(lifeDetect);
		if(style0 === "brightness(0.2)"){
			stopHurt();
			
			fire3.style.zIndex = "-30";
			fire3.style.display = "none";
			
			fire3.style.animationPlayState="paused";
			fire3.style.mozAnimationPlayState="paused";
			fire3.style.webkitAnimationPlayState="paused";
			
			light3.style.zIndex = "-30";
			light3.style.display = "none";
			
			light3.style.animationPlayState="paused";
			light3.style.mozAnimationPlayState="paused";
			light3.style.webkitAnimationPlayState="paused";
			
			loseInterface();

			attackBox2.style.zIndex="-30";
			attackBox3.style.zIndex="-30";
			attackBox4.style.zIndex="-30";
			attackBox5.style.zIndex="-30";
			attackBox6.style.zIndex="-30";
			attackBox7.style.zIndex="-30";
			// attackBox8.style.zIndex="-30";
			// attackBox9.style.zIndex="-30";
			// attackBox10.style.zIndex="-30";
			
			cancelAnimationFrame(detectAnimation);
		}
	}
	
	var iconNumber = 0;
	function mouseDown(e) {
		var data = e.target.id;
		console.log(data);
		begin();		

		if(data === "againFont"){
			window.location.reload();
		}
		if (data === "attackBox1"){
				
			sparkAnimation();
			
			attackBox1.style.zIndex = "-30";
			
			shootBox1.style.animationPlayState="running";
			shootBox1.style.mozAnimationPlayState="running";
			shootBox1.style.webkitAnimationPlayState="running";
			
			shoot.style.animationPlayState="running";
			shoot.style.mozAnimationPlayState="running";
			shoot.style.webkitAnimationPlayState="running";
			
			apes1.style.WebkitAnimationName = "killApes1";
			apes1.style.MozAnimationName = "killApes1";
			apes1.style.animationName = "killApes1";
			
			apes1.style.WebkitanimationDelay = "0s";
			apes1.style.MozanimationDelay = "0s";
			apes1.style.animationDelay = "0s";
			
			guide.style.display = "none";
			guide.style.zIndex = "-30";
			
			light1.style.display = "none";
			light1.style.zIndex = "-30";
			
			hand.style.WebkitAnimationName = "handRemove";
			hand.style.MozAnimationName = "handRemove";
			hand.style.animationName = "handRemove";
			
			hand.style.WebkitanimationDelay = "0s";
			hand.style.MozanimationDelay = "0s";
			hand.style.animationDelay = "0s";
			
			reward1.style.display = "block";
			reward1.style.animationPlayState="running";
			reward1.style.mozAnimationPlayState="running";
			reward1.style.webkitAnimationPlayState="running";
			
			count5[0].style.WebkitAnimationName = "removeIcon";
			count5[0].style.MozAnimationName = "removeIcon";
			count5[0].style.animationName = "removeIcon";
			
			count5[0].style.WebkitanimationDelay = "0s";
			count5[0].style.MozanimationDelay = "0s";
			count5[0].style.animationDelay = "0s";
			
			hiddenBox2.style.animationPlayState="running";
			hiddenBox2.style.mozAnimationPlayState="running";
			hiddenBox2.style.webkitAnimationPlayState="running";
			
			attackBox2.style.animationPlayState="running";
			attackBox2.style.mozAnimationPlayState="running";
			attackBox2.style.webkitAnimationPlayState="running";
			
			orc1.style.animationPlayState="running";
			orc1.style.mozAnimationPlayState="running";
			orc1.style.webkitAnimationPlayState="running";
			
			light2.style.animationPlayState="running";
			light2.style.mozAnimationPlayState="running";
			light2.style.webkitAnimationPlayState="running";
			
			fire2.style.animationPlayState="running";
			fire2.style.mozAnimationPlayState="running";
			fire2.style.webkitAnimationPlayState="running";
			
			heart2[0].style.animationPlayState="running";
			heart2[0].style.mozAnimationPlayState="running";
			heart2[0].style.webkitAnimationPlayState="running";
			
			heart1[0].style.animationPlayState="running";
			heart1[0].style.mozAnimationPlayState="running";
			heart1[0].style.webkitAnimationPlayState="running";
			
			heart0[0].style.animationPlayState="running";
			heart0[0].style.mozAnimationPlayState="running";
			heart0[0].style.webkitAnimationPlayState="running";
			
			getHurt();
			detectAnimation = requestAnimationFrame(lifeDetect);
		}
		if (data === "attackBox2"){
			stopHurt();
			life2();
			getHurt2();
			fire2.style.animationPlayState="paused";
			fire2.style.mozAnimationPlayState="paused";
			fire2.style.webkitAnimationPlayState="paused";
			
			light2.style.animationPlayState="paused";
			light2.style.mozAnimationPlayState="paused";
			light2.style.webkitAnimationPlayState="paused";
			
			fire2.style.display = "none";
			fire2.style.zIndex="-30";
			light2.style.display = "none";
			light2.style.zIndex = "-30";
			
			hiddenBox1.style.zIndex = "-30";
			shootBox1.style.zIndex = "-30";
			attackBox2.style.zIndex = "-30";
			
			sparkBox.style.display = "block";
			sparkBox.style.left = "18%";
			sparkBox.style.top = "39%";
	
			sparkAnimation();
			
			shootBox2.style.animationPlayState="running";
			shootBox2.style.mozAnimationPlayState="running";
			shootBox2.style.webkitAnimationPlayState="running";
			
			shoot2.style.animationPlayState="running";
			shoot2.style.mozAnimationPlayState="running";
			shoot2.style.webkitAnimationPlayState="running";
						
			orc1.style.webkitAnimationName = "killOrc1";
			orc1.style.mozAnimationName = "killOrc1";
			orc1.style.animationName = "killOrc1";
			
			orc1.style.webkitanimationDelay = "0s";
			orc1.style.mozanimationDelay = "0s";
			orc1.style.animationDelay = "0s";
			
			count4[0].style.webkitAnimationName = "removeIcon";
			count4[0].style.mozAnimationName = "removeIcon";
			count4[0].style.animationName = "removeIcon";
			
			count4[0].style.webkitanimationDelay = "0s";
			count4[0].style.mozanimationDelay = "0s";
			count4[0].style.animationDelay = "0s";
			
			reward2.style.display = "block";
			reward2.style.animationPlayState="running";
			reward2.style.mozAnimationPlayState="running";
			reward2.style.webkitAnimationPlayState="running";
			
			hiddenBox3.style.animationPlayState="running";
			hiddenBox3.style.mozAnimationPlayState="running";
			hiddenBox3.style.webkitAnimationPlayState="running";
			
			orc2.style.animationPlayState="running";
			orc2.style.mozAnimationPlayState="running";
			orc2.style.webkitAnimationPlayState="running";
			
			attackBox3.style.animationPlayState="running";
			attackBox3.style.mozAnimationPlayState="running";
			attackBox3.style.webkitAnimationPlayState="running";
			
			light3.style.animationPlayState="running";
			light3.style.mozAnimationPlayState="running";
			light3.style.webkitAnimationPlayState="running";
			
			fire3.style.animationPlayState="running";
			fire3.style.mozAnimationPlayState="running";
			fire3.style.webkitAnimationPlayState="running";

		}
		if (data === "attackBox3"){
			stopHurt();
			life3();
			getHurt3();
			
			attackBox3.style.display = "none";
			attackBox3.style.zIndex = "-30";
			
			sparkBox.style.display = "block";
			sparkBox.style.left = "-6%";
			sparkBox.style.top = "1%";
			
			sparkAnimation();
			
			shootBox3.style.animationPlayState="running";
			shootBox3.style.mozAnimationPlayState="running";
			shootBox3.style.webkitAnimationPlayState="running";
			
			shoot3.style.animationPlayState="running";
			shoot3.style.mozAnimationPlayState="running";
			shoot3.style.webkitAnimationPlayState="running";
			
			count3[0].style.webkitAnimationName = "removeIcon";
			count3[0].style.mozAnimationName = "removeIcon";
			count3[0].style.animationName = "removeIcon";
			
			count3[0].style.WebkitanimationDelay = "0s";
			count3[0].style.MozanimationDelay = "0s";
			count3[0].style.animationDelay = "0s";
			
			orc2.style.webkitAnimationName = "killOrc2";
			orc2.style.mozAnimationName = "killOrc2";
			orc2.style.animationName = "killOrc2";
			
			orc2.style.webkitAnimationDelay = "0s";
			orc2.style.mozAnimationDelay = "0s";
			orc2.style.animationDelay = "0s";
			
			fire3.style.zIndex = "-30";
			fire3.style.display = "none";
			
			fire3.style.animationPlayState="paused";
			fire3.style.mozAnimationPlayState="paused";
			fire3.style.webkitAnimationPlayState="paused";
			
			light3.style.zIndex = "-30";
			light3.style.display = "none";
			
			light3.style.animationPlayState="paused";
			light3.style.mozAnimationPlayState="paused";
			light3.style.webkitAnimationPlayState="paused";
			
			hiddenBox4.style.animationPlayState="running";
			hiddenBox4.style.mozAnimationPlayState="running";
			hiddenBox4.style.webkitAnimationPlayState="running";
			
			apes2.style.animationPlayState="running";
			apes2.style.mozAnimationPlayState="running";
			apes2.style.webkitAnimationPlayState="running";
			
			light4.style.animationPlayState="running";
			light4.style.mozAnimationPlayState="running";
			light4.style.webkitAnimationPlayState="running";
			
			fire4.style.animationPlayState="running";
			fire4.style.mozAnimationPlayState="running";
			fire4.style.webkitAnimationPlayState="running";
			
			attackBox4.style.animationPlayState="running";
			attackBox4.style.mozAnimationPlayState="running";
			attackBox4.style.webkitAnimationPlayState="running";
			
		}
		if (data === "attackBox4"){
			
			stopHurt();
			life4();
			getHurt3();
			
			sparkBox.style.display = "block";
			sparkBox.style.left = "84%";
			sparkBox.style.top = "39%";
			
			sparkAnimation();
			
			attackBox4.style.zIndex = "-30";
			
			fire4.style.zIndex = "-30";
			fire4.style.display = "none";
			
			fire4.style.AnimationPlayState="paused";
			fire4.style.MozAnimationPlayState="paused";
			fire4.style.WebkitAnimationPlayState="paused";
			
			light4.style.zIndex = "-30";
			light4.style.display = "none";
			
			light4.style.AnimationPlayState="paused";
			light4.style.MozAnimationPlayState="paused";
			light4.style.WebkitAnimationPlayState="paused";
			
			apes2.style.WebkitAnimationName = "killApes2";
			apes2.style.MozAnimationName = "killApes2";
			apes2.style.animationName = "killApes2";
			
			count2[0].style.WebkitAnimationName = "removeIcon";
			count2[0].style.MozAnimationName = "removeIcon";
			count2[0].style.animationName = "removeIcon";
			
			count2[0].style.WebkitanimationDelay = "0s";
			count2[0].style.MozanimationDelay = "0s";
			count2[0].style.animationDelay = "0s";
			
			shootBox4.style.AnimationPlayState="running";
			shootBox4.style.MozAnimationPlayState="running";
			shootBox4.style.WebkitAnimationPlayState="running";
			
			shoot4.style.AnimationPlayState="running";
			shoot4.style.MozAnimationPlayState="running";
			shoot4.style.WebkitAnimationPlayState="running";

			reward3.style.display="block";
			
			reward3.style.AnimationPlayState="running";
			reward3.style.MozAnimationPlayState="running";
			reward3.style.WebkitAnimationPlayState="running";
			
			hiddenBox5.style.AnimationPlayState="running";
			hiddenBox5.style.MozAnimationPlayState="running";
			hiddenBox5.style.WebkitAnimationPlayState="running";
			
			apes3.style.AnimationPlayState="running";
			apes3.style.MozAnimationPlayState="running";
			apes3.style.WebkitAnimationPlayState="running";
			
			light5.style.AnimationPlayState="running";
			light5.style.MozAnimationPlayState="running";
			light5.style.WebkitAnimationPlayState="running";
			
			fire5.style.AnimationPlayState="running";
			fire5.style.MozAnimationPlayState="running";
			fire5.style.WebkitAnimationPlayState="running";
			
			attackBox5.style.AnimationPlayState="running";
			attackBox5.style.MozAnimationPlayState="running";
			attackBox5.style.WebkitAnimationPlayState="running";

		}
		if (data === "attackBox5"){

			stopHurt();
			life5();
			getHurt5();
		
			sparkBox.style.display = "block";
			sparkBox.style.left = "23%";
			sparkBox.style.top = "42%";
			
			sparkAnimation();
			
			attackBox5.style.zIndex = "-30";
			
			fire5.style.zIndex = "-30";
			fire5.style.display = "none";
			
			fire5.style.AnimationPlayState="paused";
			fire5.style.MozAnimationPlayState="paused";
			fire5.style.WebkitAnimationPlayState="paused";
			
			light5.style.zIndex = "-30";
			light5.style.display = "none";
			
			light5.style.AnimationPlayState="paused";
			light5.style.MozAnimationPlayState="paused";
			light5.style.WebkitAnimationPlayState="paused";
			
			apes3.style.webkitAnimationName = "killApes3";
			apes3.style.mozAnimationName = "killApes3";
			apes3.style.animationName = "killApes3";
			
			count1[0].style.WebkitAnimationName = "removeIcon";
			count1[0].style.MozAnimationName = "removeIcon";
			count1[0].style.animationName = "removeIcon";
			
			count1[0].style.WebkitanimationDelay = "0s";
			count1[0].style.MozanimationDelay = "0s";
			count1[0].style.animationDelay = "0s";
			
			shootBox5.style.animationPlayState="running";
			shootBox5.style.mozAnimationPlayState="running";
			shootBox5.style.webkitAnimationPlayState="running";
			
			shoot5.style.animationPlayState="running";
			shoot5.style.mozAnimationPlayState="running";
			shoot5.style.webkitAnimationPlayState="running";
			
			reward4.style.display="block";
			
			reward4.style.animationPlayState="running";
			reward4.style.mozAnimationPlayState="running";
			reward4.style.webkitAnimationPlayState="running";
			
			hiddenBoxMissed.style.animationPlayState="running";
			hiddenBoxMissed.style.mozAnimationPlayState="running";
			hiddenBoxMissed.style.webkitAnimationPlayState="running";
			
			orc3.style.animationPlayState="running";
			orc3.style.mozAnimationPlayState="running";
			orc3.style.webkitAnimationPlayState="running";
			
			light8.style.animationPlayState="running";
			light8.style.mozAnimationPlayState="running";
			light8.style.webkitAnimationPlayState="running";
			
			fire8.style.animationPlayState="running";
			fire8.style.mozAnimationPlayState="running";
			fire8.style.webkitAnimationPlayState="running";
			
			attackBoxMissed.style.animationPlayState="running";
			attackBoxMissed.style.mozAnimationPlayState="running";
			attackBoxMissed.style.webkitAnimationPlayState="running";

		}
		if (data === "attackBoxMissed"){
			
			stopHurt();
			life6();
			
			sparkBox.style.display = "block";
			sparkBox.style.left = "66%";
			sparkBox.style.top = "45%";
			
			sparkAnimation();
			
			attackBoxMissed.style.zIndex = "-30";
			
			fire8.style.zIndex = "-30";
			fire8.style.display = "none";
			
			fire8.style.animationPlayState="paused";
			fire8.style.mozAnimationPlayState="paused";
			fire8.style.webkitAnimationPlayState="paused";
			
			light8.style.zIndex = "-30";
			light8.style.display = "none";
			
			light8.style.animationPlayState="paused";
			light8.style.mozAnimationPlayState="paused";
			light8.style.webkitAnimationPlayState="paused";
			
			orc3.style.webkitAnimationName = "killOrc3";
			orc3.style.mozAnimationName = "killOrc3";
			orc3.style.animationName = "killOrc3";
			
			orc3.style.webkitanimationDelay = "0s";
			orc3.style.mozanimationDelay = "0s";
			orc3.style.animationDelay = "0s";
			
			count0[0].style.webkitAnimationName = "removeIcon";
			count0[0].style.mozAnimationName = "removeIcon";
			count0[0].style.animationName = "removeIcon";
			
			count0[0].style.webkitanimationDelay = "0s";
			count0[0].style.mozanimationDelay = "0s";
			count0[0].style.animationDelay = "0s";
			
			shootBox8.style.animationPlayState="running";
			shootBox8.style.mozAnimationPlayState="running";
			shootBox8.style.webkitAnimationPlayState="running";
			
			shoot8.style.animationPlayState="running";
			shoot8.style.mozAnimationPlayState="running";
			shoot8.style.webkitAnimationPlayState="running";
			
			reward7.style.display="block";
			
			reward7.style.animationPlayState="running";
			reward7.style.mozAnimationPlayState="running";
			reward7.style.webkitAnimationPlayState="running";
		
			hiddenBox6.style.animationPlayState="running";
			hiddenBox6.style.mozAnimationPlayState="running";
			hiddenBox6.style.webkitAnimationPlayState="running";
			
			apes4.style.animationPlayState="running";
			apes4.style.mozAnimationPlayState="running";
			apes4.style.webkitAnimationPlayState="running";
			
			light6.style.animationPlayState="running";
			light6.style.mozAnimationPlayState="running";
			light6.style.webkitAnimationPlayState="running";
			
			fire6.style.animationPlayState="running";
			fire6.style.mozAnimationPlayState="running";
			fire6.style.webkitAnimationPlayState="running";
			
			attackBox6.style.animationPlayState="running";
			attackBox6.style.mozAnimationPlayState="running";
			attackBox6.style.webkitAnimationPlayState="running";
			
			hiddenBox7.style.animationPlayState="running";
			hiddenBox7.style.mozAnimationPlayState="running";
			hiddenBox7.style.webkitAnimationPlayState="running";
			
			apes5.style.animationPlayState="running";
			apes5.style.mozAnimationPlayState="running";
			apes5.style.webkitAnimationPlayState="running";
			
			light7.style.animationPlayState="running";
			light7.style.mozAnimationPlayState="running";
			light7.style.webkitAnimationPlayState="running";
			
			fire7.style.AnimationPlayState="running";
			fire7.style.MozAnimationPlayState="running";
			fire7.style.WebkitAnimationPlayState="running";
			
			attackBox7.style.AnimationPlayState="running";
			attackBox7.style.MozAnimationPlayState="running";
			attackBox7.style.WebkitAnimationPlayState="running";
		
		}
		if (data === "attackBox6"){
			
			attackBox6.style.zIndex = "-30";	
			
			sparkBox.style.display = "block";
			sparkBox.style.height = "30%";
			sparkBox.style.width = "20%";
			sparkBox.style.left = "48%";
			sparkBox.style.top = "46%";
			
			sparkAnimation();
			
			attackBox6.style.zIndex = "-30";
			
			fire6.style.zIndex = "-30";
			fire6.style.display = "none";
			
			fire6.style.AnimationPlayState="paused";
			fire6.style.MozAnimationPlayState="paused";
			fire6.style.WebkitAnimationPlayState="paused";
			
			light6.style.zIndex = "-30";
			light6.style.display = "none";
			
			light6.style.AnimationPlayState="paused";
			light6.style.MozAnimationPlayState="paused";
			light6.style.WebkitAnimationPlayState="paused";
			
			apes4.style.WebkitAnimationName = "killOrc3";
			apes4.style.MozAnimationName = "killApes3";
			apes4.style.animationName = "killApes3";
			
			shootBox6.style.AnimationPlayState="running";
			shootBox6.style.MozAnimationPlayState="running";
			shootBox6.style.WebkitAnimationPlayState="running";
			
			shoot6.style.AnimationPlayState="running";
			shoot6.style.MozAnimationPlayState="running";
			shoot6.style.WebkitAnimationPlayState="running";
			
			if(iconNumber === 0){
				
				c[3].style.opacity = "0";
				c[3].style.opacity = "0";
				c[3].style.opacity = "0";
			
				iconNumber = 1;
				
			}
			else if(iconNumber === 1){
				c[2].style.opacity = "0";
				c[2].style.opacity = "0";
				c[2].style.opacity = "0";
				
				hiddenBox9.style.animationPlayState="running";
				hiddenBox9.style.mozAnimationPlayState="running";
				hiddenBox9.style.webkitAnimationPlayState="running";
				
				orc4.style.animationPlayState="running";
				orc4.style.mozAnimationPlayState="running";
				orc4.style.webkitAnimationPlayState="running";
				
				light9.style.animationPlayState="running";
				light9.style.mozAnimationPlayState="running";
				light9.style.webkitAnimationPlayState="running";
				
				fire9.style.animationPlayState="running";
				fire9.style.mozAnimationPlayState="running";
				fire9.style.webkitAnimationPlayState="running";
				
				attackBox9.style.animationPlayState="running";
				attackBox9.style.mozAnimationPlayState="running";
				attackBox9.style.webkitAnimationPlayState="running";
				
				stopHurt2();
				window.clearTimeout(timeouts);
				life5();
			}
			
			reward5.style.display="block";
			
			reward5.style.AnimationPlayState="running";
			reward5.style.MozAnimationPlayState="running";
			reward5.style.WebkitAnimationPlayState="running";
			
		}
		if (data === "attackBox7"){
				
			stopHurt();
			attackBox7.style.zIndex = "-30";

			sparkBox.style.display = "block";
			sparkBox.style.height = "40%";
			sparkBox.style.width = "26%";
			sparkBox.style.left = "23%";
			sparkBox.style.top = "42%";
			
			sparkAnimation();
			
			attackBox7.style.zIndex = "-30";
			
			fire7.style.zIndex = "-30";
			fire7.style.display = "none";
			
			fire7.style.AnimationPlayState="paused";
			fire7.style.MozAnimationPlayState="paused";
			fire7.style.WebkitAnimationPlayState="paused";
			
			light7.style.zIndex = "-30";
			light7.style.display = "none";
			
			light7.style.AnimationPlayState="paused";
			light7.style.MozAnimationPlayState="paused";
			light7.style.WebkitAnimationPlayState="paused";
			
			apes5.style.WebkitAnimationName = "killOrc3";
			apes5.style.MozAnimationName = "killApes3";
			apes5.style.animationName = "killApes3";
			
			apes5.style.WebkitAnimationDelay= "0s";
			apes5.style.MozAnimationNameDelay = "0s";
			apes5.style.animationNameDelay = "0s";
			
			shootBox7.style.AnimationPlayState="running";
			shootBox7.style.MozAnimationPlayState="running";
			shootBox7.style.WebkitAnimationPlayState="running";
			
			shoot7.style.AnimationPlayState="running";
			shoot7.style.MozAnimationPlayState="running";
			shoot7.style.WebkitAnimationPlayState="running";
			
			if(iconNumber === 0){
				
				c[3].style.opacity = "0";
				c[3].style.opacity = "0";
				c[3].style.opacity = "0";
				iconNumber = 1;	
			}
			else if(iconNumber === 1){

				c[2].style.opacity = "0";
				c[2].style.opacity = "0";
				c[2].style.opacity = "0";
				
				
				hiddenBox9.style.animationPlayState="running";
				hiddenBox9.style.mozAnimationPlayState="running";
				hiddenBox9.style.webkitAnimationPlayState="running";
				
				orc4.style.animationPlayState="running";
				orc4.style.mozAnimationPlayState="running";
				orc4.style.webkitAnimationPlayState="running";
				
				light9.style.animationPlayState="running";
				light9.style.mozAnimationPlayState="running";
				light9.style.webkitAnimationPlayState="running";
				
				fire9.style.animationPlayState="running";
				fire9.style.mozAnimationPlayState="running";
				fire9.style.webkitAnimationPlayState="running";
				
				attackBox9.style.animationPlayState="running";
				attackBox9.style.mozAnimationPlayState="running";
				attackBox9.style.webkitAnimationPlayState="running";
			
				stopHurt2();
				window.clearTimeout(timeouts);
				life5();
			}
			
			reward6.style.display="block";
			
			reward6.style.AnimationPlayState="running";
			reward6.style.MozAnimationPlayState="running";
			reward6.style.WebkitAnimationPlayState="running";
		}
		if (data === "attackBox9"){
			
			life3();
			
			sparkBox.style.display = "block";
			sparkBox.style.left = "66%";
			sparkBox.style.top = "45%";
			
			sparkAnimation();
			
			attackBox9.style.zIndex = "-30";
			
			fire9.style.zIndex = "-30";
			fire9.style.display = "none";
			
			fire9.style.animationPlayState="paused";
			fire9.style.mozAnimationPlayState="paused";
			fire9.style.webkitAnimationPlayState="paused";
			
			light9.style.zIndex = "-30";
			light9.style.display = "none";
			
			light9.style.animationPlayState="paused";
			light9.style.mozAnimationPlayState="paused";
			light9.style.webkitAnimationPlayState="paused";
			
			orc4.style.webkitAnimationName = "killOrc3";
			orc4.style.mozAnimationName = "killOrc3";
			orc4.style.animationName = "killOrc3";
			
			orc4.style.webkitanimationDelay = "0s";
			orc4.style.mozanimationDelay = "0s";
			orc4.style.animationDelay = "0s";
			
			c[1].style.opacity = "0";
			c[1].style.opacity = "0";
			c[1].style.opacity = "0";
			
			shootBox9.style.animationPlayState="running";
			shootBox9.style.mozAnimationPlayState="running";
			shootBox9.style.webkitAnimationPlayState="running";
			
			shoot9.style.animationPlayState="running";
			shoot9.style.mozAnimationPlayState="running";
			shoot9.style.webkitAnimationPlayState="running";
			
			reward8.style.display="block";
			
			reward8.style.animationPlayState="running";
			reward8.style.mozAnimationPlayState="running";
			reward8.style.webkitAnimationPlayState="running";
			
			hiddenBox10.style.animationPlayState="running";
			hiddenBox10.style.mozAnimationPlayState="running";
			hiddenBox10.style.webkitAnimationPlayState="running";
			
			apes6.style.animationPlayState="running";
			apes6.style.mozAnimationPlayState="running";
			apes6.style.webkitAnimationPlayState="running";
			
			light10.style.animationPlayState="running";
			light10.style.mozAnimationPlayState="running";
			light10.style.webkitAnimationPlayState="running";
			
			fire10.style.animationPlayState="running";
			fire10.style.mozAnimationPlayState="running";
			fire10.style.webkitAnimationPlayState="running";
			
			attackBox10.style.animationPlayState="running";
			attackBox10.style.mozAnimationPlayState="running";
			attackBox10.style.webkitAnimationPlayState="running";
			
		}
		if (data === "attackBox10"){
			
			stopHurt();
			heart2[0].style.animationPlayState="paused";
			heart2[0].style.mozAnimationPlayState="paused";
			heart2[0].style.webkitAnimationPlayState="paused";
			
			heart1[0].style.animationPlayState="paused";
			heart1[0].style.mozAnimationPlayState="paused";
			heart1[0].style.webkitAnimationPlayState="paused";
			
			heart0[0].style.animationPlayState="paused";
			heart0[0].style.mozAnimationPlayState="paused";
			heart0[0].style.webkitAnimationPlayState="paused";	
			
			
			sparkBox.style.display = "block";
			sparkBox.style.left = "82%";
			sparkBox.style.top = "3%";
			sparkBox.style.height = "33%";
			sparkBox.style.width = "21%";
			
			sparkAnimation();
			
			attackBox10.style.zIndex = "-30";
			
			fire10.style.zIndex = "-30";
			fire10.style.display = "none";
			
			fire10.style.animationPlayState="paused";
			fire10.style.mozAnimationPlayState="paused";
			fire10.style.webkitAnimationPlayState="paused";
			
			light10.style.zIndex = "-30";
			light10.style.display = "none";
			
			light10.style.animationPlayState="paused";
			light10.style.mozAnimationPlayState="paused";
			light10.style.webkitAnimationPlayState="paused";
			
			apes6.style.webkitAnimationName = "killApes3";
			apes6.style.mozAnimationName = "killApes3";
			apes6.style.animationName = "killApes3";
			
			apes6.style.webkitanimationDelay = "0s";
			apes6.style.mozanimationDelay = "0s";
			apes6.style.animationDelay = "0s";
			
			c[0].style.opacity = "0";
			c[0].style.opacity = "0";
			c[0].style.opacity = "0";
			
			shootBox10.style.animationPlayState="running";
			shootBox10.style.mozAnimationPlayState="running";
			shootBox10.style.webkitAnimationPlayState="running";
			
			shoot10.style.animationPlayState="running";
			shoot10.style.mozAnimationPlayState="running";
			shoot10.style.webkitAnimationPlayState="running";
			
			winDetect = requestAnimationFrame(winCount);
		}
		
	}
	
	function touchstart(e){
		var data = e.target.id;
		console.log(data);
		begin();		

		if(data === "againFont"){
			window.location.reload();
		}
		if (data === "attackBox1"){
				
			sparkAnimation();
			
			attackBox1.style.zIndex = "-30";
			
			shootBox1.style.animationPlayState="running";
			shootBox1.style.mozAnimationPlayState="running";
			shootBox1.style.webkitAnimationPlayState="running";
			
			shoot.style.animationPlayState="running";
			shoot.style.mozAnimationPlayState="running";
			shoot.style.webkitAnimationPlayState="running";
			
			apes1.style.WebkitAnimationName = "killApes1";
			apes1.style.MozAnimationName = "killApes1";
			apes1.style.animationName = "killApes1";
			
			apes1.style.WebkitanimationDelay = "0s";
			apes1.style.MozanimationDelay = "0s";
			apes1.style.animationDelay = "0s";
			
			guide.style.display = "none";
			guide.style.zIndex = "-30";
			
			light1.style.display = "none";
			light1.style.zIndex = "-30";
			
			hand.style.WebkitAnimationName = "handRemove";
			hand.style.MozAnimationName = "handRemove";
			hand.style.animationName = "handRemove";
			
			hand.style.WebkitanimationDelay = "0s";
			hand.style.MozanimationDelay = "0s";
			hand.style.animationDelay = "0s";
			
			reward1.style.display = "block";
			reward1.style.animationPlayState="running";
			reward1.style.mozAnimationPlayState="running";
			reward1.style.webkitAnimationPlayState="running";
			
			count5[0].style.WebkitAnimationName = "removeIcon";
			count5[0].style.MozAnimationName = "removeIcon";
			count5[0].style.animationName = "removeIcon";
			
			count5[0].style.WebkitanimationDelay = "0s";
			count5[0].style.MozanimationDelay = "0s";
			count5[0].style.animationDelay = "0s";
			
			hiddenBox2.style.animationPlayState="running";
			hiddenBox2.style.mozAnimationPlayState="running";
			hiddenBox2.style.webkitAnimationPlayState="running";
			
			attackBox2.style.animationPlayState="running";
			attackBox2.style.mozAnimationPlayState="running";
			attackBox2.style.webkitAnimationPlayState="running";
			
			orc1.style.animationPlayState="running";
			orc1.style.mozAnimationPlayState="running";
			orc1.style.webkitAnimationPlayState="running";
			
			light2.style.animationPlayState="running";
			light2.style.mozAnimationPlayState="running";
			light2.style.webkitAnimationPlayState="running";
			
			fire2.style.animationPlayState="running";
			fire2.style.mozAnimationPlayState="running";
			fire2.style.webkitAnimationPlayState="running";
			
			heart2[0].style.animationPlayState="running";
			heart2[0].style.mozAnimationPlayState="running";
			heart2[0].style.webkitAnimationPlayState="running";
			
			heart1[0].style.animationPlayState="running";
			heart1[0].style.mozAnimationPlayState="running";
			heart1[0].style.webkitAnimationPlayState="running";
			
			heart0[0].style.animationPlayState="running";
			heart0[0].style.mozAnimationPlayState="running";
			heart0[0].style.webkitAnimationPlayState="running";
			
			getHurt();
			detectAnimation = requestAnimationFrame(lifeDetect);
		}
		if (data === "attackBox2"){
			stopHurt();
			life2();
			getHurt2();
			fire2.style.animationPlayState="paused";
			fire2.style.mozAnimationPlayState="paused";
			fire2.style.webkitAnimationPlayState="paused";
			
			light2.style.animationPlayState="paused";
			light2.style.mozAnimationPlayState="paused";
			light2.style.webkitAnimationPlayState="paused";
			
			fire2.style.display = "none";
			fire2.style.zIndex="-30";
			light2.style.display = "none";
			light2.style.zIndex = "-30";
			
			hiddenBox1.style.zIndex = "-30";
			shootBox1.style.zIndex = "-30";
			attackBox2.style.zIndex = "-30";
			
			sparkBox.style.display = "block";
			sparkBox.style.left = "18%";
			sparkBox.style.top = "39%";
	
			sparkAnimation();
			
			shootBox2.style.animationPlayState="running";
			shootBox2.style.mozAnimationPlayState="running";
			shootBox2.style.webkitAnimationPlayState="running";
			
			shoot2.style.animationPlayState="running";
			shoot2.style.mozAnimationPlayState="running";
			shoot2.style.webkitAnimationPlayState="running";
						
			orc1.style.webkitAnimationName = "killOrc1";
			orc1.style.mozAnimationName = "killOrc1";
			orc1.style.animationName = "killOrc1";
			
			orc1.style.webkitanimationDelay = "0s";
			orc1.style.mozanimationDelay = "0s";
			orc1.style.animationDelay = "0s";
			
			count4[0].style.webkitAnimationName = "removeIcon";
			count4[0].style.mozAnimationName = "removeIcon";
			count4[0].style.animationName = "removeIcon";
			
			count4[0].style.webkitanimationDelay = "0s";
			count4[0].style.mozanimationDelay = "0s";
			count4[0].style.animationDelay = "0s";
			
			reward2.style.display = "block";
			reward2.style.animationPlayState="running";
			reward2.style.mozAnimationPlayState="running";
			reward2.style.webkitAnimationPlayState="running";
			
			hiddenBox3.style.animationPlayState="running";
			hiddenBox3.style.mozAnimationPlayState="running";
			hiddenBox3.style.webkitAnimationPlayState="running";
			
			orc2.style.animationPlayState="running";
			orc2.style.mozAnimationPlayState="running";
			orc2.style.webkitAnimationPlayState="running";
			
			attackBox3.style.animationPlayState="running";
			attackBox3.style.mozAnimationPlayState="running";
			attackBox3.style.webkitAnimationPlayState="running";
			
			light3.style.animationPlayState="running";
			light3.style.mozAnimationPlayState="running";
			light3.style.webkitAnimationPlayState="running";
			
			fire3.style.animationPlayState="running";
			fire3.style.mozAnimationPlayState="running";
			fire3.style.webkitAnimationPlayState="running";

		}
		if (data === "attackBox3"){
			stopHurt();
			life3();
			getHurt3();
			
			attackBox3.style.display = "none";
			attackBox3.style.zIndex = "-30";
			
			sparkBox.style.display = "block";
			sparkBox.style.left = "-6%";
			sparkBox.style.top = "1%";
			
			sparkAnimation();
			
			shootBox3.style.animationPlayState="running";
			shootBox3.style.mozAnimationPlayState="running";
			shootBox3.style.webkitAnimationPlayState="running";
			
			shoot3.style.animationPlayState="running";
			shoot3.style.mozAnimationPlayState="running";
			shoot3.style.webkitAnimationPlayState="running";
			
			count3[0].style.webkitAnimationName = "removeIcon";
			count3[0].style.mozAnimationName = "removeIcon";
			count3[0].style.animationName = "removeIcon";
			
			count3[0].style.WebkitanimationDelay = "0s";
			count3[0].style.MozanimationDelay = "0s";
			count3[0].style.animationDelay = "0s";
			
			orc2.style.webkitAnimationName = "killOrc2";
			orc2.style.mozAnimationName = "killOrc2";
			orc2.style.animationName = "killOrc2";
			
			orc2.style.webkitAnimationDelay = "0s";
			orc2.style.mozAnimationDelay = "0s";
			orc2.style.animationDelay = "0s";
			
			fire3.style.zIndex = "-30";
			fire3.style.display = "none";
			
			fire3.style.animationPlayState="paused";
			fire3.style.mozAnimationPlayState="paused";
			fire3.style.webkitAnimationPlayState="paused";
			
			light3.style.zIndex = "-30";
			light3.style.display = "none";
			
			light3.style.animationPlayState="paused";
			light3.style.mozAnimationPlayState="paused";
			light3.style.webkitAnimationPlayState="paused";
			
			hiddenBox4.style.animationPlayState="running";
			hiddenBox4.style.mozAnimationPlayState="running";
			hiddenBox4.style.webkitAnimationPlayState="running";
			
			apes2.style.animationPlayState="running";
			apes2.style.mozAnimationPlayState="running";
			apes2.style.webkitAnimationPlayState="running";
			
			light4.style.animationPlayState="running";
			light4.style.mozAnimationPlayState="running";
			light4.style.webkitAnimationPlayState="running";
			
			fire4.style.animationPlayState="running";
			fire4.style.mozAnimationPlayState="running";
			fire4.style.webkitAnimationPlayState="running";
			
			attackBox4.style.animationPlayState="running";
			attackBox4.style.mozAnimationPlayState="running";
			attackBox4.style.webkitAnimationPlayState="running";
			
		}
		if (data === "attackBox4"){
			
			stopHurt();
			life4();
			getHurt3();
			
			sparkBox.style.display = "block";
			sparkBox.style.left = "84%";
			sparkBox.style.top = "39%";
			
			sparkAnimation();
			
			attackBox4.style.zIndex = "-30";
			
			fire4.style.zIndex = "-30";
			fire4.style.display = "none";
			
			fire4.style.AnimationPlayState="paused";
			fire4.style.MozAnimationPlayState="paused";
			fire4.style.WebkitAnimationPlayState="paused";
			
			light4.style.zIndex = "-30";
			light4.style.display = "none";
			
			light4.style.AnimationPlayState="paused";
			light4.style.MozAnimationPlayState="paused";
			light4.style.WebkitAnimationPlayState="paused";
			
			apes2.style.WebkitAnimationName = "killApes2";
			apes2.style.MozAnimationName = "killApes2";
			apes2.style.animationName = "killApes2";
			
			count2[0].style.WebkitAnimationName = "removeIcon";
			count2[0].style.MozAnimationName = "removeIcon";
			count2[0].style.animationName = "removeIcon";
			
			count2[0].style.WebkitanimationDelay = "0s";
			count2[0].style.MozanimationDelay = "0s";
			count2[0].style.animationDelay = "0s";
			
			shootBox4.style.AnimationPlayState="running";
			shootBox4.style.MozAnimationPlayState="running";
			shootBox4.style.WebkitAnimationPlayState="running";
			
			shoot4.style.AnimationPlayState="running";
			shoot4.style.MozAnimationPlayState="running";
			shoot4.style.WebkitAnimationPlayState="running";

			reward3.style.display="block";
			
			reward3.style.AnimationPlayState="running";
			reward3.style.MozAnimationPlayState="running";
			reward3.style.WebkitAnimationPlayState="running";
			
			hiddenBox5.style.AnimationPlayState="running";
			hiddenBox5.style.MozAnimationPlayState="running";
			hiddenBox5.style.WebkitAnimationPlayState="running";
			
			apes3.style.AnimationPlayState="running";
			apes3.style.MozAnimationPlayState="running";
			apes3.style.WebkitAnimationPlayState="running";
			
			light5.style.AnimationPlayState="running";
			light5.style.MozAnimationPlayState="running";
			light5.style.WebkitAnimationPlayState="running";
			
			fire5.style.AnimationPlayState="running";
			fire5.style.MozAnimationPlayState="running";
			fire5.style.WebkitAnimationPlayState="running";
			
			attackBox5.style.AnimationPlayState="running";
			attackBox5.style.MozAnimationPlayState="running";
			attackBox5.style.WebkitAnimationPlayState="running";

		}
		if (data === "attackBox5"){

			stopHurt();
			life5();
			getHurt5();
		
			sparkBox.style.display = "block";
			sparkBox.style.left = "23%";
			sparkBox.style.top = "42%";
			
			sparkAnimation();
			
			attackBox5.style.zIndex = "-30";
			
			fire5.style.zIndex = "-30";
			fire5.style.display = "none";
			
			fire5.style.AnimationPlayState="paused";
			fire5.style.MozAnimationPlayState="paused";
			fire5.style.WebkitAnimationPlayState="paused";
			
			light5.style.zIndex = "-30";
			light5.style.display = "none";
			
			light5.style.AnimationPlayState="paused";
			light5.style.MozAnimationPlayState="paused";
			light5.style.WebkitAnimationPlayState="paused";
			
			apes3.style.webkitAnimationName = "killApes3";
			apes3.style.mozAnimationName = "killApes3";
			apes3.style.animationName = "killApes3";
			
			count1[0].style.WebkitAnimationName = "removeIcon";
			count1[0].style.MozAnimationName = "removeIcon";
			count1[0].style.animationName = "removeIcon";
			
			count1[0].style.WebkitanimationDelay = "0s";
			count1[0].style.MozanimationDelay = "0s";
			count1[0].style.animationDelay = "0s";
			
			shootBox5.style.animationPlayState="running";
			shootBox5.style.mozAnimationPlayState="running";
			shootBox5.style.webkitAnimationPlayState="running";
			
			shoot5.style.animationPlayState="running";
			shoot5.style.mozAnimationPlayState="running";
			shoot5.style.webkitAnimationPlayState="running";
			
			reward4.style.display="block";
			
			reward4.style.animationPlayState="running";
			reward4.style.mozAnimationPlayState="running";
			reward4.style.webkitAnimationPlayState="running";
			
			hiddenBoxMissed.style.animationPlayState="running";
			hiddenBoxMissed.style.mozAnimationPlayState="running";
			hiddenBoxMissed.style.webkitAnimationPlayState="running";
			
			orc3.style.animationPlayState="running";
			orc3.style.mozAnimationPlayState="running";
			orc3.style.webkitAnimationPlayState="running";
			
			light8.style.animationPlayState="running";
			light8.style.mozAnimationPlayState="running";
			light8.style.webkitAnimationPlayState="running";
			
			fire8.style.animationPlayState="running";
			fire8.style.mozAnimationPlayState="running";
			fire8.style.webkitAnimationPlayState="running";
			
			attackBoxMissed.style.animationPlayState="running";
			attackBoxMissed.style.mozAnimationPlayState="running";
			attackBoxMissed.style.webkitAnimationPlayState="running";

		}
		if (data === "attackBoxMissed"){
			
			stopHurt();
			life6();
			
			sparkBox.style.display = "block";
			sparkBox.style.left = "66%";
			sparkBox.style.top = "45%";
			
			sparkAnimation();
			
			attackBoxMissed.style.zIndex = "-30";
			
			fire8.style.zIndex = "-30";
			fire8.style.display = "none";
			
			fire8.style.animationPlayState="paused";
			fire8.style.mozAnimationPlayState="paused";
			fire8.style.webkitAnimationPlayState="paused";
			
			light8.style.zIndex = "-30";
			light8.style.display = "none";
			
			light8.style.animationPlayState="paused";
			light8.style.mozAnimationPlayState="paused";
			light8.style.webkitAnimationPlayState="paused";
			
			orc3.style.webkitAnimationName = "killOrc3";
			orc3.style.mozAnimationName = "killOrc3";
			orc3.style.animationName = "killOrc3";
			
			orc3.style.webkitanimationDelay = "0s";
			orc3.style.mozanimationDelay = "0s";
			orc3.style.animationDelay = "0s";
			
			count0[0].style.webkitAnimationName = "removeIcon";
			count0[0].style.mozAnimationName = "removeIcon";
			count0[0].style.animationName = "removeIcon";
			
			count0[0].style.webkitanimationDelay = "0s";
			count0[0].style.mozanimationDelay = "0s";
			count0[0].style.animationDelay = "0s";
			
			shootBox8.style.animationPlayState="running";
			shootBox8.style.mozAnimationPlayState="running";
			shootBox8.style.webkitAnimationPlayState="running";
			
			shoot8.style.animationPlayState="running";
			shoot8.style.mozAnimationPlayState="running";
			shoot8.style.webkitAnimationPlayState="running";
			
			reward7.style.display="block";
			
			reward7.style.animationPlayState="running";
			reward7.style.mozAnimationPlayState="running";
			reward7.style.webkitAnimationPlayState="running";
		
			hiddenBox6.style.animationPlayState="running";
			hiddenBox6.style.mozAnimationPlayState="running";
			hiddenBox6.style.webkitAnimationPlayState="running";
			
			apes4.style.animationPlayState="running";
			apes4.style.mozAnimationPlayState="running";
			apes4.style.webkitAnimationPlayState="running";
			
			light6.style.animationPlayState="running";
			light6.style.mozAnimationPlayState="running";
			light6.style.webkitAnimationPlayState="running";
			
			fire6.style.animationPlayState="running";
			fire6.style.mozAnimationPlayState="running";
			fire6.style.webkitAnimationPlayState="running";
			
			attackBox6.style.animationPlayState="running";
			attackBox6.style.mozAnimationPlayState="running";
			attackBox6.style.webkitAnimationPlayState="running";
			
			hiddenBox7.style.animationPlayState="running";
			hiddenBox7.style.mozAnimationPlayState="running";
			hiddenBox7.style.webkitAnimationPlayState="running";
			
			apes5.style.animationPlayState="running";
			apes5.style.mozAnimationPlayState="running";
			apes5.style.webkitAnimationPlayState="running";
			
			light7.style.animationPlayState="running";
			light7.style.mozAnimationPlayState="running";
			light7.style.webkitAnimationPlayState="running";
			
			fire7.style.AnimationPlayState="running";
			fire7.style.MozAnimationPlayState="running";
			fire7.style.WebkitAnimationPlayState="running";
			
			attackBox7.style.AnimationPlayState="running";
			attackBox7.style.MozAnimationPlayState="running";
			attackBox7.style.WebkitAnimationPlayState="running";
		
		}
		if (data === "attackBox6"){
			
			attackBox6.style.zIndex = "-30";	
			
			sparkBox.style.display = "block";
			sparkBox.style.height = "30%";
			sparkBox.style.width = "20%";
			sparkBox.style.left = "48%";
			sparkBox.style.top = "46%";
			
			sparkAnimation();
			
			attackBox6.style.zIndex = "-30";
			
			fire6.style.zIndex = "-30";
			fire6.style.display = "none";
			
			fire6.style.AnimationPlayState="paused";
			fire6.style.MozAnimationPlayState="paused";
			fire6.style.WebkitAnimationPlayState="paused";
			
			light6.style.zIndex = "-30";
			light6.style.display = "none";
			
			light6.style.AnimationPlayState="paused";
			light6.style.MozAnimationPlayState="paused";
			light6.style.WebkitAnimationPlayState="paused";
			
			apes4.style.WebkitAnimationName = "killOrc3";
			apes4.style.MozAnimationName = "killApes3";
			apes4.style.animationName = "killApes3";
			
			shootBox6.style.AnimationPlayState="running";
			shootBox6.style.MozAnimationPlayState="running";
			shootBox6.style.WebkitAnimationPlayState="running";
			
			shoot6.style.AnimationPlayState="running";
			shoot6.style.MozAnimationPlayState="running";
			shoot6.style.WebkitAnimationPlayState="running";
			
			if(iconNumber === 0){
				
				c[3].style.opacity = "0";
				c[3].style.opacity = "0";
				c[3].style.opacity = "0";
			
				iconNumber = 1;
				
			}
			else if(iconNumber === 1){
				c[2].style.opacity = "0";
				c[2].style.opacity = "0";
				c[2].style.opacity = "0";
				
				hiddenBox9.style.animationPlayState="running";
				hiddenBox9.style.mozAnimationPlayState="running";
				hiddenBox9.style.webkitAnimationPlayState="running";
				
				orc4.style.animationPlayState="running";
				orc4.style.mozAnimationPlayState="running";
				orc4.style.webkitAnimationPlayState="running";
				
				light9.style.animationPlayState="running";
				light9.style.mozAnimationPlayState="running";
				light9.style.webkitAnimationPlayState="running";
				
				fire9.style.animationPlayState="running";
				fire9.style.mozAnimationPlayState="running";
				fire9.style.webkitAnimationPlayState="running";
				
				attackBox9.style.animationPlayState="running";
				attackBox9.style.mozAnimationPlayState="running";
				attackBox9.style.webkitAnimationPlayState="running";
				
				stopHurt2();
				window.clearTimeout(timeouts);
				life5();
			}
			
			reward5.style.display="block";
			
			reward5.style.AnimationPlayState="running";
			reward5.style.MozAnimationPlayState="running";
			reward5.style.WebkitAnimationPlayState="running";
			
		}
		if (data === "attackBox7"){
				
			stopHurt();
			attackBox7.style.zIndex = "-30";

			sparkBox.style.display = "block";
			sparkBox.style.height = "40%";
			sparkBox.style.width = "26%";
			sparkBox.style.left = "23%";
			sparkBox.style.top = "42%";
			
			sparkAnimation();
			
			attackBox7.style.zIndex = "-30";
			
			fire7.style.zIndex = "-30";
			fire7.style.display = "none";
			
			fire7.style.AnimationPlayState="paused";
			fire7.style.MozAnimationPlayState="paused";
			fire7.style.WebkitAnimationPlayState="paused";
			
			light7.style.zIndex = "-30";
			light7.style.display = "none";
			
			light7.style.AnimationPlayState="paused";
			light7.style.MozAnimationPlayState="paused";
			light7.style.WebkitAnimationPlayState="paused";
			
			apes5.style.WebkitAnimationName = "killOrc3";
			apes5.style.MozAnimationName = "killApes3";
			apes5.style.animationName = "killApes3";
			
			apes5.style.WebkitAnimationDelay= "0s";
			apes5.style.MozAnimationNameDelay = "0s";
			apes5.style.animationNameDelay = "0s";
			
			shootBox7.style.AnimationPlayState="running";
			shootBox7.style.MozAnimationPlayState="running";
			shootBox7.style.WebkitAnimationPlayState="running";
			
			shoot7.style.AnimationPlayState="running";
			shoot7.style.MozAnimationPlayState="running";
			shoot7.style.WebkitAnimationPlayState="running";
			
			if(iconNumber === 0){
				
				c[3].style.opacity = "0";
				c[3].style.opacity = "0";
				c[3].style.opacity = "0";
				iconNumber = 1;	
			}
			else if(iconNumber === 1){

				c[2].style.opacity = "0";
				c[2].style.opacity = "0";
				c[2].style.opacity = "0";
				
				
				hiddenBox9.style.animationPlayState="running";
				hiddenBox9.style.mozAnimationPlayState="running";
				hiddenBox9.style.webkitAnimationPlayState="running";
				
				orc4.style.animationPlayState="running";
				orc4.style.mozAnimationPlayState="running";
				orc4.style.webkitAnimationPlayState="running";
				
				light9.style.animationPlayState="running";
				light9.style.mozAnimationPlayState="running";
				light9.style.webkitAnimationPlayState="running";
				
				fire9.style.animationPlayState="running";
				fire9.style.mozAnimationPlayState="running";
				fire9.style.webkitAnimationPlayState="running";
				
				attackBox9.style.animationPlayState="running";
				attackBox9.style.mozAnimationPlayState="running";
				attackBox9.style.webkitAnimationPlayState="running";
			
				stopHurt2();
				window.clearTimeout(timeouts);
				life5();
			}
			
			reward6.style.display="block";
			
			reward6.style.AnimationPlayState="running";
			reward6.style.MozAnimationPlayState="running";
			reward6.style.WebkitAnimationPlayState="running";
		}
		if (data === "attackBox9"){
			
			life3();
			
			sparkBox.style.display = "block";
			sparkBox.style.left = "66%";
			sparkBox.style.top = "45%";
			
			sparkAnimation();
			
			attackBox9.style.zIndex = "-30";
			
			fire9.style.zIndex = "-30";
			fire9.style.display = "none";
			
			fire9.style.animationPlayState="paused";
			fire9.style.mozAnimationPlayState="paused";
			fire9.style.webkitAnimationPlayState="paused";
			
			light9.style.zIndex = "-30";
			light9.style.display = "none";
			
			light9.style.animationPlayState="paused";
			light9.style.mozAnimationPlayState="paused";
			light9.style.webkitAnimationPlayState="paused";
			
			orc4.style.webkitAnimationName = "killOrc3";
			orc4.style.mozAnimationName = "killOrc3";
			orc4.style.animationName = "killOrc3";
			
			orc4.style.webkitanimationDelay = "0s";
			orc4.style.mozanimationDelay = "0s";
			orc4.style.animationDelay = "0s";
			
			c[1].style.opacity = "0";
			c[1].style.opacity = "0";
			c[1].style.opacity = "0";
			
			shootBox9.style.animationPlayState="running";
			shootBox9.style.mozAnimationPlayState="running";
			shootBox9.style.webkitAnimationPlayState="running";
			
			shoot9.style.animationPlayState="running";
			shoot9.style.mozAnimationPlayState="running";
			shoot9.style.webkitAnimationPlayState="running";
			
			reward8.style.display="block";
			
			reward8.style.animationPlayState="running";
			reward8.style.mozAnimationPlayState="running";
			reward8.style.webkitAnimationPlayState="running";
			
			hiddenBox10.style.animationPlayState="running";
			hiddenBox10.style.mozAnimationPlayState="running";
			hiddenBox10.style.webkitAnimationPlayState="running";
			
			apes6.style.animationPlayState="running";
			apes6.style.mozAnimationPlayState="running";
			apes6.style.webkitAnimationPlayState="running";
			
			light10.style.animationPlayState="running";
			light10.style.mozAnimationPlayState="running";
			light10.style.webkitAnimationPlayState="running";
			
			fire10.style.animationPlayState="running";
			fire10.style.mozAnimationPlayState="running";
			fire10.style.webkitAnimationPlayState="running";
			
			attackBox10.style.animationPlayState="running";
			attackBox10.style.mozAnimationPlayState="running";
			attackBox10.style.webkitAnimationPlayState="running";
			
		}
		if (data === "attackBox10"){
			
			stopHurt();
			heart2[0].style.animationPlayState="paused";
			heart2[0].style.mozAnimationPlayState="paused";
			heart2[0].style.webkitAnimationPlayState="paused";
			
			heart1[0].style.animationPlayState="paused";
			heart1[0].style.mozAnimationPlayState="paused";
			heart1[0].style.webkitAnimationPlayState="paused";
			
			heart0[0].style.animationPlayState="paused";
			heart0[0].style.mozAnimationPlayState="paused";
			heart0[0].style.webkitAnimationPlayState="paused";	
			
			
			sparkBox.style.display = "block";
			sparkBox.style.left = "82%";
			sparkBox.style.top = "3%";
			sparkBox.style.height = "33%";
			sparkBox.style.width = "21%";
			
			sparkAnimation();
			
			attackBox10.style.zIndex = "-30";
			
			fire10.style.zIndex = "-30";
			fire10.style.display = "none";
			
			fire10.style.animationPlayState="paused";
			fire10.style.mozAnimationPlayState="paused";
			fire10.style.webkitAnimationPlayState="paused";
			
			light10.style.zIndex = "-30";
			light10.style.display = "none";
			
			light10.style.animationPlayState="paused";
			light10.style.mozAnimationPlayState="paused";
			light10.style.webkitAnimationPlayState="paused";
			
			apes6.style.webkitAnimationName = "killApes3";
			apes6.style.mozAnimationName = "killApes3";
			apes6.style.animationName = "killApes3";
			
			apes6.style.webkitanimationDelay = "0s";
			apes6.style.mozanimationDelay = "0s";
			apes6.style.animationDelay = "0s";
			
			c[0].style.opacity = "0";
			c[0].style.opacity = "0";
			c[0].style.opacity = "0";
			
			shootBox10.style.animationPlayState="running";
			shootBox10.style.mozAnimationPlayState="running";
			shootBox10.style.webkitAnimationPlayState="running";
			
			shoot10.style.animationPlayState="running";
			shoot10.style.mozAnimationPlayState="running";
			shoot10.style.webkitAnimationPlayState="running";
			
			winDetect = requestAnimationFrame(winCount);
		}
		
	}

(function () {
  
	if (window.matchMedia("(orientation: portrait)").matches) {
		
		gameContainer.style.webkitTransform = 'rotate(90deg)'; 
		gameContainer.style.mozTransform    = 'rotate(90deg)'; 
		gameContainer.style.msTransform     = 'rotate(90deg)'; 
		gameContainer.style.oTransform      = 'rotate(90deg)'; 
		gameContainer.style.transform       = 'rotate(90deg)'; 
		
		 window.addEventListener('orientationchange', function() { location.reload(); }, false);
		
		var game = {
		element: document.getElementById("gameContainer"),
		width: 1280,
		height: 720,
		safeWidth: 720,
		safeHeight: 1280
		}
	}

	if (window.matchMedia("(orientation: landscape)").matches) {
	
		gameContainer.style.webkitTransform = 'rotate(0deg)'; 
		gameContainer.style.mozTransform    = 'rotate(0deg)'; 
		gameContainer.style.msTransform     = 'rotate(0deg)'; 
		gameContainer.style.oTransform      = 'rotate(0deg)'; 
		gameContainer.style.transform       = 'rotate(0deg)'; 
	
		 window.addEventListener('orientationchange', function() { location.reload(); }, false);
			
		var game = {
		element: document.getElementById("gameContainer"),
		width: 1280,
		height: 720,
		safeWidth: 1280,
		safeHeight: 720
		}
	}
	
	resizeGame = function () {
	
		var viewport, newGameWidth, newGameHeight, newGameX, newGameY;
						
		viewport = {
			width: window.innerWidth,
			height: window.innerHeight
		};
		
		if (game.height / game.width > viewport.height / viewport.width) {
		
			if (game.safeHeight / game.width > viewport.height / viewport.width) {
			 
			  newGameHeight = viewport.height * game.height / game.safeHeight;
			  newGameWidth = newGameHeight * game.width / game.height;
			} else {
				
			  
			  newGameWidth = viewport.width;
			  newGameHeight = newGameWidth * game.height / game.width;
			}
		} else { 
			if (game.height / game.safeWidth > viewport.height / viewport.width) {
				
				newGameHeight = viewport.height;
				newGameWidth = newGameHeight * game.width / game.height;
			} else {
				 
				
				newGameWidth = viewport.width * game.width / game.safeWidth;
				newGameHeight = newGameWidth * game.height / game.width;
			}
		}
		
		game.element.style.width = newGameWidth + "px";
		game.element.style.height = newGameHeight + "px";
		  
		newGameX = (viewport.width - newGameWidth) / 2;
		newGameY = (viewport.height - newGameHeight) / 2;
				
		game.element.style.margin = newGameY + "px " + newGameX + "px";
	};
window.addEventListener("resize", resizeGame);
resizeGame();
}())
