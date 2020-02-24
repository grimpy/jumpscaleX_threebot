const big_film_set = new webix.DataCollection({
	data: [{"id":1,"title":"The Shawshank Redemption","year":"1994","votes":"678.79","rating":"9.2","rank":"1"},{"id":2,"title":"The Godfather","year":"1972","votes":"511.495","rating":"9.2","rank":"2"},{"id":3,"title":"The Godfather: Part II","year":"1974","votes":"319.352","rating":"9","rank":"3"},{"id":4,"title":"The Good, the Bad and the Ugly","year":"1966","votes":"213.03","rating":"8.9","rank":"4"},{"id":5,"title":"Pulp Fiction","year":"1994","votes":"533.848","rating":"8.9","rank":"5"},{"id":6,"title":"12 Angry Men","year":"1957","votes":"164.558","rating":"8.9","rank":"6"},{"id":7,"title":"Schindler's List","year":"1993","votes":"355.638","rating":"8.9","rank":"7"},{"id":8,"title":"One Flew Over the Cuckoo's Nest","year":"1975","votes":"283.176","rating":"8.8","rank":"8"},{"id":9,"title":"The Dark Knight","year":"2008","votes":"612.37","rating":"8.8","rank":"9"},{"id":10,"title":"The Lord of the Rings: The Return of the Kin","year":"2003","votes":"472.843","rating":"8.8","rank":"10"},{"id":11,"title":"Star Wars: Episode V - The Empire Strikes Bac","year":"1980","votes":"348.012","rating":"8.8","rank":"11"},{"id":12,"title":"Inception","year":"2010","votes":"458.693","rating":"8.8","rank":"12"},{"id":13,"title":"Fight Club","year":"1999","votes":"507.723","rating":"8.8","rank":"13"},{"id":14,"title":"Seven Samurai","year":"1954","votes":"118.925","rating":"8.8","rank":"14"},{"id":15,"title":"Goodfellas","year":"1990","votes":"299.349","rating":"8.7","rank":"15"},{"id":16,"title":"The Lord of the Rings: The Fellowship of the Rin","year":"2001","votes":"494.003","rating":"8.7","rank":"16"},{"id":17,"title":"Star Wars","year":"1977","votes":"393.087","rating":"8.7","rank":"17"},{"id":18,"title":"City of God","year":"2002","votes":"222.818","rating":"8.7","rank":"18"},{"id":19,"title":"Casablanca","year":"1942","votes":"202.051","rating":"8.7","rank":"19"},{"id":20,"title":"Once Upon a Time in the West","year":"1968","votes":"97.931","rating":"8.7","rank":"20"},{"id":21,"title":"The Matrix","year":"1999","votes":"492.325","rating":"8.7","rank":"21"},{"id":22,"title":"Rear Window","year":"1954","votes":"148.162","rating":"8.7","rank":"22"},{"id":23,"title":"Raiders of the Lost Ark","year":"1981","votes":"300.252","rating":"8.7","rank":"23"},{"id":24,"title":"The Silence of the Lambs","year":"1991","votes":"324.419","rating":"8.7","rank":"24"},{"id":25,"title":"The Usual Suspects","year":"1995","votes":"331.99","rating":"8.7","rank":"25"},{"id":26,"title":"Psycho","year":"1960","votes":"182.319","rating":"8.6","rank":"26"},{"id":27,"title":"Se7en","year":"1995","votes":"380.479","rating":"8.6","rank":"27"},{"id":28,"title":"Forrest Gump","year":"1994","votes":"416.066","rating":"8.6","rank":"28"},{"id":29,"title":"The Lord of the Rings: The Two Towers","year":"2002","votes":"423.855","rating":"8.6","rank":"29"}],
	scheme:{
		$init: obj => {
			let pop = [];
			for (let i = 0; i < 13; i++){
				pop.push(Math.floor(Math.random()*80 + 30));
			}
			obj.popularity = pop;
		}
	}
});

export function getFilms(){
	return big_film_set;
}
