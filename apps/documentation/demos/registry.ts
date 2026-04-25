import { lazy, type ComponentType } from 'react'

import AlertUsageSource from './alert/usage.tsx?raw'
import AlertVariantsSource from './alert/variants.tsx?raw'
import AlertFlatSource from './alert/flat.tsx?raw'
import AlertWithIconSource from './alert/with-icon.tsx?raw'

import AvatarUsageSource from './avatar/usage.tsx?raw'
import AvatarSizesSource from './avatar/sizes.tsx?raw'
import AvatarBorderedSource from './avatar/bordered.tsx?raw'
import AvatarInitialsSource from './avatar/initials.tsx?raw'
import AvatarFallbackSource from './avatar/fallback.tsx?raw'

import BadgeUsageSource from './badge/usage.tsx?raw'
import BadgeVariantsSource from './badge/variants.tsx?raw'
import BadgeColorsSource from './badge/colors.tsx?raw'
import BadgeSizesSource from './badge/sizes.tsx?raw'
import BadgeDotSource from './badge/dot.tsx?raw'
import BadgeCountsSource from './badge/counts.tsx?raw'

import ButtonUsageSource from './button/usage.tsx?raw'
import ButtonVariantsSource from './button/variants.tsx?raw'
import ButtonSizesSource from './button/sizes.tsx?raw'
import ButtonDisabledSource from './button/disabled.tsx?raw'
import ButtonIconOnlySource from './button/icon-only.tsx?raw'
import ButtonFullWidthSource from './button/full-width.tsx?raw'
import ButtonGroupSource from './button/group.tsx?raw'
import ButtonGroupOverrideSource from './button/group-override.tsx?raw'

import CardUsageSource from './card/usage.tsx?raw'
import CardVariantsSource from './card/variants.tsx?raw'
import CardSizesSource from './card/sizes.tsx?raw'
import CardPressableSource from './card/pressable.tsx?raw'
import CardFullWidthSource from './card/full-width.tsx?raw'
import CardBlurredFooterSource from './card/blurred-footer.tsx?raw'

import DividerUsageSource from './divider/usage.tsx?raw'
import DividerHorizontalSource from './divider/horizontal.tsx?raw'
import DividerVerticalSource from './divider/vertical.tsx?raw'

import FormUsageSource from './form/usage.tsx?raw'
import FormFullWidthSource from './form/full-width.tsx?raw'
import FormValidationSource from './form/validation.tsx?raw'

import InputUsageSource from './input/usage.tsx?raw'
import InputVariantsSource from './input/variants.tsx?raw'
import InputSizesSource from './input/sizes.tsx?raw'
import InputDescriptionSource from './input/description.tsx?raw'
import InputErrorSource from './input/error.tsx?raw'
import InputDisabledSource from './input/disabled.tsx?raw'
import InputContentSlotsSource from './input/content-slots.tsx?raw'
import InputTextareaSource from './input/textarea.tsx?raw'

import LinkUsageSource from './link/usage.tsx?raw'
import LinkColorsSource from './link/colors.tsx?raw'
import LinkSizesSource from './link/sizes.tsx?raw'
import LinkUnderlineSource from './link/underline.tsx?raw'
import LinkBlockSource from './link/block.tsx?raw'
import LinkExternalSource from './link/external.tsx?raw'
import LinkCustomIconSource from './link/custom-icon.tsx?raw'
import LinkDisabledSource from './link/disabled.tsx?raw'

import SkeletonUsageSource from './skeleton/usage.tsx?raw'
import SkeletonLoadedSource from './skeleton/loaded.tsx?raw'
import SkeletonCardPlaceholderSource from './skeleton/card-placeholder.tsx?raw'

import SpinnerUsageSource from './spinner/usage.tsx?raw'
import SpinnerSizesSource from './spinner/sizes.tsx?raw'
import SpinnerColorsSource from './spinner/colors.tsx?raw'
import SpinnerCurrentSource from './spinner/current.tsx?raw'
import SpinnerLabelSource from './spinner/label.tsx?raw'
import SpinnerInButtonSource from './spinner/in-button.tsx?raw'

interface Demo {
  component: ComponentType
  source: string
}

export const demos: Record<string, Demo> = {
  'alert-usage': { component: lazy(() => import('./alert/usage')), source: AlertUsageSource },
  'alert-variants': {
    component: lazy(() => import('./alert/variants')),
    source: AlertVariantsSource,
  },
  'alert-flat': { component: lazy(() => import('./alert/flat')), source: AlertFlatSource },
  'alert-with-icon': {
    component: lazy(() => import('./alert/with-icon')),
    source: AlertWithIconSource,
  },

  'avatar-usage': { component: lazy(() => import('./avatar/usage')), source: AvatarUsageSource },
  'avatar-sizes': { component: lazy(() => import('./avatar/sizes')), source: AvatarSizesSource },
  'avatar-bordered': {
    component: lazy(() => import('./avatar/bordered')),
    source: AvatarBorderedSource,
  },
  'avatar-initials': {
    component: lazy(() => import('./avatar/initials')),
    source: AvatarInitialsSource,
  },
  'avatar-fallback': {
    component: lazy(() => import('./avatar/fallback')),
    source: AvatarFallbackSource,
  },

  'badge-usage': { component: lazy(() => import('./badge/usage')), source: BadgeUsageSource },
  'badge-variants': {
    component: lazy(() => import('./badge/variants')),
    source: BadgeVariantsSource,
  },
  'badge-colors': { component: lazy(() => import('./badge/colors')), source: BadgeColorsSource },
  'badge-sizes': { component: lazy(() => import('./badge/sizes')), source: BadgeSizesSource },
  'badge-dot': { component: lazy(() => import('./badge/dot')), source: BadgeDotSource },
  'badge-counts': { component: lazy(() => import('./badge/counts')), source: BadgeCountsSource },

  'button-usage': { component: lazy(() => import('./button/usage')), source: ButtonUsageSource },
  'button-variants': {
    component: lazy(() => import('./button/variants')),
    source: ButtonVariantsSource,
  },
  'button-sizes': { component: lazy(() => import('./button/sizes')), source: ButtonSizesSource },
  'button-disabled': {
    component: lazy(() => import('./button/disabled')),
    source: ButtonDisabledSource,
  },
  'button-icon-only': {
    component: lazy(() => import('./button/icon-only')),
    source: ButtonIconOnlySource,
  },
  'button-full-width': {
    component: lazy(() => import('./button/full-width')),
    source: ButtonFullWidthSource,
  },
  'button-group': { component: lazy(() => import('./button/group')), source: ButtonGroupSource },
  'button-group-override': {
    component: lazy(() => import('./button/group-override')),
    source: ButtonGroupOverrideSource,
  },

  'card-usage': { component: lazy(() => import('./card/usage')), source: CardUsageSource },
  'card-variants': {
    component: lazy(() => import('./card/variants')),
    source: CardVariantsSource,
  },
  'card-sizes': { component: lazy(() => import('./card/sizes')), source: CardSizesSource },
  'card-pressable': {
    component: lazy(() => import('./card/pressable')),
    source: CardPressableSource,
  },
  'card-full-width': {
    component: lazy(() => import('./card/full-width')),
    source: CardFullWidthSource,
  },
  'card-blurred-footer': {
    component: lazy(() => import('./card/blurred-footer')),
    source: CardBlurredFooterSource,
  },

  'divider-usage': {
    component: lazy(() => import('./divider/usage')),
    source: DividerUsageSource,
  },
  'divider-horizontal': {
    component: lazy(() => import('./divider/horizontal')),
    source: DividerHorizontalSource,
  },
  'divider-vertical': {
    component: lazy(() => import('./divider/vertical')),
    source: DividerVerticalSource,
  },

  'form-usage': { component: lazy(() => import('./form/usage')), source: FormUsageSource },
  'form-full-width': {
    component: lazy(() => import('./form/full-width')),
    source: FormFullWidthSource,
  },
  'form-validation': {
    component: lazy(() => import('./form/validation')),
    source: FormValidationSource,
  },

  'input-usage': { component: lazy(() => import('./input/usage')), source: InputUsageSource },
  'input-variants': {
    component: lazy(() => import('./input/variants')),
    source: InputVariantsSource,
  },
  'input-sizes': { component: lazy(() => import('./input/sizes')), source: InputSizesSource },
  'input-description': {
    component: lazy(() => import('./input/description')),
    source: InputDescriptionSource,
  },
  'input-error': { component: lazy(() => import('./input/error')), source: InputErrorSource },
  'input-disabled': {
    component: lazy(() => import('./input/disabled')),
    source: InputDisabledSource,
  },
  'input-content-slots': {
    component: lazy(() => import('./input/content-slots')),
    source: InputContentSlotsSource,
  },
  'input-textarea': {
    component: lazy(() => import('./input/textarea')),
    source: InputTextareaSource,
  },

  'link-usage': { component: lazy(() => import('./link/usage')), source: LinkUsageSource },
  'link-colors': { component: lazy(() => import('./link/colors')), source: LinkColorsSource },
  'link-sizes': { component: lazy(() => import('./link/sizes')), source: LinkSizesSource },
  'link-underline': {
    component: lazy(() => import('./link/underline')),
    source: LinkUnderlineSource,
  },
  'link-block': { component: lazy(() => import('./link/block')), source: LinkBlockSource },
  'link-external': {
    component: lazy(() => import('./link/external')),
    source: LinkExternalSource,
  },
  'link-custom-icon': {
    component: lazy(() => import('./link/custom-icon')),
    source: LinkCustomIconSource,
  },
  'link-disabled': {
    component: lazy(() => import('./link/disabled')),
    source: LinkDisabledSource,
  },

  'skeleton-usage': {
    component: lazy(() => import('./skeleton/usage')),
    source: SkeletonUsageSource,
  },
  'skeleton-loaded': {
    component: lazy(() => import('./skeleton/loaded')),
    source: SkeletonLoadedSource,
  },
  'skeleton-card-placeholder': {
    component: lazy(() => import('./skeleton/card-placeholder')),
    source: SkeletonCardPlaceholderSource,
  },

  'spinner-usage': {
    component: lazy(() => import('./spinner/usage')),
    source: SpinnerUsageSource,
  },
  'spinner-sizes': {
    component: lazy(() => import('./spinner/sizes')),
    source: SpinnerSizesSource,
  },
  'spinner-colors': {
    component: lazy(() => import('./spinner/colors')),
    source: SpinnerColorsSource,
  },
  'spinner-current': {
    component: lazy(() => import('./spinner/current')),
    source: SpinnerCurrentSource,
  },
  'spinner-label': {
    component: lazy(() => import('./spinner/label')),
    source: SpinnerLabelSource,
  },
  'spinner-in-button': {
    component: lazy(() => import('./spinner/in-button')),
    source: SpinnerInButtonSource,
  },
}

export function getDemo(name: string): Demo | undefined {
  return demos[name]
}
