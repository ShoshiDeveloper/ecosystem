<script setup lang="ts">
import ProjectCard from '~/components/widgets/projects/ProjectCard.vue';

const projects = [
    {
        name: 'Теремок',
        description: 'Мобильное приложение для управления системой умного дома',
        stack: [
            {
                'content': 'Flutter',
                'link': 'https://flutter.dev/'
            },
            {
                'content': 'DIO',
                'link': 'https://pub.dev/packages/dio'
            },
            {
                'content': 'Sockets',
                'link': 'https://pub.dev/packages/socket_io_client'
            },
            {
                'content': 'FL_Charts',
                'link': 'https://pub.dev/packages/fl_chart'
            },
            {
                'content': 'BLoC',
                'link': 'https://pub.dev/packages/flutter_bloc'
            },
            {
                'content': 'Hive',
                'link': 'https://pub.dev/packages/hive'
            },
            {
                'content': 'Firebase Messaging',
                'link': 'https://firebase.google.com/'
            }
        ],
        'links': {
            'playmarket': 'https://play.google.com/store/apps/details?id=com.k_telecom.smart_home',
            'appstore': 'https://apps.apple.com/us/app/теремok/id6466175411?l=ru',
            'web': 'https://sc.k-telecom.org/'
        }
    },
    {
        name: 'Fores',
        description: 'Мобильное приложение для изучения новых языков в удобной среде',
        stack: [
            {
                'content': 'Flutter',
                'link': 'https://flutter.dev/'
            },
            {
                'content': 'DIO',
                'link': 'https://pub.dev/packages/dio'
            },
            {
                'content': 'BLoC',
                'link': 'https://pub.dev/packages/flutter_bloc'
            },
            {
                'content': 'Hive',
                'link': 'https://pub.dev/packages/hive'
            }
        ],
        'links': {
            'playmarket': 'https://play.google.com/store/apps/details?id=com.shokoteam.fores',
        }
    },
    {
        name: 'TeamSpace',
        description: 'Пространство для командной работы',
        stack: [
            {
                'content': 'Dart',
                'link': 'https://dart.dev/'
            },
            {
                'content': 'Dart_frog',
                'link': 'https://pub.dev/packages/dart_frog'
            },
            {
                'content': 'Supabase',
                'link': 'https://supabase.com/'
            },
            {
                'content': 'Docker',
                'link': 'https://www.docker.com/'
            }
        ]
    }
];
</script>

<template>
    <div class="flex flex-col gap-4">
        <ProjectCard v-for="item in projects" :project="item"/>
    </div>
</template>