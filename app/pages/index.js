import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque totam
        exercitationem. Nemo reiciendis necessitatibus nostrum, voluptatem unde
        voluptates laboriosam sunt quia numquam, recusandae dolorem incidunt
        architecto facilis nemo et impedit eveniet dicta sequi quidem ullam quo
        asperiores iste assumenda error quam, reiciendis, quod deleniti illum!
        Accusamus veritatis reprehenderit quas voluptas exercitationem ipsam
        officiis libero itaque provident, nulla cum nobis recusandae aliquid
        ducimus id earum! Nostrum ipsam aspernatur voluptatibus quia tempora ad
        vero tenetur doloribus soluta iste consequatur, veritatis nulla eveniet
        voluptates accusamus hic voluptatem reprehenderit dolores labore
        blanditiis, id laborum fugit modi assumenda! Aliquid accusamus quo
        recusandae. Minus explicabo doloribus minima iste commodi voluptate
        aspernatur veniam eaque laboriosam, autem reiciendis debitis deleniti.
        Quas non, provident corrupti maxime natus aut magni dolorum consequuntur
        rem voluptatem esse ipsa fuga molestias eaque accusamus ratione, error,
        cumque voluptas nihil deleniti eos. Commodi nam voluptatem quod corrupti
        ab debitis accusantium nisi ducimus numquam laborum qui dicta sint nemo
        sit itaque, explicabo modi unde nulla dignissimos, esse odio illo
        eligendi? Exercitationem voluptas quam fuga ipsum, ipsam asperiores et
        dolorem nulla, facilis nesciunt ullam excepturi, est officia quas. At
        vel accusamus est velit nesciunt possimus amet, laboriosam facere,
        voluptatem harum labore voluptate officiis itaque cum quaerat assumenda
        totam maxime aliquam? Nesciunt officiis itaque temporibus reprehenderit
        incidunt voluptas sequi? Tenetur perspiciatis repellat molestias rem,
        qui aperiam accusantium quos? Vel suscipit et nam esse ipsum. Placeat
      </p>
      <Link href="/galaxy/planetsList">
        <a className={styles.btn}>See planet listing</a>
      </Link>
    </div>
  );
}
