import {get} from "https://learndev-student.github.io/VigyMat/web/modules.js";
var url_arr=(window.location.href).split('/');
switch (url_arr[4]){
	case "modules": get(url_arr);
		break;
	//default: main_page().
};
