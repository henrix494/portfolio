import { useInView } from "react-intersection-observer";

const useSkillInView = () => {
  return useInView({
    threshold: 1,
    delay: 0,
  });
};

export default useSkillInView;
