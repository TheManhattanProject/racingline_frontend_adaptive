import { useMemo } from "react";
import { useRouter } from "next/router";
import styles from "./PageChange.module.css";
import Image from "next/image";
import Link from "next/link";

const Pagechange = (props) => {
  const router = useRouter();

  const calculation = useMemo(() => {
    var currentPage = props.CurrentPage;
    var noOfPages = props.NoOfPages;
    if (noOfPages <= 5) {
      var pagesArray = [];
      for (let i = 1; i <= noOfPages; i++) {
        if (currentPage == i) {
          pagesArray.push(currentPage);
        } else {
          pagesArray.push(i);
        }
      }
      return pagesArray;
    } else {
      var pagesArray = [];
      if (noOfPages - currentPage <= 2) {
        if (noOfPages - currentPage == 0) {
          pagesArray.push("b4");
          pagesArray.push(currentPage - 3);
          pagesArray.push(currentPage - 2);
          pagesArray.push(currentPage - 1);
          pagesArray.push(currentPage);
        }
        if (noOfPages - currentPage == 1) {
          pagesArray.push("b3");
          pagesArray.push(currentPage - 2);
          pagesArray.push(currentPage - 1);
          pagesArray.push(currentPage);
          pagesArray.push(currentPage + 1);
        }
        if (noOfPages - currentPage == 2) {
          pagesArray.push("b2");
          pagesArray.push(currentPage - 1);
          pagesArray.push(currentPage);
          pagesArray.push(currentPage + 1);
          pagesArray.push(currentPage + 2);
        }
      } else if (currentPage == 1) {
        pagesArray.push(currentPage);
        pagesArray.push(currentPage + 1);
        pagesArray.push(currentPage + 2);
        pagesArray.push(currentPage + 3);
        pagesArray.push("f4");
      } else if (currentPage == 2) {
        pagesArray.push(currentPage - 1);
        pagesArray.push(currentPage);
        pagesArray.push(currentPage + 1);
        pagesArray.push(currentPage + 2);
        pagesArray.push("f3");
      } else {
        pagesArray.push("b2");
        pagesArray.push(currentPage - 1);
        pagesArray.push(`${currentPage}`);
        pagesArray.push(currentPage + 1);
        pagesArray.push("f2");
      }

      return pagesArray;
    }
  }, [props.CurrentPage, props.NoOfPages]);
  return (
    <div className={styles.pagechange}>
      {calculation.map((data, index) => {
        if (data == "b2") {
          return (
            <Link
              key={index}
              style={{ textDecoration: "none" }}
              href={`question_list/?page=${props.CurrentPage - 2}`}
            >
              <div key={data} className={styles.pagechangevalues}>
                {" "}
                {"<"}
              </div>
            </Link>
          );
        }
        if (data == "b3") {
          return (
            <Link
              key={index}
              style={{ textDecoration: "none" }}
              href={`question_list/?page=${props.CurrentPage - 3}`}
            >
              <div key={data} className={styles.pagechangevalues}>
                {" "}
                {"<"}
              </div>
            </Link>
          );
        }
        if (data == "b4") {
          return (
            <Link
              key={index}
              style={{ textDecoration: "none" }}
              href={`question_list/?page=${props.CurrentPage - 4}`}
            >
              <div key={data} className={styles.pagechangevalues}>
                {" "}
                {"<"}
              </div>
            </Link>
          );
        }
        if (data == "f4") {
          return (
            <Link
              key={index}
              style={{ textDecoration: "none" }}
              href={`question_list/?page=${props.CurrentPage + 4}`}
            >
              <div key={data} className={styles.pagechangevalues}>
                {" "}
                {">"}
              </div>
            </Link>
          );
        }
        if (data == "f3") {
          return (
            <Link
              key={index}
              style={{ textDecoration: "none" }}
              href={`question_list/?page=${props.CurrentPage + 3}`}
            >
              <div key={data} className={styles.pagechangevalues}>
                {" "}
                {">"}
              </div>
            </Link>
          );
        }
        if (data == "f2") {
          return (
            <Link
              key={index}
              style={{ textDecoration: "none" }}
              href={`question_list/?page=${props.CurrentPage + 2}`}
            >
              <div key={data} className={styles.pagechangevalues}>
                {" "}
                {">"}
              </div>
            </Link>
          );
        }
        if (data == props.CurrentPage) {
          return (
            <div key={data} className={styles.pagechangevalueselected}>
              <div>
                <Image
                  src="/dstatic/hotquestions/fire.svg"
                  width={86}
                  height={46.22}
                  alt="fireIcon"
				  fill={true}
				  className={styles.setInitialPositionTrue}
                />
              </div>

              <div className={styles.currPage}>{data}</div>
            </div>
          );
        }
        return (
          <Link
            key={index}
            style={{ textDecoration: "none" }}
            href={`question_list/?page=${data}`}
          >
            <div key={data} className={styles.pagechangevalues}>
              {data}
            </div>
          </Link>
        );
      })}
      {/* <div className={styles.rightArrow}>{">"}</div> */}
    </div>
  );
};
export default Pagechange;
