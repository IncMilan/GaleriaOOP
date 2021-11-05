$(function(){
    let aktIndex=0;

    const kepAdat=[
        {
            cim:"1. kép címe",
            eleresiut:"kepek/kep1.jpg",
            leiras:"1.kép leírása"
        },
        {
            cim:"2. kép címe",
            eleresiut:"kepek/kep2.png",
            leiras:"2.kép leírása"
        },
        {
            cim:"3. kép címe",
            eleresiut:"kepek/kep3.png",
            leiras:"3.kép leírása"
        }
    ];

    const galeriaSzuloElem=$("#galeria");
    let sablonElem=$(".kartya");

    for (let index = 0; index < kepAdat.length; index++) {
        let ujElem=sablonElem.clone().appendTo(galeriaSzuloElem);
        const ujKartya=new Kartya(ujElem, kepAdat[index]);  
    }
   

    const nagykepSzulo = $("#fokep");
    let ujElem = sablonElem.clone().appendTo(nagykepSzulo);
    const nagyKartya = new Kartya(ujElem, kepAdat[0]);
    sablonElem.remove();

    $(window).on("kepvalasztas", (event)=>{
        nagyKartya.setAdatok(event.detail);
        console.log(event.detail);
    });
    $("#Jobb").on("click", function(){
        aktIndex++;
        if(aktIndex>kepAdat.length -1){
            aktIndex = 0;
        }
        nagyKartya.setAdatok(kepAdat[aktIndex]);
    });
    $("#Bal").on("click", function(){
        aktIndex--;
        if(aktIndex<0){
            aktIndex= kepAdat.length-1;
        }
        nagyKartya.setAdatok(kepAdat[aktIndex]);
    });
});