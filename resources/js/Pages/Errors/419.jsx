import App from "@/Layouts/App.jsx";
import AnimatedBackground from "@/Components/AnimatedBackground.jsx";
import {Link} from "@inertiajs/react";

const Error419 = () => {
    return (
      <>
          <AnimatedBackground/>
          <div className="error-page">
              <h1>419</h1>
              <p className="mb-5">
                  Ваш токен устарел. Попробуйте снова.
              </p>
              <Link className="btn btn-primary" href={route('home')}>Вернуться на главную</Link>
          </div>
      </>
    );
}

export default Error419;
