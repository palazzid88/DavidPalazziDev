import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
      <footer style={{ textAlign: 'center', padding: '20px', marginTop: '20px' }}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <p>&copy; David Ezequiél Palazzi. Todos los derechos reservados.</p>
          <Link href="https://wa.me/543364309084" target="_blank">
            <Image src="/images/wtp.png" alt="WhatsApp" width={32} height={32} style={{marginLeft: '10px'}} />
          </Link>
        </div>
        <p>palazzidavid88@gmail.com</p>
        <p>Esta landing Page fue desarrollada con javascript dentro del entorno de trabajo de Next.js</p>
        <p> Desarrollador FullStack MERN.</p>

      </footer>
    );
  }
  