class Element {
  private readonly type: string;
  private readonly attributes: {};
  private readonly classes: string[];

  private constructor(type: string, attributes: {}, classes: string[]) {
    this.type = type;
    this.attributes = attributes;
    this.classes = classes;
  }

  of(type: string) {
    return new Element(type, {}, []);
  }

  src(value: string) {
    return new Element(this.type, { ...this.attributes, src: value }, this.classes);
  }

  id(value: string) {
    return new Element(this.type, { ...this.attributes, id: value }, this.classes)
  }

  href(value: string) {
    new Element(this.type, { ...this.attributes, href: value }, this.classes)
  }

  text(value: string) {
    new Element(this.type, { ...this.attributes, textContent: value }, this.classes)
  }

  class(...newClasses: string[]) {
    new Element(this.type, this.attributes, [...this.classes].concat(newClasses))
  }

  fold() {
    const elm = document.createElement(this.type);
    Object.entries(this.attributes).forEach(([key, value]) => elm[key] = value);
    this.classes.forEach(className => elm.classList.add(className));
    return elm;
  }
}
