import { supabase } from "./supabaseClient";

const getUser = async (e) => {
    const {data: { user }} = await supabase.auth.getUser();
    return user;
};

const getSession = async (e) => {
    const { data, error } = await supabase.auth.getSession();
    return {
        data, error
    }
};

const signOut = async (e) => {
// e.preventDefault();
const { error } = await supabase.auth.signOut();
};

const createRoom = async (data) => {
    const {error} = await supabase
        .from('rooms')
        .insert(data)
};

const getAllUsers = async (e) => {
  const { data, error } = await supabase
    .from("rooms")
    .select()
    .eq("is_private", true)
    .eq("is_group", true);
  return data;
};

export { getUser, getSession, signOut, getAllUsers };