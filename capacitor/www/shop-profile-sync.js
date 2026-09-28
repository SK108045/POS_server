(() => {
  try {
    if (typeof LOCAL_PROFILES_DATA !== 'undefined' && !LOCAL_PROFILES_DATA.profiles.butchery) {
      const retail = LOCAL_PROFILES_DATA.profiles.retail;
      LOCAL_PROFILES_DATA.profiles.butchery = {
        ...retail,
        id: 'butchery',
        name: 'Butchery',
        tagline: 'Fresh Meat & Butchery POS',
        icon: '🥩',
        item_label: 'Products',
        capabilities: {
          ...(retail.capabilities || {}),
          decimal_qty: true,
          units_extended: true,
          stock_tracking: true,
        },
      };
    }

  } catch (err) {
    console.warn('Could not add butchery profile compatibility', err);
  }
})();
