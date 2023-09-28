import BannerMain from "@/components/BannerMain";
import {createTranslation} from '@/i18n/server'
import { Fragment } from "react";

export default async function Home({params: {locale}}) {
  const {t} = await createTranslation(locale, 'home');
  return (
    < >
      <BannerMain />
    </>
  );
}
