import { handleClosepop } from "./handler";
import { fetchMemo } from "./main";
import type { Tables } from "./supabase/database.types";
import { supabase } from "./supabase/supabase";

export async function insertMemo({title, description, priority}  : Pick<Tables<"memo">, 'title'|'description'|'priority'>){
	const {error} = await supabase.from('memo').insert({title, description, priority});
	console.log('error : ', error);
	fetchMemo();
	handleClosepop();
}