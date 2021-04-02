export const MainAnimaton = {
  hidden: {
    transform:
      "translate3d(0px, 8vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,5deg)",
    opacity: 0,
  },
  show: {
    transform:
      "translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg)",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    transform:
      "translate3d(0px, 10vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,5deg)",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
