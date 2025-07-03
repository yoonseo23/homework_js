{
  const landingpage = document.querySelector(".landing-page");
  const textList = landingpage.querySelector(".text-section");
  const animationObjects = landingpage.querySelector(".animation");

  const mainText = textList.querySelector(".main-typo");
  const noPrac = mainText.querySelector("#no-practice");
  const noEnhance = mainText.querySelector("#no-enhancement");

  const desc = textList.querySelector(".description");
  const linkList = textList.querySelector(".togo__wrapper");
  const feSchool = linkList.querySelector(".FE-school");
  const curriculum = linkList.querySelector('.curriculum')

  const graphics = animationObjects.querySelector(".graphics");
  const pieces = Array.from(graphics.querySelectorAll('.graphic__pieces'))
  const lines = animationObjects.querySelector(".graphics__lines");
  const lineList = Array.from(lines.querySelectorAll("path"));

  linkList.addEventListener('click', (e) => {
    if(e.target !== feSchool && e.target !== curriculum) return
    if (e.target === feSchool) {
      textAnimation()
    }
    if (e.target === curriculum) {
      graphicAnimation()
    }
  })

  function textAnimation() {
    const textflow = gsap.timeline({
      defaults: { opacity: 0.5, x: -800, ease: "back.out(4)" },
    });

    textflow
      .from(noPrac, { duration: 0.3 })
      .from(noEnhance, { duration: 0.5 })
      .from(desc, { duration: 0.6 });
  }

  

  function graphicAnimation() {
    const graphicsflow = gsap.timeline({
      defaults: { opacity: 0.5, rotation: 540, duration: 0.5, ease: "back.in(4)" },
    });

    graphicsflow
      .from(
        pieces[0],
        { rotation: 0, scale: 2.5, ease: "back.inOut(4)", duration: 0.5 },
        ">"
      ) // main
      .from(pieces[1], {}, 0) // top orange
      .from(pieces[2], {}, 0) // red swt
      .from(pieces[3], { rotation: -540 }, 0) // black top q
      .from(pieces[4], {}, 0) // yellow circ
      .from(pieces[5], {}, 0) // red circ
      .from(pieces[6], { rotation: -540 }, 0) // orange top q
      .from(pieces[7], { rotation: -540 }, 0) // red bottom q
      .from(pieces[8], { rotation: -540 }, 0) // black bottom q
      .from(pieces[9], {}, 0) // red border circ
      .from(pieces[10], { rotation: -540 }, 0) // white bottom q
      .from(pieces[11], {}, 0) // red half
      .from(pieces[12], {}, 0) // red long
      .from(pieces[13], {}, 0) // red line
      .from(pieces[14], {}, 0) // gray swt
      .from(pieces[15], {}, 0); // orange yellow half

    const linesflow = gsap.timeline({
      ease: "power4.in",
      duration: 0.3,
    });

    linesflow
      .from(lineList[1], { y: 500 })
      .from(lineList[0], { y: 500 }, '<')
      .from(lineList[2], { y: 500 }, '<')
      .from(lineList[5], { x: 500 }, '<')
      .from(lineList[4], { x: 500 }, '<')
      .from(lineList[3], { x: 500 }, '<');
  }
  console.log(lineList)

  setTimeout(textAnimation, 500);
  setTimeout(graphicAnimation, 500);
}
