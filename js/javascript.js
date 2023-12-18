

const team  = [

]



const Angela = {
    name : 'Angela Caroll',
    role : 'Chief Editor',
    image : '<img src="img/angela-caroll-chief-editor.jpg" alt="">'



};


team.push(Angela)

const teamList = document.getElementById("lista")




const Walter = {
    name : 'Walter Gordon',
    role : 'Office Manager',
    image : '<img src="img/walter-gordon-office-manager.jpg" alt="">'



};



team.push(Walter)






const AngelaLopez = {
    name : 'Angela Lopez',
    role : 'Social Media Manager',
    image : '<img src="img/angela-lopez-social-media-manager.jpg" alt="">'



};


team.push(AngelaLopez)



const Scott = {
    name : 'Scott Estrada',
    role : 'Developer',
    image : '<img src="img/scott-estrada-developer.jpg" alt="">'



};


team.push(Scott)




const Barbara = {
    name : 'Barbara Ramos',
    role : 'Graphic Designer',
    image : '<img src="img/barbara-ramos-graphic-designer.jpg" alt="">'



};


team.push(Barbara)






// Manipolazione Dom


for(let i = 0; i < team.length; i++){
    console.log(team[i].name, team[i].role, team[i].image,)

    const nameLi = document.createElement('li')
    const roleLi = document.createElement('li')
    const imageLi = document.createElement('li')
    nameLi.innerHTML = team[i].name;
    roleLi.innerHTML = team[i].role;
    imageLi.innerHTML = team[i].image ;
    teamList.append(nameLi)
    teamList.append(roleLi)
    teamList.append(imageLi)

    
    


}

console.log(team)
