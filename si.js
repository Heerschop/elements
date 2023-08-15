if (_sz && _sz.core && _sz.core._isloaded != null) {
  console.log('**** 1');
  if (_sz.core.warn) {
    _sz.core.warn('Script requested to load and execute again, this is not desirable and will be blocked');
  }
} else {
  console.log('**** 2');

  var _sz = _sz || [];
  _sz.push(['accountid', 6004849]);
  _sz.push(['region', 'r1']);
  _sz.push(['endpoint', 'global']);
  _sz.push([
    'custom',
    function () {
      function a() {
        setTimeout(function () {
          _sz.analytics.state.tracked = false;
          _sz.analytics.config.cantrack = true;
          try {
            var d = document.querySelector('#addsearch-q').value;
            var c = document
              .querySelector('.as__number-of-results')
              .innerText.match(/(\d+)\+? Result/)[1]
              .trim();
          } catch (b) {}
          _sz.push(['sw', d]);
          _sz.push(['hits', c]);
          _sz.push(['trackpageview']);
          _sz.push(['notrack', false]);
        }, 3000);
      }
      if (
        window.location.href.indexOf('uva.nl') > -1 &&
        window.location.href.indexOf('search') > -1 &&
        window.location.href.indexOf('?q=') > -1 &&
        ~window.location.href.indexOf('search_page=') > -1
      ) {
        _sz.analytics.config.cantrack = false;
        _sz.analytics.state.tracked = true;
        a();
        setTimeout(function () {
          document.querySelector('#uva-addsearch .c-searchform__submit').addEventListener('mouseup', function (b) {
            if (b.target.matches('button.suggestion')) {
              a();
            }
          });
          document.querySelector('#addsearch-q').addEventListener('keydown', function (b) {
            var c = b.keyCode || b.which;
            if (c === 13) {
              a();
            }
          });
        }, 2000);
      }
    },
    'CollectSearchStats',
  ]);
  _sz.push([
    'heatmap',
    {
      matches: {
        permanent: [
          'https://abs.uva.nl/content/masters/business-administration-marketing/business-administration-marketing.html',
          'https://als.uva.nl/over-de-uva/organisatie/faculteiten/faculteit-der-rechtsgeleerdheid/faculteit-der-rechtsgeleerdheid.html',
          'https://ase.uva.nl/content/masters/economics-behavioural-economics-and-game-theory/economics-behavioural-economics-game-theory.html',
          'https://inspiratie.uva.nl/minor-kiezen/minor-kiezen.html',
          'https://inspiration.uva.nl/choosing-a-minor/choosing-a-minor.html',
          'https://medewerker.uva.nl/fgw/az/a-z.html',
          'https://www.uva.nl',
          'https://www.uva.nl/actueel/coronavirus/coronavirus.html',
          'https://www.uva.nl/en',
          'https://www.uva.nl/en/education/admissions/bachelors/applying-for-a-degree-programme.html',
          'https://www.uva.nl/en/education/bachelor-s/bachelors.html',
          'https://www.uva.nl/en/education/bachelor-s/bachelor-s-programmes/bachelor-s-programmes.html',
          'https://www.uva.nl/en/education/master-s/masters.html',
          'https://www.uva.nl/en/education/master-s/master-s-programmes/masters-programmes.html',
          'https://www.uva.nl/en/education/open-days/bachelors/bachelors-week/bachelors-week.html',
          'https://www.uva.nl/en/education/practical-information/housing/housing.html',
          'https://www.uva.nl/en/programmes/advanced-masters/international-tax-law/career-prospects/career-prospects.html',
          'https://www.uva.nl/en/programmes/advanced-masters/international-tax-law/international-tax-law.html',
          'https://www.uva.nl/en/programmes/bachelors/actuarial-science/actuarial-science.html',
          'https://www.uva.nl/en/programmes/bachelors/media-and-culture/media-and-culture.html',
          'https://www.uva.nl/en/programmes/masters/international-and-european-law-international-trade-and-investment-law/international-trade-and-investment-law.html',
          'https://www.uva.nl/en/programmes/masters/international-and-european-law-public-international-law/public-international-law.html',
          'https://www.uva.nl/en/programmes/masters/law--finance/career-prospects/career-prospects.html',
          'https://www.uva.nl/en/programmes/masters/law--finance/law-and-finance.html',
          'https://www.uva.nl/en/programmes/masters/law--finance/open-house/open-house.html',
          'https://www.uva.nl/en/research/phd/phd.html',
          'https://www.uva.nl/favorieten',
          'https://www.uva.nl/nieuws-agenda/persvoorlichting/experts/oorlog-in-oekraine.html',
          'https://www.uva.nl/onderwijs/bachelor/bachelor',
          'https://www.uva.nl/onderwijs/bachelor/bachelor.html',
          'https://www.uva.nl/onderwijs/bachelor/bacheloropleidingen/bacheloropleidingen.html',
          'https://www.uva.nl/onderwijs/bachelor/bacheloropleidingen/bacheloropleidingen-interessegebied.html',
          'https://www.uva.nl/onderwijs/bachelor/open-dagen/uva-bachelorweek/uva-bachelorweek.html',
          'https://www.uva.nl/onderwijs/bachelor/open-dagen/uva-proefstuderen/uva-proefstuderen.html',
          'https://www.uva.nl/onderwijs/master/master',
          'https://www.uva.nl/onderzoek/onderzoek-aan-de-uva/onderzoek-aan-de-uva.html',
          'https://www.uva.nl/over-de-uva/organisatie/beleid-ondersteuning-medezeggenschap/medezeggenschap.html',
          'https://www.uva.nl/over-de-uva/organisatie/faculteiten/faculteit-der-geesteswetenschappen/faculteit-der-geesteswetenschappen.html',
          'https://www.uva.nl/over-de-uva/organisatie/faculteiten/faculteit-der-rechtsgeleerdheid/alumni/alumni.html',
          'https://www.uva.nl/over-de-uva/organisatie/faculteiten/faculteit-der-rechtsgeleerdheid/faculteit-der-rechtsgeleerdheid.html',
          'https://www.uva.nl/over-de-uva/organisatie/faculteiten/faculteit-der-rechtsgeleerdheid/onderwijs/bacheloropleidingen/bachelors-landingspagina.html',
          'https://www.uva.nl/over-de-uva/organisatie/faculteiten/faculteit-der-rechtsgeleerdheid/onderwijs/masteropleidingen/masters-per-vakgebied/fiscaal-recht/fiscaal-recht.html',
          'https://www.uva.nl/over-de-uva/organisatie/faculteiten/faculteit-der-rechtsgeleerdheid/onderwijs/masteropleidingen/van-master-naar-mr-home.html',
          'https://www.uva.nl/over-de-uva/organisatie/faculteiten/faculteit-der-rechtsgeleerdheid/onderzoek/onderzoek.html',
          'https://www.uva.nl/over-de-uva/organisatie/faculteiten/faculteit-der-rechtsgeleerdheid/over-de-faculteit/over-de-rechtenfaculteit.html',
          'https://www.uva.nl/over-de-uva/organisatie/faculteiten/faculteit-der-rechtsgeleerdheid/over-de-faculteit/werken-bij-rechten',
          'https://www.uva.nl/over-de-uva/organisatie/faculteiten/faculteit-der-rechtsgeleerdheid/over-de-faculteit/werken-bij-rechten.html',
          'https://www.uva.nl/over-de-uva/over-de-universiteit/over-de-universiteit.html',
          'https://www.uva.nl/over-de-uva/werken-bij-de-uva/werken-bij-de-uva',
          'https://www.uva.nl/programmas/bachelors/fiscaal-recht/carriereperspectief/carriereperspectief.html',
          'https://www.uva.nl/programmas/bachelors/fiscaal-recht/online-open-dag/online-open-dag.html',
          'https://www.uva.nl/programmas/bachelors/fiscaal-recht/studieprogramma/studieprogramma.html',
          'https://www.uva.nl/programmas/bachelors/geschiedenis/geschiedenis.html',
          'https://www.uva.nl/programmas/bachelors/rechtsgeleerdheid/carriereperspectief/carriereperspectief.html',
          'https://www.uva.nl/programmas/bachelors/rechtsgeleerdheid/carriereperspectief/masters/masters.html',
          'https://www.uva.nl/programmas/bachelors/rechtsgeleerdheid/open-huis/open-huis.html',
          'https://www.uva.nl/programmas/bachelors/rechtsgeleerdheid/rechtsgeleerdheid.html',
          'https://www.uva.nl/programmas/bachelors/rechtsgeleerdheid/studieprogramma/studieprogramma.html',
          'https://www.uva.nl/programmas/masters/arbeidsrecht/arbeidsrecht.html',
          'https://www.uva.nl/programmas/masters/fiscaal-recht-internationaal-en-europees-belastingrecht/internationaal-en-europees-belastingrecht.html',
          'https://www.uva.nl/programmas/masters/fiscaal-recht-nederlands-belastingrecht/belastingrecht.html',
          'https://www.uva.nl/programmas/masters/fiscaal-recht-nederlands-belastingrecht/carriereperspectief/carriereperspectief.html',
          'https://www.uva.nl/programmas/masters/fiscaal-recht-nederlands-belastingrecht/open-huis/open-huis.html',
          'https://www.uva.nl/programmas/masters/fiscaal-recht-nederlands-belastingrecht/studieprogramma/studieprogramma.html',
          'https://www.uva.nl/programmas/masters/informatierecht/carriereperspectief/alumni-vertellen/alumni.html',
          'https://www.uva.nl/programmas/masters/informatierecht/informatierecht.html',
          'https://www.uva.nl/programmas/masters/privaatrecht-commerciele-rechtspraktijk/commerciele-rechtspraktijk.html',
          'https://www.uva.nl/programmas/masters/privaatrecht-commerciele-rechtspraktijk/open-huis/open-huis.html',
          'https://www.uva.nl/programmas/masters/privaatrecht-commerciele-rechtspraktijk/studieprogramma/studieprogramma.html',
          'https://www.uva.nl/programmas/masters/psychologie/psychologie.html',
          'https://www.uva.nl/programmas/masters/publiekrecht-strafrecht/open-huis/open-huis.html',
          'https://www.uva.nl/programmas/masters/publiekrecht-strafrecht/strafrecht.html',
          'https://www.uva.nl/programmas/masters/publiekrecht-strafrecht/studieprogramma/studieprogramma.html',
          'https://www.uva.nl/programmas/minors/fiscaal-recht/fiscaal-recht.html',
          'https://www.uva.nl/shared-content/faculteiten/nl/faculteit-der-maatschappij-en-gedragswetenschappen/nieuws/2021/09/wetenschappers-lanceren-podcast-over-onderwijs--opvoeding.html',
          'https://student.uva.nl',
          'https://student.uva.nl/artikelen',
          'https://student.uva.nl/content/az/collegegeld/collegegeldtarieven.html',
          'https://student.uva.nl/en',
          'https://student.uva.nl/en/articles',
          'https://student.uva.nl/en/contact/central-student-service-desk/central-student-service-desk.html',
          'https://student.uva.nl/en/contact/digital-student-service-desk/digital-student-service-desk.html',
          'https://student.uva.nl/en/content/az/tuition-fees/tuition-fees.html',
          'https://student.uva.nl/en/events',
          'https://student.uva.nl/en/search',
          'https://student.uva.nl/en/topics',
          'https://student.uva.nl/en/topics/activate-your-uvanetid',
          'https://student.uva.nl/en/topics/course-registration',
          'https://student.uva.nl/events',
          'https://student.uva.nl/fgw',
          'https://student.uva.nl/fgw/az/a-z.html',
          'https://student.uva.nl/fgw/contact/studieadviseurs/studieadviseurs.html',
          'https://student.uva.nl/onderwerpen',
          'https://student.uva.nl/onderwerpen/collegegeld-betalen',
          'https://student.uva.nl/onderwerpen/je-uvanetid-activeren',
          'https://student.uva.nl/onderwerpen/studieadviseur',
          'https://student.uva.nl/onderwerpen/vakaanmelding',
          'https://student.uva.nl/sis/sis.html',
          'https://student.uva.nl/zoeken',
          'https://aac.uva.nl',
          'https://abc.uva.nl',
          'https://abs.uva.nl',
          'https://abs.uva.nl/programmes/executive-programmes/executive-masters/bedrijfskunde-in-deeltijd',
          'https://abs.uva.nl/programmes/executive-programmes/open-programmes/open-programmes.html',
          'https://abv.uva.nl',
          'https://acbi.uva.nl',
          'https://accj.uva.nl',
          'https://acelg.uva.nl',
          'https://aces.uva.nl',
          'https://acgs.uva.nl',
          'https://achi.uva.nl',
          'https://acil.uva.nl',
          'https://acis.uva.nl',
          'https://aclc.uva.nl',
          'https://acle.uva.nl',
          'https://aclpa.uva.nl',
          'https://acmes.uva.nl',
          'https://acsga.uva.nl',
          'https://actl.uva.nl',
          'https://act.uva.nl',
          'https://acuh.uva.nl',
          'https://ahm.uva.nl',
          'https://aias-hsi.uva.nl',
          'https://aice.uva.nl',
          'https://aihr.uva.nl',
          'https://ailc.uva.nl',
          'https://aissr.uva.nl',
          'https://alumni.uva.nl',
          'https://amcis.uva.nl',
          'https://api.uva.nl',
          'https://appr.uva.nl',
          'https://arcgs.uva.nl',
          'https://arils.uva.nl',
          'https://artes.uva.nl',
          'https://asca.uva.nl',
          'https://ascor.uva.nl',
          'https://ase.uva.nl',
          'https://ash.uva.nl',
          'https://buitenland.uva.nl',
          'https://campus.uva.nl',
          'https://career.uva.nl',
          'https://carriere.uva.nl',
          'https://cde.uva.nl',
          'https://cendef.uva.nl',
          'https://c-lab.uva.nl',
          'https://cmsa.uva.nl',
          'https://conflictstudies.uva.nl',
          'https://csds.uva.nl',
          'https://eggens.uva.nl',
          'https://extranet.uva.nl',
          'https://globaldigitalcultures.uva.nl',
          'https://grant-support.uva.nl',
          'https://gscde.uva.nl',
          'https://gsc.uva.nl',
          'https://gsh.uva.nl',
          'https://gsp.uva.nl',
          'https://gsss.uva.nl',
          'https://gss.uva.nl',
          'https://hims.uva.nl',
          'https://houwel.uva.nl',
          'https://ias.uva.nl',
          'https://ibed.uva.nl',
          'https://icto.uva.nl',
          'https://iis.uva.nl',
          'https://imes.uva.nl',
          'https://inspiration.uva.nl/study-in-amsterdam/study-in-amsterdam-oct-2021',
          'https://intt.uva.nl',
          'https://iop.uva.nl',
          'https://is.uva.nl',
          'https://ivi.uva.nl',
          'https://kdvi.uva.nl',
          'https://lab-fmg.uva.nl',
          'https://optimal.uva.nl',
          'https://partnershipforcare.uva.nl',
          'https://pple.uva.nl',
          'https://psc.uva.nl',
          'https://psyres.uva.nl',
          'https://rdm.uva.nl',
          'https://rsp.uva.nl',
          'https://scholen.uva.nl',
          'https://sgel.uva.nl',
          'https://sils.uva.nl',
          'https://smartcs.uva.nl',
          'https://sociale-ontwikkeling.uva.nl',
          'https://ssgh.uva.nl',
          'https://studyabroad.uva.nl',
          'https://tlc.uva.nl',
          'https://uba.uva.nl/home',
          'https://urbanstudies.uva.nl',
          'https://vossius.uva.nl',
          'https://voxpop.uva.nl',
          'https://www.auc.nl/life-at-auc-students/life-at-auc-students.html',
          'https://www.auc.nl/life-at-auc-students/prospective-students/prospective-students.html',
          'https://www.uva.nl/en/campaign/mba-healthcare',
          'https://yield.uva.nl',
          'https://medewerker.uva.nl/bestuursstaf-gde',
          'https://medewerker.uva.nl/bestuursstaf-gde/az/a-z.html',
          'https://medewerker.uva.nl/fdr',
          'https://medewerker.uva.nl/fdr/az/a-z.html',
          'https://medewerker.uva.nl/feb',
          'https://medewerker.uva.nl/feb/az/a-z.html',
          'https://medewerker.uva.nl/fgw',
          'https://medewerker.uva.nl/fmg',
          'https://medewerker.uva.nl/fmg/az/a-z.html',
          'https://medewerker.uva.nl/fnwi',
          'https://medewerker.uva.nl/fnwi/az/a-z.html',
        ],
        include: [],
        exclude: [],
      },
    },
  ]);
  _sz.push([
    'feedbackv2',
    {
      feedbackid: 18774420202,
      layout: {
        colors: {
          background: '#e6e6e6',
          text: '#000000',
          button: '#bc0031',
          buttonText: '#ffffff',
        },
        satisfaction: {
          show: true,
          scale: 2,
        },
        comment: {
          show: true,
          mandatory: false,
        },
        supportLink: true,
        backgroundTransparent: false,
        font: {
          name: 1,
          size: 3,
        },
        state: 2,
        position: 2,
        everyPage: false,
        theme: 1,
        icon: 2,
      },
      matches: {
        include: [
          {
            m: 2,
            s: 'https://student.uva.nl/en',
          },
          {
            m: 2,
            s: 'https://student-dev.ic.uva.nl/en',
          },
          {
            m: 2,
            s: 'https://student-acc.ic.uva.nl/en',
          },
          {
            m: 2,
            s: '\thttp://localhost/en',
          },
        ],
        exclude: [],
      },
      texts: {
        button: 'Submit',
        close: 'Close',
        comment: 'Please include the name of your study programme with your feedback.',
        confirmation: 'Thank you for your feedback.',
        question: 'Feedback',
        title: 'Feedback',
        commentHeader: 'Feedback',
        supportLinkText: 'Contact us',
        supportUrl: 'https://student.uva.nl/en/topics/contact',
        errors: {
          grade: 'Please choose a rating',
          comment: null,
        },
        dontShowAgain: null,
      },
      behavior: {
        showOnDevices: 3,
        removeOnClose: false,
        dontShowAgainButtonVisible: false,
      },
    },
  ]);
  _sz.push([
    'feedbackv2',
    {
      feedbackid: 18774704850,
      layout: {
        colors: {
          background: '#e6e6e6',
          text: '#000000',
          button: '#bc0031',
          buttonText: '#ffffff',
        },
        satisfaction: {
          show: true,
          scale: 2,
        },
        comment: {
          show: true,
          mandatory: false,
        },
        supportLink: true,
        backgroundTransparent: false,
        font: {
          name: 1,
          size: 3,
        },
        state: 2,
        position: 2,
        everyPage: false,
        theme: 1,
        icon: 2,
      },
      matches: {
        include: [
          {
            m: 4,
            s: 'https://student.uva.nl/rooster',
          },
          {
            m: 4,
            s: 'https://student.uva.nl/apps',
          },
          {
            m: 2,
            s: 'https://student.uva.nl/onderwerpen',
          },
          {
            m: 2,
            s: 'https://student.uva.nl/artikelen',
          },
          {
            m: 2,
            s: 'https://student.uva.nl/events',
          },
          {
            m: 2,
            s: 'https://student.uva.nl/testimonials',
          },
          {
            m: 4,
            s: 'https://student.uva.nl',
          },
          {
            m: 2,
            s: 'https://student.uva.nl',
          },
          {
            m: 2,
            s: 'http://localhost:3000',
          },
          {
            m: 1,
            s: 'https://student-dev.ic.uva.nl',
          },
          {
            m: 1,
            s: 'https://student-acc.ic.uva.nl',
          },
          {
            m: 2,
            s: 'http://localhost',
          },
        ],
        exclude: [],
      },
      texts: {
        button: 'Verstuur',
        close: 'Sluit',
        comment: 'Laat hier je feedback achter. Zet er duidelijk bij om welke opleiding het gaat.',
        confirmation: 'Bedankt voor je feedback',
        question: 'Feedback',
        title: 'Feedback',
        commentHeader: null,
        supportLinkText: 'Neem contact op',
        supportUrl: 'https://student.uva.nl/onderwerpen/contact',
        errors: {
          grade: ' Kies een beoordeling a.u.b.',
          comment: null,
        },
        dontShowAgain: null,
      },
      behavior: {
        showOnDevices: 3,
        removeOnClose: false,
        dontShowAgainButtonVisible: false,
      },
    },
  ]);
  _sz.push([
    'feedbackv2',
    {
      feedbackid: 18684323682,
      layout: {
        colors: {
          background: '#e6e6e6',
          text: '#000000',
          button: '#bc0031',
          buttonText: '#FFFFFF',
        },
        satisfaction: {
          show: true,
          scale: 7,
        },
        comment: {
          show: true,
          mandatory: false,
        },
        supportLink: false,
        backgroundTransparent: false,
        font: {
          name: 1,
          size: 3,
        },
        state: 2,
        position: 1,
        everyPage: false,
        theme: 1,
        icon: 2,
      },
      matches: {
        include: [
          {
            m: 1,
            s: 'uva.nl',
          },
        ],
        exclude: [],
      },
      texts: {
        button: 'Submit',
        close: 'Close',
        comment: 'Please leave your feedback here',
        confirmation: 'Thank you for your feedback',
        question: 'Feedback',
        title: 'Feedback',
        commentHeader: 'If you would like a reply, add your e-mail address.',
        supportLinkText: null,
        supportUrl: null,
        errors: {
          grade: 'Please choose a rating',
          comment: null,
        },
        dontShowAgain: "Don't show this again",
      },
      behavior: {
        showOnDevices: 3,
        removeOnClose: false,
        dontShowAgainButtonVisible: true,
      },
    },
  ]);
  var _sz = _sz || [];
  (function (l, b, h, j) {
    var a = {
      curr: window.location.href,
      ref: b.referrer,
      esc: function (d) {
        return encodeURIComponent(
          new String(d)
            .replace(/(\r?\n)+/g, ' ')
            .replace(/\s+/g, ' ')
            .replace(/^\s+|\s+$/, ''),
        );
      },
      empty: function (d) {
        return d == j || d == null || d == '';
      },
      isarray: function (d) {
        if (d == j || d == null) {
          return false;
        }
        if (Array && typeof Array.isArray == 'function') {
          return Array.isArray(d);
        }
        return Object.prototype.toString.call(d) === '[object Array]';
      },
      tag: function (d) {
        return b.getElementsByTagName ? b.getElementsByTagName(d) : [];
      },
      id: function (d) {
        return b.getElementById ? b.getElementById(d) : false;
      },
      clone: function (p) {
        var m = {};
        for (var d in p) {
          if (p.hasOwnProperty(d)) {
            m[d] = p[d];
          }
        }
        return m;
      },
      rnd: function () {
        return Math.floor(Math.random() * 100000);
      },
      txt: function (d) {
        return d.textContent ? d.textContent : d.innerText;
      },
      trim: function (d) {
        if (!d || typeof d != 'string') {
          return d;
        }
        if (typeof d.trim == 'function') {
          return d.trim();
        }
        return d.replace(/^\s+|\s+$/gi, '');
      },
      uuid: function () {
        var d = function () {
          return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1);
        };
        return d() + d() + '-' + d() + '-' + d() + '-' + d() + '-' + d() + d() + d();
      },
      navtime: function () {
        var d = l.performance || l.webkitPerformance || l.mozPerformance || l.msPerformance;
        return !d || !d.timing || d.timing.navigationStart < 1 ? null : new Date().getTime() - d.timing.navigationStart;
      },
      _isready: false,
      _readyhandlers: [],
      register: function (m, d) {
        d.base = this.actions[m];
        this.actions[m] = d;
      },
      actions: {},
      action: function (m, d) {
        this.actions[m].apply(this.actions, d);
      },
      data: [],
      ready: function (d) {
        if (d === j) {
          return this._isready || a.done();
        } else {
          this.when(this.ready, d);
        }
      },
      queueready: function (d) {
        this._isready && a.done() ? d() : this._readyhandlers.push(d);
      },
      done: function () {
        return this._isloaded && b && b.body != null && (b.readyState == 'interactive' || b.readyState == 'complete');
      },
      _isloaded: false,
      _whenTimer: null,
      when: function (d, n) {
        var m = this.uuid();
        if (d()) {
          n();
        } else {
          setTimeout(function () {
            a.when(d, n);
          }, 50);
        }
      },
      fmt: function () {
        var d = Array.prototype.slice.call(arguments);
        var p = d[0];
        var m = d.slice(1);
        for (var n = 0; n < m.length; n++) {
          var o = new RegExp('\\{' + n + '\\}', 'gm');
          p = p.replace(o, m[n]);
        }
        return p;
      },
      listen: function (d, m) {
        if (d.addEventListener) {
          d.addEventListener('mousedown', m, false);
        } else {
          if (d.attachEvent) {
            d.attachEvent('onmousedown', m);
          }
        }
      },
      load: function (m) {
        var n = b.createElement('script');
        n.type = 'text/javascript';
        n.async = true;
        n.src = m;
        var d = b.getElementsByTagName('script')[0];
        d.parentNode.insertBefore(n, d);
      },
      global: function (d) {
        return l[d] !== j && l[d] !== null ? l[d] : null;
      },
      _images: [],
      _idx: 0,
      requesturl: function (q, n) {
        var r = [];
        n.rnd = h.core.rnd();
        for (m in n) {
          var v = n[m];
          if (this.empty(v)) {
            continue;
          }
          if (this.isarray(v)) {
            var t = {};
            for (var d = 0; d < v.length; d++) {
              if (!this.empty(v[d])) {
                var s = this.esc(v[d]);
                if (t[s] == null) {
                  r.push(m + '=' + s);
                  t[s] = true;
                }
              }
            }
          } else {
            r.push(m + '=' + this.esc(v));
          }
        }
        var m = this._idx++;
        var u = q + '?' + r.join('&');
        return u;
      },
      request: function (m, d) {
        var n = this.requesturl(m, d);
        this._images[e] = new Image();
        this._images[e].src = 'https://' + n;
        this.log('Requesting {0}', n);
      },
      _logqueue: [],
      _logshown: false,
      log: function () {
        this._logqueue.push({
          type: 'msg',
          msg: Array.prototype.slice.call(arguments),
        });
        if (this._logshown) {
          this.showlog();
        }
      },
      warn: function () {
        this._logqueue.push({
          type: 'warn',
          msg: Array.prototype.slice.call(arguments),
        });
        if (this._logshown) {
          this.showlog();
        }
      },
      showlog: function () {
        this._logshown = true;
        var n = b.getElementById('szdebugarea');
        if (n) {
          n.parentNode.removeChild(n);
        }
        var r = '';
        for (var p = 0; p < this._logqueue.length; p++) {
          var q = this._logqueue[p];
          r +=
            '<p style="padding:8px;margin:0;margin-bottom:8px;background:#' +
            (q.type == 'msg' ? 'FFF7C9' : 'ca0000;color:white') +
            ';">' +
            (q.type == 'warn' ? '<b>Warning:</b> ' : '') +
            decodeURIComponent(
              new String(this.fmt.apply(this, q.msg)).replace(/(&[a-z_]+=|\?)/g, '<br />&nbsp;&nbsp;&nbsp;$1'),
            ) +
            '</p>';
        }
        var m, d;
        d = b.createElement('a');
        d.href = '#';
        d.innerHTML = '\u00D7 Close';
        d.style.cssText = 'display:block;float:right;color:black;text-decoration:none;';
        d.onclick = function (o) {
          m.parentNode.removeChild(m);
          a._logshown = false;
          return false;
        };
        m = b.createElement('div');
        m.style.cssText =
          'position:fixed;top:10px;right:10px;background:white;border:1px #ccc solid;width:800px;padding:20px;padding-bottom:10px;font-size:12px;font-family:Arial;line-height:135%;max-height:90%;overflow-y:auto;text-align:left;z-index:999';
        m.innerHTML = r;
        m.id = 'szdebugarea';
        m.appendChild(d);
        b.body.appendChild(m);
      },
      cookie: function (u, A, w) {
        if (typeof A != 'undefined') {
          w = w || {
            path: '/',
          };
          if (A === null) {
            A = '';
            w.expires = -1;
          }
          var s = '';
          if (w.expires && (typeof w.expires == 'number' || w.expires.toUTCString)) {
            var q;
            if (typeof w.expires == 'number') {
              q = new Date();
              q.setTime(q.getTime() + w.expires * 24 * 60 * 60 * 1000);
            } else {
              q = w.expires;
            }
            s = '; expires=' + q.toUTCString();
          }
          var x = w.path ? '; path=' + w.path : '; path=/';
          var r = w.domain ? '; domain=' + w.domain : '';
          var z = w.secure ? '; secure' : '';
          var y = w.sameSite ? '; samesite=' + w.samesite : '; samesite=lax';
          b.cookie = [u, '=', encodeURIComponent(A), s, x, r, z, y].join('');
        } else {
          var p = null;
          if (b.cookie && b.cookie !== '') {
            var m = b.cookie.split(';');
            for (var t = 0; t < m.length; t++) {
              var d = m[t].replace(/^\s+|\s+$/g, '');
              if (d.substring(0, u.length + 1) == u + '=') {
                p = decodeURIComponent(d.substring(u.length + 1));
                break;
              }
            }
          }
          return p;
        }
      },
    };
    a.register('set', function (m, p) {
      var n = m.split('.'),
        o = h,
        d;
      while (n.length > 0) {
        d = n.shift();
        if (o[d] === j) {
          o = 0;
          break;
        }
        if (n.length == 0) {
          break;
        }
        o = o[d];
      }
      o && d ? (o[d] = p) : a.warn('No property named {0}', m);
    });
    a.register('register', function (d) {
      a.register(d[0], d[1]);
    });
    a.register('custom', function (m, o) {
      var n = 'Running custom function';
      if (o && o != '') {
        n += ': <strong>' + o + '</strong>';
      }
      a.log(n);
      try {
        m();
      } catch (d) {
        a.warn('Custom function failed! ' + d.message);
      }
    });
    a.register('setcurr', function (d) {
      a.curr = d;
    });
    a.register('setref', function (d) {
      a.ref = d;
    });
    a.register('loaded', function () {
      a._isloaded = true;
    });
    a.register('showlog', function () {
      a.showlog();
    });
    function g(d) {
      var m = d[0];
      if (a.actions[m] === j) {
        a.action('set', d);
      } else {
        a.action(m, d.slice(1));
      }
    }
    var c = [];
    var f = [];
    for (var e = 0; e < h.length; e++) {
      c.push(h[e]);
      f.push(h[e]);
    }
    a.data = c;
    a.ready(function () {
      for (var d = 0; d < f.length; d++) {
        g(f[d]);
      }
      while (a._readyhandlers.length > 0) {
        a._readyhandlers.shift().call();
      }
      a._isready = true;
    });
    h.push = function (d) {
      a.data.push(d);
      a.ready() ? g(d) : a.data.push(d);
    };
    h.core = a;
  })(window, document, _sz);
  (function (v, a, s, u) {
    var n = {
      url: v.location.href,
      ref: a.referrer,
      title: a.title,
      res: v.screen.width + 'x' + v.screen.height,
      accountid: '{ACCOUNT_ID}',
      groups: null,
      path: null,
      hits: null,
      sw: null,
      ct: null,
      uid: null,
      cid: null,
      cvid: null,
      rt: s.core.navtime(),
      prev: null,
      ourl: null,
      luid: s.core.uuid(),
      feedbackid: null,
      addcid: null,
      dnt: null,
      ckl: null,
    };
    var m = {
      grk: null,
      kvps: null,
    };
    var b = function () {
      s.push(['invoketracking']);
    };
    var t = b;
    var j = function () {
      var d = /[-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{3,}|[-\w]+\.[-\w]{2})$/i;
      var w = d.exec(a.domain);
      return (w && w.length == 1 ? w[0] : document.domain).replace(/^www\./i, '');
    };
    s.analytics = {
      config: {
        cantrack: true,
        noonclick: false,
        ready: true,
        onClickKey: 'szaocHandled' + s.core.rnd(),
      },
      cookie: {
        name: 'nmstat',
        domain: j(),
        expires: 1000,
        secure: false,
      },
      endpoint: {
        configured: false,
        host: '{ACCOUNT_ID}.global',
        domain: 'siteimproveanalytics.io',
        path: 'image.aspx',
        fullpath: function (d, w) {
          s.analytics.endpoint.configure();
          if (!w) {
            w = d;
            d = this.host;
          }
          return (d || this.host) + '.' + this.domain + '/' + (w || this.path);
        },
        configure: function () {
          if (!s.analytics.endpoint.configured) {
            s.analytics.endpoint.host = s.analytics.endpoint.host.replace('{ACCOUNT_ID}', n.accountid || 'shared');
            s.core.log('Configured host: {0}.{1}', s.analytics.endpoint.host, s.analytics.endpoint.domain);
            s.analytics.endpoint.configured = true;
          }
        },
      },
      state: {
        requested: false,
        requestTime: new Date(),
        tracked: false,
        onclickattached: false,
      },
      region: '',
      getRootDomain: j,
      replaceTracker: function (d) {
        t = typeof d === 'function' ? d : b;
      },
      opts: function (d) {
        return n[d];
      },
      getsessid: function (y) {
        if (s.analytics.config.cantrack) {
          var w = s.core.cookie(s.analytics.cookie.name);
          if (!w) {
            w = s.core.uuid();
            var d = {
              expires: s.analytics.cookie.expires,
              domain: s.analytics.cookie.domain,
              secure: s.analytics.cookie.secure,
            };
            s.core.cookie(s.analytics.cookie.name, w, d);
            var x = s.core.cookie(s.analytics.cookie.name);
            if (!x) {
              s.core.log(
                "Failed to set cookie at domain '{0}', using fallback domain '{1}' instead",
                s.analytics.cookie.domain,
                document.domain,
              );
              d.domain = document.domain;
              s.core.cookie(s.analytics.cookie.name, w, d);
            }
          }
          if (y && typeof y === 'function') {
            y(w);
          }
        } else {
          if (y && typeof y === 'function') {
            y('');
          }
        }
      },
    };
    function p(x, w, d) {
      s.analytics.getsessid(function (z) {
        if (typeof z == 'object') {
          for (var y in z) {
            if (z.hasOwnProperty(y)) {
              w[y] = z[y];
            }
          }
        } else {
          w.prev = z;
        }
        w.rt = w.rt !== null ? s.core.navtime() : null;
        s.core.request(x, w);
        if (d && typeof d == 'function') {
          d();
        }
      });
    }
    s.analytics.request = function (x, w, d) {
      p(x, w, d);
    };
    function o(y) {
      if (!s.analytics.config.cantrack) {
        return;
      }
      var z = function (C) {
        try {
          if (
            C.href == null ||
            C.href == '' ||
            C[s.analytics.config.onClickKey] === true ||
            C.href.toLowerCase().indexOf('javascript:') == 0 ||
            C.href.indexOf('#') == 0 ||
            C.href.charAt(C.href.length - 1) == '#' ||
            C.href == v.location.href ||
            C.href.indexOf(v.location.href + '#') == 0
          ) {
            return true;
          }
          if (s.core.isarray(y) !== true) {
            return false;
          }
          for (var B = 0; B < y.length; B++) {
            if (C.href.indexOf(y[B]) !== -1) {
              return true;
            }
          }
          return false;
        } catch (A) {
          return true;
        }
      };
      var d = s.core.tag('a');
      var w = s.core.tag('area');
      var x = function (C) {
        for (var A = 0; A < C.length; A++) {
          var B = C[A];
          if (z(B)) {
            continue;
          }
          (function (D) {
            s.core.listen(D, function () {
              s.push([
                'request',
                {
                  ourl: D.href,
                  ref: v.location.href,
                  autoonclick: 1,
                  rt: null,
                },
              ]);
            });
            B[s.analytics.config.onClickKey] = true;
          })(B);
        }
      };
      s.core.log('Attaching onclick handlers');
      x(d);
      x(w);
      s.analytics.state.onclickattached = true;
    }
    s.core.register('attachonclick', function (d) {
      if (s.analytics.config.noonclick === true) {
        return;
      }
      o(s.analytics.config.noonclick);
    });
    var c = 0;
    function e(w, d, x) {
      return {
        aid: n.accountid,
        url: n.url,
        luid: n.luid,
        c: w,
        a: d,
        l: x,
        cid: n.cid,
        cvid: n.cvid,
        ckl: n.ckl,
        o: ++c,
        d: Math.round((new Date() - s.analytics.state.requestTime) / 1000),
      };
    }
    var q = 0;
    function r(x, d) {
      var w = {
        aid: n.accountid,
        url: n.url,
        luid: n.luid,
        search_term: x,
        cid: n.cid,
        cvid: n.cvid,
        ckl: n.ckl,
        o: ++q,
        d: Math.round((new Date() - s.analytics.state.requestTime) / 1000),
      };
      if (d != null) {
        w.results = d;
      }
      return w;
    }
    var f = 0;
    function g(w, y, z, d) {
      var x = {
        aid: n.accountid,
        url: n.url,
        title: n.title,
        luid: n.luid,
        feedback_id: w,
        sluid: y,
        cid: n.cid,
        cvid: n.cvid,
        ckl: n.ckl,
        o: ++f,
        d: Math.round((new Date() - s.analytics.state.requestTime) / 1000),
      };
      if (z != null && typeof z == 'number') {
        x.rating = z;
      }
      if (d) {
        x.comment = d;
      }
      return x;
    }
    function l() {
      var d = window.doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack;
      return (
        d == 'yes' ||
        d == '1' ||
        (window.external &&
          window.external.msTrackingProtectionEnabled &&
          window.external.msTrackingProtectionEnabled())
      );
    }
    s.core.register('endpoint', function (d) {
      if (d) {
        if (d.indexOf('{ACCOUNT_ID}') < 0) {
          s.analytics.endpoint.host = '{ACCOUNT_ID}.' + d;
        } else {
          s.analytics.endpoint.host = d;
        }
        s.analytics.endpoint.configured = false;
        s.analytics.endpoint.configure();
      } else {
        s.core.warn('Could not reconfigure endpoint host.');
      }
    });
    s.core.register('region', function (d) {
      if (d) {
        s.core.log('Setting analytics region to: {0}', d);
        s.analytics.region = d;
      } else {
        s.core.warn('Could not configure analytics region.');
      }
    });
    s.core.register('event', function (w, d, x) {
      if (!w || !d) {
        s.core.warn('Category and action must be provided for event.');
        return;
      } else {
        if (!s.analytics.config.cantrack) {
          return;
        }
      }
      p(s.analytics.endpoint.fullpath('event.aspx'), e(w, d, x));
    });
    s.core.register('search', function (w, d) {
      if (!w) {
        s.core.warn('Search term must be provided for searches.');
        return;
      } else {
        if (!s.analytics.config.cantrack) {
          return;
        }
      }
      p(s.analytics.endpoint.fullpath('search.aspx'), r(w, d));
    });
    s.core.register('feedback_view', function (d, w) {
      if (!s.analytics.config.cantrack) {
        return;
      }
      if (!d) {
        s.core.warn('Feedback id must be provided for feedback views.');
        return;
      }
      if (!w) {
        s.core.warn('Feedback log id must be provided for feedback views.');
        return;
      }
      p(s.analytics.endpoint.fullpath('surveyview.aspx'), g(d, w));
    });
    s.core.register('feedback_response', function (w, x, y, d) {
      if (!s.analytics.config.cantrack) {
        return;
      }
      if (!w) {
        s.core.warn('Feedback id must be provided for feedback responses.');
        return;
      }
      if (!x) {
        s.core.warn('Feedback log id must be provided for feedback responses.');
        return;
      }
      if ((y == null || y < 1) && !d) {
        s.core.warn('Feedback responses must provide either a rating or a comment.');
        return;
      }
      p(s.analytics.endpoint.fullpath('surveyresponse.aspx'), g(w, x, y, d));
    });
    s.core.register('dump', function () {
      console.debug(s.analytics);
      console.debug(n);
      console.debug(m);
    });
    s.core.register('noonclick', function (d) {
      s.analytics.config.noonclick = d;
    });
    s.core.register('set', function (d, w) {
      if (n.hasOwnProperty(d)) {
        n[d] = w;
      } else {
        this.set.base(d, w);
      }
    });
    s.core.register('breadcrumbs', function (x) {
      if (!x || !a.querySelector) {
        return;
      }
      var d = a.querySelector(x);
      if (d) {
        var w = s.core.trim(s.core.txt(d));
        if (!s.core.empty(w)) {
          s.push(['path', w]);
        }
      }
    });
    s.core.register('path', function (d) {
      if (!s.core.empty(d)) {
        n.path = d;
        s.push(['kvp', 'path', d]);
        s.core.log('Path set: {0}', d);
      }
    });
    s.core.register('groupselector', function (z) {
      if (!z || !a.querySelectorAll) {
        return;
      }
      var y = a.querySelectorAll(z),
        d = [];
      if (!s.core.empty(n.groups)) {
        d = n.groups.split(',');
      }
      for (var w = 0; w < y.length; w++) {
        var A = s.core.trim(s.core.txt(y[w]));
        if (!s.core.empty(A)) {
          var B = A.split(',');
          for (var x = 0; x < B.length; x++) {
            d.push(B[x]);
          }
        }
      }
      if (d.length > 0) {
        n.groups = d.join(',');
        s.push(['kvp', 'szGroupName', d]);
        s.core.log('Groups set: {0}', d.join(', '));
      }
    });
    s.core.register('metagroupname', function (A) {
      var y = s.core.tag('meta'),
        d = [];
      if (!s.core.empty(n.groups)) {
        d = n.groups.split(',');
      }
      for (var w = 0; w < y.length; w++) {
        if (y[w].name == A) {
          var z = s.core.trim(y[w].content);
          if (!s.core.empty(z)) {
            s.core.log('Metagroup pushing group for meta name {0}: {0}', y[w].name, y[w].content);
            var B = z.split(',');
            for (var x = 0; x < B.length; x++) {
              d.push(B[x]);
            }
          }
        }
      }
      if (d.length > 0) {
        n.groups = d.join(',');
        s.push(['kvp', 'szGroupName', d]);
        s.core.log('Metagroup set: {0}', d.join(', '));
      }
    });
    s.core.register('param', function (d, w) {
      if (typeof d == 'object') {
        for (i in d) {
          if (d.hasOwnProperty(i)) {
            s.push(['param', i, d[i]]);
          }
        }
      } else {
        s.core.log('Param {0} = {1}', d, w);
        if (m.grk == null) {
          m.grk = {};
        }
        m.grk[d] = w;
      }
    });
    var h = function (d) {
      var w = [];
      if (s.core.isarray(d)) {
        for (i = 0; i < d.length; i++) {
          if (!s.core.empty(d[i])) {
            w.push(d[i]);
          }
        }
      } else {
        if (!s.core.empty(d)) {
          w.push(d);
        }
      }
      return w;
    };
    s.analytics.addKvpValues = function (w, y, x) {
      if (typeof w == 'object') {
        for (i in w) {
          if (w.hasOwnProperty(i)) {
            s.analytics.addKvpValues(i, w[i], x);
          }
        }
      } else {
        var z = h(y);
        if (m.kvps == null) {
          m.kvps = {};
        }
        if (x === true) {
          m.kvps[w] = z;
        } else {
          m.kvps[w] = m.kvps[w] || [];
          for (var d = 0; d < z.length; d++) {
            m.kvps[w].push(z[d]);
          }
        }
        s.core.log('Kvp {0} = {1}', w, JSON.stringify(m.kvps[w]));
      }
    };
    s.core.register('kvp', function (d, x, w) {
      s.analytics.addKvpValues(d, x, w);
    });
    s.core.register('request', function (d) {
      if (d.accountid === u) {
        d.accountid = n.accountid;
      }
      p(s.analytics.endpoint.fullpath(), d);
    });
    s.core.register('trackpageview', function () {
      var d = s.analytics;
      if (!d.state.tracked && d.config.cantrack && d.config.ready) {
        var y = s.core.clone(n);
        if (m.grk != null) {
          for (var w in m.grk) {
            if (m.grk.hasOwnProperty(w)) {
              y['grk_' + w] = m.grk[w];
            }
          }
        }
        if (m.kvps != null) {
          for (var x in m.kvps) {
            if (m.kvps.hasOwnProperty(x)) {
              y['kvp_' + x] = m.kvps[x];
            }
          }
        }
        p(d.endpoint.fullpath(), y, function () {
          d.state.tracked = true;
          d.state.requestTime = new Date();
          if (y.sw) {
            s.push(['search', y.sw, y.hits]);
          }
        });
      } else {
        if (d.state.tracked) {
          s.core.log('Already tracked...');
        }
      }
    });
    s.core.register('notrack', function (d) {
      if (d === u) {
        d = true;
      }
      if (d) {
        s.core.cookie('sz_notrack', 'true', {
          expires: 1825,
        });
      } else {
        s.core.cookie('sz_notrack', null);
      }
      s.analytics.config.cantrack = !d;
    });
    s.tracking = function () {
      return s.analytics.config.cantrack;
    };
    s.donottrack = function () {
      return n.dnt === true && !!l();
    };
    s.core.register('trackdynamic', function (x) {
      var d = n.url;
      n.url = v.location.href;
      n.ref = d;
      n.title = a.title;
      n.luid = s.core.uuid();
      n.rt = null;
      n.ourl = null;
      n.groups = null;
      n.path = null;
      n.hits = null;
      n.sw = null;
      m.grk = null;
      m.kvps = null;
      s.analytics.state.tracked = false;
      s.analytics.state.onclickattached = false;
      if (x) {
        if (typeof x == 'object' && !(x instanceof Array)) {
          for (k in x) {
            if (x.hasOwnProperty(k)) {
              s.push([k, x[k]]);
            }
          }
        } else {
          if (x.length > 0) {
            for (var w = 0; w < x.length; w++) {
              s.push(x[w]);
            }
          }
        }
      }
      if (!n.ourl) {
        n.ourl = n.url;
      }
      s.push(['invoketracking']);
    });
    s.core.register('invoketracking', function () {
      if (!!s.analytics.config.cantrack && s.donottrack()) {
        s.core.log('Do not track enabled');
        s.analytics.config.cantrack = false;
      }
      if (!s.analytics.config.cantrack) {
        s.core.log('Tracking not enabled, skipping invocation');
        return;
      }
      s.push(['trackpageview']);
      s.push(['attachonclick']);
    });
    s.core.ready(function () {
      s.core.log('Running ready at {0}', new Date().getTime());
      if (s.core.cookie('sz_notrack') !== null) {
        s.push(['notrack']);
      }
      t();
    });
  })(window, document, _sz);
  (function (q, c, o, p) {
    var a = {
      scrollDelay: 350,
      resizeDelay: 350,
    };
    var n = {
      running: false,
      initViewPort: null,
      supportQuerySelector: true,
      clickCount: 0,
      scrollHandle: null,
      lastViewPort: {
        l: 0,
        t: 0,
      },
      scrollCount: 0,
    };
    o.analytics.heatmap = {
      config: a,
      state: n,
    };
    var b = {
      hostnameRx: /^([\w@:.-]+)$/i,
      pathnameRx: /((?:\/\w+)*\/[-\w.]+[^#&?\s]*)$/i,
      maxSrcLen: 50,
      boundingElements: {
        A: true,
        AREA: true,
        ARTICLE: false,
        BODY: false,
        BUTTON: true,
        DIV: false,
        FOOTER: false,
        FRAME: false,
        IFRAME: false,
        H1: false,
        H2: false,
        H3: false,
        H4: false,
        H5: false,
        H6: false,
        HEADER: false,
        HTML: false,
        IMG: true,
        INPUT: true,
        LABEL: false,
        LI: false,
        MAIN: false,
        SECTION: false,
        SELECT: true,
        SPAN: false,
        TABLE: false,
        TD: false,
        TH: false,
        TEXTAREA: true,
      },
    };
    var f = {
      on: function (s, t, r) {
        var d = t.split(' '),
          u = d.length;
        while (u--) {
          if (s.addEventListener) {
            s.addEventListener(d[u], r, false);
          } else {
            if (s.attachEvent) {
              s.attachEvent('on' + d[u], r);
            }
          }
        }
      },
      off: function (s, t, r) {
        var d = t.split(' '),
          u = d.length;
        while (u--) {
          if (s.removeEventListener) {
            s.removeEventListener(d[u], r, false);
          } else {
            if (s.detachEvent) {
              s.detachEvent('on' + d[u], r);
            }
          }
        }
      },
      stop: function (d) {
        if (d.stopPropagation) {
          d.stopPropagation();
        } else {
          if (d.cancelBubble != null) {
            d.cancelBubble = true;
          }
        }
      },
      sourceElement: function (d) {
        return d.srcElement || d.target;
      },
      map: function (d, r) {
        var t = [];
        for (var s = 0; s < d.length; s++) {
          t.push(r(d[s], s));
        }
        return t;
      },
      cssEscape: function (s) {
        var d = s.charAt(0),
          r = '';
        if (/^-+$/.test(s)) {
          return '\\-' + s.slice(1);
        }
        if (/\d/.test(d)) {
          r = '\\3' + d + ' ';
          s = s.slice(1);
        }
        r += f
          .map(s.split(''), function (t) {
            if (/[\t\n\v\f]/.test(t)) {
              return '\\' + t.charCodeAt().toString(16) + ' ';
            }
            return (/[ !"#$%&'()*+,.\/:;<=>?@\[\\\]^_`{|}~]/.test(t) ? '\\' : '') + t;
          })
          .join('');
        return r;
      },
      isUniqueSelector: function (s, d) {
        if (!n.supportQuerySelector || !s) {
          return false;
        }
        var r = c.querySelectorAll(s);
        return r.length === 1 && r[0] === d;
      },
      trim: function (d) {
        return String.prototype.trim ? d.trim() : d.replace(/^\s+|\s+$/g, '');
      },
      pathFromSrc: function (s) {
        var d = c.createElement('a');
        d.href = s;
        var r = d.pathname;
        d = null;
        return r || '';
      },
      parent: function (d) {
        var r = d.parentNode;
        return r.nodeType == 1 && !/\b(html|body|head)\b/i.test(r.tagName) ? r : null;
      },
      childSelector: function (d, w) {
        if (!d.parentNode) {
          return null;
        }
        var u = d.parentNode.children,
          v = u.length,
          s = 0,
          x = true;
        for (var r = 0; r < v; r++) {
          var t = u[r];
          if (t === d) {
            s = r + 1;
          } else {
            if (t.tagName.toLowerCase() == w) {
              x = false;
              if (s !== 0) {
                break;
              }
            }
          }
        }
        if (x) {
          return null;
        }
        if (s === 1) {
          return ':first-child';
        }
        if (s === v) {
          return ':last-child';
        }
        return ':nth-child(' + s + ')';
      },
      pathSelector: function (r) {
        var t = r.tagName.toLowerCase(),
          s = f.parent(r),
          d = f.childSelector(r, t);
        return (s ? f.pathSelector(s) + '>' : '') + t + (d || '');
      },
      cssSelector: function (v) {
        var E = v,
          I = '',
          H = '',
          w = '',
          F = '';
        do {
          if (!v.tagName) {
            return '';
          }
          var J = v.tagName.toLowerCase();
          if (/\b(html|body|head)\b/i.test(J)) {
            return J + I;
          }
          var A = v.id,
            t = f.trim(v.className),
            r = v.classList || t.split(/\s+/);
          if (typeof A !== 'string') {
            A = null;
          }
          if (A) {
            A = f.cssEscape(A);
            H = '#' + A + I;
            if (f.isUniqueSelector(H, E)) {
              return H;
            }
            H = J + "[id='" + A.replace("'", "\\'") + "']" + I;
            if (f.isUniqueSelector(H, E)) {
              return H;
            }
          }
          var K = '';
          if (t && c.getElementsByClassName) {
            var L = Infinity;
            for (var z = 0, B = r.length; z < B; z++) {
              var d = r[z],
                u = c.getElementsByClassName(d).length;
              if (u < L) {
                L = u;
                K = f.cssEscape(d);
              }
            }
            H = J + '.' + K + I;
            if (f.isUniqueSelector(H, E)) {
              return H;
            }
            if (A) {
              H = J + "[id='" + A.replace("'", "\\'") + "']." + K + I;
              if (f.isUniqueSelector(H, E)) {
                return H;
              }
            }
          }
          switch (J) {
            case 'a':
              var x = v.hash;
              if (x) {
                H = J + "[href='" + x.replace("'", "\\'") + "']" + I;
                if (f.isUniqueSelector(H, E)) {
                  return H;
                }
              }
              F = ((v.pathname || '').match(b.pathnameRx) || ['', ''])[1];
              if (F && F.length <= b.maxSrcLen) {
                H = J + "[href*='" + F.replace("'", "\\'") + "']" + I;
                if (f.isUniqueSelector(H, E)) {
                  return H;
                }
              }
              var y = ((v.hostname || '').match(b.hostnameRx) || ['', ''])[1];
              if (y && y.length <= b.maxSrcLen) {
                H = J + "[href*='" + y.replace("'", "\\'") + "']" + I;
                if (f.isUniqueSelector(H, E)) {
                  return H;
                }
              }
              break;
            case 'img':
              F = f.pathFromSrc(v.src);
              w = (F.match(b.pathnameRx) || ['', ''])[1];
              if (w && F.length <= b.maxSrcLen) {
                H = J + "[src*='" + w.replace("'", "\\'") + "']" + I;
                if (f.isUniqueSelector(H, E)) {
                  return H;
                }
              }
              break;
            case 'input':
            case 'button':
            case 'select':
            case 'textarea':
              var D = v.getAttribute('name');
              if (D) {
                H = J + "[name='" + D.replace("'", "\\'") + "']" + I;
                if (f.isUniqueSelector(H, E)) {
                  return H;
                }
              }
              break;
            case 'label':
              var C = v.getAttribute('for');
              if (C) {
                H = J + "[for='" + C.replace("'", "\\'") + "']" + I;
                if (f.isUniqueSelector(H, E)) {
                  return H;
                }
              }
              break;
          }
          var G = f.childSelector(v, J);
          if (G) {
            I = J + G + I;
            if (f.isUniqueSelector(I, E)) {
              return I;
            }
          } else {
            if (A) {
              I = J + "[id='" + A.replace("'", "\\'") + "']" + I;
            } else {
              if (K) {
                I = J + '.' + K + I;
              } else {
                I = J + I;
                if (f.isUniqueSelector(I, E)) {
                  return I;
                }
              }
            }
          }
        } while ((v = v.parentNode) && (I = '>' + I));
        return I;
      },
      viewPort: function () {
        return {
          l: Math.round((q.pageXOffset || c.documentElement.scrollLeft) - (c.documentElement.clientLeft || 0)),
          t: Math.round((q.pageYOffset || c.documentElement.scrollTop) - (c.documentElement.clientTop || 0)),
          w: Math.round(q.innerWidth || c.documentElement.clientWidth || q.screen.width),
          h: Math.round(q.innerHeight || c.documentElement.clientHeight || q.screen.height),
        };
      },
      elementPoint: function (r, d) {
        r = r || q.event;
        var s = f.pagePoint(r);
        var t = d.getBoundingClientRect();
        var v = c.documentElement.scrollTop ? c.documentElement.scrollTop : c.body.scrollTop;
        var u = c.documentElement.scrollLeft ? c.documentElement.scrollLeft : c.body.scrollLeft;
        return {
          x: Math.round(s.x - (t.left + u)),
          y: Math.round(s.y - (t.top + v)),
        };
      },
      pagePoint: function (d) {
        d = d || q.event;
        var r = d.pageX;
        var s = d.pageY;
        if (r === p) {
          r = d.clientX + c.body.scrollLeft + c.documentElement.scrollLeft;
          s = d.clientY + c.body.scrollTop + c.documentElement.scrollTop;
        }
        return {
          x: r,
          y: s,
        };
      },
      preEventHandler: function (d) {
        if (n.scrollCount < 1 && n.clickCount < 1) {
          e({
            pos: n.initViewPort,
            type: 'scroll',
          });
        }
      },
    };
    var j = {
      click: function (r) {
        if (r.szbHandled === true) {
          return;
        }
        f.preEventHandler(r);
        n.clickCount++;
        var u = f.sourceElement(r);
        var d = u;
        while (d != null && b.boundingElements[d.tagName] == null) {
          d = d.parentNode;
        }
        if (d == null) {
          return;
        }
        var t = f.cssSelector(d);
        if (!t || t == 'html') {
          return;
        }
        var s = {
          path: t,
          point: f.elementPoint(r, d),
          type: 'click',
        };
        e(s);
        r.szbHandled = true;
      },
      scroll: function (d) {
        if (n.scrollHandle != null) {
          clearTimeout(n.scrollHandle);
        }
        n.scrollHandle = setTimeout(function () {
          f.preEventHandler(d);
          n.scrollCount++;
          var r = f.viewPort();
          if (r.t != n.lastViewPort.t || r.h != n.lastViewPort.h) {
            e({
              pos: r,
              type: 'scroll',
            });
            n.lastViewPort = r;
          }
        }, a.scrollDelay);
      },
      resize: function (r) {
        var d = f.viewPort();
        if (!n.scrollCount || d.h != n.lastViewPort.h) {
          j.scroll();
        }
      },
    };
    function h() {
      if (n.supportQuerySelector) {
        o.core.log('Attaching behaviour map mousedown handlers');
        f.on(c, 'mousedown', j.click);
        for (var r in b.boundingElements) {
          if (b.boundingElements.hasOwnProperty(r) && b.boundingElements[r] == true) {
            var d = o.core.tag(r);
            for (var s in d) {
              f.on(d[s], 'mousedown', j.click);
            }
          }
        }
      }
      o.core.log('Attaching behaviour map scroll + resize handlers');
      f.on(q, 'scroll', j.scroll);
      f.on(q, 'resize', j.resize);
    }
    function e(d) {
      if (!d) {
        return;
      }
      var s;
      switch (d.type) {
        case 'click':
          s = 'c|' + d.point.x + '|' + d.point.y + '|' + d.path;
          break;
        case 'scroll':
          s = 's|' + d.pos.l + '|' + d.pos.t;
          break;
        default:
          return;
      }
      var r = m(s);
      o.analytics.request(o.analytics.endpoint.fullpath('heat.aspx'), r);
    }
    var g = 0;
    function m(d) {
      var r = f.viewPort();
      return {
        aid: o.analytics.opts('accountid'),
        url: o.analytics.opts('url'),
        luid: o.analytics.opts('luid'),
        p: d,
        ww: r.w,
        wh: r.h,
        cid: o.analytics.opts('cid'),
        cvid: o.analytics.opts('cvid'),
        ckl: o.analytics.opts('ckl'),
        o: ++g,
        d: Math.round((new Date() - o.analytics.state.requestTime) / 1000),
      };
    }
    var l = {
      keys: Object.keys
        ? Object.keys
        : function (r) {
            if (r !== Object(r)) {
              throw new TypeError('Object.keys called on a non-object');
            }
            var d = [];
            for (var s in r) {
              if (Object.prototype.hasOwnProperty.call(r, s)) {
                d.push(s);
              }
            }
            return d;
          },
      extract: function (d) {
        var u = {};
        for (var r = 0; r < d.length; r++) {
          var t = d[r].split('=');
          if (t.length > 1) {
            var s = t.shift();
            var w = t.join('=');
            if (w.length > 0) {
              u[s] = w;
            }
          }
        }
        return u;
      },
      decompose: function (t) {
        t = encodeURI(
          decodeURI(
            f
              .trim(t || '')
              .replace(/^.*?:\/\//g, '')
              .split('#')[0],
          ),
        );
        var s = t.split('?');
        var d = s
          .shift()
          .replace(/^www\./, '')
          .replace(/\/+$/, '');
        var r = this.extract(s.join('?').split('&'));
        return {
          resource: d,
          params: r,
        };
      },
      check_url: function (d, u) {
        if (d.resource === u.resource) {
          var t = this.keys(u.params);
          for (var r = 0; r < t.length; r++) {
            var s = t[r];
            if (d.params[s] == p || d.params[s] !== u.params[s]) {
              return false;
            }
          }
          return true;
        }
        return false;
      },
      check_list: function (r, t, d) {
        t = t || [];
        for (var s = 0; s < t.length; s++) {
          if (t[s] != p && this.check_url(r, this.decompose(t[s].toLowerCase()))) {
            if (d) {
              d(t[s]);
            }
            return true;
          }
        }
        return false;
      },
      enable: function () {
        var d = this.decompose(this.cur_url());
        var s, r;
        var t =
          d.resource &&
          this.check_list(d, this.matches.permanent.concat(this.matches.include), function (u) {
            s = u;
          }) &&
          !this.check_list(d, this.matches.exclude, function (u) {
            r = u;
          });
        o.core.log(
          'Behaviour map tracking match:<br/>include = "{0}"<br/>exclude = "{1}"',
          encodeURI(s || ''),
          encodeURI(r || ''),
        );
        return t;
      },
      matches: {
        permanent: [],
        include: [],
        exclude: [],
      },
      add_matches: function (d) {
        if (d != null) {
          if (this.is_array(d.permanent)) {
            this.matches.permanent = this.matches.permanent.concat(d.permanent);
          }
          if (this.is_array(d.include)) {
            this.matches.include = this.matches.include.concat(d.include);
          }
          if (this.is_array(d.exclude)) {
            this.matches.exclude = this.matches.exclude.concat(d.exclude);
          }
        }
      },
      replacements: [],
      add_replacement: function (d) {
        if (this.is_function(d)) {
          this.replacements.push(d);
        }
      },
      is_function: function (d) {
        return d != null && typeof d === 'function' && d instanceof Function;
      },
      is_array: function (d) {
        return d != null && d instanceof Array && d.concat != p && d.length != p;
      },
      cur_url: function () {
        var r = ((o.analytics && o.analytics.opts ? o.analytics.opts('url') : '') || o.core.curr).toLowerCase();
        if (this.replacements && this.replacements.length > 0) {
          for (var d = 0; d < this.replacements.length; d++) {
            r = this.replacements[d](r);
          }
        }
        return r;
      },
    };
    o.core.register('heatmapreplacement', function (d) {
      l.add_replacement(d);
    });
    o.core.register('heatmap', function (d) {
      l.add_matches(d.matches);
    });
    o.core.register('heatmapinit', function () {
      if (!o.analytics.config.cantrack || o.donottrack()) {
        return;
      }
      if (n.running) {
        o.core.log('Behaviour map tracking already running');
        return;
      }
      try {
        if (!l.enable()) {
          o.core.log('Skipping behaviour map tracking');
          return;
        }
      } catch (d) {
        o.core.log('Skipping behaviour map tracking due to: {0}', d);
        return;
      }
      try {
        n.supportQuerySelector = !!c.querySelectorAll && c.querySelectorAll('body > *:nth-child(1)').length === 1;
      } catch (d) {
        n.supportQuerySelector = false;
      }
      o.core.log('Enabling behaviour map tracking');
      n.running = true;
      n.lastViewPort = f.viewPort();
      n.initViewPort = f.viewPort();
      h();
    });
    o.core.ready(function () {
      o.core.log('Running behaviour map ready at {0}', new Date().getTime());
      o.push(['heatmapinit']);
    });
  })(window, document, _sz);
  (function (e, a, c) {
    var b;
    c.feedback = c.feedback || {
      endpoint: '',
      sent: false,
      shown: false,
      feedbackid: null,
      feedbackUid: null,
      config: null,
    };
    c.feedback.loadFeedback = function (W) {
      var t,
        ak,
        r,
        n,
        d,
        y = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i,
        p = W,
        C;
      function ag(am, al) {
        if (typeof am === 'undefined' || am === null) {
          return '';
        }
        return al > 0 ? am.substring(0, al) : am;
      }
      function ai(am, al) {
        var an = y.exec(am);
        if (an === null) {
          return al;
        }
        if (an[1].length === 1) {
          an[1] = an[1] + an[1];
        }
        if (an[2].length === 1) {
          an[2] = an[2] + an[2];
        }
        if (an[3].length === 1) {
          an[3] = an[3] + an[3];
        }
        return '#' + an[1] + an[2] + an[3];
      }
      function aj() {
        p.texts.question = ag(p.texts.question, 50);
        p.texts.supportLinkText = ag(p.texts.supportLinkText, 50);
        p.texts.commentHeader = ag(p.texts.commentHeader, 80);
        p.texts.button = ag(p.texts.button, 80);
        p.texts.title = ag(p.texts.title, 80);
        p.texts.close = ag(p.texts.close, 80);
        p.texts.errors.comment = ag(p.texts.errors.comment, 80);
        p.texts.errors.grade = ag(p.texts.errors.grade, 80);
        p.texts.confirmation = ag(p.texts.confirmation, 80);
        p.texts.dontShowAgain = ag(p.texts.dontShowAgain, 80);
        if (!p.texts.supportUrl) {
          p.texts.supportUrl = '#';
        }
        if (!p.texts.dontShowAgain) {
          p.texts.dontShowAgain = "Don't show again";
        }
        p.layout.colors.background = ai(p.layout.colors.background, '#F0F0F0');
        p.layout.colors.text = ai(p.layout.colors.text, '#000000');
        p.layout.colors.button = ai(p.layout.colors.button, '#A9CF3F');
      }
      function ah() {
        if (!p.behavior) {
          p.behavior = {
            showOnDevices: 1,
            removeOnClose: false,
            dontShowAgainButtonVisible: false,
          };
          return;
        }
        var al = p.behavior.showOnDevices > 0 && p.behavior.showOnDevices <= 3;
        if (!p.behavior.showOnDevices || !al) {
          p.behavior.showOnDevices = 1;
        }
        if (!p.behavior.removeOnClose) {
          p.behavior.removeOnClose = false;
        }
        if (!p.behavior.dontShowAgainButtonVisible) {
          p.behavior.dontShowAgainButtonVisible = false;
        }
      }
      function q(an, al) {
        var am = a.createElement(an);
        am.className = al;
        return am;
      }
      function g(am, al) {
        if (am.className) {
          am.className += ' ' + al;
        } else {
          am.className = al;
        }
      }
      function aa(al, an, am) {
        al.className = al.className.replace(an, am);
      }
      function h(am, al) {
        if (am.className.baseVal.indexOf(al) === -1) {
          am.className.animVal += ' ' + al;
          am.className.baseVal += ' ' + al;
        }
      }
      function Z(am, al) {
        am.className.animVal = am.className.animVal.replace(' ' + al, '');
        am.className.baseVal = am.className.baseVal.replace(' ' + al, '');
      }
      function x() {
        if (p.layout.position === 3 || p.layout.position === 4) {
          return 'left-side';
        } else {
          if (p.layout.position === 1 || p.layout.position === 2) {
            return 'right-side';
          }
        }
        return 'bottom';
      }
      function w(al) {
        var am = ['bottom', 'right', 'right', 'left', 'left', 'bottom', 'bottom', 'bottom-right'];
        return 'sz-feedback-' + am[p.layout.position] + '-transition-' + (al ? 'visible' : 'hidden');
      }
      function u(al) {
        var am = y.exec(al);
        return [am[1], am[2], am[3]];
      }
      function o(an, ao) {
        var am = u(an),
          ap,
          al;
        ap = '#';
        for (C = 0; C < 3; C++) {
          al = parseInt(am[C], 16);
          al = Math.round(Math.min(Math.max(0, al + al * ao), 255)).toString(16);
          ap += ('00' + al).substr(al.length);
        }
        return ap;
      }
      t = {
        feedbackSectionElement: q('section', 'sz-feedback-section'),
        feedbackContainerElement: q('div', 'sz-feedback-container sz-feedback-main-font-style'),
        feedbackContainerCloseButtonElement: a.createElement('button'),
        formElement: a.createElement('form'),
        feedbackQuestionElement: q(
          'h2',
          'sz-feedback-question sz-feedback-text-align-center sz-feedback-word-wrap sz-feedback-main-font-style',
        ),
        validationRatingElement: q('div', 'sz-feedback-validation-presenter sz-feedback-hide-validation'),
        validationCommentElement: q('div', 'sz-feedback-validation-presenter sz-feedback-hide-validation'),
        satisfactionScaleElement: q('div', 'sz-feedback-rating'),
        labelAndSupportLinkContainerElement: a.createElement('div'),
        submitButtonElement: q(
          'button',
          'sz-feedback-submit-button sz-feedback-text-align-center sz-feedback-word-wrap sz-feedback-main-font-style',
        ),
        dontShowAgainButtonElement: q('button', 'sz-feedback-hide-link-centered sz-feedback-dont-show-again-button'),
        toggleButtonContainerElement: q('div', 'sz-feedback-toggle-button-container sz-feedback-visibility-visible'),
        toggleButtonElement: q('button', 'sz-feedback-toggle-button sz-feedback-main-font-style'),
        toggleButtonOpenModeContainerElement: a.createElement('div'),
        toggleButtonOpenModeIconContainerElement: q('div', 'sz-feedback-toggle-button-icon-container'),
        toggleButtonOpenModeTextElement: a.createElement('div'),
        toggleButtonCloseModeContainerElement: a.createElement('div'),
        toggleButtonCloseModeIconContainerElement: q('div', 'sz-feedback-toggle-button-icon-container'),
        toggleButtonCloseModeTextElement: a.createElement('div'),
        characterCountCommentElement: q('div', 'sz-feedback-comment-character-counter sz-feedback-display-none'),
      };
      d = {
        star: '⭐',
        happySmiley: '😀',
        mediumHappySmiley: '🙂',
        indifferentSmiley: '😐',
        mediumSadSmiley: '🙁',
        sadSmiley: '☹',
        thumbsUp: '👍',
        thumbsDown: '👎',
        commentLabelDefault: p.texts.comment,
      };
      ak = {
        mainBackgroundColor: p.layout.colors.background,
        toggleButtonBackgroundColor: p.layout.colors.background,
        submitButtonColor: p.layout.colors.buttonText,
        submitButtonBackgroundColor: p.layout.colors.button,
        arrowDownBackgroundColor: p.layout.colors.background,
        topGradient: 'transparent',
        bottomGradient: 'transparent',
        ratingButtonHeight: p.layout.font.size === 2 || p.layout.font.size === 3 || p.layout.font.size === 4 ? 36 : 28,
        ratingIconSize: p.layout.font.size === 2 || p.layout.font.size === 3 || p.layout.font.size === 4 ? 34 : 26,
        containerWidth: 320,
        containerHeight: 480,
        compactModeWidth: 430,
        layoutOrientation: x(),
        starSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 19.93 18.85"><path d="M16.19,18.85,10,15.2,3.82,18.85l1.58-7L0,7.22l7.14-.58L10,0l2.83,6.48,7.14.74-5.4,4.65Z"/></svg>',
        starOutlineSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 19.93 18.85"><path d="M10,4.23l1.25,2.91.41.91,1,.09,3.32.33-2.49,2.16-.75.66.25,1,.75,3.15-2.91-1.66L10,13.29l-.83.49L6.31,15.44l.75-3.23.25-1-.83-.58L4.07,8.55,7.22,8.3l1-.08.42-.91L10,4.23M10,0,7.14,6.64,0,7.22l5.4,4.65-1.58,7L10,15.2l6.23,3.65-1.66-7,5.4-4.65-7.14-.74L10,0Z"/></svg>',
        sadSmileySVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm3.5,6A1.5,1.5,0,1,1,12,7.5,1.5,1.5,0,0,1,13.5,6Zm-7,0A1.5,1.5,0,1,1,5,7.5,1.5,1.5,0,0,1,6.5,6ZM10,12a5.5,5.5,0,0,1,5.11,3.5H4.89A5.5,5.5,0,0,1,10,12Z"/></svg>',
        mediumSadSmileySVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm4,6.5A1.5,1.5,0,1,1,12.5,8,1.5,1.5,0,0,1,14,6.5Zm-8,0A1.5,1.5,0,1,1,4.5,8,1.5,1.5,0,0,1,6,6.5Zm8.15,8.83a7.32,7.32,0,0,0-8.3,0L4.69,13.7a9.25,9.25,0,0,1,10.63,0Z"/></svg>',
        mediumSmileySVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0ZM4.5,8A1.5,1.5,0,1,1,6,9.48,1.5,1.5,0,0,1,4.5,8ZM14,15H6V13h8Zm0-5.52A1.5,1.5,0,1,1,15.5,8,1.5,1.5,0,0,1,14,9.48Z"/></svg>',
        mediumHappySmileySVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm3.63,6.5A1.5,1.5,0,1,1,12.13,8,1.5,1.5,0,0,1,13.63,6.5Zm-7.25,0A1.5,1.5,0,1,1,4.88,8,1.5,1.5,0,0,1,6.38,6.5ZM5.85,12a7.32,7.32,0,0,0,8.3,0l1.17,1.62a9.2,9.2,0,0,1-10.63,0Z"/></svg>',
        happySmileySVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm3.5,6A1.5,1.5,0,1,1,12,7.5,1.5,1.5,0,0,1,13.5,6Zm-7,0A1.5,1.5,0,1,1,5,7.5,1.5,1.5,0,0,1,6.5,6ZM10,15.5A5.5,5.5,0,0,1,4.89,12H15.11A5.5,5.5,0,0,1,10,15.5Z"/></svg>',
        sadSmileyOutlineSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,10,18Z"/><circle cx="13.21" cy="7.19" r="1.5"/><circle cx="6.79" cy="7.19" r="1.5"/><path d="M10,11a5.5,5.5,0,0,1,5.11,3.5H4.89A5.5,5.5,0,0,1,10,11Z"/></svg>',
        mediumSadSmileyOutlineSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,10,18Z"/><circle cx="13.61" cy="7.09" r="1.5"/><circle cx="6.44" cy="7.09" r="1.5"/><path d="M14.18,14.41a7.34,7.34,0,0,0-8.31,0L4.71,12.79a9.2,9.2,0,0,1,10.63,0Z"/></svg>',
        mediumSmileyOutlineSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,10,18Z"/><circle cx="6.42" cy="7.81" r="1.5"/><rect x="6" y="12.26" width="8" height="2"/><circle cx="13.58" cy="7.81" r="1.5"/></svg>',
        mediumHappySmileyOutlineSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,10,18Z"/><circle cx="13.25" cy="7.81" r="1.5"/><circle cx="6.75" cy="7.81" r="1.5"/><path d="M5.85,11.57a7.32,7.32,0,0,0,8.3,0l1.17,1.63a9.2,9.2,0,0,1-10.63,0Z"/></svg>',
        happySmileyOutlineSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,10,18Z"/><circle cx="13.5" cy="7.19" r="1.5"/><circle cx="6.5" cy="7.19" r="1.5"/><path d="M10,15.19a5.5,5.5,0,0,1-5.11-3.5H15.11A5.5,5.5,0,0,1,10,15.19Z"/></svg>',
        thumbDownSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 19.19 17.45"><path d="M7.7,17.45l5.75-5.76A1.76,1.76,0,0,0,14,10.46V1.74A1.74,1.74,0,0,0,12.21,0H4.37a1.74,1.74,0,0,0-1.6,1.06L.14,7.16A1.85,1.85,0,0,0,0,7.85V9.6a1.74,1.74,0,0,0,1.74,1.74H7.29l-.82,3.75A1.72,1.72,0,0,0,7,16.7Zm11.49-7V0H15.7V10.47Z"/></svg>',
        thumbDownOutlineSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 19.05 17.32"><path d="M7.65,17.32l5.7-5.71a1.74,1.74,0,0,0,.5-1.22h5.2V0h-5.2A1.68,1.68,0,0,0,13,.24,1.72,1.72,0,0,0,12.12,0H4.34a1.74,1.74,0,0,0-1.6,1.05L.14,7.11A1.8,1.8,0,0,0,0,7.79V9.52a1.73,1.73,0,0,0,1.73,1.74h5.5L6.42,15a1.71,1.71,0,0,0,.48,1.6Zm.73-3.18.54-2.51.46-2.11H1.73V7.79L4.34,1.73h7.78v8.65Zm8.94-5.48H13.85V1.73h3.47Z"/></svg>',
        thumbUpSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 19.19 17.45"><path d="M11.49,0,5.74,5.75A1.78,1.78,0,0,0,5.23,7V15.7A1.75,1.75,0,0,0,7,17.45h7.84a1.76,1.76,0,0,0,1.61-1.06l2.62-6.11a1.81,1.81,0,0,0,.14-.69V7.85a1.74,1.74,0,0,0-1.74-1.74H11.91l.81-3.75A1.74,1.74,0,0,0,12.24.74ZM0,7V17.45H3.49V7Z"/></svg>',
        thumbUpOutlineSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 19.05 17.32"><path d="M11.4,0,5.7,5.71a1.72,1.72,0,0,0-.5,1.22H0V17.32H5.2a1.68,1.68,0,0,0,.86-.24,1.72,1.72,0,0,0,.87.24h7.78a1.71,1.71,0,0,0,1.59-1.05l2.61-6.06a1.81,1.81,0,0,0,.14-.69V7.79a1.74,1.74,0,0,0-1.73-1.73h-5.5l.81-3.72a1.71,1.71,0,0,0-.48-1.6Zm-.73,3.18-.54,2.51-.46,2.1h7.65V9.52l-2.61,6.07H6.93V6.93ZM1.73,8.66H5.2v6.93H1.73Z"/></svg>',
        number1SVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm1.11,14.08H9.6V8l-1.46.41-.37-1.3,2-.72h1.31Z"/></svg>',
        number2SVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm2.6,13.93H7.45V12.79l2.63-2.7A2.47,2.47,0,0,0,11,8.55a.94.94,0,0,0-1-1,1.41,1.41,0,0,0-1.29.9L7.4,7.7A2.7,2.7,0,0,1,9.94,6.07a2.4,2.4,0,0,1,2.54,2.42A3.61,3.61,0,0,1,11.22,11l-1.51,1.5H12.6Z"/></svg>',
        number3SVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0ZM10,13.93A2.7,2.7,0,0,1,7.3,12.3l1.3-.75a1.27,1.27,0,0,0,1.35.89c.79,0,1.23-.42,1.23-1s-.44-1.05-1.23-1.05H9.61L9,9.47l1.52-2h-3V6.07h4.84V7.33L10.94,9.2a2.26,2.26,0,0,1,1.76,2.2A2.53,2.53,0,0,1,10,13.93Z"/></svg>',
        number4SVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm3,12.54h-.83v1.31H10.64V12.54H7V11.13l2.57-5h1.62l-2.55,5h2V9.31h1.53v1.82H13Z"/></svg>',
        number5SVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,13.93a2.71,2.71,0,0,1-2.69-1.65l1.3-.76a1.29,1.29,0,0,0,1.39.92c.79,0,1.23-.42,1.23-1A1.05,1.05,0,0,0,10,10.35H7.68L8,6.07h4.36V7.49h-3L9.3,8.88h.79a2.45,2.45,0,0,1,2.63,2.52A2.53,2.53,0,0,1,10,13.93Z"/></svg>',
        number1OutlineSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,10,18Z"/><polygon points="7.77 6.66 8.14 7.96 9.6 7.56 9.6 13.65 11.12 13.65 11.12 5.95 9.79 5.95 7.77 6.66"/></svg>',
        number2OutlineSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,10,18Z"/><path d="M11.22,11a3.61,3.61,0,0,0,1.26-2.47A2.4,2.4,0,0,0,9.94,6.07,2.7,2.7,0,0,0,7.4,7.7l1.27.75A1.41,1.41,0,0,1,10,7.55a.94.94,0,0,1,1,1,2.47,2.47,0,0,1-.88,1.54l-2.63,2.7v1.14H12.6V12.46H9.71Z"/></svg>',
        number3OutlineSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,10,18Z"/><path d="M10.94,9.2l1.44-1.87V6.07H7.54V7.49h3L9,9.47l.58.88H10c.79,0,1.23.43,1.23,1.05s-.44,1-1.23,1a1.27,1.27,0,0,1-1.35-.89l-1.3.75A2.7,2.7,0,0,0,10,13.93,2.53,2.53,0,0,0,12.7,11.4,2.26,2.26,0,0,0,10.94,9.2Z"/></svg>',
        number4OutlineSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,10,18Z"/><polygon points="12.17 9.31 10.64 9.31 10.64 11.13 8.64 11.13 11.19 6.15 9.56 6.15 7 11.13 7 12.54 10.64 12.54 10.64 13.85 12.17 13.85 12.17 12.54 13 12.54 13 11.13 12.17 11.13 12.17 9.31"/></svg>',
        number5OutlineSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-rating-icon" viewBox="0 0 20 20"><path d="M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,10,18Z"/><path d="M10.09,8.88H9.3l.09-1.39h3V6.07H8l-.31,4.28H10A1.05,1.05,0,0,1,11.2,11.4c0,.62-.44,1-1.23,1a1.29,1.29,0,0,1-1.39-.92l-1.3.76A2.71,2.71,0,0,0,10,13.93a2.53,2.53,0,0,0,2.75-2.53A2.45,2.45,0,0,0,10.09,8.88Z"/></svg>',
        closeIconSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-toggle-button-icon" viewBox="0 0 15 15"><path d="M28,257.33l-5.77-5.77L28,245.79a1,1,0,0,0-1.43-1.43l-5.77,5.77L15,244.36a1,1,0,0,0-1.43,1.43l5.77,5.77-5.77,5.77A1,1,0,0,0,15,258.76L20.81,253l5.77,5.77A1,1,0,0,0,28,257.33Z" transform="translate(-13.31 -244.06)"/></svg>',
        plusBracketsSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-toggle-button-icon" viewBox="0 0 24 24"><polygon points="24 24 17.54 24 17.54 21.58 21.48 21.58 21.48 2.42 17.54 2.42 17.54 0 24 0 24 24"/><polygon points="6.46 24 0 24 0 0 6.46 0 6.46 2.42 2.52 2.42 2.52 21.58 6.46 21.58 6.46 24"/><polygon points="17.42 10.68 13.48 10.68 13.48 6.74 10.61 6.74 10.61 10.68 6.67 10.68 6.67 13.55 10.61 13.55 10.61 17.49 13.48 17.49 13.48 13.55 17.42 13.55 17.42 10.68"/></svg>',
        speechBubbleSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-toggle-button-icon" viewBox="0 0 24 19.94"><path d="M-31.76,105.79c-6.63,0-12,3.83-12,8.55,0,2.84,1.94,5.35,4.93,6.91l0,4.49,5.72-2.9c0.45,0,.9.06,1.36,0.06,6.63,0,12-3.83,12-8.55S-25.13,105.79-31.76,105.79ZM-24.64,118H-38.88v-1.51h14.24V118Zm0-5.66H-38.88v-1.51h14.24v1.51Z" transform="translate(43.76 -105.79)"/></svg>',
        noteSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-toggle-button-icon" viewBox="0 0 17.5 24"><polygon points="11.73 0 11.73 5.19 17.5 5.19 11.73 0"/><path d="M-32,176.62L-32,170.3H-42.84v24h17.5V176.62H-32Zm3.81,12.51H-40.13v-1.51h11.91v1.51Zm0-5.64H-40.13V182h11.91v1.51Z" transform="translate(42.84 -170.3)"/></svg>',
        writingPenSVG:
          '<svg focusable="false" aria-hidden="true" class="sz-feedback-toggle-button-icon" viewBox="0 0 24 22.71"><rect y="19.94" width="24" height="2.77"/><polygon points="18.09 3.52 8.89 17.23 5.76 18.51 5.77 15.13 14.96 1.42 18.09 3.52"/><rect x="150.49" y="172.45" width="1.32" height="3.76" transform="translate(-211.86 30.04) rotate(-56.15)"/></svg>',
      };
      r = {
        selectedRating: null,
        validation: {
          uncommentedErrorMessage: p.texts.errors.comment,
          unratedErrorMessage: p.texts.errors.grade,
          confirmationMessage: p.texts.confirmation,
        },
      };
      n = {
        feedbackContainerVisible: w(true),
        feedbackContainerHidden: w(false),
        visible: 'sz-feedback-display-block',
        hidden: 'sz-feedback-display-none',
        visuallyHidden: 'sz-feedback-visually-hidden',
        ratingLabel: 'sz-feedback-rating-icon-label',
      };
      function ad(al, am) {
        al.setAttribute('height', am);
        al.setAttribute('width', am);
      }
      function V() {
        var al = a.getElementsByTagName('body')[0];
        ak.mobileModeMinWidth = al.clientWidth <= ak.containerWidth;
        return al.clientWidth < ak.compactModeWidth;
      }
      function T() {
        var al = a.getElementsByTagName('body')[0];
        var an = a.createElement('div');
        an.style.cssText = 'position:fixed;top:0;bottom:0;';
        al.appendChild(an);
        var am = an.offsetHeight <= ak.containerHeight;
        al.removeChild(an);
        return am;
      }
      function U() {
        return t.feedbackContainerElement.className.indexOf(n.feedbackContainerVisible) > -1;
      }
      function ab() {
        if (p.layout.satisfaction.show) {
          aa(t.satisfactionScaleElement, 'sz-feedback-display-none', '');
          var am = v(t.satisfactionScaleElement.children, n.ratingLabel);
          var al;
          for (C = 0; C < am.length; C++) {
            al = am[C];
            Z(al.firstChild, 'sz-feedback-rating-element-active');
          }
        }
        t.submitButtonElement.textContent = p.texts.button;
        t.submitButtonElement.setAttribute('aria-label', p.texts.button);
        t.feedbackQuestionElement.textContent = p.texts.question;
        if (t.textAreaElement) {
          t.textAreaElement.value = '';
          t.textAreaElement.disabled = false;
          aa(t.textAreaElement, 'sz-feedback-display-none', '');
        }
        aa(t.labelAndSupportLinkContainerElement, 'sz-feedback-display-none', '');
        r.isSubmitted = false;
        r.selectedRating = null;
      }
      function f(al, am) {
        al.addEventListener('click', am, false);
      }
      function v(al, am) {
        var ao = [];
        for (var an = 0; an < al.length; an++) {
          if (al[an].className.indexOf(am) > -1) {
            ao.push(al[an]);
          }
        }
        return ao;
      }
      function af() {
        if (V()) {
          ak.mobileModeEnabled = true;
        }
        if (U()) {
          if (r.isSubmitted && p.behavior.removeOnClose) {
            B();
            return;
          }
          aa(t.feedbackContainerElement, n.feedbackContainerVisible, n.feedbackContainerHidden);
          aa(t.toggleButtonOpenModeContainerElement, n.hidden, n.visible);
          aa(t.toggleButtonCloseModeContainerElement, n.visible, n.hidden);
          if (ak.mobileModeEnabled && ak.layoutOrientation !== 'bottom') {
            aa(t.toggleButtonContainerElement, 'sz-feedback-visibility-hidden', 'sz-feedback-visibility-visible');
          }
        } else {
          if (r.isSubmitted) {
            ab();
          }
          aa(t.feedbackContainerElement, n.feedbackContainerHidden, n.feedbackContainerVisible);
          aa(t.toggleButtonOpenModeContainerElement, n.visible, n.hidden);
          aa(t.toggleButtonCloseModeContainerElement, n.hidden, n.visible);
          if (ak.mobileModeEnabled && ak.layoutOrientation !== 'bottom') {
            aa(t.toggleButtonContainerElement, 'sz-feedback-visibility-visible', 'sz-feedback-visibility-hidden');
          }
        }
        var al = U();
        t.toggleButtonElement.setAttribute('aria-expanded', al);
        t.feedbackContainerElement.setAttribute('aria-hidden', !al);
      }
      function B() {
        document.cookie = 'sz-feedback-should-hide=true';
        A();
      }
      function ae() {
        return document.cookie.indexOf('sz-feedback-should-hide=true') !== -1;
      }
      function A() {
        if (t.feedbackSectionElement) {
          t.feedbackSectionElement.style.display = 'none';
        }
      }
      function z(am) {
        var al = u(am);
        return {
          r: parseInt(al[0], 16),
          g: parseInt(al[1], 16),
          b: parseInt(al[2], 16),
        };
      }
      function H() {
        switch (p.layout.font.name) {
          case 2:
            p.layout.font.fontFamily = '"Times New Roman", Times, serif';
            break;
          case 3:
            p.layout.font.fontFamily = 'Arial, “Helvetica Neue”, Helvetica, sans-serif';
            break;
          case 4:
            p.layout.font.fontFamily = '"Arial Black", sans-serif';
            break;
          case 5:
            p.layout.font.fontFamily = '"Courier New", Courier, monospace';
            break;
          case 6:
            p.layout.font.fontFamily = 'Georgia, serif';
            break;
          case 7:
            p.layout.font.fontFamily = 'Impact, sans-serif';
            break;
          case 8:
            p.layout.font.fontFamily = '"Lucida Console", Monaco, monospace';
            break;
          case 9:
            p.layout.font.fontFamily = '"Lucida Sans Unicode", "Lucida Grande", sans-serif';
            break;
          case 10:
            p.layout.font.fontFamily = '"Palatino Linotype", Palatino, serif';
            break;
          case 11:
            p.layout.font.fontFamily = 'Tahoma, Geneva, sans-serif';
            break;
          case 12:
            p.layout.font.fontFamily = '"Trebuchet MS", Helvetica, sans-serif';
            break;
          default:
            p.layout.font.fontFamily = 'Verdana, Geneva, sans-serif';
            break;
        }
        ak.lineHeight = '1.5';
        switch (p.layout.font.size) {
          case 4:
            ak.fontSize = '18px';
            ak.lineHeight = '1.3';
            ak.toggleButtonIconSize = 24;
            break;
          case 3:
            ak.fontSize = '16px';
            ak.lineHeight = '1.4';
            ak.toggleButtonIconSize = 24;
            break;
          case 2:
            ak.fontSize = '14px';
            ak.toggleButtonIconSize = p.layout.state === 2 ? 16 : 24;
            break;
          default:
            ak.fontSize = '11px';
            ak.toggleButtonIconSize = p.layout.state === 2 ? 12 : 24;
            break;
        }
      }
      function K() {
        t.feedbackSectionElement.addEventListener('keyup', function (al) {
          if (al.key === 'Escape') {
            if (U()) {
              af();
            }
          }
        });
      }
      function S() {
        switch (p.layout.icon) {
          case 1:
            t.toggleButtonOpenModeIconContainerElement.innerHTML = ak.plusBracketsSVG;
            break;
          case 2:
            t.toggleButtonOpenModeIconContainerElement.innerHTML = ak.speechBubbleSVG;
            break;
          case 3:
            t.toggleButtonOpenModeIconContainerElement.innerHTML = ak.noteSVG;
            break;
          case 4:
            t.toggleButtonOpenModeIconContainerElement.innerHTML = ak.writingPenSVG;
            break;
        }
        t.toggleButtonCloseModeIconContainerElement.innerHTML = ak.closeIconSVG;
        ad(t.toggleButtonOpenModeIconContainerElement.firstChild, ak.toggleButtonIconSize);
        ad(t.toggleButtonCloseModeIconContainerElement.firstChild, ak.toggleButtonIconSize);
        t.toggleButtonElement.setAttribute('unselectable', 'true');
        t.toggleButtonElement.setAttribute('aria-controls', 'szfb_feedback_container');
        f(t.toggleButtonElement, af);
        if (p.layout.state !== 2) {
          var am = q('span', n.visuallyHidden);
          am.innerHTML = p.texts.title;
          t.toggleButtonOpenModeContainerElement.appendChild(am);
        }
        t.toggleButtonOpenModeContainerElement.appendChild(t.toggleButtonOpenModeIconContainerElement);
        t.toggleButtonOpenModeContainerElement.appendChild(t.toggleButtonOpenModeTextElement);
        if (p.layout.state !== 2) {
          var al = q('span', n.visuallyHidden);
          al.innerHTML = p.texts.close;
          t.toggleButtonCloseModeContainerElement.appendChild(al);
        }
        t.toggleButtonCloseModeContainerElement.appendChild(t.toggleButtonCloseModeIconContainerElement);
        t.toggleButtonCloseModeContainerElement.appendChild(t.toggleButtonCloseModeTextElement);
        t.toggleButtonElement.appendChild(t.toggleButtonOpenModeContainerElement);
        t.toggleButtonElement.appendChild(t.toggleButtonCloseModeContainerElement);
        t.toggleButtonContainerElement.appendChild(t.toggleButtonElement);
      }
      function G() {
        t.feedbackQuestionElement.setAttribute('id', 'sz-feedback-question-element');
        t.feedbackQuestionElement.textContent = p.texts.question;
        t.formElement.appendChild(t.feedbackQuestionElement);
      }
      function M() {
        function aq(av) {
          switch (av) {
            case 1:
              return [d.sadSmiley, d.happySmiley];
            case 2:
              return [d.thumbsDown, d.thumbsUp];
            case 4:
              return [d.sadSmiley, d.indifferentSmiley, d.happySmiley];
            case 7:
              return [d.sadSmiley, d.mediumSadSmiley, d.indifferentSmiley, d.mediumHappySmiley, d.happySmiley];
            case 5:
              return [au(1), au(2), au(3)];
            case 9:
              return [1, 2, 3, 4, 5];
            default:
              return [au(1), au(2), au(3), au(4), au(5)];
          }
        }
        function ar(aw, av) {
          switch (aw) {
            case 1:
              if (av) {
                return [ak.sadSmileySVG, ak.happySmileySVG];
              }
              return [ak.sadSmileyOutlineSVG, ak.happySmileyOutlineSVG];
            case 2:
              if (av) {
                return [ak.thumbDownSVG, ak.thumbUpSVG];
              }
              return [ak.thumbDownOutlineSVG, ak.thumbUpOutlineSVG];
            case 4:
              if (av) {
                return [ak.sadSmileySVG, ak.mediumSmileySVG, ak.happySmileySVG];
              }
              return [ak.sadSmileyOutlineSVG, ak.mediumSmileyOutlineSVG, ak.happySmileyOutlineSVG];
            case 7:
              if (av) {
                return [
                  ak.sadSmileySVG,
                  ak.mediumSadSmileySVG,
                  ak.mediumSmileySVG,
                  ak.mediumHappySmileySVG,
                  ak.happySmileySVG,
                ];
              }
              return [
                ak.sadSmileyOutlineSVG,
                ak.mediumSadSmileyOutlineSVG,
                ak.mediumSmileyOutlineSVG,
                ak.mediumHappySmileyOutlineSVG,
                ak.happySmileyOutlineSVG,
              ];
            case 5:
              if (av) {
                return [ak.starSVG, ak.starSVG, ak.starSVG];
              }
              return [ak.starOutlineSVG, ak.starOutlineSVG, ak.starOutlineSVG];
            case 9:
              if (av) {
                return [ak.number1SVG, ak.number2SVG, ak.number3SVG, ak.number4SVG, ak.number5SVG];
              }
              return [
                ak.number1OutlineSVG,
                ak.number2OutlineSVG,
                ak.number3OutlineSVG,
                ak.number4OutlineSVG,
                ak.number5OutlineSVG,
              ];
            default:
              if (av) {
                return [ak.starSVG, ak.starSVG, ak.starSVG, ak.starSVG, ak.starSVG];
              }
              return [ak.starOutlineSVG, ak.starOutlineSVG, ak.starOutlineSVG, ak.starOutlineSVG, ak.starOutlineSVG];
          }
        }
        function au(av) {
          if (av === 1) {
            return av + ' ' + d.star;
          }
          return av + ' ' + d.star;
        }
        function al(av) {
          var aA, az, ay, aw, ax;
          for (ax = 0; ax < av.length; ax++) {
            aw = 'sz-feedback-rating-element-' + ax;
            aA = q('input', 'sz-feedback-rating-icon-input ' + n.visuallyHidden);
            aA.setAttribute('type', 'radio');
            aA.setAttribute('id', aw);
            aA.setAttribute('name', 'sz-feedback-rating');
            aA.setAttribute('value', ax);
            aA.setAttribute('required', '');
            ay = q('span', 'sz-feedback-rating-icon-label-text ' + n.visuallyHidden);
            ay.innerHTML = ak.ratingIconsAriaLabels[ax];
            az = q('label', n.ratingLabel);
            az.innerHTML = av[ax];
            az.appendChild(ay);
            az.setAttribute('for', aw);
            t.satisfactionScaleElement.appendChild(aA);
            t.satisfactionScaleElement.appendChild(az);
          }
        }
        function at(ax, av, aw) {
          var ay = document.createElement('div');
          ay.innerHTML = ar(p.layout.satisfaction.scale, aw)[av];
          ax.replaceChild(ay.firstChild, ax.firstChild);
        }
        function am(ax) {
          var az = ax.parentNode,
            ay = v(az.children, n.ratingLabel),
            av = Array.prototype.indexOf.call(ay, ax),
            aA,
            aw;
          aA = function (aC) {
            return aC === av;
          };
          switch (p.layout.satisfaction.scale) {
            case 5:
            case 8:
            case 9:
              aA = function (aC) {
                return aC <= av;
              };
              break;
          }
          for (aw = 0; aw < ay.length; aw++) {
            at(ay[aw], aw, aA(aw));
            if (aA(aw)) {
              h(ay[aw].firstChild, 'sz-feedback-rating-element-active');
            } else {
              Z(ay[aw].firstChild, 'sz-feedback-rating-element-active');
            }
          }
          function aB(aD, aC) {
            switch (aD) {
              case 7:
              case 8:
              case 9:
                switch (aC) {
                  case 0:
                    return 1;
                  case 1:
                    return 2;
                  case 2:
                    return 3;
                  case 3:
                    return 4;
                  case 4:
                    return 5;
                }
                break;
              case 1:
              case 2:
                switch (aC) {
                  case 0:
                    return 1;
                  case 1:
                    return 5;
                }
                break;
              case 4:
              case 5:
                switch (aC) {
                  case 0:
                    return 1;
                  case 1:
                    return 3;
                  case 2:
                    return 5;
                }
                break;
            }
            return null;
          }
          r.selectedRating = aB(p.layout.satisfaction.scale, av);
        }
        if (p.layout.satisfaction.show) {
          ak.ratingIconsAriaLabels = aq(p.layout.satisfaction.scale);
          al(ar(p.layout.satisfaction.scale, false));
          var ap = v(t.satisfactionScaleElement.children, n.ratingLabel);
          var an = v(t.satisfactionScaleElement.children, 'sz-feedback-rating-icon-input');
          for (var ao = 0; ao < ap.length; ao++) {
            (function () {
              var aw = ap[ao];
              var av = an[ao];
              f(av, function () {
                am(aw);
              });
            })();
          }
          t.satisfactionScaleElement.setAttribute('aria-labelledby', 'sz-feedback-question-element');
          t.satisfactionScaleElement.setAttribute('role', 'radiogroup');
          t.validationRatingElement.setAttribute('role', 'alert');
          t.validationRatingElement.setAttribute('aria-atomic', 'true');
          t.formElement.appendChild(t.validationRatingElement);
          t.formElement.appendChild(t.satisfactionScaleElement);
        }
        t.validationCommentElement.setAttribute('id', 'sz-feedback-comment-validation');
        t.validationCommentElement.setAttribute('role', 'alert');
        t.validationCommentElement.setAttribute('aria-atomic', 'true');
        t.formElement.appendChild(t.validationCommentElement);
      }
      function N() {
        function am(ap) {
          if (ap) {
            g(t.feedbackContainerElement, n.feedbackContainerVisible);
            g(t.toggleButtonOpenModeContainerElement, n.hidden);
            g(t.toggleButtonCloseModeContainerElement, n.visible);
          } else {
            g(t.feedbackContainerElement, n.feedbackContainerHidden);
            g(t.toggleButtonOpenModeContainerElement, n.visible);
            g(t.toggleButtonCloseModeContainerElement, n.hidden);
          }
        }
        switch (p.layout.state) {
          case 1:
            g(t.toggleButtonOpenModeIconContainerElement, 'sz-feedback-toggle-button-icon-container-centered');
            g(t.toggleButtonCloseModeIconContainerElement, 'sz-feedback-toggle-button-icon-container-centered');
            ak.toggleButtonIconPadding = '24px';
            am(false);
            break;
          case 3:
            g(t.toggleButtonOpenModeIconContainerElement, 'sz-feedback-toggle-button-icon-container-centered');
            g(t.toggleButtonCloseModeIconContainerElement, 'sz-feedback-toggle-button-icon-container-centered');
            ak.toggleButtonIconPadding = '24px';
            if (!W.isSetupPreview && !p.layout.everyPage && a.referrer) {
              var ao = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im;
              var al = ao.exec(c.core.curr.toLowerCase());
              var an = ao.exec(a.referrer.toLowerCase());
              if (al && al.length > 1 && an && an.length > 1) {
                if (al[1] === an[1]) {
                  am(false);
                } else {
                  am(false);
                }
              } else {
                am(true);
              }
            } else {
              am(true);
            }
            break;
          case 2:
            g(t.toggleButtonOpenModeTextElement, 'sz-feedback-toggle-button-text sz-feedback-main-font-style');
            g(t.toggleButtonCloseModeTextElement, 'sz-feedback-toggle-button-text sz-feedback-main-font-style');
            t.toggleButtonOpenModeTextElement.textContent = p.texts.title;
            t.toggleButtonCloseModeTextElement.textContent = p.texts.close;
            ak.toggleButtonIconPadding = '12px';
            am(false);
            break;
        }
      }
      function R() {
        function al(ao, an) {
          var ap = z(ao);
          return 'rgba(' + ap.r + ',' + ap.g + ',' + ap.b + ', ' + an + ')';
        }
        function am() {
          ak.iconColor = p.layout.colors.text;
        }
        switch (p.layout.theme) {
          case 1:
            if (p.layout.backgroundTransparent) {
              ak.mainBackgroundColor = al(p.layout.colors.background, 0.85);
              ak.arrowDownBackgroundColor = al(p.layout.colors.background, 0.85);
            }
            break;
          case 2:
            g(t.feedbackContainerElement, 'sz-feedback-border-radius');
            g(t.submitButtonElement, 'sz-feedback-border-radius');
            if (p.layout.backgroundTransparent) {
              ak.mainBackgroundColor = al(p.layout.colors.background, 0.85);
              ak.arrowDownBackgroundColor = al(p.layout.colors.background, 0.85);
            }
            break;
          default:
            if (p.layout.backgroundTransparent) {
              ak.topGradient = al(o(p.layout.colors.background, 0.3), 0.85);
              ak.bottomGradient = al(o(p.layout.colors.background, -0.3), 0.85);
              if (ak.layoutOrientation === 'bottom') {
                ak.arrowDownBackgroundColor = ak.bottomGradient;
              } else {
                ak.arrowDownBackgroundColor = p.layout.colors.background;
              }
            } else {
              ak.topGradient = o(p.layout.colors.background, 0.3);
              ak.bottomGradient = o(p.layout.colors.background, -0.3);
              if (ak.layoutOrientation === 'bottom') {
                ak.arrowDownBackgroundColor = ak.bottomGradient;
              } else {
                ak.arrowDownBackgroundColor = p.layout.colors.background;
              }
            }
            g(t.feedbackContainerElement, 'sz-feedback-container-gradient');
            break;
        }
        am();
      }
      function Q() {
        if (p.layout.supportLink) {
          var al = a.createElement('a');
          al.textContent = p.texts.supportLinkText;
          al.setAttribute('href', p.texts.supportUrl);
          al.setAttribute('target', '_blank');
          if (p.layout.comment.show) {
            g(al, 'sz-feedback-support-link-right');
          } else {
            g(al, 'sz-feedback-support-link-centered');
          }
          t.labelAndSupportLinkContainerElement.appendChild(al);
        }
        t.formElement.appendChild(t.labelAndSupportLinkContainerElement);
      }
      function D() {
        if (p.layout.comment.show) {
          var ao = q('label', 'sz-feedback-label-note');
          ao.setAttribute('for', 'sz-feedback-textarea');
          if (p.texts.commentHeader) {
            ao.textContent = p.texts.commentHeader;
          } else {
            ao.textContent = d.commentLabelDefault;
            g(ao, n.visuallyHidden);
          }
          t.labelAndSupportLinkContainerElement.appendChild(ao);
          var am = 1000,
            al = a.createElement('span');
          function an(aq) {
            var au = aq.target || aq.srcElement;
            var at = au.value.length >= am / 2;
            var ar = t.characterCountCommentElement.className.indexOf('sz-feedback-display-block') > -1;
            if (at && !ar) {
              aa(t.characterCountCommentElement, 'sz-feedback-display-none', 'sz-feedback-display-block');
            } else {
              if (!at && ar) {
                aa(t.characterCountCommentElement, 'sz-feedback-display-block', 'sz-feedback-display-none');
              }
            }
            if (au.value.length > am) {
              au.value = au.value.substring(0, am);
            }
            al.textContent = au.value.length;
          }
          t.textAreaElement = q('textarea', 'sz-feedback-textarea sz-feedback-main-font-style ignore');
          t.textAreaElement.setAttribute('rows', '5');
          t.textAreaElement.setAttribute('placeholder', p.texts.comment);
          t.textAreaElement.setAttribute('maxlength', am);
          t.textAreaElement.setAttribute('id', 'sz-feedback-textarea');
          t.textAreaElement.addEventListener('input', an);
          t.textAreaElement.addEventListener('keyup', an);
          t.textAreaElement.addEventListener('cut', function (aq) {
            setTimeout(function () {
              an(aq);
            }, 0);
          });
          var ap = a.createElement('span');
          ap.textContent = '/' + am;
          t.characterCountCommentElement.appendChild(al);
          t.characterCountCommentElement.appendChild(ap);
          if (p.layout.comment.mandatory) {
            t.textAreaElement.setAttribute('required', '');
            t.textAreaElement.setAttribute('aria-describedby', 'sz-feedback-comment-validation');
          }
          t.formElement.appendChild(t.textAreaElement);
          t.formElement.appendChild(t.characterCountCommentElement);
        }
      }
      function I() {
        t.formElement.appendChild(t.submitButtonElement);
        t.feedbackContainerElement.appendChild(t.formElement);
      }
      function E() {
        t.dontShowAgainButtonElement.innerText = p.texts.dontShowAgain;
        f(t.dontShowAgainButtonElement, B);
        t.feedbackContainerElement.appendChild(t.dontShowAgainButtonElement);
      }
      function P() {
        t.submitButtonElement.textContent = p.texts.button;
        t.submitButtonElement.setAttribute('aria-atomic', 'true');
      }
      function L() {
        switch (p.layout.position) {
          case 1:
            g(t.feedbackContainerElement, 'sz-feedback-right-center-position');
            g(t.toggleButtonContainerElement, 'sz-feedback-right-center-position');
            break;
          case 2:
            g(t.feedbackContainerElement, 'sz-feedback-right-bottom-position');
            g(t.toggleButtonContainerElement, 'sz-feedback-right-bottom-position');
            break;
          case 3:
            g(t.feedbackContainerElement, 'sz-feedback-left-center-position');
            g(t.toggleButtonContainerElement, 'sz-feedback-left-center-position');
            break;
          case 4:
            g(t.feedbackContainerElement, 'sz-feedback-left-bottom-position');
            g(t.toggleButtonContainerElement, 'sz-feedback-left-bottom-position');
            break;
          case 6:
            g(t.feedbackContainerElement, 'sz-feedback-bottom-left-position');
            g(t.toggleButtonContainerElement, 'sz-feedback-bottom-left-position');
            break;
          case 7:
            g(t.feedbackContainerElement, 'sz-feedback-bottom-right-position');
            g(t.toggleButtonContainerElement, 'sz-feedback-bottom-right-position');
            break;
          default:
            g(t.feedbackContainerElement, 'sz-feedback-bottom-center-position');
            g(t.toggleButtonContainerElement, 'sz-feedback-bottom-center-position');
            break;
        }
        var am, an, al;
        if (ak.layoutOrientation === 'left-side') {
          am = q('div', 'sz-feedback-container-arrow-left');
          t.feedbackContainerElement.appendChild(am);
          if (p.layout.state === 2) {
            g(t.toggleButtonContainerElement, 'sz-feedback-rotate-left-side');
          }
        } else {
          if (ak.layoutOrientation === 'right-side') {
            an = q('div', 'sz-feedback-container-arrow-right');
            t.feedbackContainerElement.appendChild(an);
            if (p.layout.state === 2) {
              g(t.toggleButtonContainerElement, 'sz-feedback-rotate-right-side');
            }
          } else {
            al = q('div', 'sz-feedback-container-arrow-down');
            t.feedbackContainerElement.appendChild(al);
          }
        }
      }
      function J() {
        var al = function (ap) {
          ap.preventDefault();
          if (r.isSubmitted) {
            if (p.behavior.removeOnClose) {
              B();
              return;
            }
            af();
            if (ak.mobileModeEnabled) {
              aa(t.toggleButtonContainerElement, 'sz-feedback-visibility-visible', 'sz-feedback-visibility-hidden');
            }
            return false;
          }
          var aw = false;
          var ao = false;
          if (p.layout.satisfaction.show) {
            if (r.selectedRating === null) {
              aa(t.validationRatingElement, 'sz-feedback-hide-validation', 'sz-feedback-show-validation');
              t.validationRatingElement.textContent = r.validation.unratedErrorMessage;
              t.satisfactionScaleElement.setAttribute('aria-invalid', 'true');
              aw = true;
            } else {
              t.validationRatingElement.textContent = '';
              aa(t.validationRatingElement, 'sz-feedback-show-validation', 'sz-feedback-hide-validation');
            }
          }
          if (p.layout.comment.show && p.layout.comment.mandatory && t.textAreaElement.value === '') {
            aa(t.validationCommentElement, 'sz-feedback-hide-validation', 'sz-feedback-show-validation');
            t.validationCommentElement.textContent = r.validation.uncommentedErrorMessage;
            t.textAreaElement.setAttribute('aria-invalid', 'true');
            ao = true;
          } else {
            t.validationCommentElement.textContent = '';
            aa(t.validationCommentElement, 'sz-feedback-show-validation', 'sz-feedback-hide-validation');
          }
          if (aw || (p.layout.comment.mandatory && ao)) {
            return false;
          }
          if (!W.isSetupPreview) {
            if (!c.analytics.state.tracked) {
              c.push(['trackdynamic']);
            }
            var au = r.selectedRating ? r.selectedRating : 0;
            var an = t.textAreaElement ? t.textAreaElement.value : null;
            var av = {
              smiley: au,
              comment: an,
              accountid: c.analytics.opts('accountid'),
              url: c.core.curr,
              feedbackid: c.feedback.feedbackid,
              luid: c.analytics.opts('luid'),
            };
            var at = [];
            for (var ar in av) {
              if (av.hasOwnProperty(ar)) {
                if (av[ar] === null) {
                  continue;
                }
                at.push(ar + '=' + encodeURIComponent(av[ar]));
              }
            }
            var aq = new Image();
            aq.src = c.feedback.endpoint + '?' + at.join('&') + '&rt=img';
            c.core.log('Feedback request sent: {0}', aq.src);
            c.push(['feedback_response', c.feedback.feedbackid, c.feedback.feedbackUid, au, an]);
          }
          if (p.layout.satisfaction.show) {
            t.satisfactionScaleElement.removeAttribute('aria-invalid');
            g(t.satisfactionScaleElement, 'sz-feedback-display-none');
          }
          if (t.textAreaElement) {
            t.textAreaElement.disabled = true;
            t.textAreaElement.removeAttribute('aria-invalid');
            g(t.textAreaElement, 'sz-feedback-display-none');
            g(t.characterCountCommentElement, 'sz-feedback-display-none');
          }
          g(t.labelAndSupportLinkContainerElement, 'sz-feedback-display-none');
          g(t.dontShowAgainButtonElement, 'sz-feedback-display-none');
          t.feedbackQuestionElement.textContent = r.validation.confirmationMessage;
          t.submitButtonElement.textContent = p.texts.close;
          t.submitButtonElement.setAttribute('aria-label', p.texts.close);
          r.isSubmitted = true;
          return true;
        };
        var am = function (ao) {
          ao.preventDefault();
          var ap = false;
          var an = false;
          if (p.layout.satisfaction.show) {
            if (r.selectedRating === null) {
              aa(t.validationRatingElement, 'sz-feedback-hide-validation', 'sz-feedback-show-validation');
              t.validationRatingElement.textContent = r.validation.unratedErrorMessage;
              t.satisfactionScaleElement.setAttribute('aria-invalid', 'true');
              ap = true;
            } else {
              t.validationRatingElement.textContent = '';
              aa(t.validationRatingElement, 'sz-feedback-show-validation', 'sz-feedback-hide-validation');
            }
          }
          if (p.layout.comment.show && p.layout.comment.mandatory && t.textAreaElement.value === '') {
            aa(t.validationCommentElement, 'sz-feedback-hide-validation', 'sz-feedback-show-validation');
            t.validationCommentElement.textContent = r.validation.uncommentedErrorMessage;
            t.textAreaElement.setAttribute('aria-invalid', 'true');
            an = true;
          } else {
            t.validationCommentElement.textContent = '';
            aa(t.validationCommentElement, 'sz-feedback-show-validation', 'sz-feedback-hide-validation');
          }
          if (ap || an) {
            return false;
          }
        };
        t.formElement.addEventListener('blur', am, true);
        t.formElement.addEventListener('submit', al, false);
      }
      function m() {
        if (V()) {
          if (!ak.mobileModeEnabled) {
            ak.mobileModeEnabled = true;
            if (U() && ak.layoutOrientation !== 'bottom') {
              aa(t.toggleButtonContainerElement, 'sz-feedback-visibility-visible', 'sz-feedback-visibility-hidden');
            }
          }
          X();
          l();
        } else {
          if (ak.mobileModeEnabled) {
            ak.mobileModeEnabled = false;
            aa(t.toggleButtonContainerElement, 'sz-feedback-visibility-hidden', 'sz-feedback-visibility-visible');
          }
          Y();
          j();
        }
      }
      function l() {
        var ap = V();
        var am = T();
        if (ap || am) {
          var aq = a.createElement('style');
          var ao = '';
          var an = '';
          if (ap) {
            var al = ak.mobileModeMinWidth ? '0' : '1%';
            if (!a.getElementById('sz-feedback-styling-mobile')) {
              if (p.behavior.showOnDevices !== 2 && p.behavior.showOnDevices !== 1) {
                ao = '.sz-feedback-section{display:none;}';
              } else {
                ao =
                  '.sz-feedback-left-transition-visible{left:' +
                  al +
                  ';}.sz-feedback-right-transition-visible{right:' +
                  al +
                  ';}.sz-feedback-container{max-width:100vw;}.sz-feedback-container-close-button{display:block !important;}.sz-feedback-container-arrow-left,.sz-feedback-container-arrow-right{display:none;}.sz-feedback-bottom-left-position{left:' +
                  al +
                  ';}.sz-feedback-bottom-right-position{right:' +
                  al +
                  ';}';
                if (p.layout.state === 1 || p.layout.state === 3) {
                  if (p.layout.position === 6) {
                    ao +=
                      '.sz-feedback-toggle-button-container.sz-feedback-bottom-left-position{margin-left:60px;}.sz-feedback-container-arrow-down{left:60px;}';
                  } else {
                    if (p.layout.position === 7) {
                      ao +=
                        '.sz-feedback-toggle-button-container.sz-feedback-bottom-right-position{margin-right:60px;}.sz-feedback-container-arrow-down{left:260px;}';
                    }
                  }
                }
                if (p.layout.state === 3) {
                  aa(t.toggleButtonContainerElement, 'sz-feedback-visibility-visible', 'sz-feedback-visibility-hidden');
                }
              }
            }
          }
          if (am) {
            an =
              '.sz-feedback-container{position:fixed;top:0;left:0;padding:4px;height:100vh;transform:none;overflow-y:scroll;}';
          }
          aq.type = 'text/css';
          aq.id = 'sz-feedback-styling-mobile';
          aq.innerHTML = an + ' ' + ao;
          a.head.appendChild(aq);
        }
      }
      function j() {
        if (!V()) {
          if (p.behavior.showOnDevices !== 3 && p.behavior.showOnDevices !== 1) {
            if (!a.getElementById('sz-feedback-styling-desktop')) {
              var am = a.createElement('style');
              var al = '.sz-feedback-section{display:none;}';
              am.type = 'text/css';
              am.id = 'sz-feedback-styling-desktop';
              am.innerHTML = al;
              a.head.appendChild(am);
            }
          } else {
            X();
          }
        }
      }
      function X() {
        var al = a.getElementById('sz-feedback-styling-desktop');
        if (al) {
          a.head.removeChild(al);
        }
      }
      function Y() {
        var al = a.getElementById('sz-feedback-styling-mobile');
        if (al) {
          a.head.removeChild(al);
        }
      }
      function O() {
        var al, am;
        al =
          '@media print {.sz-feedback-section{display:none!important;}}.sz-feedback-container-close-button,.sz-feedback-submit-button,.sz-feedback-toggle-button,.sz-feedback-rating-icon-label{position:static !important;color:' +
          p.layout.colors.text +
          '!important;background:none !important;border:none !important;border-radius:0 !important;margin:0 !important;padding:0 !important;cursor:pointer !important;float:none !important;max-width: none !important;min-width: 0 !important;width: auto !important;max-height: none !important;min-height: 0 !important;height: auto !important;text-transform:none !important;text-shadow:none !important;box-sizing:border-box !important;}.sz-feedback-main-font-style{font-family:' +
          p.layout.font.fontFamily +
          ' !important;font-size:' +
          ak.fontSize +
          ' !important;color:' +
          p.layout.colors.text +
          ' !important;line-height:' +
          ak.lineHeight +
          ' !important;}.sz-feedback-container{width:' +
          ak.containerWidth +
          'px;padding:12px;box-sizing:border-box;z-index:2147483646;background-color:' +
          ak.mainBackgroundColor +
          ';}.sz-feedback-container>form{display:block;margin:0;padding:0;}.sz-feedback-container>button{margin:0;}.sz-feedback-question{margin:0;font-size:' +
          ak.fontSize +
          ';font-weight:normal;text-transform:none !important;}.sz-feedback-support-link-right, .sz-feedback-hide-link-right,.sz-feedback-support-link-centered, .sz-feedback-hide-link-centered{word-wrap:break-word !important;max-width:296px;color:' +
          p.layout.colors.text +
          ' !important;font-size:0.8em !important;text-decoration:underline !important;}.sz-feedback-support-link-right, .sz-feedback-hide-link-right{display:inline-block;float:right;text-align:right;}.sz-feedback-support-link-centered, .sz-feedback-hide-link-centered{display:block;text-align:center;}.sz-feedback-support-link-right:hover, .sz-feedback-hide-link-right:hover,.sz-feedback-support-link-centered:hover, .sz-feedback-hide-link-centered:hover,.sz-feedback-support-link-right:focus, .sz-feedback-hide-link-right:focus,.sz-feedback-support-link-centered:focus, .sz-feedback-hide-link-centered:focus{color:' +
          p.layout.colors.text +
          ' !important;}.sz-feedback-label-note{display:inline-block;word-wrap:break-word;max-width:296px;margin:0;font-weight:normal !important;font-size:0.9em !important;}.sz-feedback-container-gradient{background:' +
          ak.mainBackgroundColor +
          ';background:-webkit-linear-gradient(' +
          ak.topGradient +
          ',' +
          ak.mainBackgroundColor +
          ',' +
          ak.bottomGradient +
          ');background: -o-linear-gradient(' +
          ak.topGradient +
          ',' +
          ak.mainBackgroundColor +
          ',' +
          ak.bottomGradient +
          ');background: -moz-linear-gradient(' +
          ak.topGradient +
          ',' +
          ak.mainBackgroundColor +
          ',' +
          ak.bottomGradient +
          ');background: linear-gradient(' +
          ak.topGradient +
          ',' +
          ak.mainBackgroundColor +
          ',' +
          ak.bottomGradient +
          ');}.sz-feedback-submit-button{background-color:' +
          ak.submitButtonBackgroundColor +
          ' !important;color:' +
          ak.submitButtonColor +
          ' !important;padding:10px 32px !important;width:100% !important;margin-top:12px !important;font-weight: bold !important;}.sz-feedback-container-arrow-down{width:0;height:0;border-left:9px solid transparent;border-right:9px solid transparent;border-top:10px solid ' +
          ak.arrowDownBackgroundColor +
          ';position:absolute;margin-top:12px;left:50%;-ms-transform:translateX(-50%);-webkit-transform:translateX(-50%);transform:translateX(-50%);}.sz-feedback-container-arrow-left{width:0;height:0;border-top:9px solid transparent;border-bottom:9px solid transparent;border-right:10px solid ' +
          ak.arrowDownBackgroundColor +
          ';position:absolute;top:50%;left:0;margin-top:-9px;margin-left:-10px;}.sz-feedback-container-arrow-right{width:0;height:0;border-top:9px solid transparent;border-bottom:9px solid transparent;border-left:10px solid ' +
          ak.arrowDownBackgroundColor +
          ';position:absolute;top:50%;right:0;margin-top:-9px;margin-right:-10px;}.sz-feedback-toggle-button{position:relative !important;display:inline-block;background-color:' +
          ak.toggleButtonBackgroundColor +
          ' !important;padding:' +
          ak.toggleButtonIconPadding +
          ' !important;}.sz-feedback-toggle-button-icon-container{position:absolute;margin:auto;top:0;bottom:0;width:' +
          ak.toggleButtonIconSize +
          'px;height:' +
          ak.toggleButtonIconSize +
          'px;}.sz-feedback-toggle-button-text{white-space:nowrap;margin-left:' +
          (ak.toggleButtonIconSize + 10) +
          'px;}.sz-feedback-toggle-button-icon{fill:' +
          ak.iconColor +
          ' !important;vertical-align:baseline !important;}.sz-feedback-text-align-center{text-align:center !important;}.sz-feedback-word-wrap{word-wrap:break-word !important;}.sz-feedback-display-block{display:block;}.sz-feedback-display-inline-block{display:inline-block;}.sz-feedback-display-none{display:none;}.sz-feedback-visibility-visible{visibility:visible;}.sz-feedback-visibility-hidden{visibility:hidden;}.sz-feedback-toggle-button-container{z-index:2147483647;}.sz-feedback-toggle-button-icon-container-centered{left:0;right:0;}.sz-feedback-bottom-left-position,.sz-feedback-bottom-center-position{-ms-transform:translateX(-50%);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);}.sz-feedback-bottom-left-position{position:fixed;bottom:1px;left:10%;margin-left:160px;-webkit-transition:left 0.5s;transition:left 0.5s;}.sz-feedback-bottom-center-position{position:fixed;bottom:1px;left:50%;margin-right:-50%;}.sz-feedback-bottom-right-position{position:fixed;bottom:1px;right:10%;-ms-transform:translateX(50%);-webkit-transform:translateX(50%);-moz-transform:translateX(50%);-o-transform:translateX(50%);transform:translateX(50%);margin-right:160px;-webkit-transition:right 0.5s;transition:right 0.5s;}.sz-feedback-left-center-position,.sz-feedback-left-bottom-position,.sz-feedback-right-center-position,.sz-feedback-right-bottom-position{-ms-transform:translateY(50%);-webkit-transform:translateY(50%);-moz-transform:translateY(50%);-o-transform:translateY(50%);transform:translateY(50%);}.sz-feedback-left-center-position{position:fixed;left:1px;bottom:50%;}.sz-feedback-left-bottom-position{position:fixed;left:1px;bottom:30%;}.sz-feedback-right-center-position{position:fixed;right:1px;bottom:50%;}.sz-feedback-right-bottom-position{position:fixed;right:1px;bottom:30%;}.sz-feedback-bottom-transition-visible{-ms-transform:translate(-50%,-70px);-webkit-transform:translate(-50%,-70px);-moz-transform:translate(-50%,-70px);-o-transform:translate(-50%,-70px);transform:translate(-50%,-70px);-webkit-transition:transform 0.5s,left 0.5s;transition:transform 0.5s,left 0.5s;}.sz-feedback-bottom-transition-hidden{visibility:hidden;-ms-transform:translate(-50%,1000px);-webkit-transform:translate(-50%,1000px);-moz-transform:translate(-50%,1000px);-o-transform:translate(-50%,1000px);transform:translate(-50%,1000px);-webkit-transition:transform 0.5s,visibility 0.5s;transition:transform 0.5s,visibility 0.5s;-webkit-transition-timing-function:ease-in;-moz-transition-timing-function:ease-in;-o-transition-timing-function:ease-in;transition-timing-function:ease-in;}.sz-feedback-bottom-right-transition-visible{-ms-transform:translate(50%,-70px);-webkit-transform:translate(50%,-70px);-moz-transform:translate(50%,-70px);-o-transform:translate(50%,-70px);transform:translate(50%,-70px);-webkit-transition:transform 0.5s,right 0.5s;transition:transform 0.5s,right 0.5s;}.sz-feedback-bottom-right-transition-hidden{visibility:hidden;-ms-transform:translate(50%,1000px);-webkit-transform:translate(50%,1000px);-moz-transform:translate(50%,1000px);-o-transform:translate(50%,1000px);transform:translate(50%,1000px);-webkit-transition:transform 0.5s,visibility 0.5s;transition:transform 0.5s,visibility 0.5s;-webkit-transition-timing-function:ease-in;-moz-transition-timing-function:ease-in;-o-transition-timing-function:ease-in;transition-timing-function:ease-in;}.sz-feedback-left-transition-visible{left:70px;-webkit-transition:left 0.5s;transition:left 0.5s;}.sz-feedback-left-transition-hidden{left:-400px;visibility:hidden;-webkit-transition:left 0.5s,visibility 0.5s;transition:left 0.5s,visibility 0.5s;}.sz-feedback-right-transition-visible{right:70px;-webkit-transition:right 0.5s;transition:right 0.5s;}.sz-feedback-right-transition-hidden{right:-400px;visibility:hidden;-webkit-transition:right 0.5s,visibility 0.5s;transition:right 0.5s,visibility 0.5s;}.sz-feedback-rotate-left-side{-webkit-transform-origin:0 100%;-moz-transform-origin:0 100%;-ms-transform-origin:0 100%;-o-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:rotate(90deg) translateX(-50%);-moz-transform:rotate(90deg) translateX(-50%);-ms-transform:rotate(90deg) translateX(-50%);-o-transform:rotate(90deg) translateX(-50%);transform:rotate(90deg) translateX(-50%);}.sz-feedback-rotate-right-side{-webkit-transform-origin:100% 100%;-moz-transform-origin:100% 100%;-ms-transform-origin:100% 100%;-o-transform-origin:100% 100%;transform-origin:100% 100%;-webkit-transform:rotate(270deg) translateX(50%);-moz-transform:rotate(270deg) translateX(50%);-ms-transform:rotate(270deg) translateX(50%);-o-transform:rotate(270deg) translateX(50%);transform:rotate(270deg) translateX(50%);}.sz-feedback-container-close-button{float:right !important;display:none;}.sz-feedback-validation-presenter{font-weight:bold;color:#555;text-align:center;word-wrap:break-word;}.sz-feedback-hide-validation{background-color:transparent;}.sz-feedback-show-validation{background-color:#FFF;padding:2px;margin:4px 0;}.sz-feedback-border-radius{border-radius:20px !important;}.sz-feedback-rating{text-align:center;margin:10px 0;}.sz-feedback-rating-icon-label{display:inline-block !important;height:' +
          ak.ratingButtonHeight +
          'px !important;width:' +
          ak.ratingIconSize +
          'px !important;padding:0 3px !important;box-sizing:content-box !important;}.sz-feedback-rating-icon-label:hover>svg:not(.sz-feedback-rating-element-active){opacity:0.7 !important;}.sz-feedback-rating-icon{height:' +
          ak.ratingIconSize +
          'px;width:' +
          ak.ratingIconSize +
          'px;fill:' +
          p.layout.colors.text +
          ';padding:1px;box-sizing:border-box;}.sz-feedback-rating-element-active{opacity:1.0; !important}.sz-feedback-rating-icon-input:focus+.sz-feedback-rating-icon-label{border-radius: 3px !important;box-shadow:0 0 0 2px ' +
          p.layout.colors.text +
          ' !important;}.sz-feedback-visually-hidden{position:absolute !important;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;}.sz-feedback-textarea{color:#000 !important;box-sizing:border-box;width:100%;height:100%;background-color:white;resize:none;margin-top:4px;padding:4px;overflow:auto;border:1px solid #ddd;vertical-align:top;margin-bottom:0;margin-right:0;margin-left:0;}.sz-feedback-textarea::-webkit-input-placeholder{color:#767676;}.sz-feedback-textarea::-moz-placeholder{color:#767676;opacity:1;}.sz-feedback-textarea:-moz-placeholder{color:#767676;opacity:1;}.sz-feedback-textarea::-ms-input-placeholder{color:#767676;}.sz-feedback-textarea:-ms-input-placeholder{color:#767676 !important;}.sz-feedback-textarea::placeholder{color:#767676;}.sz-feedback-textarea:disabled{background-color:rgb(235, 235, 228);opacity:0.5;}.sz-feedback-textarea:focus{outline:2px solid ' +
          p.layout.colors.text +
          '}.sz-feedback-toggle-button:focus{box-shadow:0 0 0 1px ' +
          p.layout.colors.text +
          ', 0 0 0 3px ' +
          p.layout.colors.background +
          ', 0 0 0 4px ' +
          p.layout.colors.text +
          ';outline:none;}.sz-feedback-submit-button:focus{outline:2px solid ' +
          p.layout.colors.text +
          ';}.sz-feedback-comment-character-counter{font-weight:normal;font-size:0.8em;text-align:right;}.sz-feedback-dont-show-again-button{' +
          (p.behavior.dontShowAgainButtonVisible
            ? 'border:none;background:none;margin:6px auto -2px auto!important;'
            : 'display:none;') +
          '}.sz-feedback-section *:before, .sz-feedback-section *:after {content: "";}';
        am = a.createElement('style');
        am.type = 'text/css';
        am.id = 'sz-feedback-styling';
        am.innerHTML = al;
        a.head.appendChild(am);
        m();
      }
      function s(al, ao, am) {
        var an;
        return function () {
          var ar = this,
            ap = arguments;
          var at = function () {
            an = null;
            if (!am) {
              al.apply(ar, ap);
            }
          };
          var aq = am && !an;
          clearTimeout(an);
          an = setTimeout(at, ao);
          if (aq) {
            al.apply(ar, ap);
          }
        };
      }
      var ac = s(function () {
        m();
      }, 250);
      function F() {
        if (ak.layoutOrientation !== 'bottom') {
          g(t.feedbackContainerCloseButtonElement, 'sz-feedback-container-close-button');
          t.feedbackContainerCloseButtonElement.innerHTML = ak.closeIconSVG;
          ad(t.feedbackContainerCloseButtonElement.firstChild, ak.toggleButtonIconSize);
          f(t.feedbackContainerCloseButtonElement, af);
          t.feedbackContainerCloseButtonElement.setAttribute('aria-label', p.texts.close);
          t.feedbackContainerElement.insertBefore(t.feedbackContainerCloseButtonElement, t.formElement);
        }
        O();
        if (!W.isSetupPreview) {
          e.addEventListener('resize', ac, false);
          e.addEventListener('click', function (an) {
            var am = an.target || an.srcElement || an.toElement;
            while (am) {
              if (am.id === 'szfb_feedback_container' || am.id === 'szfb_feedback_toggle') {
                return;
              }
              am = am.parentNode;
            }
            if (U()) {
              af();
            }
          });
        }
        t.feedbackContainerElement.id = 'szfb_feedback_container';
        t.toggleButtonContainerElement.id = 'szfb_feedback_toggle';
        t.feedbackSectionElement.setAttribute('aria-label', 'Feedback');
        t.feedbackSectionElement.appendChild(t.toggleButtonContainerElement);
        t.feedbackSectionElement.appendChild(t.feedbackContainerElement);
        var al = ae();
        if (al) {
          A();
        }
        t.toggleButtonElement.setAttribute('aria-expanded', !al);
        t.feedbackContainerElement.setAttribute('aria-hidden', al);
        a.getElementsByTagName('body')[0].appendChild(t.feedbackSectionElement);
      }
      aj();
      ah();
      H();
      S();
      G();
      M();
      N();
      R();
      Q();
      D();
      I();
      E();
      P();
      L();
      J();
      F();
      K();
      return {
        toggleVisibility: af,
        resizeDebouncer: ac,
      };
    };
    if (c.core) {
      b = {
        loc: function () {
          return c.core.curr.toLowerCase();
        },
        check_group: function (d) {
          var g = c.core.tag('meta'),
            h = g.length,
            f;
          for (f = 0; f < h; f++) {
            if (g[f].name === 'szGroupName') {
              if (g[f].content.toLowerCase() === d) {
                return true;
              }
            }
          }
          return false;
        },
        check_match: function (d) {
          var f = d.s.toLowerCase();
          switch (d.m) {
            case 1:
              return this.loc().indexOf(f) > -1;
            case 2:
              return this.loc().indexOf(f) === 0;
            case 3:
              return this.loc().indexOf(f) + f.length === this.loc().length;
            case 4:
              return this.loc() === f;
            case 5:
              return this.check_group(f);
            default:
              return this.loc().indexOf(f) > -1;
          }
        },
        check_list: function (f) {
          var g = f.length,
            d;
          for (d = 0; d < g; d++) {
            if (f[d] !== undefined && this.check_match(f[d])) {
              return true;
            }
          }
          return false;
        },
        show: function (d) {
          return d.matches.force || (this.check_list(d.matches.include) && !this.check_list(d.matches.exclude));
        },
      };
      c.core.register('feedbackv2', function (d) {
        if (c.feedback.shown) {
          return;
        }
        if (!b.show(d)) {
          c.core.log('Skipping feedbackv2 id {0}', d.feedbackid);
          return;
        }
        c.core.log('Showing feedbackv2 id {0}', d.feedbackid);
        c.push(['feedbackid', d.feedbackid]);
        c.feedback.shown = true;
        c.feedback.feedbackid = d.feedbackid;
        c.feedback.feedbackUid = c.core.uuid();
        c.feedback.config = d;
        c.core.when(
          function () {
            return c.core.ready() && c.analytics.state.tracked;
          },
          function () {
            c.push(['feedback_view', c.feedback.feedbackid, c.feedback.feedbackUid]);
          },
        );
        if (c.analytics && c.analytics.region) {
          c.feedback.endpoint = '//szsurvey-' + c.analytics.region + '.siteimprove.com/survey/respond.aspx';
        } else {
          c.feedback.endpoint = '//szsurvey-r1.siteimprove.com/survey/respond.aspx';
        }
        c.feedback.loadFeedback(d);
      });
    }
  })(window, document, _sz);
  _sz.core._isloaded = true;
}
