const Element = (type: string, attributes = {}, classes: string[] = []) =>
({
  src: (value: string) => Element(type, { ...attributes, src: value }, classes),
  id: (value: string) => Element(type, { ...attributes, id: value }, classes),
  href: (value: string) => Element(type, { ...attributes, href: value }, classes),
  text: (value: string) => Element(type, { ...attributes, textContent: value }, classes),
  class: (...newClasses: string[]) => Element(type, attributes, [...classes].concat(newClasses)),
  fold: () => {
    const elm = document.createElement(type);
    Object.entries(attributes).forEach(([key, value]) => elm[key] = value);
    classes.forEach(className => elm.classList.add(className));
    return elm;
  }
})
