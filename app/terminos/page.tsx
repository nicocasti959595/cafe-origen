import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: `Términos y condiciones de uso del sitio de ${site.brandFull}.`,
  robots: { index: false, follow: true },
};

export default function Terminos() {
  return (
    <LegalLayout title="Términos y condiciones" updated="Junio 2026">
      <p>
        Al utilizar este sitio web y/o consumir productos en {site.brandFull},
        aceptás los siguientes términos y condiciones.
      </p>

      <h2>Productos y servicios</h2>
      <p>
        {site.brandFull} es una cafetería de especialidad ubicada en {site.region}.
        Ofrecemos cafés de elaboración propia, pastelería y brunch para consumir en
        el local o para llevar, venta de café en grano, y servicios de eventos y
        catering. Las fotos de los productos son de carácter ilustrativo.
      </p>

      <h2>Reservas, precios y pedidos</h2>
      <p>
        Las mesas se ocupan por orden de llegada; para grupos o eventos trabajamos
        con reserva previa. Los precios publicados son orientativos y pueden variar;
        el valor final se confirma al momento del pedido. En los pedidos de delivery
        y take away te informamos el tiempo estimado y el costo de envío antes de
        confirmar. Te pedimos avisar con anticipación ante cualquier cancelación de
        una reserva grupal o evento.
      </p>

      <h2>Alérgenos y restricciones alimentarias</h2>
      <p>
        Trabajamos con opciones sin TACC, veganas y leches vegetales, pero nuestra
        cocina manipula gluten, frutos secos, lácteos y otros alérgenos, por lo que
        no podemos garantizar la ausencia total de trazas. Si tenés una alergia o
        condición alimentaria, avisanos antes de tu pedido para asesorarte.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        La información de este sitio es de carácter general y orientativo. Este es
        un sitio de demostración: la marca, los datos de contacto y las reseñas son
        ilustrativos y no corresponden a un establecimiento real habilitado.
      </p>

      <h2>Contacto</h2>
      <p>
        Por consultas sobre estos términos, escribinos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
