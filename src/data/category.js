import lunch from "../images/lunch.jpg";
import sushi from "../images/sushi.jpg";
import mainCourses from "../images/main-courses.jpg";
import bunPho from "../images/bun-pho.jpg";
import specialities from "../images/specialities.jpg";
import soups from "../images/soup-starters.jpg";
import salads from "../images/salads.jpg";
import sideDishes from "../images/side-dishes.jpg";
import desserts from "../images/deserts.jpg";
import drinks from "../images/drinks.jpg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "oběd",
      slug: "lunch",
      image: {
        fields: {
          file: {
            url: lunch
          }
        }
      }
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "sushi",
      slug: "sushi",
      image: {
        fields: {
          file: {
            url: sushi
          }
        }
      }
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "hlavní chody",
      slug: "main-courses",
      image: {
        fields: {
          file: {
            url: mainCourses
          }
        }
      }
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "bun & pho XXL",
      slug: "bun-pho-xxl",
      image: {
        fields: {
          file: {
            url: bunPho
          }
        }
      }
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "speciality",
      slug: "specialities",
      image: {
        fields: {
          file: {
            url: specialities
          }
        }
      }
    }
  },
  {
    sys: {
      id: "16"
    },
    fields: {
      name: "polévky & předkrmy",
      slug: "soups-starters",
      image: {
        fields: {
          file: {
            url: soups
          }
        }
      }
    }
  },
  {
    sys: {
      id: "18"
    },
    fields: {
      name: "saláty",
      slug: "salads",
      image: {
        fields: {
          file: {
            url: salads
          }
        }
      }
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "přílohy",
      slug: "side-dishes",
      image: {
        fields: {
          file: {
            url: sideDishes
          }
        }
      }
    }
  },
  {
    sys: {
      id: "19"
    },
    fields: {
      name: "deserty",
      slug: "desserts",
      image: {
        fields: {
          file: {
            url: desserts
          }
        }
      }
    }
  },
  {
    sys: {
      id: "22"
    },
    fields: {
      name: "nápoje",
      slug: "drinks",
      image: {
        fields: {
          file: {
            url: drinks
          }
        }
      }
    }
  }
];
