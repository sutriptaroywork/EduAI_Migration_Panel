let appBarHeight = '8rem';
export function scrollTop(element: HTMLElement, selectedId: string, index: number) {
  const documentScrollPos = window.scrollY ?? document.documentElement.scrollTop;
  console.log('smooth', element, element.getBoundingClientRect(), window.screenY);

  // const htmlFontSize = +window
  //   .getComputedStyle(window.document.documentElement)
  //   .getPropertyValue('font-size')
  //   .replace(/[A-Za-z]/g, '');

  const classnameTObeRemoved = ['sticky', 'top-0'];
  const classNameTObeAdd = [`z-[${index + 1 * 10}]`];
  // console.log('class', element.className.includes('sticky'), element.id === selectedId, selectedId);
  if (element.className.includes('sticky') && selectedId.includes(element.id)) {
    element.classList.remove(...classnameTObeRemoved);
  } else {
    element.classList.add(...classNameTObeAdd);
  }
  let finalPos =
    documentScrollPos === element.getBoundingClientRect().top
      ? element.getBoundingClientRect().y
      : element.getBoundingClientRect().top;
  window.scrollTo({
    top: finalPos + documentScrollPos - +appBarHeight.replace(/rem$/, ''),

    // element.getBoundingClientRect().top + documentScrollPos - +appBarHeight.replace(/rem$/, '')*htmlFontSize,
    // +appBarHeight.replace(/rem$/, '') * htmlFontSize,
    behavior: 'smooth',
  });
}
