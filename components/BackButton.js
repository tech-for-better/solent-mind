import { useRouter } from 'next/router';

const BackButton = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-15 mb-4 mt-4">
        <button
          className="border border-BLUE p-2 rounded shadow-md"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    </>
  );
};
export default BackButton;
