import { PlannerView } from "@/features/planner";
import { getDatabase } from "@/utilities/notion";

import { callendarDatabaseId } from ".";

export const getStaticProps = async () => {
  const credentials = await getDatabase(callendarDatabaseId);
  return {
    props: {
      credentials,
      protected: true,
      userMustBeSelected: true,
      // authenticated: true,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};

export default PlannerView;
