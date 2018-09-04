// reminder... we need to go back and prefix these: V2V_
export const SHOW_MAPPING_WIZARD = 'SHOW_MAPPING_WIZARD';
export const HIDE_MAPPING_WIZARD = 'HIDE_MAPPING_WIZARD';
export const MAPPING_WIZARD_EXITED = 'MAPPING_WIZARD_EXITED';
export const SHOW_PLAN_WIZARD = 'SHOW_PLAN_WIZARD';
export const HIDE_PLAN_WIZARD = 'HIDE_PLAN_WIZARD';
export const PLAN_WIZARD_EXITED = 'PLAN_WIZARD_EXITED';
export const V2V_FETCH_CLUSTERS = 'FETCH_V2V_CLUSTERS';
export const CONTINUE_TO_PLAN = 'CONTINUE_TO_PLAN';
export const V2V_SET_MIGRATIONS_FILTER = 'V2V_SET_MIGRATIONS_FILTER';
export const V2V_RETRY_MIGRATION = 'V2V_RETRY_MIGRATION';
export const V2V_TOGGLE_SCHEDULE_MIGRATION_MODAL = 'V2V_TOGGLE_SCHEDULE_MIGRATION_MODAL';
export const V2V_SCHEDULE_MIGRATION = 'V2V_SCHEDULE_MIGRATION';
export const SHOW_CONFIRM_MODAL = 'SHOW_CONFIRM_MODAL';
export const HIDE_CONFIRM_MODAL = 'HIDE_CONFIRM_MODAL';
export const ARCHIVE_TRANSFORMATION_PLAN = 'ARCHIVE_TRANSFORMATION_PLAN';

export const FETCH_PROVIDERS = 'FETCH_PROVIDERS';
export const FETCH_NETWORKS = 'FETCH_NETWORKS';
export const FETCH_DATASTORES = 'FETCH_DATASTORES';
export const FETCH_PROVIDERS_URL =
  '/api/providers?expand=resources&attributes=type&filter[]=or%20type=ManageIQ::Providers::Redhat::InfraManager&filter[]=type=ManageIQ::Providers::Vmware::InfraManager';

export const FETCH_V2V_TRANSFORMATION_MAPPINGS = 'FETCH_V2V_TRANSFORMATION_MAPPINGS';

export const FETCH_V2V_TRANSFORMATION_PLANS = 'FETCH_V2V_TRANSFORMATION_PLANS';
export const FETCH_V2V_SERVICE_TEMPLATE_ANSIBLE_PLAYBOOKS = 'FETCH_V2V_SERVICE_TEMPLATE_ANSIBLE_PLAYBOOKS';
export const FETCH_V2V_ARCHIVED_TRANSFORMATION_PLANS = 'FETCH_V2V_ARCHIVED_TRANSFORMATION_PLANS';

export const CREATE_V2V_TRANSFORMATION_PLAN_REQUEST = 'CREATE_V2V_TRANSFORMATION_PLAN_REQUEST';

export const FETCH_V2V_ALL_REQUESTS_WITH_TASKS = 'FETCH_V2V_ALL_REQUESTS_WITH_TASKS';
export const FETCH_V2V_ALL_ARCHIVED_PLAN_REQUESTS_WITH_TASKS = 'FETCH_V2V_ALL_ARCHIVED_PLAN_REQUESTS_WITH_TASKS';

export const SHOW_DELETE_CONFIRMATION_MODAL = 'SHOW_DELETE_CONFIRMATION_MODAL';
export const HIDE_DELETE_CONFIRMATION_MODAL = 'HIDE_DELETE_CONFIRMATION_MODAL';
export const SET_MAPPING_TO_DELETE = 'SET_MAPPING_TO_DELETE';
export const YES_TO_DELETE_AND_HIDE_DELETE_CONFIRMATION_MODAL = 'YES_TO_DELETE_AND_HIDE_DELETE_CONFIRMATION_MODAL';
export const DELETE_INFRASTRUCTURE_MAPPING = 'DELETE_INFRASTRUCTURE_MAPPING';

export const MIGRATIONS_FILTERS = {
  notStarted: __('Not Started Plans'),
  inProgress: __('In Progress Plans'),
  completed: __('Completed Plans'),
  archived: __('Archived Plans')
};

export const OSP_TENANT = 'CloudTenant';
export const OSP_VOLUME = 'CloudVolume';
export const OSP_NETWORK = 'CloudNetwork';
export const EMS_CLUSTER = 'EmsCluster';
