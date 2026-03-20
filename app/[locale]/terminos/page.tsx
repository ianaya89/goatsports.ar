import { Link } from "@/i18n/routing"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TerminosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 flex items-center gap-2 text-sm font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Link>
            </div>

            <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-10">
                <h1 className="text-3xl tablet:text-4xl font-bold text-white">
                  Términos y Condiciones Generales
                </h1>
                <p className="text-blue-100 mt-2">
                  Eventos y Actividades Deportivas – GOAT Sports
                </p>
              </div>

              <div className="px-8 py-10 prose prose-gray max-w-none">
                <section className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                      1
                    </span>
                    Aceptación
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    La inscripción a cualquier evento, campus, clínica o showcase organizado por GOAT
                    Sports implica la aceptación total de los presentes Términos y Condiciones por
                    parte del participante y/o su representante legal.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                      2
                    </span>
                    Participación
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Los eventos están dirigidos a deportistas que cumplan con los requisitos de edad,
                    nivel y condiciones físicas especificadas en cada actividad.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    El participante declara encontrarse en condiciones de salud aptas para la práctica
                    deportiva.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                      3
                    </span>
                    Responsabilidad y Asunción de Riesgo
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    El participante reconoce y acepta los riesgos inherentes a la práctica deportiva,
                    incluyendo, pero no limitándose a, lesiones, caídas, golpes o contacto físico
                    propio del hockey.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    GOAT Sports no se responsabiliza por lesiones derivadas de la práctica deportiva,
                    salvo dolo o negligencia comprobada.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                      4
                    </span>
                    Responsabilidad Médica
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>
                        El participante es responsable de contar con apto médico vigente.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>
                        El participante declara no poseer lesiones o condiciones preexistentes que
                        limiten su participación, o haberlas informado previamente.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>
                        En caso de emergencia, el participante autoriza la atención médica necesaria,
                        incluyendo traslado a un centro de salud si fuera requerido.
                      </span>
                    </li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                      5
                    </span>
                    Seguro
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Se recomienda que cada participante cuente con cobertura médica/deportiva adecuada.
                    GOAT Sports podrá exigir seguro en eventos específicos.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                      6
                    </span>
                    Conducta
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>
                        Se espera comportamiento respetuoso hacia entrenadores, staff y otros
                        participantes.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>
                        GOAT Sports podrá excluir a cualquier participante por conducta inapropiada sin
                        derecho a reembolso.
                      </span>
                    </li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                      7
                    </span>
                    Pagos y Cancelaciones
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>La inscripción queda confirmada una vez realizado el pago.</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>
                        No se realizarán reembolsos salvo cancelación del evento por parte de la
                        organización.
                      </span>
                    </li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                      8
                    </span>
                    Clima y Fuerza Mayor
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    En caso de suspensión por condiciones climáticas, fuerza mayor o situaciones
                    ajenas a la organización, GOAT Sports no estará obligado a realizar reembolsos.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    No obstante, la organización hará sus mejores esfuerzos para reprogramar la
                    actividad o brindar una alternativa equivalente.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                      9
                    </span>
                    Traslados
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    GOAT Sports no se responsabiliza por los traslados hacia o desde el lugar del
                    evento, salvo que se indique expresamente lo contrario.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                      10
                    </span>
                    Uso de Imagen
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    El participante (y/o su representante legal) autoriza a GOAT Sports a:
                  </p>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>
                        Capturar fotografías, videos y material audiovisual durante el evento.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>
                        Utilizar dicho material en redes sociales, sitio web, campañas promocionales y
                        material institucional.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>
                        Ceder dichos derechos sin límite temporal ni territorial, sin compensación
                        económica.
                      </span>
                    </li>
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800 text-sm leading-relaxed">
                      <strong>Nota:</strong> En caso de no aceptar el uso de su imagen, el participante
                      y/o su representante legal deberá informarlo expresamente y de forma previa al
                      inicio del evento al personal de GOAT Sports, a fin de que se puedan tomar las
                      medidas correspondientes.
                    </p>
                  </div>
                </section>

                <section className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                      11
                    </span>
                    Protección de Datos
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Los datos personales serán utilizados únicamente para fines organizativos,
                    comunicación y promoción de actividades de GOAT Sports.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                      12
                    </span>
                    Equipamiento
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    El participante deberá asistir con el equipamiento deportivo adecuado. GOAT Sports
                    no se responsabiliza por pérdida o daño de objetos personales.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                      13
                    </span>
                    Menores de Edad
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    En caso de participantes menores de edad:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>
                        La inscripción deberá ser realizada por un padre, madre o tutor legal.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>
                        El responsable autoriza expresamente la participación del menor en la actividad.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>Se deberá proporcionar un contacto de emergencia.</span>
                    </li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                      14
                    </span>
                    Propiedad Intelectual
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Todo el contenido, metodología y material utilizado en los eventos es propiedad de
                    GOAT Sports y no podrá ser reproducido sin autorización.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold">
                      15
                    </span>
                    Jurisdicción
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Cualquier conflicto será resuelto conforme a las leyes de la República Argentina,
                    sometiéndose a los tribunales ordinarios de la Ciudad de Buenos Aires.
                  </p>
                </section>

                <div className="border-t border-gray-200 pt-8 mt-10">
                  <p className="text-sm text-gray-500 text-center">
                    © {new Date().getFullYear()} GOAT Sports. Todos los derechos reservados.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
