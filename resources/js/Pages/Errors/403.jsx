import App from "@/Layouts/App.jsx";
import AnimatedBackground from "@/Components/AnimatedBackground.jsx";
import {Link} from "@inertiajs/react";

const Error403 = () => {
    return (
      <>
          <AnimatedBackground/>
          <div className="error-page">
              <h1>403</h1>
              <p className="mb-5">
                  Вы не авторизованы
              </p>
              <Link className="btn btn-primary" href={route('home')}>Вернуться на главную</Link>
          </div>
      </>
    );
}

export default Error403;
