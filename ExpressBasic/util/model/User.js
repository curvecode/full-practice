export default class User {
	_id = '';
	email = '';
	password = '';
	gender = false;

	constructor(object) {
		if (!object) 
			return;
		this._id = object._id || null;
		this.email = object.email || null;
		this.password = object.password || null;
		this.gender = object.gender || null;
	}
}
