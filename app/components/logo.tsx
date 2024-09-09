export default function LogoIcon(props: { width: string | number | undefined; height: string | number | undefined; href: string}) {
  return (
    <a href={props.href}>
      <img src="/Q-SITE_Toronto.png" alt="Q-SITE" width={props.width} height={props.height}/>
    </a>
  );
}
