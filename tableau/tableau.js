var tableau_etu = [];
tableau_etu [0] = " Zakaria"
tableau_etu [1] = " Salomé"
tableau_etu [2] = " Océane"
tableau_etu [3] = " Karim"
tableau_etu [4] = " Jimmy"
tableau_etu [5] = " Benoît"
tableau_etu [6] = " Frédéric"
tableau_etu [7] = " Grégory"
tableau_etu [8] = " Camille"
tableau_etu [9] = " Anthony"
tableau_etu [10] = " Cédric"
tableau_etu [11] = " Stéphane"
tableau_etu [12] = " Perrine"
tableau_etu [13] = " Théo"
tableau_etu [14] = " Outman"
tableau_etu [15] = " Halim"
var exemple = "Perrine"

   for (let i = 0; i < tableau_etu.length; i++) {
    document.write(tableau_etu[i])
    if(tableau_etu === 11){
        break;
        
    }
    
   }
document.write("</br></br>")
   const found = tableau_etu.find(element => element == " Théo");
   document.write(found)

console.log(`${exemple}`)