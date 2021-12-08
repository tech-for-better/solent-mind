import { supabase } from './supabaseClient';

export default async function getClasses({ setUserClasses }) {
  try {
    const user = supabase.auth.user();
    const { data, error, status } = await supabase
      .from('enrolments')
      .select('user_id, course_id, classes("name")')
      .eq('user_id', user.id);
    if (error && status !== 406) {
      throw error;
    }
    console.log(data);

    const classes = data.map((e) => e.classes.name);
    console.log(classes);
    if (data) {
      setUserClasses(classes);
    }
  } catch (error) {
    alert(error.message);
  }
}
