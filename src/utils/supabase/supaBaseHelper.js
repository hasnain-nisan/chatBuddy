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

export { getUser, getSession, signOut };