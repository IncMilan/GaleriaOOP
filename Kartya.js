class Kartya {
  constructor(elem, adat) {
    this.elem = elem;
    this.adat = adat;
    this.cim = this.elem.children("h3");
    this.kep = this.elem.children("img");
    this.leiras = this.elem.children("p");

    this.setAdatok(this.adat);

    this.elem.on("click", () => {
      
      this.sajatEsemeny();
    });
  }
  sajatEsemeny() {
    console.log("hello");
    let esemeny = new CustomEvent("kepvalasztas", { detail: this.adat });
    window.dispatchEvent(esemeny);
  }
  setAdatok(ertekek) {
    this.cim.html(ertekek.cim);
    this.kep.attr("src", ertekek.eleresiut);
    this.leiras.html(ertekek.leiras);
  }
}
