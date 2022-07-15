
/* Two Wire */

function wire()
{

    var a1= document.getElementById('unita').value;
    var d1= document.getElementById('unitd').value;
    var εr= document.getElementById('εr').value;
    var μr= document.getElementById('μr').value;
    var δ1= document.getElementById('unitδ').value;
    var σc1= document.getElementById('unitσc').value;
    var σd1= document.getElementById('unitσd').value;


// for a

    if(a1 == "Gm")
    {
        var a= document.getElementById('a').value * 1e9;
    }
    if(a1 == "Mm")
    {
        var a= document.getElementById('a').value * 1e6;
    }
    if(a1 == "Km")
    {
        var a= document.getElementById('a').value * 1e3;
    }
    if(a1 == "m")
    {
        var a= document.getElementById('a').value;
    }
    if(a1 == "mm")
    {
        var a= document.getElementById('a').value * 1e-3;
    }
    if(a1 == "μm")
    {
        var a= document.getElementById('a').value * 1e-6;
    }
    if(a1 == "nm")
    {
        var a= document.getElementById('a').value * 1e-9;
    }
    if(a1 == "Unit")
    {
        alert("Select proper unit for diameter of a.")
    }


// for b

    if(d1 == "Gm")
    {
        var d= document.getElementById('d').value * 1e9;
    }
    if(d1 == "Mm")
    {
        var d= document.getElementById('d').value * 1e6;
    }
    if(d1 == "Km")
    {
        var d= document.getElementById('d').value * 1e3;
    }
    if(d1 == "m")
    {
        var d= document.getElementById('d').value;
    }
    if(d1 == "mm")
    {
        var d= document.getElementById('d').value * 1e-3;
    }
    if(d1 == "μm")
    {
        var d= document.getElementById('d').value * 1e-6;
    }
    if(d1 == "nm")
    {
        var d= document.getElementById('d').value * 1e-9;
    }
    if(d1 == "Unit")
    {
        alert("Select proper unit for diameter of d.")
    }


// for  δ

    if(δ1 == "Gm")
    {
        var δ= document.getElementById('δ').value * 1e9;
    }
    if(δ1 == "Mm")
    {
        var δ= document.getElementById('δ').value * 1e6;
    }
    if(δ1 == "Km")
    {
        var δ= document.getElementById('δ').value * 1e3;
    }
    if(δ1 == "m")
    {
        var δ= document.getElementById('δ').value;
    }
    if(δ1 == "mm")
    {
        var δ= document.getElementById('δ').value * 1e-3;
    }
    if(δ1 == "μm")
    {
        var δ= document.getElementById('δ').value * 1e-6;
    }
    if(δ1 == "nm")
    {
        var δ= document.getElementById('δ').value * 1e-9;
    }



// for σc
     if(σc1 == "Gm")
    {
        var σc= document.getElementById('σc').value * 1e9;
    }
    if( σc1 == "Mm")
    {
        var σc= document.getElementById('σc').value * 1e6;
    }
    if( σc1 == "Km")
    {
        var σc= document.getElementById('σc').value * 1e3;
    }
    if( σc1 == "m")
    {
        var σc= document.getElementById('σc').value;
    }
    if( σc1 == "mm")
    {
        var σc= document.getElementById('σc').value * 1e-3;
    }
    if( σc1 == "μm")
    {
        var σc= document.getElementById('σc').value * 1e-6;
    }
    if( σc1 == "nm")
    {
        var σc= document.getElementById('σc').value * 1e-9;
    }
    if(σc1 == "Unit")
    {
        alert("Select proper unit for conductivity of conductor(σcond).")
    }


// for σd

    if(σd1 == "Gm")
    {
        var σd= document.getElementById('σd').value * 1e9;
    }
    if(σd1 == "Mm")
    {
        var σd= document.getElementById('σd').value * 1e6;
    }
    if(σd1 == "Km")
    {
        var σd= document.getElementById('σd').value * 1e3;
    }
    if(σd1 == "m")
    {
        var σd= document.getElementById('σd').value;
    }
    if(σd1 == "mm")
    {
        var σd= document.getElementById('σd').value * 1e-3;
    }
    if(σd1 == "μm")
    {
        var σd= document.getElementById('σd').value * 1e-6;
    }
    if(σd1 == "nm")
    {
        var σd= document.getElementById('σd').value * 1e-9;
    }
    if(σd1 == "Unit")
    {
        alert("Select proper unit conductivity of dielectric(σdiel).")
    }

     var r = 1 / Math.PI * (a) * parseFloat(σc) * parseFloat(δ);
    //          // var result1 = r;
    //
            var l = (parseFloat(μr) * (12.56* 1e-7)/ Math.PI) * (a) * Math.cosh((d)/2*(a));
    //          var result2 = l;
    //
        var g = (Math.PI * parseFloat(σd)) / (a)* Math.cosh((d)/2*(a));
    //          // var result3 = c;
    //
             var c= (Math.PI * parseFloat(εr)) / (a) * Math.cosh((d) / 2 * (a));
    //       // var result4 = g;







    document.getElementById('result1').value = r;
    document.getElementById('result2').value = c;
    document.getElementById('result3').value = l;
    document.getElementById('result4').value = g;
    console.log(r);
    console.log(c);
    console.log(l);
    console.log(g);

}

// Coax Cable

function coax()
{
    
    var a1= document.getElementById('unita').value;
    var b1= document.getElementById('unitb').value;
    var εr= document.getElementById('εr').value;
    var μr= document.getElementById('μr').value;
    var δ1= document.getElementById('unitδ').value;
    var σc1= document.getElementById('unitσc').value;
    var σd1= document.getElementById('unitσd').value;


// for a

    if(a1 == "Gm")
    {
        var a= document.getElementById('a').value * 1e9;
    }
    if(a1 == "Mm")
    {
        var a= document.getElementById('a').value * 1e6;
    }
    if(a1 == "Km")
    {
        var a= document.getElementById('a').value * 1e3;
    }
    if(a1 == "m")
    {
        var a= document.getElementById('a').value;
    }
    if(a1 == "mm")
    {
        var a= document.getElementById('a').value * 1e-3;
    }
    if(a1 == "μm")
    {
        var a= document.getElementById('a').value * 1e-6;
    }
    if(a1 == "nm")
    {
        var a= document.getElementById('a').value * 1e-9;
    }
    if(a1 == "Unit")
    {
        alert("Select proper unit for diameter of a.")
    }


// for b

    if(b1 == "Gm")
    {
        var b= document.getElementById('b').value * 1e9;
    }
    if(b1 == "Mm")
    {
        var b= document.getElementById('b').value * 1e6;
    }
    if(b1 == "Km")
    {
        var b= document.getElementById('b').value * 1e3;
    }
    if(b1 == "m")
    {
        var b= document.getElementById('b').value;
    }
    if(b1 == "mm")
    {
        var b= document.getElementById('b').value * 1e-3;
    }
    if(b1 == "μm")
    {
        var b= document.getElementById('b').value * 1e-6;
    }
    if(b1 == "nm")
    {
        var b= document.getElementById('b').value * 1e-9;
    }
    if(b1 == "Unit")
    {
        alert("Select proper unit for diameter of b.")
    }


// for  δ

    if(δ1 == "Gm")
    {
        var δ= document.getElementById('δ').value * 1e9;
    }
    if(δ1 == "Mm")
    {
        var δ= document.getElementById('δ').value * 1e6;
    }
    if(δ1 == "Km")
    {
        var δ= document.getElementById('δ').value * 1e3;
    }
    if(δ1 == "m")
    {
        var δ= document.getElementById('δ').value;
    }
    if(δ1 == "mm")
    {
        var δ= document.getElementById('δ').value * 1e-3;
    }
    if(δ1 == "μm")
    {
        var δ= document.getElementById('δ').value * 1e-6;
    }
    if(δ1 == "nm")
    {
        var δ= document.getElementById('δ').value * 1e-9;
    }



// for σc
     if(σc1 == "Gm")
    {
        var σc= document.getElementById('σc').value * 1e9;
    }
    if( σc1 == "Mm")
    {
        var σc= document.getElementById('σc').value * 1e6;
    }
    if( σc1 == "Km")
    {
        var σc= document.getElementById('σc').value * 1e3;
    }
    if( σc1 == "m")
    {
        var σc= document.getElementById('σc').value;
    }
    if( σc1 == "mm")
    {
        var σc= document.getElementById('σc').value * 1e-3;
    }
    if( σc1 == "μm")
    {
        var σc= document.getElementById('σc').value * 1e-6;
    }
    if( σc1 == "nm")
    {
        var σc= document.getElementById('σc').value * 1e-9;
    }
    if(σc1 == "Unit")
    {
        alert("Select proper unit for conductivity of conductor(σcond).")
    }


// for σd

    if(σd1 == "Gm")
    {
        var σd= document.getElementById('σd').value * 1e9;
    }
    if(σd1 == "Mm")
    {
        var σd= document.getElementById('σd').value * 1e6;
    }
    if(σd1 == "Km")
    {
        var σd= document.getElementById('σd').value * 1e3;
    }
    if(σd1 == "m")
    {
        var σd= document.getElementById('σd').value;
    }
    if(σd1 == "mm")
    {
        var σd= document.getElementById('σd').value * 1e-3;
    }
    if(σd1 == "μm")
    {
        var σd= document.getElementById('σd').value * 1e-6;
    }
    if(σd1 == "nm")
    {
        var σd= document.getElementById('σd').value * 1e-9;
    }
    if(σd1 == "Unit")
    {
        alert("Select proper unit conductivity of dielectric(σdiel).")
    }


    

    var r = 1 / (2 * Math.PI * parseFloat(σc) * parseFloat(δ)) * ((1/a)+(1/b));

    var c = (2* Math.PI * εr * 8.85e-12) / (Math.log(b/a));

    var l = ((μr * 12.56e-7)/ (2 * Math.PI)) * (Math.log (b/a))

    var g = (2 * Math.PI * σd) / (Math.log(b/a));


    

    document.getElementById('floatingOutput5').value = r;
    document.getElementById('floatingOutput6').value = c;
    document.getElementById('floatingOutput7').value = l;
    document.getElementById('floatingOutput8').value = g;
    console.log(r);
    console.log(c);
    console.log(l);
    console.log(g);
}

/* Parallel Plate */


function para()
{

// var d= document.getElementById('d').value;
// var w= document.getElementById('w').value;
var er= document.getElementById('er').value;
var ur= document.getElementById('ur').value;
// var σc= document.getElementById('sigmac').value;
// var σd= document.getElementById('sigmad').value;
// var δ= document.getElementById('skindepth').value;
var d1= document.getElementById('unitd').value;
var w1= document.getElementById('unitw').value;
var σc1= document.getElementById('unitsc').value;
var σd1= document.getElementById('unitsd').value;
// var δ1= document.getElementById('unitskd').value;
var f1= document.getElementById('unitf').value;


// for depth d

if(d1=="Gm")
{
    var d= document.getElementById('d').value * 1e9;
}

if(d1=="Mm")
{
    var d= document.getElementById('d').value * 1e6;
}

if(d1=="km")
{
    var d= document.getElementById('d').value * 1e3;
}

if(d1=="m")
{
    var d= document.getElementById('d').value;
}

if(d1=="mm")
{
    var d= document.getElementById('d').value * 1e-3;
}

if(d1=="um")
{
    var d= document.getElementById('d').value * 1e-6;
}

if(d1=="nm")
{
    var d= document.getElementById('d').value * 1e-9;
}


// for frequency f

if(f1=="Thz")
{
    var f= document.getElementById('f').value * 1e12;
}

if(f1=="Ghz")
{
    var f= document.getElementById('f').value * 1e9;
}

if(f1=="Mhz")
{
    var f= document.getElementById('f').value * 1e6;
}

if(f1=="khz")
{
    var f= document.getElementById('f').value * 1e3;
}

if(f1=="m")
{
    var f= document.getElementById('f').value;
}

if(f1=="mhz")
{
    var f= document.getElementById('f').value * 1e-3;
}

if(f1=="uhz")
{
    var f= document.getElementById('f').value * 1e-6;
}

if(f1=="nhz")
{
    var f= document.getElementById('f').value * 1e-9;
}

// for width w

if(w1=="Gm")
{
    var w= document.getElementById('w').value * 1e9;
}

if(w1=="Mm")
{
    var w= document.getElementById('w').value * 1e6;
}

if(w1=="km")
{
    var w= document.getElementById('w').value * 1e3;
}

if(w1=="m")
{
    var w= document.getElementById('w').value;
}

if(w1=="mm")
{
    var w= document.getElementById('w').value * 1e-3;
}

if(w1=="um")
{
    var w= document.getElementById('w').value * 1e-6;
}

if(w1=="nm")
{
    var w= document.getElementById('w').value * 1e-9;
}

// for conductivity of conductor σc   

if(σc1=="Gm")
{
    var σc= document.getElementById('sigmac').value * 1e9;
}

if(σc1=="Mm")
{
    var σc= document.getElementById('sigmac').value * 1e6;
}

if(σc1=="km")
{
    var σc= document.getElementById('sigmac').value * 1e3;
}

if(σc1=="m")
{
    var σc= document.getElementById('sigmac').value;
}

if(σc1=="mm")
{
    var σc= document.getElementById('sigmac').value * 1e-3;
}

if(σc1=="um")
{
    var σc= document.getElementById('sigmac').value * 1e-6;
}

if(σc1=="nm")
{
    var σc= document.getElementById('sigmac').value * 1e-9;
}

// for conductivity of dielectric σd

if(σd1=="Gm")
{
    var σd= document.getElementById('sigmad').value * 1e9;
}

if(σd1=="Mm")
{
    var σd= document.getElementById('sigmad').value * 1e6;
}

if(σd1=="km")
{
    var σd= document.getElementById('sigmad').value * 1e3;
}

if(σd1=="m")
{
    var σd= document.getElementById('sigmad').value;
}

if(σd1=="mm")
{
    var σd= document.getElementById('sigmad').value * 1e-3;
}

if(σd1=="um")
{
    var σd= document.getElementById('sigmad').value * 1e-6;
}

if(σd1=="nm")
{
    var σd= document.getElementById('sigmad').value * 1e-9;
}

// for skindepth δ

// if(δ1=="Gm")
// {
//     var δ= document.getElementById('skindepth').value * 1e9;
// }

// if(δ1=="Mm")
// {
//     var δ= document.getElementById('skindepth').value * 1e6;
// }

// if(δ1=="km")
// {
//     var δ= document.getElementById('skindepth').value * 1e3;
// }

// if(δ1=="m")
// {
//     var δ= document.getElementById('skindepth').value;
// }

// if(δ1=="mm")
// {
//     var δ= document.getElementById('skindepth').value * 1e-3;
// }

// if(δ1=="um")
// {
//     var δ= document.getElementById('skindepth').value * 1e-6;
// }

// if(δ1=="nm")
// {
//     var δ= document.getElementById('skindepth').value * 1e-9;
// }


// var δ=1/(3.14 * σc * 4 * 3.14e-7 * f);

// sk.value=δ

var r=2/(w * parseFloat(σc)* parseFloat(1/Math.sqrt(3.14 * σc * 4 * 3.14e-7 * f)));

var l=(12.56e-7 * ur * d)/w;

var c=(8.85e-12 * er * w)/d;

var g=(σd * w)/d;



document.getElementById('R').value=r;
document.getElementById('L').value=l;
document.getElementById('C').value=c;
document.getElementById('G').value=g;


console.log(r)
console.log(l)
console.log(c)
console.log(g)

}

/******** Microstrip Patch Anttena ********/

function calculate()
{
  var er1 = document.getElementById('numField3').value;
  var er=parseFloat(er1);
  // unit1 for frequency
var unit1= document.getElementById('unitFr').value;
// unit 2 for H
var unit2=document.getElementById('unitH').value;
// for Freq
if(unit1 == "GHz")
  {
      var b1= document.getElementById('numField4').value ;
      var b=parseFloat(b1)*1000000000;
  }
  if(unit1 == "MHz")
  {
      var b1= document.getElementById('numField4').value ;
      var b=parseFloat(b1)*1000000;
  }
  if(unit1 == "KHz")
  {
      var b1= document.getElementById('numField4').value;
      var b=parseFloat(b1)*1000;
  }
  if(unit1 == "Hz")
  {
      var b1= document.getElementById('numField4').value;
      var b=parseFloat(b1);
  }
  if(unit1 == "mHz")
  {
      var b1= document.getElementById('numField4').value ;
      var b=parseFloat(b1)/1000;
  }
  if(unit1 == "μHz")
  {
      var b1= document.getElementById('numField4').value ;
      var b=parseFloat(b1)/1000000;
  }
  if(unit1 == "nHz")
  {
      var b1= document.getElementById('numField4').value ;
      var b=parseFloat(b1)/1000000000;
  }
  if(unit1 == "Unit")
  {
      alert("Select proper unit for  frequency")
  }

// for H
  if(unit2 == "m")
  {
      var a1= document.getElementById('numField5').value;
      var a=parseFloat(a1);
  }
  if(unit2 == "cm")
  {
      var a1= document.getElementById('numField5').value;
      var a=parseFloat(a1)/100;
  }
  if(unit2 == "mm")
  {
      var a1= document.getElementById('numField5').value;
      var a=parseFloat(a1)/1000;
  }
  if(unit2 == "μm")
  {
      var a1= document.getElementById('numField5').value ;
      var a=parseFloat(a1)/1000000;
  }
  if(unit2 == "nm")
  {
      var a1= document.getElementById('numField5').value;
      var a=parseFloat(a1)/1000000000;
  }
  if(unit2 == "Unit")
  {
      alert("Select proper unit of H")
  }

     var result = ((150000000)/b)*(Math.sqrt(2/(er+1)));
     var w = result;
     var width = w*1000

     var result1 = (((er+1)/2)+((er-1)/(2*(Math.sqrt(1+(12*a)/w)))));
     var ereff = result1;
     //dl=extended increamental length
     var x=parseFloat(w/a);
     var x1=parseFloat((ereff+0.3)*(x+0.264))
     var x2=parseFloat((ereff-0.258)*(x+0.8))
     var y=parseFloat(a*0.412)
     var dl= ((y)*(x1))/(x2);
     var Dl=dl*1000;
     // actual length
     var Lac=150000000/((b)*Math.sqrt(ereff))-(2*dl) ;
     var lac=Lac*1000;
     // final effective length
     var L=150000000/((b)*Math.sqrt(ereff));
     var l=L*1000;
  document.getElementById('result1').value = width;
  document.getElementById('result2').value = ereff;
  document.getElementById('result3').value = Dl;
  document.getElementById('result4').value = lac;
  document.getElementById('result5').value = l;
  console.log(width);
  console.log(ereff);
  console.log(Dl);
  console.log(lac);
  console.log(l)
};

/******** Rectangular Waveguide ********/

function rectwave()
{
  // unit1 for radius
var unit1= document.getElementById('unitr').value;
// unit 2 for frequency
var unit2=document.getElementById('unitf').value;
// for Radius

  if(unit1 == "inch")
  {
      var b1= document.getElementById('numField4').value ;
      var b=parseFloat(b1)/39.37;
  }  
  if(unit1 == "m")
  {
      var b1= document.getElementById('numField4').value ;
      var b=parseFloat(b1)*1;
  }
  if(unit1 == "cm")
  {
      var b1= document.getElementById('numField4').value;
      var b=parseFloat(b1)/100;
  }
  if(unit1 == "mm")
  {
      var b1= document.getElementById('numField4').value;
      var b=parseFloat(b1)/1000;
  }
  
  if(unit1 == "Unit")
  {
      alert("Select proper unit for radius")
  }

    var result = ((150000000/b));     
    var f = result;
    var freq;

// for Frequency
  if(unit2 == "GHz")
  {
    freq = f/1000000000;  
  }
  if(unit2 == "MHz")
  {
    freq = f/1000000; 
  }

  if(unit2 == "Unit")
  {
      alert("Select proper unit of frequency")
  }

  document.getElementById('result1').value = freq;
  console.log(freq);

};

/******** Circular Waveguide ********/


function circular()
{
  // unit1 for radius
var unit1= document.getElementById('unitr').value;
// unit 2 for frequency
var unit2=document.getElementById('unitf').value;
// for Radius
if(unit1 == "Km")
  {
      var b1= document.getElementById('numField4').value ;
      var b=parseFloat(b1)*1000;
  }
  if(unit1 == "m")
  {
      var b1= document.getElementById('numField4').value ;
      var b=parseFloat(b1)*1;
  }
  if(unit1 == "cm")
  {
      var b1= document.getElementById('numField4').value;
      var b=parseFloat(b1)/100;
  }
  if(unit1 == "mm")
  {
      var b1= document.getElementById('numField4').value;
      var b=parseFloat(b1)/1000;
  }
  if(unit1 == "μm")
  {
      var b1= document.getElementById('numField4').value ;
      var b=parseFloat(b1)/1000000;
  }
  if(unit1 == "nm")
  {
      var b1= document.getElementById('numField4').value ;
      var b=parseFloat(b1)/1000000000;
  }
  if(unit1 == "Unit")
  {
      alert("Select proper unit for radius")
  }

    var result = ((552360000)/(2*(Math.PI)*b));     
    var f = result;
    var freq;

// for Frequency
  if(unit2 == "GHz")
  {
    freq = f/1000000000;  
  }
  if(unit2 == "MHz")
  {
    freq = f/1000000; 
  }
  if(unit2 == "KHz")
  {
    freq = f/1000; 
  }
  if(unit2 == "Hz")
  {
    freq = f;
  }
  if(unit2 == "mHz")
  {
    freq = f*1000;    
  }
  if(unit2 == "μHz")
  {
    freq = f*1000000;
  }
  if(unit2 == "nHz")
  {
    freq = f*1000000000;
  }
  if(unit2 == "Unit")
  {
      alert("Select proper unit of frequency")
  }

  document.getElementById('result1').value = freq;
  console.log(freq);

};
