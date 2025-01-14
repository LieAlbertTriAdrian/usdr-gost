const agencies = require('./agencies');

const usdr = agencies.find((a) => a.abbreviation === 'USDR').id;
const nevada = agencies.find((a) => a.abbreviation === 'NV').id;
const asd = agencies.find((a) => a.abbreviation === 'ASD').id;

const grants = [
    {
        status: 'inbox',
        grant_id: '335255',
        grant_number: '21-605',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'EAR Postdoctoral Fellowships',
        cfda_list: '47.050',
        open_date: '2021-08-11',
        close_date: '2021-11-03',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p class="MsoNormal">The Division of Earth Sciences (EAR) awards Postdoctoral Fellowships </p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '333816',
        grant_number: 'HHS-2021-IHS-TPI-0001',
        agency_code: 'HHS-IHS',
        award_ceiling: '500000',
        cost_sharing: 'No',
        title: 'Community Health Aide Program:  Tribal Planning &amp; Implementation',
        cfda_list: '93.382',
        open_date: '2021-08-05',
        close_date: '2021-09-06',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: ' <p>Health Aide Program for Covid</p>',
        eligibility_codes: '11 07 25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-06 16:03:53.57025-07',
        updated_at: '2021-08-11 12:35:42.562-07',
    },
    {
        status: 'inbox',
        grant_id: '0',
        grant_number: '0',
        agency_code: 'HHS-IHS',
        award_ceiling: '500000',
        cost_sharing: 'No',
        title: '',
        cfda_list: '93.382',
        open_date: '2021-08-05',
        close_date: '2021-09-06',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '',
        eligibility_codes: '',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-06 16:03:53.57025-07',
        updated_at: '2021-08-11 12:35:42.562-07',
    },
    {
        status: 'inbox',
        grant_id: '333333',
        grant_number: 'HHS-2021-IHS-TPI-0002',
        agency_code: 'HHS-IHS',
        award_ceiling: '500000',
        cost_sharing: 'No',
        title: 'Community Health Aide Program:  County Planning &amp; Implementation',
        cfda_list: '93.382',
        open_date: '2021-08-05',
        close_date: '2021-09-06',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: ' <p>Health Aide Program for Covid</p>',
        eligibility_codes: '11 07 25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-06 16:03:53.57025-07',
        updated_at: '2021-08-11 12:35:42.562-07',
    },
    // 'open_date' has to be in chronological order in this file to (one hopes) correctly test grant grid sorting.
    {
        status: 'inbox',
        grant_id: '666666',
        grant_number: 'grant-number-666666',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666666',
        cfda_list: '47.050',
        open_date: '2021-08-11',
        close_date: '2021-11-03',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666666</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666656',
        grant_number: 'grant-number-666656',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666656',
        cfda_list: '47.050',
        open_date: '2021-08-12',
        close_date: '2021-11-02',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666656</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666646',
        grant_number: 'grant-number-666646',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666646',
        cfda_list: '47.050',
        open_date: '2021-08-13',
        close_date: '2021-11-01',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666646</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666636',
        grant_number: 'grant-number-666636',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666636',
        cfda_list: '47.050',
        open_date: '2021-08-14',
        close_date: '2021-10-31',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666636</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666626',
        grant_number: 'grant-number-666626',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666626',
        cfda_list: '47.050',
        open_date: '2021-08-15',
        close_date: '2021-10-30',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666626</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666616',
        grant_number: 'grant-number-666616',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666616',
        cfda_list: '47.050',
        open_date: '2021-08-16',
        close_date: '2021-10-29',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666616</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666606',
        grant_number: 'grant-number-666606',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666606',
        cfda_list: '47.050',
        open_date: '2021-08-17',
        close_date: '2021-10-28',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666606</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666596',
        grant_number: 'grant-number-666596',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666596',
        cfda_list: '47.050',
        open_date: '2021-08-18',
        close_date: '2021-10-27',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666596</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666586',
        grant_number: 'grant-number-666586',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666586',
        cfda_list: '47.050',
        open_date: '2021-08-19',
        close_date: '2021-10-26',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666586</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666576',
        grant_number: 'grant-number-666576',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666576',
        cfda_list: '47.050',
        open_date: '2021-08-20',
        close_date: '2021-10-25',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666576</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666566',
        grant_number: 'grant-number-666566',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666566',
        cfda_list: '47.050',
        open_date: '2021-08-21',
        close_date: '2021-10-24',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666566</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666556',
        grant_number: 'grant-number-666556',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666556',
        cfda_list: '47.050',
        open_date: '2021-08-22',
        close_date: '2021-10-23',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666556</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666546',
        grant_number: 'grant-number-666546',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666546',
        cfda_list: '47.050',
        open_date: '2021-08-23',
        close_date: '2021-10-22',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666546</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666536',
        grant_number: 'grant-number-666536',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666536',
        cfda_list: '47.050',
        open_date: '2021-08-24',
        close_date: '2021-10-21',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666536</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666526',
        grant_number: 'grant-number-666526',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666526',
        cfda_list: '47.050',
        open_date: '2021-08-25',
        close_date: '2021-10-20',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666526</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666516',
        grant_number: 'grant-number-666516',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666516',
        cfda_list: '47.050',
        open_date: '2021-08-26',
        close_date: '2021-10-19',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666516</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666506',
        grant_number: 'grant-number-666506',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666506',
        cfda_list: '47.050',
        open_date: '2021-08-27',
        close_date: '2021-10-18',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666506</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666496',
        grant_number: 'grant-number-666496',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666496',
        cfda_list: '47.050',
        open_date: '2021-08-28',
        close_date: '2021-10-17',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666496</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666486',
        grant_number: 'grant-number-666486',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666486',
        cfda_list: '47.050',
        open_date: '2021-08-29',
        close_date: '2021-10-16',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666486</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666476',
        grant_number: 'grant-number-666476',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666476',
        cfda_list: '47.050',
        open_date: '2021-08-30',
        close_date: '2021-10-15',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666476</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666466',
        grant_number: 'grant-number-666466',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666466',
        cfda_list: '47.050',
        open_date: '2021-08-31',
        close_date: '2021-10-14',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666466</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666456',
        grant_number: 'grant-number-666456',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666456',
        cfda_list: '47.050',
        open_date: '2021-09-01',
        close_date: '2021-10-13',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666456</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666446',
        grant_number: 'grant-number-666446',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666446',
        cfda_list: '47.050',
        open_date: '2021-09-02',
        close_date: '2021-10-12',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666446</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666436',
        grant_number: 'grant-number-666436',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666436',
        cfda_list: '47.050',
        open_date: '2021-09-03',
        close_date: '2021-10-11',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666436</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
    {
        status: 'inbox',
        grant_id: '666426',
        grant_number: 'grant-number-666426',
        agency_code: 'NSF',
        award_ceiling: '6500',
        cost_sharing: 'No',
        title: 'Test Grant 666426',
        cfda_list: '47.050',
        open_date: '2021-09-04',
        close_date: '2021-10-10',
        notes: 'auto-inserted by script',
        search_terms: '[in title/desc]+',
        reviewer_name: 'none',
        opportunity_category: 'Discretionary',
        description: '<p>Test Grant Description 666426</p>',
        eligibility_codes: '25',
        opportunity_status: 'posted',
        raw_body: 'raw body',
        created_at: '2021-08-11 11:30:38.89828-07',
        updated_at: '2021-08-11 12:30:39.531-07',
    },
];

const assignedGrantsAgency = [
    {
        grant_id: grants[0].grant_id,
        agency_id: usdr,
    },
    {
        grant_id: grants[0].grant_id,
        agency_id: asd,
    },
    {
        grant_id: grants[0].grant_id,
        agency_id: nevada,
    },
    {
        grant_id: grants[1].grant_id,
        agency_id: nevada,
    },
];

const grantsInterested = [
    {
        grant_id: grants[0].grant_id,
        agency_id: usdr,
        user_id: 1,
    },
    {
        grant_id: grants[0].grant_id,
        agency_id: asd,
        user_id: 2,
    },
    {
        grant_id: grants[0].grant_id,
        agency_id: nevada,
        user_id: 2,
    },
    {
        grant_id: grants[1].grant_id,
        agency_id: nevada,
    },
];

module.exports = {
    grants,
    assignedGrantsAgency,
    grantsInterested,
};
