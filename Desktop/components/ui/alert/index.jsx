import { Icon } from '@iconify/react';
import { styles } from './index.css';

export default function index() {
    return (
        <div className={styles.dispaly}>
            <div className={styles.toast}>
                <div className={styles.toastContent}>
                    <Icon icon='material-symbols:check-circle-rounded' />
                    <div className={styles.message}>
                        <span className={`${styles.text} ${styles.text1}`}>Success</span>
                        <span className={`${styles.text} ${styles.text2}`}>Your changes has been saved</span>
                    </div>
                </div>
                <Icon icon='mdi:close' />
                <div className={styles.progress} ></div>
            </div>
        </div>
    )
}


const button = document.querySelector("button"),
    toast = document.querySelector(".toast")
closeIcon = document.querySelector(".close"),
    progress = document.querySelector(".progress");

let timer1, timer2;

button.addEventListener("click", () => {
    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
        toast.classList.remove("active");
    }, 5000); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
        progress.classList.remove("active");
    }, 5300);
});

closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
        progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
});
