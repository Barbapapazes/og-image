import { describe, expect, it } from 'vitest'
import { createResolver } from '@nuxt/kit'
import { $fetch, setup } from '@nuxt/test-utils/e2e'

const { resolve } = createResolver(import.meta.url)

await setup({
  rootDir: resolve('../../../fixtures/basic'),
})
describe('json', () => {
  it('basic', async () => {
    const json = await $fetch('/__og-image__/image/satori/og.json')
    delete json.key
    expect(json).toMatchInlineSnapshot(`
      {
        "cacheKey": "satori:5Hzq5ZrLws",
        "compatibilityHints": [],
        "options": {
          "_query": {},
          "cacheMaxAgeSeconds": 259200,
          "component": "NuxtSeo",
          "emojis": "noto",
          "extension": "png",
          "height": 600,
          "props": {
            "title": "Hello World",
          },
          "renderer": "satori",
          "width": 1200,
        },
        "siteConfig": {
          "url": "https://nuxtseo.com",
        },
        "svg": "<svg width="1200" height="600" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg"><mask id="satori_om-id"><rect x="0" y="0" width="1200" height="600" fill="#fff"/></mask><clipPath id="satori_cp-id-0"><rect x="0" y="0" width="1200" height="600"/></clipPath><mask id="satori_om-id-0"><rect x="0" y="0" width="1200" height="600" fill="#fff"/></mask><mask id="satori_om-id-0-0"><rect x="0" y="0" width="1200" height="600" fill="#fff" mask="url(#satori_om-id-0)"/></mask><rect x="0" y="0" width="1200" height="600" fill="rgb(255, 255, 255)" clip-path="url(#satori_cp-id-0)" mask="url(#satori_om-id-0)"/><defs><pattern id="satori_pattern_id-0-0-0_0" x="0" y="0" width="1" height="1" patternUnits="objectBoundingBox"><radialGradient id="satori_radial_id-0-0-0_0"><stop offset="0" stop-color="rgba(0,220,130,0.5)"/><stop offset="0.5" stop-color="rgba(255,255,255,0.7)"/><stop offset="0.7" stop-color="rgba(255,255,255,0)"/><stop offset="1" stop-color="rgba(255,255,255,0)"/></radialGradient><mask id="satori_mask_id-0-0-0_0"><rect x="0" y="0" width="2160" height="960" fill="#fff"/></mask><rect x="0" y="0" width="2160" height="960" fill="rgba(255,255,255,0)"/><circle cx="1080" cy="480" width="2160" height="960" r="1181.8629362155325" fill="url(#satori_radial_id-0-0-0_0)" mask="url(#satori_mask_id-0-0-0_0)"/></pattern></defs><mask id="satori_om-id-0-0-0"><rect x="120" y="0" width="2160" height="960" fill="#fff" mask="url(#satori_om-id-0)"/></mask><rect x="120" y="0" width="2160" height="960" fill="url(#satori_pattern_id-0-0-0_0)" clip-path="url(#satori_cp-id-0)" mask="url(#satori_om-id-0)"/><mask id="satori_om-id-0-0-1"><rect x="60" y="60" width="1080" height="480" fill="#fff" mask="url(#satori_om-id-0)"/></mask><mask id="satori_om-id-0-0-1-0"><rect x="60" y="60" width="1080" height="121" fill="#fff" mask="url(#satori_om-id-0)"/></mask><mask id="satori_om-id-0-0-1-0-0"><rect x="60" y="60" width="702" height="121" fill="#fff" mask="url(#satori_om-id-0)"/></mask><mask id="satori_om-id-0-0-1-0-0-0"><rect x="60" y="60" width="702" height="91" fill="#fff" mask="url(#satori_om-id-0)"/></mask><path fill="rgb(17, 24, 39)" d="M76.3 130.2L64.7 130.2L64.7 75.7L76.3 75.7L76.3 98.2L99.7 98.2L99.7 75.7L111.2 75.7L111.2 130.2L99.7 130.2L99.7 107.7L76.3 107.7L76.3 130.2ZM139.1 131.0L139.1 131.0Q132.8 131.0 128.3 128.4Q123.7 125.9 121.3 121.1Q118.8 116.4 118.8 109.9L118.8 109.9Q118.8 103.6 121.3 98.9Q123.7 94.1 128.2 91.4Q132.7 88.8 138.7 88.8L138.7 88.8Q142.7 88.8 146.2 90.1Q149.7 91.3 152.4 93.9Q155.0 96.5 156.4 100.4Q157.9 104.3 157.9 109.5L157.9 109.5L157.9 112.6L123.4 112.6L123.4 105.6L147.2 105.6Q147.2 103.2 146.2 101.3Q145.1 99.4 143.2 98.3Q141.3 97.2 138.9 97.2L138.9 97.2Q136.3 97.2 134.3 98.4Q132.3 99.6 131.2 101.6Q130.1 103.6 130.0 106.0L130.0 106.0L130.0 112.7Q130.0 115.7 131.2 117.9Q132.3 120.1 134.4 121.3Q136.5 122.5 139.3 122.5L139.3 122.5Q141.2 122.5 142.8 122.0Q144.3 121.5 145.5 120.4Q146.6 119.3 147.2 117.8L147.2 117.8L157.7 118.5Q156.9 122.3 154.4 125.1Q151.9 127.9 148.1 129.4Q144.2 131.0 139.1 131.0ZM165.3 75.7L176.7 75.7L176.7 130.2L165.3 130.2L165.3 75.7ZM185.7 75.7L197.1 75.7L197.1 130.2L185.7 130.2L185.7 75.7ZM224.6 131.0L224.6 131.0Q218.4 131.0 213.9 128.3Q209.4 125.7 206.9 120.9Q204.5 116.2 204.5 109.9L204.5 109.9Q204.5 103.6 206.9 98.8Q209.4 94.1 213.9 91.4Q218.4 88.8 224.6 88.8L224.6 88.8Q230.8 88.8 235.3 91.4Q239.8 94.1 242.3 98.8Q244.7 103.6 244.7 109.9L244.7 109.9Q244.7 116.2 242.3 120.9Q239.8 125.7 235.3 128.3Q230.8 131.0 224.6 131.0ZM224.6 122.2L224.6 122.2Q227.5 122.2 229.4 120.6Q231.3 119.0 232.2 116.2Q233.2 113.4 233.2 109.8L233.2 109.8Q233.2 106.3 232.2 103.5Q231.3 100.7 229.4 99.0Q227.5 97.4 224.6 97.4L224.6 97.4Q221.8 97.4 219.9 99.0Q217.9 100.7 217.0 103.5Q216.0 106.3 216.0 109.8L216.0 109.8Q216.0 113.4 217.0 116.2Q217.9 119.0 219.9 120.6Q221.8 122.2 224.6 122.2Z M293.3 130.2L282.0 130.2L266.4 75.7L279.0 75.7L288.0 113.6L288.5 113.6L298.4 75.7L309.2 75.7L319.2 113.6L319.7 113.6L328.7 75.7L341.3 75.7L325.7 130.2L314.4 130.2L304.0 94.5L303.6 94.5L293.3 130.2ZM361.3 131.0L361.3 131.0Q355.1 131.0 350.6 128.3Q346.0 125.7 343.6 120.9Q341.1 116.2 341.1 109.9L341.1 109.9Q341.1 103.6 343.6 98.8Q346.0 94.1 350.6 91.4Q355.1 88.8 361.3 88.8L361.3 88.8Q367.5 88.8 372.0 91.4Q376.5 94.1 379.0 98.8Q381.4 103.6 381.4 109.9L381.4 109.9Q381.4 116.2 379.0 120.9Q376.5 125.7 372.0 128.3Q367.5 131.0 361.3 131.0ZM361.3 122.2L361.3 122.2Q364.2 122.2 366.0 120.6Q367.9 119.0 368.9 116.2Q369.9 113.4 369.9 109.8L369.9 109.8Q369.9 106.3 368.9 103.5Q367.9 100.7 366.0 99.0Q364.2 97.4 361.3 97.4L361.3 97.4Q358.5 97.4 356.6 99.0Q354.6 100.7 353.6 103.5Q352.7 106.3 352.7 109.8L352.7 109.8Q352.7 113.4 353.6 116.2Q354.6 119.0 356.6 120.6Q358.5 122.2 361.3 122.2ZM400.2 130.2L388.8 130.2L388.8 89.3L399.8 89.3L399.8 96.4L400.2 96.4Q401.4 92.6 404.0 90.7Q406.6 88.7 410.1 88.7L410.1 88.7Q410.9 88.7 411.9 88.8Q412.9 88.9 413.6 89.1L413.6 89.1L413.6 99.2Q412.8 98.9 411.4 98.7Q410.0 98.6 408.8 98.6L408.8 98.6Q406.3 98.6 404.4 99.6Q402.4 100.7 401.3 102.6Q400.2 104.6 400.2 107.1L400.2 107.1L400.2 130.2ZM419.5 75.7L430.8 75.7L430.8 130.2L419.5 130.2L419.5 75.7ZM454.9 130.9L454.9 130.9Q450.3 130.9 446.5 128.5Q442.8 126.0 440.6 121.3Q438.4 116.6 438.4 109.8L438.4 109.8Q438.4 102.8 440.6 98.1Q442.9 93.4 446.7 91.1Q450.4 88.8 454.9 88.8L454.9 88.8Q458.4 88.8 460.7 89.9Q463.0 91.1 464.4 92.8Q465.8 94.5 466.6 96.2L466.6 96.2L466.9 96.2L466.9 75.7L478.2 75.7L478.2 130.2L467.0 130.2L467.0 123.6L466.6 123.6Q465.8 125.4 464.3 127.0Q462.9 128.7 460.6 129.8Q458.3 130.9 454.9 130.9ZM458.5 121.8L458.5 121.8Q461.3 121.8 463.2 120.3Q465.1 118.8 466.1 116.1Q467.1 113.4 467.1 109.7L467.1 109.7Q467.1 106.1 466.1 103.4Q465.1 100.7 463.2 99.3Q461.3 97.8 458.5 97.8L458.5 97.8Q455.7 97.8 453.8 99.3Q451.9 100.8 450.9 103.5Q449.9 106.2 449.9 109.7L449.9 109.7Q449.9 113.3 450.9 116.0Q451.9 118.8 453.8 120.3Q455.7 121.8 458.5 121.8Z " clip-path="url(#satori_cp-id-0)" mask="url(#satori_om-id-0)"/><mask id="satori_om-id-0-0-1-1"><rect x="60" y="478" width="1080" height="62" fill="#fff" mask="url(#satori_om-id-0)"/></mask><clipPath id="satori_cp-id-0-0-1-1-0" clip-path="url(#satori_cp-id-0)"><rect x="477" y="484" width="50" height="50"/></clipPath><mask id="satori_om-id-0-0-1-1-0"><rect x="477" y="484" width="50" height="50" fill="#fff" mask="url(#satori_om-id-0)"/></mask><image x="477" y="484" width="50" height="50" href="data:image/svg+xml;utf8,%3Csvg  class=%22%22 xmlns=%22http://www.w3.org/2000/svg%22 tw=%22%22 width=%2250%22 height=%2250%22 viewBox=%220 0 200 200%22%3E%3Cpath fill=%22%2300dc82%22 d=%22M62.3,-53.9C74.4,-34.5,73.5,-9,67.1,13.8C60.6,36.5,48.7,56.5,30.7,66.1C12.7,75.7,-11.4,74.8,-31.6,65.2C-51.8,55.7,-67.9,37.4,-73.8,15.7C-79.6,-6,-75.1,-31.2,-61.1,-51C-47.1,-70.9,-23.6,-85.4,0.8,-86C25.1,-86.7,50.2,-73.4,62.3,-53.9Z%22 transform=%22translate(100 100)%22%3E%3C/path%3E%3C/svg%3E" preserveAspectRatio="none" clip-path="url(#satori_cp-id-0-0-1-1-0)" mask="url(#satori_om-id-0-0-1-1-0)"/><mask id="satori_om-id-0-0-1-1-0-0"><rect x="477" y="484" width="0" height="50" fill="#fff" mask="url(#satori_om-id-0)"/></mask><mask id="satori_om-id-0-0-1-1-1"><rect x="539" y="494" width="185" height="30" fill="#fff" mask="url(#satori_om-id-0)"/></mask><path fill="rgb(17, 24, 39)" d="M544.3 509.5L544.3 509.5L544.3 517.4L540.5 517.4L540.5 503.8L544.1 503.8L544.1 506.2L544.3 506.2Q544.7 505.0 545.8 504.3Q546.9 503.6 548.4 503.6L548.4 503.6Q549.8 503.6 550.9 504.2Q551.9 504.8 552.5 506.0Q553.1 507.1 553.1 508.7L553.1 508.7L553.1 517.4L549.3 517.4L549.3 509.4Q549.3 508.1 548.7 507.4Q548.0 506.7 546.9 506.7L546.9 506.7Q546.1 506.7 545.5 507.1Q544.9 507.4 544.6 508.0Q544.3 508.6 544.3 509.5ZM564.8 511.6L564.8 511.6L564.8 503.8L568.6 503.8L568.6 517.4L564.9 517.4L564.9 514.9L564.8 514.9Q564.3 516.1 563.3 516.8Q562.2 517.6 560.7 517.6L560.7 517.6Q559.3 517.6 558.3 517.0Q557.2 516.3 556.6 515.2Q556.1 514.0 556.1 512.4L556.1 512.4L556.1 503.8L559.8 503.8L559.8 511.8Q559.8 513.0 560.5 513.7Q561.1 514.4 562.2 514.4L562.2 514.4Q562.9 514.4 563.5 514.1Q564.1 513.8 564.4 513.1Q564.8 512.5 564.8 511.6ZM570.9 503.8L574.8 503.8L577.3 508.5L579.8 503.8L583.7 503.8L579.8 510.6L583.8 517.4L580.0 517.4L577.3 512.7L574.6 517.4L570.7 517.4L574.8 510.6L570.9 503.8ZM585.0 503.8L593.2 503.8L593.2 506.6L585.0 506.6L585.0 503.8ZM586.9 513.7L586.9 500.5L590.6 500.5L590.6 513.2Q590.6 513.7 590.8 514.0Q591.0 514.3 591.2 514.4Q591.5 514.5 591.9 514.5L591.9 514.5Q592.2 514.5 592.4 514.5Q592.7 514.4 592.9 514.4L592.9 514.4L593.4 517.2Q593.2 517.3 592.6 517.4Q592.1 517.6 591.4 517.6L591.4 517.6Q590.0 517.6 589.0 517.2Q588.0 516.8 587.4 515.9Q586.8 515.0 586.9 513.7L586.9 513.7ZM595.5 508.4L603.7 508.4L603.7 511.4L595.5 511.4L595.5 508.4ZM613.1 517.7L613.1 517.7Q611.1 517.7 609.6 516.8Q608.1 515.9 607.2 514.3Q606.4 512.7 606.4 510.6L606.4 510.6Q606.4 508.5 607.2 506.9Q608.1 505.4 609.6 504.5Q611.1 503.6 613.1 503.6L613.1 503.6Q615.2 503.6 616.7 504.5Q618.2 505.4 619.0 506.9Q619.8 508.5 619.8 510.6L619.8 510.6Q619.8 512.7 619.0 514.3Q618.2 515.9 616.7 516.8Q615.2 517.7 613.1 517.7ZM613.1 514.7L613.1 514.7Q614.1 514.7 614.7 514.2Q615.3 513.7 615.7 512.7Q616.0 511.8 616.0 510.6L616.0 510.6Q616.0 509.4 615.7 508.5Q615.3 507.6 614.7 507.0Q614.1 506.5 613.1 506.5L613.1 506.5Q612.2 506.5 611.6 507.0Q610.9 507.6 610.6 508.5Q610.3 509.4 610.3 510.6L610.3 510.6Q610.3 511.8 610.6 512.7Q610.9 513.7 611.6 514.2Q612.2 514.7 613.1 514.7ZM628.5 522.8L628.5 522.8Q626.6 522.8 625.3 522.3Q624.0 521.8 623.2 520.9Q622.5 520.1 622.2 519.0L622.2 519.0L625.7 518.5Q625.9 518.9 626.2 519.3Q626.6 519.6 627.1 519.9Q627.7 520.1 628.5 520.1L628.5 520.1Q629.8 520.1 630.6 519.5Q631.4 518.9 631.4 517.5L631.4 517.5L631.4 515.0L631.2 515.0Q631.0 515.6 630.5 516.1Q630.0 516.6 629.2 516.9Q628.4 517.2 627.3 517.2L627.3 517.2Q625.8 517.2 624.5 516.5Q623.3 515.8 622.5 514.3Q621.8 512.8 621.8 510.6L621.8 510.6Q621.8 508.2 622.6 506.7Q623.3 505.1 624.6 504.4Q625.8 503.6 627.3 503.6L627.3 503.6Q628.5 503.6 629.2 504.0Q630.0 504.4 630.5 504.9Q631.0 505.5 631.2 506.1L631.2 506.1L631.4 506.1L631.4 503.8L635.1 503.8L635.1 517.5Q635.1 519.3 634.3 520.4Q633.4 521.6 631.9 522.2Q630.4 522.8 628.5 522.8ZM628.5 514.4L628.5 514.4Q629.4 514.4 630.1 513.9Q630.7 513.4 631.1 512.6Q631.4 511.7 631.4 510.5L631.4 510.5Q631.4 509.3 631.1 508.5Q630.7 507.6 630.1 507.1Q629.4 506.6 628.5 506.6L628.5 506.6Q627.6 506.6 627.0 507.1Q626.3 507.6 626.0 508.5Q625.7 509.4 625.7 510.5L625.7 510.5Q625.7 511.7 626.0 512.6Q626.3 513.4 627.0 513.9Q627.6 514.4 628.5 514.4ZM638.3 508.4L646.6 508.4L646.6 511.4L638.3 511.4L638.3 508.4ZM653.6 517.4L649.9 517.4L649.9 503.8L653.6 503.8L653.6 517.4ZM651.8 502.0L651.8 502.0Q650.9 502.0 650.3 501.4Q649.7 500.9 649.7 500.1L649.7 500.1Q649.7 499.3 650.3 498.7Q650.9 498.2 651.8 498.2L651.8 498.2Q652.6 498.2 653.2 498.7Q653.8 499.3 653.8 500.1L653.8 500.1Q653.8 500.9 653.2 501.4Q652.6 502.0 651.8 502.0ZM660.4 517.4L656.7 517.4L656.7 503.8L660.3 503.8L660.3 506.2L660.4 506.2Q660.8 505.0 661.8 504.3Q662.8 503.6 664.2 503.6L664.2 503.6Q665.6 503.6 666.6 504.3Q667.6 505.0 667.9 506.2L667.9 506.2L668.1 506.2Q668.5 505.0 669.6 504.3Q670.7 503.6 672.2 503.6L672.2 503.6Q674.1 503.6 675.3 504.8Q676.5 506.0 676.5 508.2L676.5 508.2L676.5 517.4L672.7 517.4L672.7 509.0Q672.7 507.8 672.1 507.3Q671.5 506.7 670.6 506.7L670.6 506.7Q669.6 506.7 669.0 507.4Q668.4 508.0 668.4 509.1L668.4 509.1L668.4 517.4L664.7 517.4L664.7 508.9Q664.7 507.9 664.2 507.3Q663.6 506.7 662.7 506.7L662.7 506.7Q662.0 506.7 661.5 507.0Q661.0 507.3 660.7 507.9Q660.4 508.5 660.4 509.2L660.4 509.2L660.4 517.4ZM683.3 517.7L683.3 517.7Q682.0 517.7 681.0 517.2Q680.0 516.7 679.4 515.8Q678.8 514.9 678.8 513.6L678.8 513.6Q678.8 512.5 679.2 511.7Q679.7 510.9 680.4 510.4Q681.1 510.0 682.0 509.7Q682.9 509.5 683.9 509.4L683.9 509.4Q685.1 509.3 685.9 509.2Q686.6 509.0 686.9 508.8Q687.2 508.6 687.2 508.2L687.2 508.2L687.2 508.1Q687.2 507.3 686.7 506.8Q686.2 506.3 685.2 506.3L685.2 506.3Q684.2 506.3 683.6 506.8Q683.0 507.2 682.8 507.9L682.8 507.9L679.3 507.6Q679.6 506.4 680.3 505.5Q681.1 504.6 682.4 504.1Q683.6 503.6 685.2 503.6L685.2 503.6Q686.4 503.6 687.4 503.9Q688.5 504.1 689.3 504.7Q690.1 505.2 690.6 506.1Q691.0 507.0 691.0 508.2L691.0 508.2L691.0 517.4L687.4 517.4L687.4 515.5L687.3 515.5Q687.0 516.1 686.5 516.6Q685.9 517.1 685.1 517.4Q684.4 517.7 683.3 517.7ZM684.4 515.0L684.4 515.0Q685.3 515.0 685.9 514.7Q686.5 514.4 686.9 513.8Q687.3 513.2 687.3 512.5L687.3 512.5L687.3 511.1Q687.1 511.2 686.8 511.3Q686.5 511.4 686.1 511.5Q685.7 511.5 685.3 511.6Q685.0 511.6 684.6 511.7L684.6 511.7Q684.0 511.8 683.5 512.0Q683.0 512.2 682.7 512.6Q682.4 512.9 682.4 513.5L682.4 513.5Q682.4 514.2 683.0 514.6Q683.6 515.0 684.4 515.0ZM700.1 522.8L700.1 522.8Q698.3 522.8 697.0 522.3Q695.6 521.8 694.9 520.9Q694.1 520.1 693.9 519.0L693.9 519.0L697.4 518.5Q697.5 518.9 697.9 519.3Q698.2 519.6 698.8 519.9Q699.4 520.1 700.2 520.1L700.2 520.1Q701.4 520.1 702.2 519.5Q703.0 518.9 703.0 517.5L703.0 517.5L703.0 515.0L702.9 515.0Q702.6 515.6 702.1 516.1Q701.6 516.6 700.9 516.9Q700.1 517.2 699.0 517.2L699.0 517.2Q697.5 517.2 696.2 516.5Q694.9 515.8 694.2 514.3Q693.5 512.8 693.5 510.6L693.5 510.6Q693.5 508.2 694.2 506.7Q695.0 505.1 696.2 504.4Q697.5 503.6 699.0 503.6L699.0 503.6Q700.1 503.6 700.9 504.0Q701.7 504.4 702.1 504.9Q702.6 505.5 702.9 506.1L702.9 506.1L703.0 506.1L703.0 503.8L706.8 503.8L706.8 517.5Q706.8 519.3 705.9 520.4Q705.1 521.6 703.6 522.2Q702.1 522.8 700.1 522.8ZM700.2 514.4L700.2 514.4Q701.1 514.4 701.7 513.9Q702.4 513.4 702.7 512.6Q703.1 511.7 703.1 510.5L703.1 510.5Q703.1 509.3 702.7 508.5Q702.4 507.6 701.7 507.1Q701.1 506.6 700.2 506.6L700.2 506.6Q699.3 506.6 698.6 507.1Q698.0 507.6 697.6 508.5Q697.3 509.4 697.3 510.5L697.3 510.5Q697.3 511.7 697.7 512.6Q698.0 513.4 698.6 513.9Q699.3 514.4 700.2 514.4ZM716.0 517.7L716.0 517.7Q713.9 517.7 712.4 516.8Q710.9 516.0 710.1 514.4Q709.2 512.8 709.2 510.6L709.2 510.6Q709.2 508.5 710.1 507.0Q710.9 505.4 712.4 504.5Q713.8 503.6 715.9 503.6L715.9 503.6Q717.2 503.6 718.4 504.0Q719.5 504.4 720.4 505.3Q721.3 506.2 721.8 507.5Q722.3 508.8 722.3 510.5L722.3 510.5L722.3 511.5L710.8 511.5L710.8 509.2L718.7 509.2Q718.7 508.4 718.4 507.8Q718.0 507.1 717.4 506.8Q716.7 506.4 715.9 506.4L715.9 506.4Q715.1 506.4 714.4 506.8Q713.7 507.2 713.4 507.9Q713.0 508.5 713.0 509.3L713.0 509.3L713.0 511.6Q713.0 512.6 713.4 513.3Q713.7 514.0 714.4 514.4Q715.1 514.8 716.1 514.8L716.1 514.8Q716.7 514.8 717.2 514.7Q717.7 514.5 718.1 514.1Q718.5 513.8 718.7 513.3L718.7 513.3L722.2 513.5Q721.9 514.8 721.1 515.7Q720.3 516.6 719.0 517.1Q717.7 517.7 716.0 517.7Z " clip-path="url(#satori_cp-id-0)" mask="url(#satori_om-id-0)"/></svg>",
        "vnodes": {
          "props": {
            "children": [
              {
                "props": {
                  "children": [
                    {
                      "props": {
                        "children": [
                          {
                            "props": {
                              "class": "",
                              "style": {
                                "backgroundImage": "radial-gradient(circle, rgba(0, 220, 130, 0.5) 0%,  rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0) 70%)",
                                "display": "flex",
                                "height": "200%",
                                "position": "absolute",
                                "right": "-100%",
                                "top": "0",
                                "width": "200%",
                              },
                              "tw": "",
                            },
                            "type": "div",
                          },
                          {
                            "props": {
                              "children": [
                                {
                                  "props": {
                                    "children": [
                                      {
                                        "props": {
                                          "children": [
                                            {
                                              "props": {
                                                "children": "Hello World",
                                                "class": "",
                                                "style": {
                                                  "fontSize": "75px",
                                                  "fontWeight": "700",
                                                  "margin": "0",
                                                  "marginBottom": "30px",
                                                },
                                                "tw": "",
                                              },
                                              "type": "h1",
                                            },
                                          ],
                                          "class": "",
                                          "style": {
                                            "display": "flex",
                                            "flexDirection": "column",
                                            "maxWidth": "65%",
                                            "width": "100%",
                                          },
                                          "tw": "",
                                        },
                                        "type": "div",
                                      },
                                    ],
                                    "class": "",
                                    "style": {
                                      "alignItems": "flex-start",
                                      "display": "flex",
                                      "flexDirection": "row",
                                      "justifyContent": "space-between",
                                    },
                                    "tw": "",
                                  },
                                  "type": "div",
                                },
                                {
                                  "props": {
                                    "children": [
                                      null,
                                      {
                                        "props": {
                                          "children": [
                                            {
                                              "props": {
                                                "d": "M62.3,-53.9C74.4,-34.5,73.5,-9,67.1,13.8C60.6,36.5,48.7,56.5,30.7,66.1C12.7,75.7,-11.4,74.8,-31.6,65.2C-51.8,55.7,-67.9,37.4,-73.8,15.7C-79.6,-6,-75.1,-31.2,-61.1,-51C-47.1,-70.9,-23.6,-85.4,0.8,-86C25.1,-86.7,50.2,-73.4,62.3,-53.9Z",
                                                "fill": "#00dc82",
                                                "transform": "translate(100 100)",
                                              },
                                              "type": "path",
                                            },
                                          ],
                                          "class": "",
                                          "height": "50",
                                          "style": {
                                            "marginRight": "0.75rem",
                                          },
                                          "tw": "",
                                          "viewBox": "0 0 200 200",
                                          "width": "50",
                                          "xmlns": "http://www.w3.org/2000/svg",
                                        },
                                        "type": "svg",
                                      },
                                      {
                                        "props": {
                                          "children": "nuxt-og-image",
                                          "class": "",
                                          "style": {
                                            "fontSize": "25px",
                                            "fontWeight": "700",
                                          },
                                          "tw": "",
                                        },
                                        "type": "p",
                                      },
                                    ],
                                    "class": "",
                                    "style": {
                                      "alignItems": "center",
                                      "display": "flex",
                                      "flexDirection": "row",
                                      "justifyContent": "center",
                                      "textAlign": "left",
                                      "width": "100%",
                                    },
                                    "tw": "",
                                  },
                                  "type": "div",
                                },
                              ],
                              "class": "",
                              "style": {
                                "display": "flex",
                                "flexDirection": "column",
                                "height": "100%",
                                "justifyContent": "space-between",
                                "position": "relative",
                                "width": "100%",
                              },
                              "tw": "",
                            },
                            "type": "div",
                          },
                        ],
                        "class": "",
                        "nuxt-ssr-component-uid": "",
                        "style": {
                          "backgroundColor": "rgb(255, 255, 255)",
                          "color": "rgb(17, 24, 39)",
                          "display": "flex",
                          "height": "100%",
                          "justifyContent": "space-between",
                          "padding": "60px",
                          "position": "relative",
                          "width": "100%",
                        },
                        "tw": "",
                      },
                      "type": "div",
                    },
                  ],
                  "style": {
                    "display": "flex",
                    "height": "600px",
                    "margin": "0 auto",
                    "overflow": "hidden",
                    "position": "relative",
                    "width": "1200px",
                  },
                },
                "type": "div",
              },
            ],
            "style": {
              "display": "flex",
              "flexDirection": "column",
              "height": "100%",
              "width": "100%",
            },
          },
          "type": "div",
        },
      }
    `)
  }, 60000)
})
