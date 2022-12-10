import { LightWebStories, LightWebStoriesOptions } from "light-web-stories";

// [
//   "https://habrastorage.org/r/w780/webt/ms/b5/40/msb5402d3egbeqwu0umgemq92we.png",
//   "https://habrastorage.org/r/w780/webt/lh/6w/ea/lh6weaiko17auns0n2vqltdqq5g.png",
//   "https://habrastorage.org/r/w780/webt/7y/9n/cd/7y9ncdqtnro5mfkl04xwij3odzc.png",
//   "https://habrastorage.org/r/w780/webt/ep/hm/83/ephm83ondrxnhk3iw4z86cfkiuy.jpeg",
//   "https://habrastorage.org/r/w780/webt/wl/ad/op/wladopgvhf9pim6glmaw-3bf4ki.jpeg",

//   "https://habrastorage.org/r/w780/webt/v0/md/9e/v0md9efp-gsj_bveto7uwikjeoy.jpeg",
//   "https://habrastorage.org/r/w780/webt/wg/4b/fh/wg4bfh-ogzwe2s1r458z_rnxioi.jpeg",
//   "https://habrastorage.org/r/w780/webt/qa/a4/t5/qaa4t529b-asirgqt8pldojyum8.jpeg",
//   "https://habrastorage.org/r/w780/webt/nl/3k/lk/nl3klkk5gqhpwlypeordbro1v3e.jpeg",
//   "https://habrastorage.org/r/w780/webt/u-/sj/pw/u-sjpwjbr4ltc3mtjcowg8t3_r8.png",
//   "https://habrastorage.org/r/w780/webt/57/dw/uq/57dwuqw1ahtuupcd826foang-yu.png",
//   "https://habrastorage.org/r/w780/webt/ak/mh/dg/akmhdgcqaaczeirau34gcdefpeu.png",
//   "https://habrastorage.org/r/w780/webt/de/ab/ph/deabphss6fwltqbvokj564jr7zq.png",
//   "https://habrastorage.org/r/w780/webt/ph/8l/gz/ph8lgzuuuqbivyzwe3ydvjwn8-g.png ",
//   "https://habrastorage.org/r/w780/webt/m3/rd/ok/m3rdokmdp3aagkj2ou9mcalp6qq.png",
//   "https://habrastorage.org/r/w780/webt/qp/an/mv/qpanmvu-tvvn549uhzy8mr-ppby.png",
//   "https://habrastorage.org/r/w780/webt/iv/qm/kb/ivqmkbqeg0d8ad7oabze5yhbble.png",
//   "https://habrastorage.org/r/w780/webt/xk/ua/pz/xkuapzgkrb-qgkxdkblwrptchou.png",
//   "https://habrastorage.org/r/w780/webt/nv/gs/7-/nvgs7-hmtcwa1rmlctrrt3oucya.png",
//   "https://habrastorage.org/r/w780/webt/vr/qz/mr/vrqzmrpibpvj9j4thvkgkgxtqm8.png",
//   "https://habrastorage.org/r/w780/webt/t-/bx/wk/t-bxwkjvzxaayecf_at_y8nplqy.png",
//   "https://habrastorage.org/r/w780/webt/on/5m/ra/on5mrar8wlo0fualkplhwwlaleu.jpeg",
//   "https://habrastorage.org/r/w780/webt/td/c8/wd/tdc8wdqqr6qi8vf_su56xvn1pvg.jpeg",
//   "https://habrastorage.org/r/w780/webt/pi/qc/gy/piqcgyvh7yjb1shmtpm9kms4_xu.jpeg",
//   "https://habrastorage.org/r/w780/webt/nv/n-/jb/nvn-jbcy2a17_xhsy-nxlsqi0x8.jpeg",
//   "https://habrastorage.org/r/w780/webt/hd/u7/68/hdu768smwczu9_xosagphnehaoy.png",
//   "https://habrastorage.org/r/w780/webt/4c/p_/4l/4cp_4ltj1yhsykv_qkn8tlajc8o.jpeg",
//   "https://habrastorage.org/r/w780/webt/pz/ff/bb/pzffbbzrwpmguztzg-jpza_i8i4.png",
//   "https://habrastorage.org/r/w780/webt/v-/yh/vk/v-yhvk1as5vlinwjhdpujchwe9u.jpeg",
//   "https://habrastorage.org/r/w780/webt/mh/3s/yw/mh3syw01nggrydvhorhtferfbkk.png",
//   "https://habrastorage.org/r/w780/webt/xx/b3/5v/xxb35vnosdrzknksrgcgxzf6vrm.png",
//   "https://habrastorage.org/r/w780/webt/1u/j6/tl/1uj6tlyefwos647gk8zpe2evvr0.png",
//   "https://habrastorage.org/r/w780/webt/sp/pm/wr/sppmwrmp95noveqdtg90gfc8qco.png",
//   "https://habrastorage.org/r/w780/webt/qa/qx/hc/qaqxhcpai_64wgtayfn4zt6vuos.png",
//   "https://habrastorage.org/r/w780/webt/cn/t2/we/cnt2wek2k4fqf8ttidnisqplvvu.png",
//   "https://habrastorage.org/r/w780/webt/09/ff/wl/09ffwljq-8xds7ciu4qlmpc-zxs.jpeg",
//   "https://habrastorage.org/r/w780/webt/zv/mw/o1/zvmwo1lvya2s_3or3gwpndagazi.png",
//   "https://habrastorage.org/r/w780/webt/u9/nb/50/u9nb5028bbp5e3qgwwrtcx9fqoq.jpeg",
//   "https://habrastorage.org/r/w780/webt/t4/y7/y0/t4y7y0wvcjebqlc3cvfwdb6rvvy.png",
// ];

export class App {
  public setup(): void {
    const options: LightWebStoriesOptions = {
      container: document.querySelector("#stories")!,
      items: [
        {
          slideImage:
            "https://habrastorage.org/r/w390/webt/4c/p_/4l/4cp_4ltj1yhsykv_qkn8tlajc8o.jpeg",
          stories: [
            {
              image:
                "https://habrastorage.org/r/w390/webt/4c/p_/4l/4cp_4ltj1yhsykv_qkn8tlajc8o.jpeg",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ms/b5/40/msb5402d3egbeqwu0umgemq92we.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/lh/6w/ea/lh6weaiko17auns0n2vqltdqq5g.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/7y/9n/cd/7y9ncdqtnro5mfkl04xwij3odzc.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ep/hm/83/ephm83ondrxnhk3iw4z86cfkiuy.jpeg",
            },
            {
              image:
                "https://habrastorage.org/r/w390/webt/4c/p_/4l/4cp_4ltj1yhsykv_qkn8tlajc8o.jpeg",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ms/b5/40/msb5402d3egbeqwu0umgemq92we.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/lh/6w/ea/lh6weaiko17auns0n2vqltdqq5g.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/7y/9n/cd/7y9ncdqtnro5mfkl04xwij3odzc.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ep/hm/83/ephm83ondrxnhk3iw4z86cfkiuy.jpeg",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ep/hm/83/ephm83ondrxnhk3iw4z86cfkiuy.jpeg",
            },
          ],
        },
        {
          slideImage:
            "https://habrastorage.org/r/w390/webt/u-/sj/pw/u-sjpwjbr4ltc3mtjcowg8t3_r8.png",
          stories: [
            {
              image:
                "https://habrastorage.org/r/w390/webt/4c/p_/4l/4cp_4ltj1yhsykv_qkn8tlajc8o.jpeg",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ms/b5/40/msb5402d3egbeqwu0umgemq92we.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/lh/6w/ea/lh6weaiko17auns0n2vqltdqq5g.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/7y/9n/cd/7y9ncdqtnro5mfkl04xwij3odzc.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ep/hm/83/ephm83ondrxnhk3iw4z86cfkiuy.jpeg",
            },
          ],
        },
        {
          slideImage:
            "https://habrastorage.org/r/w390/webt/ph/8l/gz/ph8lgzuuuqbivyzwe3ydvjwn8-g.png",
          stories: [
            {
              image:
                "https://habrastorage.org/r/w390/webt/4c/p_/4l/4cp_4ltj1yhsykv_qkn8tlajc8o.jpeg",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ms/b5/40/msb5402d3egbeqwu0umgemq92we.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/lh/6w/ea/lh6weaiko17auns0n2vqltdqq5g.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/7y/9n/cd/7y9ncdqtnro5mfkl04xwij3odzc.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ep/hm/83/ephm83ondrxnhk3iw4z86cfkiuy.jpeg",
            },
          ],
        },
        {
          slideImage:
            "https://habrastorage.org/r/w390/webt/os/rj/tg/osrjtgicrws_wphws-hz5en2wdu.jpeg",
          stories: [
            {
              image:
                "https://habrastorage.org/r/w390/webt/4c/p_/4l/4cp_4ltj1yhsykv_qkn8tlajc8o.jpeg",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ms/b5/40/msb5402d3egbeqwu0umgemq92we.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/lh/6w/ea/lh6weaiko17auns0n2vqltdqq5g.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/7y/9n/cd/7y9ncdqtnro5mfkl04xwij3odzc.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ep/hm/83/ephm83ondrxnhk3iw4z86cfkiuy.jpeg",
            },
          ],
        },
        {
          slideImage:
            "https://habrastorage.org/r/w390/webt/6k/vr/op/6kvropkfedkkzhby_y4kd3hcd2c.png",
          stories: [
            {
              image:
                "https://habrastorage.org/r/w390/webt/4c/p_/4l/4cp_4ltj1yhsykv_qkn8tlajc8o.jpeg",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ms/b5/40/msb5402d3egbeqwu0umgemq92we.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/lh/6w/ea/lh6weaiko17auns0n2vqltdqq5g.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/7y/9n/cd/7y9ncdqtnro5mfkl04xwij3odzc.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ep/hm/83/ephm83ondrxnhk3iw4z86cfkiuy.jpeg",
            },
          ],
        },
        {
          slideImage:
            "https://habrastorage.org/r/w390/webt/on/5m/ra/on5mrar8wlo0fualkplhwwlaleu.jpeg",
          stories: [
            {
              image:
                "https://habrastorage.org/r/w390/webt/4c/p_/4l/4cp_4ltj1yhsykv_qkn8tlajc8o.jpeg",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ms/b5/40/msb5402d3egbeqwu0umgemq92we.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/lh/6w/ea/lh6weaiko17auns0n2vqltdqq5g.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/7y/9n/cd/7y9ncdqtnro5mfkl04xwij3odzc.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ep/hm/83/ephm83ondrxnhk3iw4z86cfkiuy.jpeg",
            },
          ],
        },
        {
          slideImage:
            "https://habrastorage.org/r/w390/webt/nv/n-/jb/nvn-jbcy2a17_xhsy-nxlsqi0x8.jpeg",
          stories: [
            {
              image:
                "https://habrastorage.org/r/w390/webt/4c/p_/4l/4cp_4ltj1yhsykv_qkn8tlajc8o.jpeg",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ms/b5/40/msb5402d3egbeqwu0umgemq92we.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/lh/6w/ea/lh6weaiko17auns0n2vqltdqq5g.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/7y/9n/cd/7y9ncdqtnro5mfkl04xwij3odzc.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ep/hm/83/ephm83ondrxnhk3iw4z86cfkiuy.jpeg",
            },
          ],
        },
        {
          slideImage:
            "https://habrastorage.org/r/w390/webt/hd/u7/68/hdu768smwczu9_xosagphnehaoy.png",
          stories: [
            {
              image:
                "https://habrastorage.org/r/w390/webt/4c/p_/4l/4cp_4ltj1yhsykv_qkn8tlajc8o.jpeg",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ms/b5/40/msb5402d3egbeqwu0umgemq92we.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/lh/6w/ea/lh6weaiko17auns0n2vqltdqq5g.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/7y/9n/cd/7y9ncdqtnro5mfkl04xwij3odzc.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ep/hm/83/ephm83ondrxnhk3iw4z86cfkiuy.jpeg",
            },
          ],
        },
        {
          slideImage:
            "https://habrastorage.org/r/w390/webt/4c/p_/4l/4cp_4ltj1yhsykv_qkn8tlajc8o.jpeg",
          stories: [
            {
              image:
                "https://habrastorage.org/r/w390/webt/4c/p_/4l/4cp_4ltj1yhsykv_qkn8tlajc8o.jpeg",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ms/b5/40/msb5402d3egbeqwu0umgemq92we.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/lh/6w/ea/lh6weaiko17auns0n2vqltdqq5g.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/7y/9n/cd/7y9ncdqtnro5mfkl04xwij3odzc.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ep/hm/83/ephm83ondrxnhk3iw4z86cfkiuy.jpeg",
            },
          ],
        },
        {
          slideImage:
            "https://habrastorage.org/r/w390/webt/pz/ff/bb/pzffbbzrwpmguztzg-jpza_i8i4.png",
          stories: [
            {
              image:
                "https://habrastorage.org/r/w390/webt/4c/p_/4l/4cp_4ltj1yhsykv_qkn8tlajc8o.jpeg",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ms/b5/40/msb5402d3egbeqwu0umgemq92we.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/lh/6w/ea/lh6weaiko17auns0n2vqltdqq5g.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/7y/9n/cd/7y9ncdqtnro5mfkl04xwij3odzc.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ep/hm/83/ephm83ondrxnhk3iw4z86cfkiuy.jpeg",
            },
          ],
        },
        {
          slideImage:
            "https://habrastorage.org/r/w390/webt/v-/yh/vk/v-yhvk1as5vlinwjhdpujchwe9u.jpeg",
          stories: [
            {
              image:
                "https://habrastorage.org/r/w390/webt/4c/p_/4l/4cp_4ltj1yhsykv_qkn8tlajc8o.jpeg",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ms/b5/40/msb5402d3egbeqwu0umgemq92we.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/lh/6w/ea/lh6weaiko17auns0n2vqltdqq5g.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/7y/9n/cd/7y9ncdqtnro5mfkl04xwij3odzc.png",
            },
            {
              image:
                "https://habrastorage.org/r/w780/webt/ep/hm/83/ephm83ondrxnhk3iw4z86cfkiuy.jpeg",
            },
          ],
        },
      ],
    };
    const storiesSdk = new LightWebStories(options);
    storiesSdk.initialize();
  }
}

new App().setup();
