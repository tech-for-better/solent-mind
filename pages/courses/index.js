import React from 'react';
import { supabase } from '../../utils/supabaseClient';
import Link from 'next/link';
import Header from '../../components/Header';

export default function AllCourses() {
  const [course, setCourse] = React.useState(null);
  async function fetchCourses() {
    const { data, error } = await supabase.from('classes').select('*');
    setCourse(data);
    console.log('courses index', data);
  }

  React.useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <Header />
      <h1>Our Courses</h1>
      <div>
        {course && course[0]
          ? course.map((data) => (
              <section key={data.id}>
                <h2>
                  <Link href="/courses/[name]" as={`/courses/${data.name}`}>
                    {data.name}
                  </Link>
                </h2>
                <p>{data.short_description}</p>
              </section>
            ))
          : 'No courses available!'}
      </div>
    </>
  );
}
