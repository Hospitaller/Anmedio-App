$(function () {

	//Tag variables
	let tags = [
		"HTML", "CSS", "Adaptive", "BaseJS", "SQL", "Git", "ESLint",
		"SASS", "Pug", "Gulp", "Webpack", "TDD", "JS", "Canvas", "SVG",
		"Bash", "CICD", "React", "D3", "Vue", "SPA", "ES6", "ThreeJs",
		"WebGL", "ChromeExtensions", "Node", "Express", "Architecture"];

	let tagsMiddle = ["TDD", "JS", "Canvas", "SVG", "Bash", "CICD", "React", "D3", "Vue", "SPA", "ES6",];
	let tagsSenior = ["ThreeJs", "WebGL", "ChromeExtensions", "Node", "Express", "Architecture"];

	//Generate tags DOM nodes
	for (let i = 0; i < tags.length; i++) {
		function createDIV() {

			let mydiv = $('<div/>', {
				class: "tags" + " " + "tag" + tags[i] + " " + "enabledTag",
				text: tags[i]
			});
			$('#tagscloud').append(mydiv);
		}
		createDIV();
	}

	//Deffault sizing Tags
	$.each(tagsSenior, function () {
		$("." + "tag" + this).removeClass().addClass("tags" + " " + "tag" + this + " " + "disabledTag");
	});
	$(".cloud").addClass("tagsSizeM");

	//Slider
	$('#sliderFront').bind("change", function () {

		if ($('#sliderFront').val() == 1) {
			$(".cloud").removeClass().addClass("cloud" + " " + "tagsSizeS");
			$.each(tagsSenior, function () {
				$("." + "tag" + this).removeClass().addClass("tags" + " " + "tag" + this + " " + "animated fadeOut");
			});
			$.each(tagsMiddle, function () {
				$("." + "tag" + this).removeClass().addClass("tags" + " " + "tag" + this + " " + "animated fadeOut");
			});

		} else if ($('#sliderFront').val() == 2) {
			$(".cloud").removeClass().addClass("cloud" + " " + "tagsSizeM");
			$.each(tagsSenior, function () {
				$("." + "tag" + this).removeClass().addClass("tags" + " " + "tag" + this + " " + "animated fadeOut");
			});
			$.each(tagsMiddle, function () {
				$("." + "tag" + this).removeClass().addClass("tags" + " " + "tag" + this + " " + "animated fadeIn");
			});

		} else if ($('#sliderFront').val() == 3) {
			$(".cloud").removeClass().addClass("cloud" + " " + "tagsSizeL");
			$.each(tagsMiddle, function () {
				$("." + "tag" + this).removeClass().addClass("tags" + " " + "tag" + this + " " + "animated fadeIn");
			});
			$.each(tagsSenior, function () {
				$("." + "tag" + this).removeClass().addClass("tags" + " " + "tag" + this + " " + "animated fadeIn");
			});
		}
	});

	//Base file path
	let basePath = "img/";

	//Face file array
	let Face = {
		one1: "head_1_1.png",
		one1Prev: "head_1_1_prev.png",
		one2: "head_1_2.png",
		one2Prev: "head_1_2_prev.png",
		one3: "head_1_3.png",
		one3Prev: "head_1_3_prev.png",
		two1: "head_2_1.png",
		two1Prev: "head_2_1_prev.png",
		two2: "head_2_2.png",
		two2Prev: "head_2_2_prev.png",
		two3: "head_2_3.png",
		two3Prev: "head_2_3_prev.png",
		three1: "head_3_1.png",
		three1Prev: "head_3_1_prev.png",
		three2: "head_3_2.png",
		three2Prev: "head_3_2_prev.png",
		three3: "head_3_3.png",
		three3Prev: "head_3_3_prev.png",
	};

	//Body file array
	let Body = {
		one: "body1.png",
		two: "body2.png",
		three: "body3.png",
	};

	//Control Body
	$(".controlBodyMainBlock").children().click(function (e) {
		e.preventDefault();
		$(".active").removeClass("active").css("border", "1px solid #d6d6d6");
		if ($(this).hasClass("active")) {
			$(this).removeClass("active").css("border", "1px solid #d6d6d6");
		} else {
			$(this).addClass("active").css("border", "3px solid #006bcc");
		};
		if ($(this).hasClass("body1")) {
			$(".controlHeadMainBlock > .head1").addClass("active").css("border", "3px solid #006bcc");
			$(".heroBody > img").attr("src", basePath + Body.one);
			$(".head1 > img").attr("src", basePath + Face.one1Prev);
			$(".head2 > img").attr("src", basePath + Face.one2Prev);
			$(".head3 > img").attr("src", basePath + Face.one3Prev);

		} else if ($(this).hasClass("body2")) {
			$(".controlHeadMainBlock > .head1").addClass("active").css("border", "3px solid #006bcc");
			$(".heroBody > img").attr("src", basePath + Body.two);
			$(".head1 > img").attr("src", basePath + Face.two1Prev);
			$(".head2 > img").attr("src", basePath + Face.two2Prev);
			$(".head3 > img").attr("src", basePath + Face.two3Prev);

		} else if ($(this).hasClass("body3")) {
			$(".controlHeadMainBlock > .head1").addClass("active").css("border", "3px solid #006bcc");
			$(".heroBody > img").attr("src", basePath + Body.three);
			$(".head1 > img").attr("src", basePath + Face.three1Prev);
			$(".head2 > img").attr("src", basePath + Face.three2Prev);
			$(".head3 > img").attr("src", basePath + Face.three3Prev);
		};
	});


	//Control Face
	$(".controlHeadMainBlock").children().click(function (e) {
		e.preventDefault();
		if ($(".body1").hasClass("active")) {

			if ($(this).hasClass("head1")) {
				$(".controlHeadMainBlock > .active").removeClass("active").css("border", "1px solid #d6d6d6");
				if ($(this).hasClass("active")) {
					$(this).removeClass("active").css("border", "1px solid #d6d6d6");
				} else {
					$(this).addClass("active").css("border", "3px solid #006bcc");
				};
				$(".heroFace > img").attr("src", basePath + Face.one1);

			} else if ($(this).hasClass("head2")) {
				$(".controlHeadMainBlock > .active").removeClass("active").css("border", "1px solid #d6d6d6");
				if ($(this).hasClass("active")) {
					$(this).removeClass("active").css("border", "1px solid #d6d6d6");
				} else {
					$(this).addClass("active").css("border", "3px solid #006bcc");
				}
				$(".heroFace > img").attr("src", basePath + Face.one2);

			} else if ($(this).hasClass("head3")) {
				$(".controlHeadMainBlock > .active").removeClass("active").css("border", "1px solid #d6d6d6");
				if ($(this).hasClass("active")) {
					$(this).removeClass("active").css("border", "1px solid #d6d6d6");
				} else {
					$(this).addClass("active").css("border", "3px solid #006bcc");
				}
				$(".heroFace > img").attr("src", basePath + Face.one3);
			}
		} else if ($(".body2").hasClass("active")) {

			if ($(this).hasClass("head1")) {
				$(".controlHeadMainBlock > .active").removeClass("active").css("border", "1px solid #d6d6d6");
				if ($(this).hasClass("active")) {
					$(this).removeClass("active").css("border", "1px solid #d6d6d6");
				} else {
					$(this).addClass("active").css("border", "3px solid #006bcc");
				}
				$(".heroFace > img").attr("src", basePath + Face.two1);

			} else if ($(this).hasClass("head2")) {
				$(".controlHeadMainBlock > .active").removeClass("active").css("border", "1px solid #d6d6d6");
				if ($(this).hasClass("active")) {
					$(this).removeClass("active").css("border", "1px solid #d6d6d6");
				} else {
					$(this).addClass("active").css("border", "3px solid #006bcc");
				}
				$(".heroFace > img").attr("src", basePath + Face.two2)

			} else if ($(this).hasClass("head3")) {
				$(".controlHeadMainBlock > .active").removeClass("active").css("border", "1px solid #d6d6d6");
				if ($(this).hasClass("active")) {
					$(this).removeClass("active").css("border", "1px solid #d6d6d6");
				} else {
					$(this).addClass("active").css("border", "3px solid #006bcc");
				}
				$(".heroFace > img").attr("src", basePath + Face.two3);
			}
		} else if ($(".body3").hasClass("active")) {

			if ($(this).hasClass("head1")) {
				$(".controlHeadMainBlock > .active").removeClass("active").css("border", "1px solid #d6d6d6");
				if ($(this).hasClass("active")) {
					$(this).removeClass("active").css("border", "1px solid #d6d6d6");
				} else {
					$(this).addClass("active").css("border", "3px solid #006bcc");
				}
				$(".heroFace > img").attr("src", basePath + Face.three1);

			} else if ($(this).hasClass("head2")) {
				$(".controlHeadMainBlock > .active").removeClass("active").css("border", "1px solid #d6d6d6");
				if ($(this).hasClass("active")) {
					$(this).removeClass("active").css("border", "1px solid #d6d6d6");
				} else {
					$(this).addClass("active").css("border", "3px solid #006bcc");
				}
				$(".heroFace > img").attr("src", basePath + Face.three2);

			} else if ($(this).hasClass("head3")) {
				$(".controlHeadMainBlock > .active").removeClass("active").css("border", "1px solid #d6d6d6");
				if ($(this).hasClass("active")) {
					$(this).removeClass("active").css("border", "1px solid #d6d6d6");
				} else {
					$(this).addClass("active").css("border", "3px solid #006bcc");
				}
				$(".heroFace > img").attr("src", basePath + Face.three3);
			}
		}
	})
});
