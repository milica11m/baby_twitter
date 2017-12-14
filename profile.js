var profile = {
	name: "Nemanja",
	lastName: "Jovanović",
	coverPhoto: "http://i.imgur.com/5S5Nyhm.jpg",
	profilePhoto: "https://pbs.twimg.com/profile_images/938561913641775105/ZZmnxU-T_400x400.jpg",
	username: "NemanjaJ91",
	tvitovi: [
		"Kako to da on nije na listi 'Politiko-a' 28 najuticajnihih Evropljana, koji će oblikovati kontinent u 2018. godini? Pa, Evropa će oblikovati njega..",
		"Sloboda je najuzvišeniji ideal. Ko to ne razume, u gadnom je problemu..",
		"'Ne postoji veća žalost od prisećanja na sreću u doba bede.' Dante Aligijeri"
	]
}
var profil = {
	name: "Milica",
	lastName: "Milosavljevic",
	coverPhoto: "https://scontent.fbeg3-1.fna.fbcdn.net/v/t1.0-9/10703843_10204148330102774_1912937178136779163_n.jpg?oh=362182fb09884160c8e6a1faf8e84cb9&oe=5ABD6F87",
	profilePhoto: "https://scontent.fbeg3-1.fna.fbcdn.net/v/t1.0-9/21686308_10212848242715152_2775860179205193735_n.jpg?oh=f738bbeebb13bdb66d1c36fd3bdcd4ba&oe=5AC5F0AB",
	username: "milica11m",
	tvitovi: ["Prvi tvit", "Drugi tvit", "Treci tvit"]
};

var coverImg = document.getElementById("cover_photo");
coverImg.style.backgroundImage = "url('" + profil.coverPhoto + "')";
// coverImg.style.backgroundPosition = "right bottom";
// coverImg.style.backgroundSize = "cover";

var profileImg = document.getElementById("profile_pic");
profileImg.src = profil.profilePhoto;
// profileImg.style.width = "100%";

var fullName = document.getElementById("name");
fullName.innerHTML = profil.name + " " + profil.lastName;

var username = document.getElementById("username");
username.innerHTML = profil.username;

var profileImgMini = document.getElementById("profile_pic_mini");
profileImgMini.src = profil.profilePhoto;
// profileImgMini.style.width = "100%";

var tvitovi = document.getElementById("svi_tvitovi");
for (var i = profil.tvitovi.length - 1; i >= 0; i--) {
	var div = document.createElement("div");
	div.innerHTML = profil.tvitovi[i];
	div.classList.add("tvit");
	tvitovi.appendChild(div);
}