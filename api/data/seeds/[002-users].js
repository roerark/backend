exports.seed = function (knex) {
  return knex("users").insert([
    {
      username: "alexedwards",
      password: "$2a$08$NwRkhNr3yRvy/u9vnMkEW.pxoL.Hqo9dKM5mf1e.6CekhHIsQRtia",
      location_id: 1,
    },
    {
      username: "joepark",
      password: "$2a$08$vfKRxNkhaQk2CToZfV2v1OYi0qKV8LWd/KFDVebDnWct57KuBEfim",
      location_id: 1,
    },
    {
      username: "amanuelgilay",
      password: "$2a$08$RUrt/WGh0C7ClmnSd1PnNesT1gx534tTC.lVWzyJAx4g1wot4v1FG",
      location_id: 1,
    },
    {
      username: "sebastianleal",
      password: "$2a$08$s/prb.BRBjjT91qwJtjc/OH7JMn/I2YQG.Y/dbJQsAmFc5W2Z6Cz.",
      location_id: 1,
    },
    {
      username: "edisonjeon",
      password: "$2a$08$ILnKP26AHH/XkS636pm10OHBZPeIvE.mC.ifThzu6O2u/InlgQOo2",
      location_id: 1,
    },
    {
      username: "ryanquinn",
      password: "$2a$08$nuw9CnVWAuKf44lcYEb1U.Gl5sBdiwKLXi2P.cjVx5VOg14Vhmize",
      location_id: 1,
    },
    {
      username: "umerkaiser",
      password: "$2a$08$pnRrwuQLhNjuSa3gglAfMuxGUTD9/DJJsPQuehfDERuGqxC/MVb36",
      location_id: 1,
    },
  ]);
};
