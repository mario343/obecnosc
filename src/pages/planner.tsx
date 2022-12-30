import { PlannerView } from "../features/planner/index";

export const getStaticProps = () => {
  return {
    props: {
      protected: true,
      userMustBeSelected: true,
    },
  };
};

export default PlannerView;
