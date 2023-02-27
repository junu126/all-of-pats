import {
  BannerAd,
  BannerAdSize,
  BannerAdProps,
} from 'react-native-google-mobile-ads';

interface Props extends Partial<BannerAdProps> {}

export default function Banner(props: Props) {
  const unitId =
    props.unitId ??
    (() => {
      throw new Error('[Banner]: unitId is required.');

      return '';
    })();

  return (
    <BannerAd
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{ requestNonPersonalizedAdsOnly: true }}
      {...props}
      unitId={unitId}
    />
  );
}
