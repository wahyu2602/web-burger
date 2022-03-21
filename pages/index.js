import Layout from "../components/layout/layout.component"
import { Image, Button, Carousel } from 'react-bootstrap'

export default function Home() {
  return (
    <Layout title="Home">
      <div className="row px-5 bg-warning banner">
        <div className="col-lg-6 my-auto">
          <p className="my-auto border-dashed d-inline p-2">IT IS GOOD TIME FOR THE GREAT TASTE OF BURGERS</p>
          <h1 className="mt-3 text-brown text-burger">BURGER</h1>
          <h3 className="text-brown text-week">WEEK</h3>
        </div>
        <div className="col-lg-6 fw-bold img-burger">
          <Image src="./image/banner-burger.png" alt="burger" fluid />
          <Image src="./image/sale.png" alt="sale" fluid className="sale" />
        </div>
      </div>
      <div className="px-5 my-5">
        <div className="row mb-5">
          <div className="col-lg-6 card-image-burger">
            <div className="text-img-burger-one">
              <p>TRY TODAY</p>
              <p className="fs-5">MOST POPULAR BURGER</p>
            </div>
            <Image src="./image/burger-one.png" alt="burgerone" fluid className="rounded" />
          </div>
          <div className="col-lg-6">
            <div className="col mb-4 card-image-burger">
              <div className="text-img-burger-two">
                <p>TRY TODAY</p>
                <p className="fs-5">MORE FUN</p>
                <p className="fs-5">MORE TASTE</p>
              </div>
              <Image src="./image/burger-two.png" alt="burgerone" fluid className="rounded" />
            </div>
            <div className="col pt-2 card-image-burger">
              <div className="text-img-burger-three">
                <p>TRY TODAY</p>
                <p className="fs-5">FRESH & CHILI</p>
              </div>
              <Image src="./image/burger-three.png" alt="burgerone" fluid className="rounded" />
            </div>
          </div>
        </div>
        <div className="col-lg-3 text-center mx-auto">
          <p className="p-3 bg-warning">ALWAYS TASTY BURGER</p>
        </div>
        <h1 className="text-center text-brown fw-bold">CHOOSE & ENJOY</h1>
        <div className="mx-auto text-center col-8">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias illum quia earum iste fugiat labore obcaecati distinctio tempore animi porro.</p>
        </div>
        <div className="row justify-content-between text-center mb-5">
          <div className="col-lg-3">
            <Image src="./image/order-burger-one.png" alt="orderburger" fluid />
            <h3>BURGER ONE</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, facere.</p>
            <Button variant="danger">ORDER NOW</Button>
          </div>
          <div className="col-lg-3">
            <Image src="./image/order-burger-two.png" alt="orderburger" fluid />
            <h3>BURGER TWO</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, facere.</p>
            <Button variant="danger">ORDER NOW</Button>
          </div>
          <div className="col-lg-3">
            <Image src="./image/order-burger-one.png" alt="orderburger" fluid />
            <h3>BURGER THREE</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, facere.</p>
            <Button variant="danger">ORDER NOW</Button>
          </div>
        </div>
        <Carousel variant="dark">
          <Carousel.Item>
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <p className="mt-3">DISCOVER</p>
                <h5 className="fw-bold">UPCOMING EVENTS</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sit. Incidunt nulla ipsam explicabo officia omnis assumenda dolore sequi adipisci laborum consequatur quod fugiat qui veritatis aspernatur ducimus asperiores.</p>
              </div>
              <div className="col-lg-4">
                <img
                  className="d-block w-100"
                  src="./image/c-burger.png"
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <p className="mt-3">DISCOVER</p>
                <h5 className="fw-bold">UPCOMING EVENTS TWO</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sit. Incidunt nulla ipsam explicabo officia omnis assumenda dolore sequi adipisci laborum consequatur quod fugiat qui veritatis aspernatur ducimus asperiores.</p>
              </div>
              <div className="col-lg-4">
                <img
                  className="d-block w-100"
                  src="./image/c-burger.png"
                  alt="Second slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <p className="mt-3">DISCOVER</p>
                <h5 className="fw-bold">UPCOMING EVENTS THREE</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, sit. Incidunt nulla ipsam explicabo officia omnis assumenda dolore sequi adipisci laborum consequatur quod fugiat qui veritatis aspernatur ducimus asperiores.</p>
              </div>
              <div className="col-lg-4">
                <img
                  className="d-block w-100"
                  src="./image/c-burger.png"
                  alt="Third slide"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </Layout>
  )
}
